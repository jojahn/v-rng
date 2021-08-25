<template>
  <div ref="wrapper">
    <div ref="shimmer" class="shimmer" v-show="!visible"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    width: Number,
    height: Number
  },
  methods: {
    onChange() {
      for (var i = 0; i < this.$refs.wrapper.children.length; i++) {
        var child = this.$refs.wrapper.children[i];
        if (child !== this.$refs.shimmer) {
          console.log(child)
        }
      }
      this.$refs.shimmer.width = this.$props.width;
      this.$refs.shimmer.height = this.$props.height;
    }
  },
  mounted() {
    this.onChange();
  }
}
</script>

<style scoped>
.shimmer {
  background: rgb(50,50,50);
}
</style>