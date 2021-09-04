<template>
  <div>
    <CoinFlip ref="coin" />
    <ActionButton
      class="spin-button"
      :iconClass="
        'bi ' + (!!$refs.coin && $refs.coin.isRunning ? 'bi-x' : 'bi-circle')
      "
      v-bind:callback="flip"
    />
  </div>
</template>

<script>
import CoinFlip from "@/components/randomizer/CoinFlip.vue";
import ActionButton from "@/components/generic/ActionButton.vue";
export default {
  components: {
    CoinFlip,
    ActionButton
  },
  methods: {
    flip() {
      if (this.$refs.coin.isRunning) {
        this.$refs.coin.stop();
      } else {
        this.$refs.coin.start();
      }
    }
  }
};
</script>

<style></style>
