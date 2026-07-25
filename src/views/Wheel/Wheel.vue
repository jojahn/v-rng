<template>
    <div ref="wrapper" class="wheel">
        <div v-if="!valid" class="plaque">
            <p>{{ errorMessage }}</p>
        </div>
        <canvas id="WheelCanvas" height="640" width="480"></canvas>
    </div>
</template>

<script>
import { rotate2d, deg2Rad, radian2deg } from "@/services/angles";
import {
    fadeOut,
    animate,
    stopAnimation,
    usingQuadraticFadeOut
} from "@/services/animations";
import { track } from "@/services/mouseTracking";
export default {
    props: {
        spinTime: Number,
        fadeOutTime: Number,
        config: Object,
        values: Array,
        isSpinning: Boolean,
        onWon: Function,
    },
    data() {
        return {
            displayedPicks: [],
            animations: [],
            progress: 0,
            valid: true,
            errorMessage: "",
            angle: 0,
            trackingStarted: false,
            candidate: "",
            resizeObserver: null,
            themeObserver: null
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
            if (values.length < 2) {
                this.valid = false;
                this.errorMessage = "Please provide more options"
            }
            this.displayedPicks = values;
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
            let modifiedAlpha = alpha // TODO: + (alpha > Math.PI / 2 ? 0.02 : -0.02);

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
        drawPin(ctx, center, radius) {
            const darkMode = document.body.classList.contains("dark");
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = darkMode ? "#eee" : "#333";
            ctx.strokeStyle = darkMode ? "#333" : "#eee";
            const x = center.x;
            const y = center.y - radius + 10;
            ctx.moveTo(x, y);
            ctx.lineTo(x - 20, y - 30);
            ctx.lineTo(x + 20, y - 30);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.restore();
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
            const WIN_ANGLE = 1.5*Math.PI;
            var minDiffToWinAngle = Number.MAX_SAFE_INTEGER;
            var minDiffVal = null;

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

                
                var alpha = start + angle / 2;

                const currentDiffToWinAngle = Math.abs(alpha % (2 * Math.PI) - WIN_ANGLE);
                if (minDiffToWinAngle > currentDiffToWinAngle) {
                    minDiffToWinAngle = currentDiffToWinAngle;
                    minDiffVal = p.name;
                }

                // Draw text
                const textOptions = this.fitText(p.name, alpha, center, radius);
                this.drawText(ctx2, textOptions, p.name, alpha, textOptions);

                start += angle;
                end += angle;
            });
            this.candidate = minDiffVal;
            this.drawPin(ctx2, center, radius);
        },
        spin(
            starterAngle = 0,
            spinTime = this.$props.spinTime || 5000,
            fadeOutTime = this.$props.fadeOutTime || 3000,
            { stepTime, stepAngle } = { stepTime: 50, stepAngle: 8 }
        ) {
            this.stop();
            let angle = starterAngle;
            this.progress = 0;

            // Progress advances by the same per-tick rotation used to draw the wheel, so its
            // fill speed tracks the wheel's actual motion: constant during the spin phase, then
            // slowing with the fade-out's deceleration instead of a plain time-based ramp.
            const stepAngleRad = deg2Rad(stepAngle);
            const spinTicks = Math.round(spinTime / stepTime);
            const fadeOutTicks = Math.round(fadeOutTime / stepTime);
            let fadeOutSpeedSum = 0;
            for (let i = 0; i < fadeOutTicks; i++) {
                fadeOutSpeedSum += usingQuadraticFadeOut(i / fadeOutTicks);
            }
            const totalRotation = stepAngleRad * (spinTicks + fadeOutSpeedSum);
            let rotationTravelled = 0;

            var spin = () => {
                angle += stepAngleRad;
                rotationTravelled += stepAngleRad;
                this.progress = Math.min(rotationTravelled / totalRotation, 1);
                this.drawWheel(angle);
            };
            var spinRotateAnimation = animate(spin, spinTime, stepTime);
            this.animations.push(spinRotateAnimation);

            var fadeOutSpin = (x) => {
                const delta = stepAngleRad * x;
                angle += delta;
                rotationTravelled += delta;
                this.progress = Math.min(rotationTravelled / totalRotation, 1);
                this.drawWheel(angle);
            };
            var fadeOutAnimation = fadeOut(
                fadeOutSpin,
                fadeOutTime,
                stepTime,
                () => {
                    this.$data.isSpinning = false
                    this.$data.progress = 0
                    this.$props.onWon && this.$props.onWon(this.$data.candidate);
                }
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
            this.$data.progress = 0;
        }
    },
    mounted() {
        this.$data.isSpinning = false;
        this.generateDisplayValues();
        this.drawWheel();
        const canvas = document.getElementById("WheelCanvas");
        canvas.style.display = "none";
        console.log(canvas);

        this.resizeObserver = new ResizeObserver(() => {
            console.log("resized", canvas);
            this.drawWheel();
        });
        this.resizeObserver.observe(document.getElementsByTagName("body")[0]);

        this.themeObserver = new MutationObserver(() => {
            this.drawWheel();
        });
        this.themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"]
        });

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
        this.resizeObserver.disconnect();
        this.themeObserver.disconnect();
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