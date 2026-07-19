<template>
    <div class="coin-wrapper">
        <canvas ref="canvas" class="coin-canvas" v-on:click="handleClick"></canvas>
    </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { pickRandom, randomNumber } from "@/services/random";
import { preloadModel } from "@/services/preload";
import { shortestAngleDelta } from "@/services/angles";

export default {
    props: {
        onFlipped: Function
    },
    data() {
        return {
            isFlipping: false,
            progress: 0,
            modelLoaded: false,
            resizeObserver: null,
            frameId: null,
            flipFrameId: null,
            flipTimeoutId: null,
            flipStartRotation: 0,
        };
    },
    mounted() {
        this.initScene();
        this.loadCoin();
        this.resizeObserver = new ResizeObserver(() => this.handleResize());
        this.resizeObserver.observe(this.$refs.canvas);
    },
    beforeUnmount() {
        cancelAnimationFrame(this.frameId);
        cancelAnimationFrame(this.flipFrameId);
        clearTimeout(this.flipTimeoutId);
        this.resizeObserver && this.resizeObserver.disconnect();
        this.renderer && this.renderer.dispose();
    },
    methods: {
        initScene() {
            const canvas = this.$refs.canvas;

            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
            this.camera.position.set(0, 0, 6);
            this.camera.lookAt(0, 0, 0);

            this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            this.renderer.setPixelRatio(window.devicePixelRatio || 1);

            this.scene.add(new THREE.AmbientLight(0xffffff, 1.0));
            const key = new THREE.DirectionalLight(0xffffff, 1.3);
            key.position.set(2, 4, 5);
            this.scene.add(key);
            const fill = new THREE.DirectionalLight(0xffffff, 0.6);
            fill.position.set(-3, -2, -4);
            this.scene.add(fill);

            this.coinGroup = new THREE.Group();
            this.scene.add(this.coinGroup);

            this.handleResize();
            this.renderLoop();
        },
        loadCoin() {
            preloadModel("/models/coin/Coin.glb").then((gltf) => {
                this.coinModel = gltf.scene;

                const box = new THREE.Box3().setFromObject(this.coinModel);
                const size = new THREE.Vector3();
                box.getSize(size);
                const maxDim = Math.max(size.x, size.y, size.z) || 1;
                const scale = 1.2 / maxDim;
                this.coinModel.scale.setScalar(scale);

                const center = new THREE.Vector3();
                box.getCenter(center);
                this.coinModel.position.sub(center.multiplyScalar(scale));
                this.coinModel.rotation.x = Math.PI / 4;

                this.coinGroup.add(this.coinModel);
                this.modelLoaded = true;
            }).catch(err => console.error("Failed to load coin model:", err));
        },
        handleResize() {
            const canvas = this.$refs.canvas;
            if (!canvas || !this.renderer) {
                return;
            }
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (!width || !height) {
                return;
            }
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        },
        renderLoop() {
            this.frameId = requestAnimationFrame(this.renderLoop);
            this.renderer.render(this.scene, this.camera);
        },
        handleClick(event) {
            if (!this.modelLoaded || this.isFlipping) {
                return;
            }
            const canvas = this.$refs.canvas;
            const rect = canvas.getBoundingClientRect();
            const pointer = new THREE.Vector2(
                ((event.clientX - rect.left) / rect.width) * 2 - 1,
                -((event.clientY - rect.top) / rect.height) * 2 + 1
            );
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(pointer, this.camera);
            const hits = raycaster.intersectObject(this.coinModel, true);
            if (hits.length > 0) {
                this.flip();
            }
        },
        flip() {
            if (this.isFlipping || !this.modelLoaded) {
                return;
            }
            this.isFlipping = true;
            this.progress = 0;

            // Resting pose (no extra half-turn) shows Tails, so only Heads needs the added half-turn.
            const outcome = pickRandom(["Heads", "Tails"]);
            const spins = randomNumber(4, 6);
            const duration = 2500;
            const totalRotation = spins * Math.PI * 2 + (outcome === "Heads" ? Math.PI : 0);
            const startRotation = this.coinGroup.rotation.x;
            this.flipStartRotation = startRotation;
            const liftHeight = 1.5;
            const start = performance.now();

            // Toss is brief and decelerates going up (gravity); the fall takes the rest of the
            // flight and accelerates into landing, instead of a symmetric up/down arc.
            const riseFraction = 0.3;
            const heightAt = (t) => {
                if (t < riseFraction) {
                    const p = t / riseFraction;
                    return liftHeight * (1 - Math.pow(1 - p, 2));
                }
                const p = (t - riseFraction) / (1 - riseFraction);
                return liftHeight * (1 - Math.pow(p, 2));
            };

            // Keep spinning at a steady rate through the toss and fall, only settling
            // onto the final orientation in the last stretch as it lands.
            const settleStart = 0.85;
            const rotationProgressAt = (t) => {
                if (t < settleStart) {
                    return (t / settleStart) * 0.9;
                }
                const p = (t - settleStart) / (1 - settleStart);
                return 0.9 + (1 - Math.pow(1 - p, 3)) * 0.1;
            };

            const step = (now) => {
                const t = Math.min((now - start) / duration, 1);
                this.coinGroup.rotation.x = startRotation + totalRotation * rotationProgressAt(t);
                this.coinGroup.position.y = heightAt(t);
                this.progress = t;

                if (t < 1) {
                    this.flipFrameId = requestAnimationFrame(step);
                } else {
                    this.coinGroup.rotation.x = startRotation + totalRotation;
                    this.coinGroup.position.y = 0;
                    this.flipTimeoutId = setTimeout(() => {
                        this.isFlipping = false;
                        this.progress = 0;
                        this.$props.onFlipped && this.$props.onFlipped(outcome);
                    }, 500);
                }
            };
            this.flipFrameId = requestAnimationFrame(step);
        },
        cancelFlip() {
            if (!this.isFlipping) {
                return;
            }
            cancelAnimationFrame(this.flipFrameId);
            clearTimeout(this.flipTimeoutId);

            const duration = 100;
            const start = performance.now();
            const startY = this.coinGroup.position.y;
            const startProgress = this.progress;
            const fallStartRotation = this.coinGroup.rotation.x;
            // Settle to the nearest equivalent of the original rotation instead of unwinding every
            // leftover full spin, so the cancel snap doesn't keep flipping while it falls.
            const targetRotation = fallStartRotation + shortestAngleDelta(fallStartRotation, this.flipStartRotation);

            const step = (now) => {
                const t = Math.min((now - start) / duration, 1);
                this.coinGroup.position.y = startY * (1 - t);
                this.coinGroup.rotation.x = fallStartRotation + (targetRotation - fallStartRotation) * t;
                this.progress = startProgress * (1 - t);

                if (t < 1) {
                    this.flipFrameId = requestAnimationFrame(step);
                } else {
                    this.coinGroup.position.y = 0;
                    this.coinGroup.rotation.x = targetRotation;
                    this.isFlipping = false;
                    this.progress = 0;
                }
            };
            this.flipFrameId = requestAnimationFrame(step);
        }
    }
}
</script>

<style scoped>
.coin-wrapper {
    height: 100%;
    width: 100%;
}

.coin-canvas {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
}
</style>
