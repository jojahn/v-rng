<template>
  <div class="spinner">
    <div v-if="!valid" class="plaque">
      <p>Please write 2 or more options!</p>
    </div>
    <canvas id="SpinnerCanvas" height="640" width="480"></canvas>
  </div>
</template>

<script>
import { DEFAULT_COLORS } from  "@/services/defaultValues.js";
import { deg2Rad } from "@/services/angles.js";
export default {
    props: {
        spinTime: Number,
        fadeOutTime: Number,
        config: Object,
        values: Array,
        isSpinning: Boolean
    },
    data() {
        return {
					      displayedPicks: [],
					animations: [],
					valid: true,
					angle: 0,
      trackingStarted: false,
            currentIndex: 0
					}
    },
    watch: {
			values: function(newValue, oldValue) {
        this.generateDisplayValues();
        if (this.valid === true) {
            this.drawSpinner();
        }
			}
    },
    methods: {
			    generateDisplayValues() {
      this.displayedPicks = [];
      if (!this.$props.values) {
        return;
      }
      let values = this.$props.values.filter(v => !!v.name && !!v.color);
      if (!values) {
        return;
      }
      let duplications = -1;
      switch(values.length) {
        case 0: 
          this.valid = false; return;
        case 1:
          this.valid = false; return;
        case 2:
          duplications = 3; break;
        case 3:
          duplications = 3; break;
        case 4:
          duplications = 2; break;
        case 5:
          duplications = 2; break;
        default:
          duplications = 1; break;
      }
      this.valid = true;
      for (let i = 0; i < duplications; i++) {
        this.displayedPicks.push(...values);
      }
    },
			drawRect(ctx, color, angle, { x, y }, { width, height }) {
				ctx.save();
				console.log(x, y);
      	// ctx.rotate(angle);
				ctx.fillStyle = color;
				ctx.fillRect(x, y, width, height);
				ctx.restore();
			},
			drawSpinner() {
				// Setup canvas
				const canvas = document.getElementById("SpinnerCanvas");
				const dim = window.innerWidth > 768
					? Math.min((window.innerWidth * 0.3), window.innerHeight - 200)
					: Math.min(window.innerWidth, window.innerHeight);
				canvas.height = dim || 640;
				canvas.width = dim || 480;
				canvas.style.maxHeight = canvas.height + "px";
				canvas.style.maxWidth = canvas.height + "px";
				const ctx = canvas.getContext("2d");
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				const center = {
					x: canvas.width / 2,
					y: canvas.height / 2,
				};

				var sizeOfAngle = 2 * Math.PI / this.displayedPicks.length;
				var angles = this.displayedPicks.map((_, i) => (i + 1) * sizeOfAngle);
				let width = 150;
				let height = 100;
				var radius = 100;
				angles.forEach((angle, i) => {
					this.drawRect(ctx, `#${DEFAULT_COLORS[i % DEFAULT_COLORS.length]}`, 0.1, { x: center.x + Math.cos(angle) * radius, y: center.y + Math.sin(angle) * radius }, { width, height });
				});
				console.log(angles);

			},
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
			this.drawSpinner();
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
