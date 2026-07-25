<template>
    <div>
        <AlertBox :header="t('LostMessage')" ref="alertBox" />
        <div class="matches-view-content">
            <Matches
                ref="matches"
                :numberOfMatches="numberOfMatches"
                :numberOfShorts="numberOfShorts"
                :onLost="onLost"
            />
            <ActionButton
                class="spin-button"
                :iconClass="'bi ' + 'bi-shuffle'"
                v-bind:callback="pickNext"
            />
        </div>
        <ConfigurationPane name="matches">
            <form class="matches-form">
                <input
                    :min="MIN_NUMBER_OF_MATCHES"
                    :max="MAX_NUMBER_OF_MATCHES"
                    type="number"
                    :value="numberOfMatches"
                    @input="onValueChange"
                    name="numberOfMatches"
                />
                <label>{{ t("Matches") }}</label>
                <input
                    min="1"
                    :max="numberOfMatches - 1"
                    type="number"
                    v-model="numberOfShorts"
                    name="numberOfShorts"
                />
                <label>{{ t("ShortMatches") }}</label>
            </form>
        </ConfigurationPane>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import ConfigurationPane from "@/components/ConfigurationPane.vue"
import ActionButton from "@/components/ActionButton.vue"
import AlertBox from "@/components/AlertBox.vue"

import Matches from "./Matches.vue"

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
            numberOfShorts: 1
        }
    },
    setup() {
        const { t } = useI18n()
        const MAX_NUMBER_OF_MATCHES = 8
        const MIN_NUMBER_OF_MATCHES = 2
        return { t, MAX_NUMBER_OF_MATCHES, MIN_NUMBER_OF_MATCHES }
    },
    mounted() {
        this.$refs.matches.reset()
    },
    methods: {
        onValueChange(event) {
            const newValue = Number(event.target.value)
            if (
                !Number.isNaN(newValue) &&
                newValue >= this.MIN_NUMBER_OF_MATCHES &&
                newValue <= this.MAX_NUMBER_OF_MATCHES
            ) {
                this.numberOfMatches = newValue
                this.$refs.matches.reset()
            }
        },
        pickNext() {
            if (this.$refs.matches.hasNext()) {
                this.$refs.matches.pickNext()
            }
        },
        onLost() {
            this.$refs.alertBox.open()
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
