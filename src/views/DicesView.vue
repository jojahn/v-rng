<template>
  <div>
    <Dices />
    <ActionButton
      class="spin-button"
      :iconClass="
        'bi ' + (!!$refs.wheel && $refs.wheel.isSpinning ? 'bi-x' : 'bi-box')
      "
      v-bind:callback="spin"
    />
  </div>
</template>

<script>
import Dices from "@/components/randomizer/Dices.vue";
import ActionButton from "@/components/generic/ActionButton.vue";
export default {
  components: {
    Dices,
    ActionButton
  }
};
</script>

<style></style>
