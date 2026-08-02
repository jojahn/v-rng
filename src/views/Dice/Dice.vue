<template>
    <div class="dice-wrapper">
        <canvas
            ref="canvas"
            class="dice-canvas"
            v-on:click="handleClick"
        ></canvas>
    </div>
</template>

<script>
import * as THREE from "three"
import { randomNumber } from "@/services/random"
import { preloadModel } from "@/services/preload"

// Local-space face normal for each pip value, derived from the model's baked-in texture
// UVs (see public/models/dice/Dice_Texture.png). The camera looks down at the scene, so
// showing a value means rotating that normal to point toward world up (+Y).
const FACE_NORMALS = {
    1: new THREE.Vector3(1, 0, 0),
    2: new THREE.Vector3(0, 0, 1),
    3: new THREE.Vector3(0, 1, 0),
    4: new THREE.Vector3(0, 0, -1),
    5: new THREE.Vector3(0, -1, 0),
    6: new THREE.Vector3(-1, 0, 0)
}
const UP = new THREE.Vector3(0, 1, 0)

// Quaternion that rotates the chosen face's normal to world up, with a random spin
// around that up axis so the landing orientation isn't always identical.
function targetQuaternionFor(value) {
    const align = new THREE.Quaternion().setFromUnitVectors(
        FACE_NORMALS[value],
        UP
    )
    const yaw = new THREE.Quaternion().setFromAxisAngle(
        UP,
        Math.random() * Math.PI * 2
    )
    return yaw.multiply(align)
}

