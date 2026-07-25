<template>
    <div class="dice-view">
        <AlertBox :header="outcome" ref="alertBox" />
        <Dice ref="dice" class="dice" :onRolled="onRolled" />
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
import ActionButton from "@/components/ActionButton.vue"
import AlertBox from "@/components/AlertBox.vue"
import Dice from "./Dice.vue"

export default {
    components: {
        Dice,
        ActionButton,
        AlertBox
    },
    data() {
        return {
            outcome: ""
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
                this.$refs.dice.roll()
            }
        },
        onRolled(value) {
            this.outcome = String(value)
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
