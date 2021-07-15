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
    background-color: rgba(0,0,0,0.5);
    /* background: linear-gradient(to bottom right, #16A085,#F4D03F); */
    line-height: 5rem;
    color: transparent;
    /* text-shadow: 2px 2px 3px rgba(240,240,240,0.5); */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
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
</style>