export default {
    props: {
        onRolled: Function,
        onRollStart: Function
    },
    data() {
        return {
            isRolling: false,
            progress: 0,
            modelLoaded: false,
            resizeObserver: null,
            frameId: null,
            rollFrameId: null,
            rollTimeoutId: null,
            rollStartQuaternion: new THREE.Quaternion()
        }
    },
    mounted() {
        this.initScene()
        this.loadDice()
        this.resizeObserver = new ResizeObserver(() => this.handleResize())
        this.resizeObserver.observe(this.$refs.canvas)
    },
    beforeUnmount() {
        cancelAnimationFrame(this.frameId)
        cancelAnimationFrame(this.rollFrameId)
        clearTimeout(this.rollTimeoutId)
        this.resizeObserver?.disconnect()
        this.renderer?.dispose()
    },
    methods: {
        initScene() {
            const canvas = this.$refs.canvas

            this.scene = new THREE.Scene()
            this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
            // Slight z offset keeps the camera's default up vector from lining up with the
            // view direction (which would make lookAt's orientation undefined) while still
            // reading as an overhead view.
            this.camera.position.set(0, 6, 1.5)
            this.camera.lookAt(0, 0, 0)

            this.renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true
            })
            this.renderer.setPixelRatio(window.devicePixelRatio || 1)

            this.scene.add(new THREE.AmbientLight(0xffffff, 1.0))
            const key = new THREE.DirectionalLight(0xffffff, 1.3)
            key.position.set(2, 4, 5)
            this.scene.add(key)
            const fill = new THREE.DirectionalLight(0xffffff, 0.6)
            fill.position.set(-3, -2, -4)
            this.scene.add(fill)

            this.diceGroup = new THREE.Group()
            this.scene.add(this.diceGroup)

            this.handleResize()
            this.renderLoop()
        },
        loadDice() {
            preloadModel("/models/dice/Dice.gltf")
                .then((gltf) => {
                    this.diceModel = gltf.scene

                    const box = new THREE.Box3().setFromObject(this.diceModel)
                    const size = new THREE.Vector3()
                    box.getSize(size)
                    const maxDim = Math.max(size.x, size.y, size.z) || 1
                    const scale = 0.56 / maxDim
                    this.diceModel.scale.setScalar(scale)

                    const center = new THREE.Vector3()
                    box.getCenter(center)
                    this.diceModel.position.sub(center.multiplyScalar(scale))

                    this.diceGroup.add(this.diceModel)
                    this.modelLoaded = true
                })
                .catch((err) =>
                    console.error("Failed to load dice model:", err)
                )
        },
        handleResize() {
            const canvas = this.$refs.canvas
            if (!canvas || !this.renderer) {
                return
            }
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            if (!width || !height) {
                return
            }
            this.renderer.setSize(width, height, false)
            this.camera.aspect = width / height
            this.camera.updateProjectionMatrix()
        },
        renderLoop() {
            this.frameId = requestAnimationFrame(this.renderLoop)
            this.renderer.render(this.scene, this.camera)
        },
        handleClick(event) {
            if (!this.modelLoaded) {
                return
            }
            const canvas = this.$refs.canvas
            const rect = canvas.getBoundingClientRect()
            const pointer = new THREE.Vector2(
                ((event.clientX - rect.left) / rect.width) * 2 - 1,
                -((event.clientY - rect.top) / rect.height) * 2 + 1
            )
            const raycaster = new THREE.Raycaster()
            raycaster.setFromCamera(pointer, this.camera)
            const hits = raycaster.intersectObject(this.diceModel, true)
            if (hits.length > 0) {
                if (this.isRolling) {
                    this.cancelRoll()
                } else {
                    this.roll()
                }
            }
        },
        roll() {
            if (this.isRolling || !this.modelLoaded) {
                return
            }
            this.$props.onRollStart?.()
            this.isRolling = true
            this.progress = 0

            const value = randomNumber(1, 6)
            const targetQuaternion = targetQuaternionFor(value)
            const duration = 2500
            const liftHeight = 1.5
            const start = performance.now()

            const startQuaternion = this.diceGroup.quaternion.clone()
            this.rollStartQuaternion = startQuaternion
            // A chaotic multi-axis tumble for visual flair during the toss/fall, expressed as
            // Euler angles composed on top of the start orientation via quaternion
            // multiplication (Euler components can't be added directly and stay correct).
            const spinAxis = new THREE.Euler(
                randomNumber(3, 5) *
                    Math.PI *
                    2 *
                    (Math.random() < 0.5 ? -1 : 1),
                randomNumber(3, 5) *
                    Math.PI *
                    2 *
                    (Math.random() < 0.5 ? -1 : 1),
                randomNumber(3, 5) *
                    Math.PI *
                    2 *
                    (Math.random() < 0.5 ? -1 : 1)
            )
            const tumbleQuaternionAt = (progress) =>
                new THREE.Quaternion()
                    .setFromEuler(
                        new THREE.Euler(
                            spinAxis.x * progress,
                            spinAxis.y * progress,
                            spinAxis.z * progress
                        )
                    )
                    .multiply(startQuaternion)

            // Toss is brief and decelerates going up (gravity); the fall takes the rest of the
            // flight and accelerates into landing, instead of a symmetric up/down arc.
            const riseFraction = 0.3
            const heightAt = (t) => {
                if (t < riseFraction) {
                    const p = t / riseFraction
                    return liftHeight * (1 - Math.pow(1 - p, 2))
                }
                const p = (t - riseFraction) / (1 - riseFraction)
                return liftHeight * (1 - Math.pow(p, 2))
            }

            // Keep tumbling at a steady rate through the toss and fall, only settling
            // onto the final orientation in the last stretch as it lands.
            const settleStart = 0.85
            const rotationProgressAt = (t) => {
                if (t < settleStart) {
                    return (t / settleStart) * 0.9
                }
                const p = (t - settleStart) / (1 - settleStart)
                return 0.9 + (1 - Math.pow(1 - p, 3)) * 0.1
            }

            // Tumble for most of the flight, then blend from wherever the tumble ended up
            // into the exact target orientation during the settle stretch as it lands.
            const preSettleQuaternion = tumbleQuaternionAt(0.9)

            const step = (now) => {
                const t = Math.min((now - start) / duration, 1)
                const rotationProgress = rotationProgressAt(t)
                if (t < settleStart) {
                    this.diceGroup.quaternion.copy(
                        tumbleQuaternionAt(rotationProgress)
                    )
                } else {
                    const p = (rotationProgress - 0.9) / 0.1
                    this.diceGroup.quaternion
                        .copy(preSettleQuaternion)
                        .slerp(targetQuaternion, p)
                }
                this.diceGroup.position.y = heightAt(t)
                this.progress = t

                if (t < 1) {
                    this.rollFrameId = requestAnimationFrame(step)
                } else {
                    this.diceGroup.quaternion.copy(targetQuaternion)
                    this.diceGroup.position.y = 0
                    this.rollTimeoutId = setTimeout(() => {
                        this.isRolling = false
                        this.progress = 0
                        this.$props.onRolled?.(value)
                    }, 500)
                }
            }
            this.rollFrameId = requestAnimationFrame(step)
        },
        cancelRoll() {
            if (!this.isRolling) {
                return
            }
            cancelAnimationFrame(this.rollFrameId)
            clearTimeout(this.rollTimeoutId)

            const duration = 100
            const start = performance.now()
            const startY = this.diceGroup.position.y
            const startProgress = this.progress
            // Settle back to the orientation the roll started from, so the cancel snap
            // doesn't keep tumbling while it falls.
            const fallStartQuaternion = this.diceGroup.quaternion.clone()
            const targetQuaternion = this.rollStartQuaternion

            const step = (now) => {
                const t = Math.min((now - start) / duration, 1)
                this.diceGroup.position.y = startY * (1 - t)
                this.diceGroup.quaternion
                    .copy(fallStartQuaternion)
                    .slerp(targetQuaternion, t)
                this.progress = startProgress * (1 - t)

                if (t < 1) {
                    this.rollFrameId = requestAnimationFrame(step)
                } else {
                    this.diceGroup.position.y = 0
                    this.diceGroup.quaternion.copy(targetQuaternion)
                    this.isRolling = false
                    this.progress = 0
                }
            }
            this.rollFrameId = requestAnimationFrame(step)
        }
    }
}
</script>

<style scoped>
.dice-wrapper {
    height: 100%;
    width: 100%;
}

.dice-canvas {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
}
</style>
