<template>
    <div class="dice-view">
        <AlertBox
            :header="outcome"
            :background-color="outcomeBackgroundColor"
            :color="outcomeColor"
            ref="alertBox"
        />
        <Dice ref="dice" class="dice" :onRolled="onRolled" :onRollStart="onRollStart" />
        <ActionButton
            class="spin-button"
            :iconClass="
                'bi ' +
                (!!$refs.dice && $refs.dice.isRolling ? 'bi-x' : 'bi-shuffle')
            "
            :progress="($refs.dice && $refs.dice.progress) || 0"
            v-bind:callback="roll"
        />
    </div>
</template>

<script>
import { DEFAULT_COLORS } from "@/services/COLORS"
import ActionButton from "@/components/ActionButton.vue"
import AlertBox from "@/components/AlertBox.vue"
import Dice from "./Dice.vue"

// Maps each rolled value (1-6, so index value-1) to a [backgroundIndex, colorIndex]
// pair into DEFAULT_COLORS. Every face uses the same pair for now.
const DICE_ALERT_COLOR_INDICES = [
    [3, 2],
    [1, 0],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1]
]

export default {
    components: {
        Dice,
        ActionButton,
        AlertBox
    },
    data() {
        return {
            outcome: "",
            outcomeBackgroundColor: DEFAULT_COLORS[0],
            outcomeColor: DEFAULT_COLORS[1]
        }
    },
    mounted() {
        // $refs.dice is unset during the initial render, so the template's guarded reads of
        // $refs.dice.isRolling/progress never touch those properties and never subscribe to
        // them. Force one more render once the ref is populated so those reads happen and the
        // button reacts from the very first roll instead of only after some other state change.
        this.$nextTick(() => this.$forceUpdate())
    },
    methods: {
        roll() {
            if (this.$refs.dice.isRolling) {
                this.$refs.dice.cancelRoll()
            } else {
                this.onRollStart()
                this.$refs.dice.roll()
            }
        },
        onRollStart() {
            this.$refs.alertBox.close()
        },
        onRolled(value) {
            this.outcome = String(value)
            const [bgIndex, colorIndex] = DICE_ALERT_COLOR_INDICES[value - 1]
            this.outcomeBackgroundColor = DEFAULT_COLORS[bgIndex]
            this.outcomeColor = DEFAULT_COLORS[colorIndex]
            this.$refs.alertBox.open()
        }
    }
}
</script>

<style scoped>
.dice-view {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
}

.dice {
    height: calc(100% - 50px);
}

.spin-button {
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -35px;
    /* Negative half of width. */
}
</style>
