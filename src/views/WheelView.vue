<template>
    <Wheel ref="wheel" />
    <ActionButton iconClass="bi bi-arrow-clockwise" v-bind:callback="spin" />
    <ConfigurationPane name="wheel" />
</template>


<script>
// @ is an alias to /src
import Wheel from '@/components/Wheel.vue'
import ActionButton from '@/components/ActionButton.vue'
import ConfigurationPane from '../components/ConfigurationPane.vue';

export default {
  components: {
    Wheel,
    ActionButton,
    ConfigurationPane
  },
  methods: {
    spin() {
      this.$refs.wheel.spin();
    }
  }
}
</script>