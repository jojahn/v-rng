<template>
    <div class="wheel-view">
        <AlertBox
            :header="currentWinner"
            :background-color="currentWinnerColor"
            color="000"
            ref="alertBox"
        />
        <Wheel
            ref="wheel"
            class="wheel"
            :onWon="onWheelWon"
            :values="values"
            :maxTime="maxTime"
            :fadeOutTime="fadeOutTime"
            :spinTime="spinTime"
        />
        <ActionButton
            class="spin-button"
            :iconClass="
                'bi ' +
                (!!$refs.wheel && $refs.wheel.isSpinning
                    ? 'bi-x'
                    : 'bi-shuffle')
            "
            :progress="($refs.wheel && $refs.wheel.progress) || 0"
            v-bind:callback="spin"
        />
        <ConfigurationPane name="wheel">
            <form v-on:change="onFormChange">
                <textarea
                    :placeholder="'Mango\nVanilla\nStrawberry'"
                    v-on:input="onFormChange"
                    name="values"
                    v-model="valuesString"
                ></textarea>
                <div class="form-group">
                    <input
                        type="checkbox"
                        id="removeWinner"
                        name="removeWinner"
                        v-model="removeWinner"
                    />
                    <label for="removeWinner">{{ t("RemoveWinner") }}</label>
                </div>
            </form>
        </ConfigurationPane>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import { DEFAULT_COLORS, getColorInOrder } from "@/services/COLORS"
import ActionButton from "@/components/ActionButton.vue"
import ConfigurationPane from "@/components/ConfigurationPane.vue"
import Wheel, { FALLBACK_PICKS } from "./Wheel.vue"
import AlertBox from "@/components/AlertBox.vue"
import { pickRandom, randomNumber } from "@/services/random"

export default {
    components: {
        Wheel,
        ActionButton,
        ConfigurationPane,
        AlertBox
    },
    data() {
        return {
            maxTime: 7000,
            spinTime: 2000,
            fadeOutTime: 10000,
            currentWinner: "",
            currentWinnerColor: DEFAULT_COLORS[0],
            valuesString: "",
            removeWinner: false,
            values: [
                { name: "Mango", color: DEFAULT_COLORS[0], instances: 1 },
                { name: "Vanilla", color: DEFAULT_COLORS[1], instances: 1 },
                { name: "Strawberry", color: DEFAULT_COLORS[2], instances: 1 },
                { name: "Lime", color: DEFAULT_COLORS[3], instances: 1 }
            ],
            defaultValuesString: ""
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },
    methods: {
        onWheelWon(value) {
            this.currentWinner = value
            const usingFallback = this.values.length === 0
            const winningEntry = usingFallback
                ? FALLBACK_PICKS.find((v) => v.name === value)
                : this.values.find((v) => v.name === value)
            this.currentWinnerColor = winningEntry
                ? winningEntry.color
                : DEFAULT_COLORS[0]
            this.$refs.alertBox.open()
            if (this.removeWinner) {
                this.removeValue(value)
            }
        },
        removeValue(name) {
            const index = this.values.findIndex((v) => v.name === name)
            if (index === -1) {
                return
            }
            const strings = this.values.map((v) => v.name)
            strings.splice(index, 1)
            this.values = strings.map((v, i) => ({
                name: v,
                color: getColorInOrder(i, strings.length)
            }))
            this.valuesString = strings.join("\n")
        },
        spin() {
            if (this.$refs.wheel.isSpinning) {
                this.$refs.wheel.stop()
            } else {
                const picks = this.$refs.wheel.displayedPicks
                const nextIndex = randomNumber(0, picks.length - 1)
                const nextSpinTime = this.$refs.wheel.getSpinTimeForIndex(
                    nextIndex,
                    this.spinTime
                )
                this.$refs.alertBox.close()
                this.$refs.wheel.spin(0, nextSpinTime)
            }
        },
        duplicateValues() {
            const displayedPicks = []
            if (!this.$props.values) {
                return
            }
            let values = this.values.filter((v) => !!v.name && !!v.color)
            if (!values) {
                return
            }
            let duplications = -1
            switch (values.length) {
                case 0:
                    return
                case 1:
                    return
                case 2:
                    duplications = 3
                    break
                case 3:
                    duplications = 3
                    break
                case 4:
                    duplications = 2
                    break
                case 5:
                    duplications = 2
                    break
                default:
                    duplications = 1
                    break
            }
            for (let i = 0; i < duplications; i++) {
                displayedPicks.push(...values)
            }
            return displayedPicks
        },
        onFormChange(ev) {
            if (ev.target.name === "values") {
                this.$refs.wheel.stop()
                const strings = ev.target.value.split("\n").filter(Boolean)
                this.values = strings.map((v, i) => ({
                    name: v,
                    color: getColorInOrder(i, strings.length)
                }))
            }
        }
    },
    mounted() {
        this.defaultValuesString = this.values.map((v) => v.name).join("\n")
        this.valuesString = this.defaultValuesString
        // $refs.wheel is unset during the initial render, so the template's guarded reads of
        // $refs.wheel.isSpinning/progress never touch those properties and never subscribe to
        // them. Force one more render once the ref is populated so those reads happen and the
        // button reacts from the very first spin instead of only after some other state change.
        this.$nextTick(() => this.$forceUpdate())
    }
}
</script>

<style scoped>
.wheel-view {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
}

form {
    display: flex;
    flex-direction: column;
}

.wheel {
    height: calc(100% - 50px);
}

.spin-button {
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -35px;
    /* Negative half of width. */
}

form {
    height: 100%;
    margin-top: 50px;
}

form textarea {
    margin: 0 auto;
    flex: 1;
    width: 90%;
    resize: none;
    border: none;
    outline-style: none;
    font-size: 1.5rem;
    line-height: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-family: "Ubuntu Mono", monospace;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 90%;
    margin: 0 auto 18px;
    font-size: 1.25rem;
    font-family: "Ubuntu Mono", monospace;
}

.form-group input[type="checkbox"] {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}

.form-group label {
    cursor: pointer;
}

.dark form textarea {
    color: #ddd;
    background-color: #222;
}

.dark .form-group {
    color: #ddd;
}
</style>
