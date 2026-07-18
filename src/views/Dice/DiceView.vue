<template>
    <div class="dice-view">
        <AlertBox :header="outcome" ref="alertBox" />
        <Dice ref="dice" class="dice" :onRolled="onRolled" />
        <ActionButton class="spin-button" iconClass="bi-shuffle" v-bind:callback="roll" />
    </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import AlertBox from "@/components/AlertBox.vue";
import Dice from "./Dice.vue";

export default {
    components: {
        Dice,
        ActionButton,
        AlertBox
    },
    data() {
        return {
            outcome: ""
        };
    },
    methods: {
        roll() {
            this.$refs.dice.roll();
        },
        onRolled(value) {
            this.outcome = String(value);
            this.$refs.alertBox.open();
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
