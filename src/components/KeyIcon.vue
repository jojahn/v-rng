<template>
  <button class="key-icon-button">
      <i v-bind:class="'bi ' + this.$props.className " />
  </button>
</template>

<script>
export default {
    props: {
        className: String
    }
}
</script>

<style>
.key-icon-button {
    display: block;
    font-size: 1.25rem;
    width: 2.5rem;
    height: calc(1.75rem + 5px);
    border: none;
    border-bottom: 5px solid #ccc;
    border-radius: 0.2rem;
}

.dark .key-icon-button {
    border-bottom: 5px solid #111;
    background: #444;
    color: #ddd;
}
</style>