<template>
    <div class="coin-view">
        <AlertBox :header="outcome" ref="alertBox" />
        <Coin ref="coin" class="coin" :onFlipped="onFlipped" />
        <ActionButton class="spin-button" iconClass="bi-shuffle" v-bind:callback="flip" />
    </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import AlertBox from "@/components/AlertBox.vue";
import Coin from "./Coin.vue";

export default {
    components: {
        Coin,
        ActionButton,
        AlertBox
    },
    data() {
        return {
            outcome: ""
        };
    },
    methods: {
        flip() {
            this.$refs.coin.flip();
        },
        onFlipped(outcome) {
            this.outcome = outcome;
            this.$refs.alertBox.open();
        }
    }
}
</script>

<style scoped>
.coin-view {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
}

.coin {
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
