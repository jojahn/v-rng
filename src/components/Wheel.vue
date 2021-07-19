<template>
  <div class="wheel">
    <div v-if="!valid" class="plaque">
      <p>Please write 2 or more options!</p>
    </div>
    <canvas id="WheelCanvas" height="640" width="480"></canvas>
  </div>
</template>

<script>
import { rotate2d, deg2Rad, rad2deg } from "@/services/angles";
import { fadeOut, animate, stopAnimation } from "@/services/animations";
import { track } from "@/services/mouseTracking";
import { DEFAULT_COLORS } from "@/services/defaultValues";
export default {
  props: {
    spinTime: Number,
    fadeOutTime: Number,
    config: Object,
    values: Array
  },
  data() {
    return {
      displayedPicks: [],
      animations: [],
      valid: true
    };
  },
  watch: {
    values: function(newValue, oldValue) {
      this.generateDisplayValues();
      if (this.valid === true) {
        this.drawWheel();
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
          this.valid = false;
          return;
          break;
        case 1:
          this.valid = false;
          return;
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
      this.valid = true;
      for (let i = 0; i < duplications; i++) {
        this.displayedPicks.push(...values);
      }
    },
    calculateFont() {
      return { color: "black", fontSize: "30px", fontFamily: "Arial" }
    },
    setupWheelTracking() {
      var step = 10;
      var element = document.getElementById("WheelCanvas");
      var currentX, currentY, starterAngle, angle;
      var velocity = [];

      const onTrack = (center) => (x, y) => {
        this.stop();
        var adjustedX = x - center.x
        var adjustedY = y - center.y;
        angle = Math.atan2(adjustedY, adjustedX);
        if (velocity.length > 10) {
          velocity.shift();
        }
        velocity.push((angle - starterAngle) / step);
        if (!starterAngle && starterAngle != 0) {
          starterAngle = angle;
        }
        this.drawWheel(angle);
        // console.log("---> angle:", rad2deg(angle));
        starterAngle = angle;
      }

      const onLeave = () => {
        if (velocity.length === 0) {
          return;
        }
        var exitVelocity = (velocity.reduce((accumulator, value) => accumulator + value) / velocity.length);
        if (exitVelocity > 0) {
          this.spin(angle, this.$props.spinTime, this.$props.fadeOutTime,  { stepTime: 10, stepAngle: exitVelocity * 250 });
        }
        velocity = [];
      };
      track(element, onTrack({ x: element.offsetLeft + element.width/2, y: element.offsetTop + element.height/2 }), onLeave, step);
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
    spin(starterAngle = 0, spinTime = this.$props.spinTime || 5000, fadeOutTime = this.$props.fadeOutTime || 3000, { stepTime, stepAngle } = { stepTime: 50, stepAngle: 8 }) {
      this.stop();
      let angle = starterAngle;
      var spin = () => {
        this.drawWheel(angle += deg2Rad(stepAngle));
      } 
      var spinRotateAnimation = animate(spin, spinTime, stepTime);
      this.animations.push(spinRotateAnimation);
      
      var fadeOutSpin = (x) => {
        console.log(x);
        this.drawWheel(angle += (deg2Rad(stepAngle) * x));
      } 
      var fadeOutAnimation = fadeOut(fadeOutSpin, fadeOutTime, stepTime);
      this.animations.push(fadeOutAnimation);

      /*var interval = setInterval(() => {
        this.drawWheel(angle += deg2Rad(stepAngle));
      }, stepTime);
      this.timeout = setTimeout(() => {
        clearInterval(this.interval);
      }, time);
      */
    },
    stop() {
      for (var anim of this.animations) {
        stopAnimation(anim);
      }
      this.animations = [];
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
}
#WheelCanvas:active {
  cursor: grabbing;
}

.plaque {
    height: 640px;
    position: absolute;
    margin: auto;
    display: flex;
    width: 100%;
    backdrop-filter: blur(10px);
}

.plaque p {
  background: #500;
  color: white;
  width: auto;
  display: block;
  margin: auto;
  padding: 10px;
  font-size: 1.5rem;
}

</style>