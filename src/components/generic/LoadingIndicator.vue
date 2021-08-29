<template>
  <div v-if="this.isLoading">Loading ...</div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  }
};
</script>
