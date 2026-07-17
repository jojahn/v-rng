<template>
    <div class="wrapper">
        <div class="stage">
            <canvas v-on:click="handleClick" v-on:mousemove="handleMouseMove" v-on:mouseleave="handleMouseLeave" ref="canvas" class="matches-canvas" :style="{ width: canvasWidthPercent }"></canvas>
            <img ref="handImage" class="hand-image" src="/images/Hand.svg" alt="hand">
        </div>
    </div>
</template>

<script>
import { shuffleArray } from "@/services/random"

const shortMatchImage = document.createElement("img");
shortMatchImage.src = "/images/ShortMatch.png";

const longMatchImage = document.createElement("img");
longMatchImage.src = "/images/LongMatch.png";

// Real matchstick aspect ratio (~20:81), scaled up to a believable size.
const MATCH_WIDTH = 20;
const MATCH_HEIGHT = 90;
const GAP = 14;

export default {
    props: {
        numberOfMatches: Number,
        numberOfShorts: Number,
        onLost: Function,
    },
    data() {
        return {
            matches: [],
            isAnimating: false
        }
    },
    computed: {
        canvasWidthPercent() {
            return Math.min(90, this.numberOfMatches * 14) + "%";
        }
    },
    mounted() {
        this.reset();
        if (document.readyState === "complete") {
            this.draw();
        } else {
            window.addEventListener("load", () => {
                this.draw();
            });
        }
    },
    watch: {
        numberOfMatches() {
            this.draw();
        },
        numberOfShorts() {
            this.draw();
        }
    },
    methods: {
        pickOne(index) {
            const next = this.matches.splice(index, 1)[0];
            if (next.isShort) {
                this.$props.onLost();
            }
            const hasShorts = this.matches.find(m => m.isShort);
            if (!hasShorts) {
                this.reset();
            } else {
                this.draw();
            }
        },
        hasNext() {
            return this.matches.length > 0;
        },
        pickNext() {
          this.pickOne(this.matches.length - 1);
        },
        reset() {
            this.matches.length = 0;
            let missingShorts = this.numberOfShorts;
            Array.from(new Array(this.numberOfMatches)).forEach((_, index) => {
                this.matches.push({ isShort: missingShorts !== 0, index });
                if (missingShorts) missingShorts--;
            });
            this.matches = shuffleArray(this.matches).map((m, slot) => ({ ...m, slot }));
            this.draw();
        },
        draw(lift = null) {
            const canvas = this.$refs.canvas;
            canvas.width = this.numberOfMatches * (MATCH_WIDTH + GAP) + GAP;
            canvas.height = MATCH_HEIGHT + GAP * 2;

            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.matches.forEach((m) => {
                const image = m.isShort ? shortMatchImage : longMatchImage;
                const drawWidth = image.naturalWidth * (MATCH_HEIGHT / image.naturalHeight);
                const slotX = GAP + m.slot * (MATCH_WIDTH + GAP);
                const x = slotX + (MATCH_WIDTH - drawWidth) / 2;
                let y = GAP;
                let opacity = 1;
                if (lift && lift.slot === m.slot) {
                    y -= lift.offsetY;
                    opacity = lift.opacity;
                }
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.drawImage(image, x, y, drawWidth, MATCH_HEIGHT);
                ctx.restore();
            });
        },
        animateAndPick(index) {
            if (this.isAnimating) {
                return;
            }
            this.isAnimating = true;
            const slot = this.matches[index].slot;
            const duration = 300;
            const liftHeight = MATCH_HEIGHT * 0.6;
            const start = performance.now();

            const step = (now) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 2);
                this.draw({
                    slot,
                    offsetY: liftHeight * eased,
                    opacity: 1 - eased
                });
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    this.isAnimating = false;
                    this.pickOne(index);
                }
            };
            requestAnimationFrame(step);
        },
        toCanvasCoords(event) {
            const canvas = this.$refs.canvas;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (event.clientX - rect.left) * scaleX,
                y: (event.clientY - rect.top) * scaleY
            };
        },
        matchIndexAt(x, y) {
            return this.matches.findIndex((m) => {
                const matchX = GAP + m.slot * (MATCH_WIDTH + GAP);
                return x >= matchX && x <= matchX + MATCH_WIDTH && y >= GAP && y <= GAP + MATCH_HEIGHT;
            });
        },
        handleClick(event) {
            if (this.isAnimating) {
                return;
            }
            const { x, y } = this.toCanvasCoords(event);
            const index = this.matchIndexAt(x, y);
            if (index !== -1) {
                this.animateAndPick(index);
            }
        },
        handleMouseMove(event) {
            if (this.isAnimating) {
                return;
            }
            const { x, y } = this.toCanvasCoords(event);
            const index = this.matchIndexAt(x, y);
            this.$refs.canvas.style.cursor = index !== -1 ? "pointer" : "default";
        },
        handleMouseLeave() {
            this.$refs.canvas.style.cursor = "default";
        }
    }
}
</script>

<style>
.wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.stage {
    position: relative;
    width: 100%;
    max-width: 40%;
    min-width: 400px;
}

.matches-canvas {
    position: absolute;
    left: 50%;
    bottom: 38%;
    transform: translateX(-50%);
    z-index: 1;
    cursor: default;
}

.hand-image {
  position: relative;
  z-index: 2;
  width: 100%;
  display: block;
  pointer-events: none;
}
</style>
