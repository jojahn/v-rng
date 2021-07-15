<template>
  <div class="config-pane">
        <div class="button-wrapper">
            <button class="open-config-button" v-on:click="openPane">
                <i class="bi bi-arrow-left" />
                <i class="bi bi-arrow-left-circle" />
            </button>
        </div>
        <div class="content" v-bind:id="'ConfigurationContentPane:' + name">

        </div>
  </div>
</template>

<script>
export default {
    methods: {
        props: {
            name: String
        },
        data() {
            return {
                open: false
            };
        },
        openPane() {
            var content = document.getElementById('ConfigurationContentPane:' + this.$props.name);
            if (!this.data.open) {
                content.classList.add("pane-open");
                content.classList.remove("pane-closed");
            } else {
                content.classList.remove("pane-open");
                content.classList.add("pane-closed");
            }
            this.data.open = !this.data.open;
        },
        store() {
            localStorage.setItem(this.$props.name, JSON.stringify(testObject));
        },
        load() {
            var retrieved = localStorage.getItem(this.$props.name);
            if (!retrieved) {
                retrieved = defaultConfiguration[this.$props.name];
            }
        }
    }
}
</script>

<style scoped>
.config-pane {
    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100vh;
    display: flex;
}
.open-config-button {
    font-size: 2.5rem;
    padding: 1rem;
    border: none;
    margin: auto;
    cursor: pointer;
}
.open-config-button > *:nth-child(1) {
    display: none;
}
.open-config-button > *:nth-child(2) {
    border-radius: 3rem;
    color: #333;
    padding: 10px;
}
.open-config-button:hover > *:nth-child(2) {
    background: #ddd;
}
.open-config-button:hover > *:nth-child(1) {
    display: inline-block;
}
.button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.content {
    width: 30vw;
    display: block;
    height: 100%;
    background: white;
    margin-right: -30vw;
    top: 0;
}
.content.pane-closed {
    /* right: 0px; */
    margin-right: 0;
    -webkit-animation: close 0.5s ease-in-out 0s 1 normal forwards;
    -moz-animation: close 0.5s ease-in-out 0s 1 normal forwards;
    animation: close 0.5s ease-in-out 0s 1 normal forwards;
}
.content.pane-open {
    /* right: 0px; */
    -webkit-animation: open 0.5s ease-in-out 0s 1 normal forwards;
    -moz-animation: open 0.5s ease-in-out 0s 1 normal forwards;
    animation: open 0.5s ease-in-out 0s 1 normal forwards;
}
@-moz-keyframes open { 100% { margin-right: 0; } }
@-webkit-keyframes open { 100% { margin-right: 0; } }
@keyframes open { 100% { margin-right: 0; } }

@-moz-keyframes close { 100% { margin-right: -30vw; } }
@-webkit-keyframes close { 100% { margin-right: -30vw; } }
@keyframes close { 100% { margin-right: -30vw; } }
</style>