<template>
  <div class="wheel">
    <canvas id="WheelCanvas" height="640" width="480"></canvas>
  </div>
</template>

<script>
import { rotate2d, deg2Rad, rad2deg } from "@/services/angles";
import { track } from "@/services/mouseTracking";
import { DEFAULT_COLORS } from "@/services/defaultValues";
export default {
  props: {
    maxTime: Number,
    config: Object,
    values: Array
  },
  data() {
    return {
      displayedPicks: [],
      interval: null,
      timeout: null
    };
  },
  watch: {
    values: function(newValue, oldValue) {
      this.generateDisplayValues();
      this.drawWheel();
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
        case 1:
          throw "Unsupported!"
          break;
        case 2:
          duplications = 3;
          break;
        case 3:
          duplications = 3;
          break;
        case 4:
          duplications = 2;
          break;
        case 5:
          duplications = 2;
          break;
        default:
          duplications = 1;
          break;
      }
      console.log(duplications);
      for (let i = 0; i < duplications; i++) {
        this.displayedPicks.push(...values);
      }
    },
    calculateFont() {
      return { color: "black", fontSize: "30px", fontFamily: "Arial" }
    },
    setupWheelTracking() {
      var element = document.getElementById("WheelCanvas");
      var currentX, currentY, starterAngle;
      var exitVelocity = 0;
      const onTrack = (center) => (x, y) => {
        this.stop();
        var adjustedX = x - center.x
        var adjustedY = y - center.y;
        console.log(adjustedX, adjustedY);
        var angle = Math.atan2(adjustedY, adjustedX);
        if (!starterAngle && starterAngle != 0) {
          starterAngle = angle;
        }
        this.drawWheel(angle);
        // console.log("---> angle:", rad2deg(angle));
        starterAngle = angle;
      }
      const onLeave = () => {
        if (exitVelocity > 0.1) {
          this.spin();
        }
      };
      track(element, onTrack({ x: element.offsetLeft + element.width/2, y: element.offsetTop + element.height/2 }), onLeave, 10);
    },
    drawText(
      ctx,
      { x, y },
      text,
      rotation,
      { color, fontSize, fontFamily = "Arial" }
    ) {
      ctx.save();
      ctx.font = `${fontSize} ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.rotate(rotation);
      ctx.fillText(text, x, y);
      ctx.restore();
    },
    drawSlice(
      ctx,
      { x, y },
      radius,
      { start, end },
      { color, borderColor, borderWidth }
    ) {
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, start, end);
      ctx.closePath();
      ctx.fill();
    },
    drawWheel(starterAngle = 0) {
      const canvas = document.getElementById("WheelCanvas");
      const ctx2 = canvas.getContext("2d");
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
      var center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
      };
      // must be configurable
      var radius = Math.min(center.x - 10, center.y - 10);
      var angle = (2 * Math.PI) / this.displayedPicks.length;
      var start = starterAngle - angle / 2;
      var end = starterAngle + angle / 2;
      this.displayedPicks.forEach((p, i) => {
        this.drawSlice(
          ctx2,
          center,
          radius,
          { start, end },
          {
            color: `#${p.color}`,
            borderColor: "blue",
            borderWidth: 5,
          }
        );

        var alpha = start + angle/2;
        this.drawText(
          ctx2,
          rotate2d(-alpha, { x: canvas.width/2 + (radius/2) * Math.cos(alpha), y: canvas.height/2 + (radius/2) * Math.sin(alpha) }),
          p.name,
          alpha,
          this.calculateFont()
        );

        start += angle;
        end += angle;
      });
    },
    spin(time = this.$props.maxTime || 5000, { stepTime, stepAngle } = { stepTime: 50, stepAngle: 8 }) {
      this.stop();
      let angle = 0;
      this.interval = setInterval(() => {
        this.drawWheel(angle += deg2Rad(stepAngle));
      }, stepTime);
      this.timeout = setTimeout(() => {
        clearInterval(this.interval);
      }, time);
    },
    stop() {
      clearInterval(this.interval);
      clearTimeout(this.timeout);
    }
  },
  mounted() {
    this.generateDisplayValues();
    this.drawWheel();
    this.setupWheelTracking();
  },
};
</script>

<style scoped>
#WheelCanvas {
  cursor: grab;
  -webkit-animation: spin 4s linear;
  -moz-animation: spin 4s linear;
  animation: spin 4s linear;
}
#WheelCanvas:active {
  cursor: grabbing;
}
/* @-moz-keyframes spin { 100% { -moz-transform: rotate(180deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(180deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(180deg); transform:rotate(180deg); } } */
</style>