<template>
    <div class="coin-view">
        <AlertBox
            :header="outcome ? t(outcome) : ''"
            background-color="FDDE3B"
            color="000000"
            ref="alertBox"
        />
        <Coin ref="coin" class="coin" :onFlipped="onFlipped" :onFlipStart="onFlipStart" />
        <ActionButton
            class="spin-button"
            :iconClass="
                'bi ' +
                (!!$refs.coin && $refs.coin.isFlipping ? 'bi-x' : 'bi-shuffle')
            "
            :progress="($refs.coin && $refs.coin.progress) || 0"
            v-bind:callback="flip"
        />
    </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import ActionButton from "@/components/ActionButton.vue"
import AlertBox from "@/components/AlertBox.vue"
import Coin from "./Coin.vue"

export default {
    components: {
        Coin,
        ActionButton,
        AlertBox
    },
    data() {
        return {
            outcome: ""
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },
    mounted() {
        // $refs.coin is unset during the initial render, so the template's guarded reads of
        // $refs.coin.isFlipping/progress never touch those properties and never subscribe to
        // them. Force one more render once the ref is populated so those reads happen and the
        // button reacts from the very first flip instead of only after some other state change.
        this.$nextTick(() => this.$forceUpdate())
    },
    methods: {
        flip() {
            if (this.$refs.coin.isFlipping) {
                this.$refs.coin.cancelFlip()
            } else {
                this.onFlipStart()
                this.$refs.coin.flip()
            }
        },
        onFlipStart() {
            this.$refs.alertBox.close()
        },
        onFlipped(outcome) {
            this.outcome = outcome
            this.$refs.alertBox.open()
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
