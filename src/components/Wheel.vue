<template>
  <div class="wheel">
    <canvas id="WheelCanvas" height="640" width="480"></canvas>
  </div>
</template>

<script>
import { rotate2d, deg2Rad } from "@/services/angles";
import { DEFAULT_COLORS } from "@/services/defaultValues";
export default {
  data() {
    return {
      displayedPicks: [
        { name: "Birds1", color: DEFAULT_COLORS[0] },
        { name: "Cats1", color: DEFAULT_COLORS[1] },
        { name: "Dogs1", color: DEFAULT_COLORS[2] },
        { name: "Birds2", color: DEFAULT_COLORS[0] },
        { name: "Cats2", color: DEFAULT_COLORS[1] },
        { name: "Dogs2", color: DEFAULT_COLORS[2] },

      ],
    };
  },
  methods: {
    drawText(
      ctx,
      { x, y },
      text,
      rotation,
      { color, fontSize, fontFamily = "Arial" }
    ) {
      console.log(x, y);
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
          { color: "black", fontSize: "30px" }
        );

        start += angle;
        end += angle;
      });
    },
    spinWheel(time, { stepTime, stepAngle }) {
      let angle = 0;
      let interval = setInterval(() => {
        this.drawWheel(angle += deg2Rad(stepAngle));
      }, stepTime);
      setTimeout(() => {
        clearInterval(interval);
      }, time);
    },
    spin() {
      this.spinWheel(5000, { stepTime: 50, stepAngle: 8 });
    }
  },
  mounted() {
    this.drawWheel();
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