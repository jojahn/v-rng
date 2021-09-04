<template>
  <div class="wheel">
    <div v-if="!valid" class="plaque">
      <p>Please write 2 or more options!</p>
    </div>
    <canvas id="WheelCanvas" height="640" width="480"></canvas>
  </div>
</template>

<script>
import { rotate2d, deg2Rad, radian2deg } from "@/services/angles";
import { fadeOut, animate, stopAnimation } from "@/services/animations";
import { track } from "@/services/mouseTracking";
import { DEFAULT_COLORS } from "@/services/defaultValues";
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
      trackingStarted: false
    };
  },
  watch: {
    values: function (newValue, oldValue) {
      this.generateDisplayValues();
      if (this.valid === true) {
        this.drawWheel();
      }
    }
  },
  methods: {
    checkSpinning() {
      return this.isSpinning;
    },
    generateDisplayValues() {
      this.displayedPicks = [];
      if (!this.$props.values) {
        return;
      }
      let values = this.$props.values.filter((v) => !!v.name && !!v.color);
      if (!values) {
        return;
      }
      let duplications = -1;
      switch (values.length) {
        case 0:
          this.valid = false;
          return;
        case 1:
          this.valid = false;
          return;
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
    fitText(text, alpha, { x: centerX, y: centerY }, radius) {
      let startingPoint = radius / 3;
      let fontSize = 30;
      const charSize = 15;
      let textWidth = text.length * charSize;
      if (textWidth > radius) {
        var preferredTextWidth = (radius - 10) / charSize;
        fontSize = preferredTextWidth / text.length;
        startingPoint = (radius - preferredTextWidth) / 2;
      } else {
        startingPoint = (radius - textWidth + charSize) / 2;
      }
      let modifiedAlpha = alpha + (alpha > Math.PI / 2 ? 0.02 : -0.02);

      // font-family: 'Major Mono Display', monospace;
      // font-family: 'Share Tech Mono', monospace;
      // font-family: 'Ubuntu Mono', monospace;
      // font-family: 'VT323', monospace;
      const { x, y } = rotate2d(-modifiedAlpha, {
        x: centerX + startingPoint * Math.cos(modifiedAlpha),
        y: centerY + startingPoint * Math.sin(modifiedAlpha)
      });
      return {
        color: "black",
        fontSize: fontSize + "px",
        fontFamily: "Ubuntu Mono",
        x,
        y
      };
    },
    setupWheelTracking(step = 10) {
      console.log("tracking...");
      if (this.trackingStarted) {
        return;
      }
      var element = document.getElementById("WheelCanvas");
      var starterAngle, angle;
      var velocity = [];

      const onTrack = (center, radius) => (x, y) => {
        console.log("onTrack");
        this.stop();
        var adjustedX = (x - center.x) / radius;
        var adjustedY = (y - center.y) / radius;
        angle = Math.atan2(adjustedY, adjustedX);
        console.log(adjustedX, adjustedY, radian2deg(angle));

        // Save current velocity
        if (velocity.length > 10) {
          velocity.shift();
        }
        velocity.push((angle - starterAngle) / step);
        if (!starterAngle && starterAngle != 0) {
          starterAngle = angle;
        }

        this.drawWheel(angle);
        starterAngle = angle;
      };

      const onLeave = () => {
        if (velocity.length === 0) {
          return;
        }
        var exitVelocity =
          velocity.reduce((accumulator, value) => accumulator + value) /
          velocity.length;
        if (exitVelocity > 0) {
          this.spin(angle, this.$props.spinTime, this.$props.fadeOutTime, {
            stepTime: 10,
            stepAngle: exitVelocity * 250
          });
        }
        velocity = [];
      };
      track(
        element,
        onTrack(
          {
            x: element.offsetLeft + element.width / 2,
            y: element.offsetTop + element.height / 2
          },
          element.width / 2
        ),
        onLeave,
        step
      );
      this.trackingStarted = true;
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
      // Setup canvas
      const canvas = document.getElementById("WheelCanvas");
      const dim =
        window.innerWidth > 768
          ? Math.min(window.innerWidth * 0.3, window.innerHeight - 200)
          : Math.min(window.innerWidth, window.innerHeight);
      canvas.height = dim || 640;
      canvas.width = dim || 480;
      canvas.style.maxHeight = canvas.height + "px";
      canvas.style.maxWidth = canvas.height + "px";
      const ctx2 = canvas.getContext("2d");
      ctx2.clearRect(0, 0, canvas.width, canvas.height);

      // wheel constants
      const center = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };
      const radius = Math.min(center.x - 10, center.y - 10);
      const angle = (2 * Math.PI) / this.displayedPicks.length;

      // Draw slices
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
            borderWidth: 5
          }
        );

        // Draw text
        var alpha = start + angle / 2;
        const textOptions = this.fitText(p.name, alpha, center, radius);
        this.drawText(ctx2, textOptions, p.name, alpha, textOptions);

        start += angle;
        end += angle;
      });
    },
    spin(
      starterAngle = 0,
      spinTime = this.$props.spinTime || 5000,
      fadeOutTime = this.$props.fadeOutTime || 3000,
      { stepTime, stepAngle } = { stepTime: 50, stepAngle: 8 }
    ) {
      this.stop();
      let angle = starterAngle;
      var spin = () => {
        this.drawWheel((angle += deg2Rad(stepAngle)));
      };
      var spinRotateAnimation = animate(spin, spinTime, stepTime);
      this.animations.push(spinRotateAnimation);

      var fadeOutSpin = (x) => {
        this.drawWheel((angle += deg2Rad(stepAngle) * x));
      };
      var fadeOutAnimation = fadeOut(
        fadeOutSpin,
        fadeOutTime,
        stepTime,
        () => (this.$data.isSpinning = false)
      );
      this.animations.push(fadeOutAnimation);
      this.$data.isSpinning = true;

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
      this.$data.isSpinning = false;
    }
  },
  mounted() {
    this.$data.isSpinning = false;
    this.generateDisplayValues();
    this.drawWheel();
    const canvas = document.getElementById("WheelCanvas");
    canvas.style.display = "none";
    setTimeout(() => {
      this.drawWheel();
      canvas.style.display = "initial";
    }, 100);
    if (document.readyState === "complete") {
      this.setupWheelTracking();
    } else {
      window.addEventListener("load", () => {
        this.setupWheelTracking();
      });
    }
  },
  beforeUnmount() {
    this.stop();
  }
};
</script>

<style scoped>
.wheel {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
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
