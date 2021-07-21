<template>
  <button class="action-button" v-on:click="onClick">
      <i v-bind:class="['bi', iconClass].join(' ')"></i>
  </button>
</template>

<script>
export default {
    props: {
        iconClass: String,
        callback: Function
    },
    methods: {
        onClick() {
            this.$props.callback();
        }
    }
}
</script>

<style scoped>
.action-button {
    min-width: 75px;
    width: 75px;
    height: 75px;
    max-height: 75px;
    background-color: transparent;
    border: none;
    border-radius: 0.3rem;
    border: 2px solid #DDD;
    /* box-shadow: 0px 10px 15px rgb(0 0 0 / 10%); */
    cursor: pointer;
    text-decoration: none !important;
    color: #333;
    padding: 0;
    margin: 50px auto;
}

/*
    "FDDE3B",
    "48B2ED",
    "F5306B",
    "AAE85D"
 */

.action-button i {
    font-size: 3rem;
    font-weight: bold;
    line-height: 5rem;
    color: black;
}

.action-button hr {
    width: 80%;
    height: 1px;
    border: 0;
    border-top: 1px solid #DDD;
}

.action-button > p {
    font-size: 1.75rem;
    font-family: 'Arial';
    font-weight: 500;
}

.dark .action-button {
    border-color: #555;
}

.dark .action-button > i {
    color: white;
}
</style>