<template>
  <div class="spinner">
      <div class="item" v-for="(pick, index) in displayedPicks" v-bind:key="index" v-bind:style="calculateItemStyle(index)">
          <p>{{pick}}</p>
      </div>
  </div>
</template>

<script>
import { DEFAULT_COLORS } from  "@/services/defaultValues.js";
import { deg2Rad } from "@/services/angles.js";
export default {
    data() {
        return {
            currentIndex: 0,
            displayedPicks: ["Pizza", "Tacos", "Tacos", "Pizza", "Pizza", "Pizza"]
        }
    },
    methods: {
        calculateItemStyle(i) {
            var optionals = "";
            var bgColor = DEFAULT_COLORS[i % DEFAULT_COLORS.length];
            var distance = i - this.currentIndex;
            var degree = 20 * distance;
            var height = Math.abs(100 * Math.cos(deg2Rad(degree)));
            if (degree > 0) {
                var brightness = 80 - degree * 0.5;
                optionals += `filter:brightness(${brightness}%);`
            }
            return `transform: rotateX(${degree}deg);
                background-color: #${bgColor};
                margin-bottom: -${100 - height}px;
                ${optionals}`;
        },
        onNext() {
            this.currentIndex = (this.currentIndex + 1) % this.displayedPicks.length;
        },
        onNextAnimated() {
            throw "NotImplemented";
        },
        start() {
            var interval = setInterval(() => {
                this.onNext();
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }
    },
    mounted() {
        this.currentIndex = this.displayedPicks.length / 2;
        this.start();
    }
}
</script>

<style scoped>
.spinner
.item {
    display: flex;
    width: 200px;
    height: 100px;
    margin: auto;
    /* TODO: reset after spin to be able to copy elements */
    user-select: none;
}
.item > p {
    margin: auto;
}
</style>
