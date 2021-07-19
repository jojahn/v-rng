<template>
  <div class="config-pane">
        <div class="button-wrapper">
            <button id="ConfigButton" class="open-config-button" v-on:click="openPane">
                <i class="bi bi-arrow-right-circle" />
            </button>
        </div>
        <div class="pane" v-bind:id="'ConfigurationContentPane:' + name">
            <div class="content-wrapper">
                <slot></slot>
                <button class="more-options-button" v-on:click="showMoreOptions">
                    <i v-bind:class="'bi ' + (!moreOptionsVisible ? 'bi-caret-right-fill' : 'bi-caret-down-fill')" />
                    <span>More Options</span>
                </button>
            </div>
            <div class="config-actions">
                <!-- <button class="config-actions-button">
                    <i class="bi bi-sliders"/>
                </button> -->
                <button class="config-actions-button">
                    <i class="bi bi-upload"/>
                </button>
                <button class="config-actions-button">
                    <i class="bi bi-download"/>
                </button>
                <button class="config-actions-button">
                    <i class="bi bi-trash"/>
                </button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        onConfigChanged: Function
    },
    data() {
        return {
            open: true,
            moreOptionsVisible: false
        };
    },
    methods: {
        showMoreOptions() {
            this.moreOptionsVisible = !this.moreOptionsVisible;
        },
        openPane() {
            var content = document.getElementById('ConfigurationContentPane:' + this.$props.name);
            if (!this.open) {
                content.classList.add("pane-open");
                content.classList.remove("pane-closed");
                document.getElementsByClassName("open-config-button")[0].classList.toggle("rotated");
            } else {
                content.classList.remove("pane-open");
                content.classList.add("pane-closed");
                document.getElementsByClassName("open-config-button")[0].classList.toggle("rotated");
            }
            this.open = !this.open;
        },
        store() {
            localStorage.setItem(this.$props.name, JSON.stringify(testObject));
        },
        load() {
            var retrieved = localStorage.getItem(this.$props.name);
            if (!retrieved) {
                retrieved = defaultConfiguration[this.$props.name];
            }
        },
        onFormChange(ev) {
            console.log(ev);
            this.$props.onConfigChanged();
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
    background: transparent;

    transform: rotate(0deg);
    -webkit-animation: rotateConfigButtonBack 0.5s ease-in-out 0s 1 normal forwards;
    -moz-animation: rotateConfigButtonBack 0.5s ease-in-out 0s 1 normal forwards;
    animation: rotateConfigButtonBack 0.5s ease-in-out 0s 1 normal forwards;
}
.open-config-button > *:nth-child(1) {
    border-radius: 3rem;
    color: #333;
    padding: 10px;
    display: block;
    height: 42px;
}
.open-config-button:hover > *:nth-child(1) {
    background: #ddd;
}
.button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.pane {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    width: 30vw;
    display: block;
    /* margin-top: 10%; */
    height: 100%;
    background: white;
    /* margin-right: 5%; */
    top: 0;
    border-radius: 0.3rem;
    border: 1px solid #DDD;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
}
.pane.pane-closed {
    /* right: 0px; */
    margin-right: 0;
    -webkit-animation: close 0.5s ease-in-out 0s 1 normal forwards;
    -moz-animation: close 0.5s ease-in-out 0s 1 normal forwards;
    animation: close 0.5s ease-in-out 0s 1 normal forwards;
}
.pane.pane-open {
    /* right: 0px; */
    margin-right: -30vw;
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

.open-config-button.rotated {
    -webkit-animation: rotateConfigButton 0.5s ease-in-out 0s 1 normal forwards;
    -moz-animation: rotateConfigButton 0.5s ease-in-out 0s 1 normal forwards;
    animation: rotateConfigButton 0.5s ease-in-out 0s 1 normal forwards;
}

@-moz-keyframes rotateConfigButton { 100% { transform: rotate(180deg); } }
@-webkit-keyframes rotateConfigButton { 100% { transform: rotate(180deg); } }
@keyframes rotateConfigButton { 100% { transform: rotate(180deg); } }

@-moz-keyframes rotateConfigButtonBack { 100% { transform: rotate(0deg); } }
@-webkit-keyframes rotateConfigButtonBack { 100% { transform: rotate(0deg); } }
@keyframes rotateConfigButtonBack { 100% { transform: rotate(0deg); } }

.pane > form {
    display: flex;
    flex-direction: column;
}

.pane > form textarea {
    margin: auto;
    margin-top: 18px;
    height: 200px;
    width: 90%;
    resize: none;
    border: none;
    outline-style: none;
    font-size: 1.5rem;
    line-height: 3rem;
    font-family: Arial, Helvetica, sans-serif;
}

.form-group {
    display: flex;
    justify-content: space-evenly;
}

.content-wrapper {
    display: block;
    height: calc(100% - 4rem);
}

.config-actions {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.config-actions-button {
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  /* border: 1px solid #aaa; */
  border-radius: 0.3rem;
  background: #FFF;
  color: #333;
}

.more-options-button {
    background: transparent;
    border: none;
    font-size: 2rem;
    display: flex;
    padding-top: 40px;
}

.more-options-button span {
    font-size: 1.5rem;
    line-height: 2rem;
}

.dark .config-actions-button {
  border-color: #111;
  background: #222;
  color: #ddd;
  transition: 0.25s
}

.dark .config-actions-button:hover {
  background: #111;
}

.dark .pane > form textarea {
    color: #ddd;
    background-color: #222;
}

.dark .pane {
    color: #ddd;
    background-color: #222;
    border: 1px solid #111;
    box-shadow: -2px -2px 20px rgba(0,0,0,0.2);
}

.dark .open-config-button > *:nth-child(1) {
    color: #ddd;
}
.dark .open-config-button:hover > *:nth-child(1) {
    background: #222;
}

.dark .more-options-button {
    color: #ddd;
}
</style>