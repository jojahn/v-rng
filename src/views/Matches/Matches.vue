<template>
    <div class="wrapper">
        <canvas style="display: none;" v-on:click="handleClick" width="96" height="64" ref="canvas" class="matches-canvas"></canvas>
        <!-- <div class="grid">
            <div class="match-image-wrapper">
                <img v-for="(m, i) in matches" class="match-image" v-on:click="pickOne(i)" :src="m.isShort ? '/images/ShortMatch.png' : '/images/LongMatch.png'" alt="logo" />
            </div>
            <img class="hand-image" src="/images/Hand.svg" alt="hand">
        </div> -->
        <img  ref="handImage" class="hand-image" src="/images/Hand.svg" alt="hand" style="display: some;">
    </div>
</template>

<script>
import { shuffleArray } from "@/services/random"
const handImage = document.createElement("img");
handImage.src = "/images/Hand.svg";

const shortMatchImage = document.createElement("img");
shortMatchImage.src = "/images/ShortMatch.png";

const longMatchImage = document.createElement("img");
longMatchImage.src = "/images/LongMatch.png";

export default {
    props: {
        numberOfMatches: Number,
        numberOfShorts: Number,
        onLost: Function,
    },
    data() {
        return {
            resizeObserver: null,
            matches: []
        }
    },
    mounted() {
        this.reset();
        this.resizeObserver = new ResizeObserver(() => {
            this.draw();
        });
        this.resizeObserver.observe(this.$refs.canvas);
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
    beforeUnmount() {
        this.resizeObserver.disconnect();
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
            this.matches = shuffleArray(this.matches);
        },
        draw() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.matches.forEach((m, i) => {
                const x = i * 100;
                const y = 0;
                ctx.drawImage(m.isShort ? shortMatchImage : longMatchImage, x, y, 22, 81);
            });
            // ctx.drawImage(this.$refs.handImage, 0, 0, canvas.width, canvas.height);
        },
        handleClick(event) {
            const canvas = this.$refs.canvas;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            console.log(x, y);

            this.matches.forEach((m, i) => {
                const matchX = i * 100;
                const matchY = 0;
                if (x >= matchX && x <= matchX + 100 && y >= matchY && y <= matchY + 100) {
                    this.pickOne(i);
                }
            });
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

.match-image {
    cursor: pointer;
    user-select: none;
}

.matches-canvas {
    width: 100%;
    height: 100%;
}

.grid {
    display: grid;
    height: min-content;
  width: 100%;
}

.hand-image {
  width: 100%;
  max-width: 40%;
  min-width: 400px;
}

.match-image-wrapper {
    grid-column: 2;
}
</style>