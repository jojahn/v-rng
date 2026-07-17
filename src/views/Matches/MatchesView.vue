<template>
    <div>
        <AlertBox header="You lost!" ref="alertBox" />
        <div class="matches-view-content">
            <Matches ref="matches" :numberOfMatches="numberOfMatches" :numberOfShorts="numberOfShorts" :onLost="onLost" />
            <ActionButton class="spin-button" :iconClass="'bi ' +
                ('bi-shuffle')
                " v-bind:callback="pickNext" />
        </div>
        <ConfigurationPane name="matches">
            <form v-on:change="onFormChange" class="matches-form">
                <input min="2" max="10" type="number" v-on:input="onFormChange" v-model="numberOfMatches" name="numberOfMatches">
                <label>Matches</label>
                <input min="1" :max="numberOfMatches - 1" type="number" v-on:input="onFormChange" v-model="numberOfShorts" name="numberOfShorts">
                <label>Short Matches</label>
            </form>
        </ConfigurationPane>
    </div>
</template>

<script>
import ConfigurationPane from "@/components/ConfigurationPane.vue";
import ActionButton from "@/components/ActionButton.vue";
import AlertBox from "@/components/AlertBox.vue";

import Matches from "./Matches.vue";

export default {
    components: {
        ConfigurationPane,
        ActionButton,
        AlertBox,
        Matches
    },
    data() {
        return {
            numberOfMatches: 3,
            numberOfShorts: 1,
        };
    },
    mounted() {
        this.$refs.matches.reset();
    },
    methods: {
        onFormChange() {
            if (this.numberOfMatches <= this.numberOfShorts) {
                this.numberOfShorts = this.numberOfMatches - 1;
            }
            this.$refs.matches.reset();
        },
        pickNext() {
            if (this.$refs.matches.hasNext()) {
                this.$refs.matches.pickNext();
            } else {
                this.$refs.matches.reset();
            }
        },
        onLost() {
            this.$refs.alertBox.open();
        }
    }
}
</script>

<style>
.matches-view-content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.matches-view-content > * {
    height: 100%;
}

.matches-form {
    display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  margin-top: 50px;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-family: "Ubuntu Mono", monospace;
}

.matches-form label {
    text-align: left;
    line-height: 3rem;
    font-size: 1.5rem;
}

form input {
    border: none;
    outline-style: none;
    font-size: 1.5rem;
    line-height: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-family: "Ubuntu Mono", monospace;
    background-color: #fff;
    color: #333;
}

.dark form input {
    background-color: #333;
    color: #ddd;
}
</style>