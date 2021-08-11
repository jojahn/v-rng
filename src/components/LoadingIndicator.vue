<template>
  <div v-if="this.isLoading">ABC</div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  }
}
</script>