<template>
  <div>Dices</div>
  <Dices />
  <ActionButton class="spin-button" :iconClass="'bi ' + (!!$refs.wheel && $refs.wheel.isSpinning ? 'bi-x' : 'bi-box')" v-bind:callback="spin" />
</template>

<script>
import Dices from "@/components/Dices.vue"
import ActionButton from "@/components/ActionButton.vue"
export default {
    components: {
        Dices,
        ActionButton
    }
}
</script>

<style>

</style>