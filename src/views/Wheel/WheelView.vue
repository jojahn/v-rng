<template>
    <div class="wheel-view">
        <AlertBox :header="currentWinner" ref="alertBox" />
        <Wheel ref="wheel" class="wheel" :onWon="onWheelWon" :values="values" :maxTime="maxTime" :fadeOutTime="fadeOutTime"
            :spinTime="spinTime" />
        <ActionButton class="spin-button" :iconClass="'bi ' +
            (!!$refs.wheel && $refs.wheel.isSpinning
                ? 'bi-x'
                : 'bi-shuffle')
            " :progress="($refs.wheel && $refs.wheel.progress) || 0" v-bind:callback="spin" />
        <ConfigurationPane name="wheel">
            <form v-on:change="onFormChange">
                <textarea :placeholder="'Mango\nVanilla\nStrawberry'" v-on:input="onFormChange" name="values"
                    v-model="valuesString"></textarea>
            </form>
        </ConfigurationPane>
    </div>
</template>

<script>
import { DEFAULT_COLORS, getColorInOrder } from "@/services/COLORS";
import ActionButton from "@/components/ActionButton.vue";
import ConfigurationPane from "@/components/ConfigurationPane.vue";
import Wheel from "./Wheel.vue";
import AlertBox from "@/components/AlertBox.vue";

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
            valuesString: "",
            values: [
                { name: "Mango", color: DEFAULT_COLORS[0], instances: 1 },
                { name: "Vanilla", color: DEFAULT_COLORS[1], instances: 1 },
                { name: "Lime", color: DEFAULT_COLORS[3], instances: 1 },
                { name: "Strawberry", color: DEFAULT_COLORS[2], instances: 1 }
            ],
            defaultValuesString: ""
        };
    },
    methods: {
        onWheelWon(value) {
            this.currentWinner = value;
            this.$refs.alertBox.open();
        },
        spin() {
            if (this.$refs.wheel.isSpinning) {
                this.$refs.wheel.stop();
            } else {
                this.$refs.wheel.spin();
            }
        },
        duplicateValues() {
            const displayedPicks = [];
            if (!this.$props.values) {
                return;
            }
            let values = this.values.filter((v) => !!v.name && !!v.color);
                if (!values) {
                return;
            }
            let duplications = -1;
            switch (values.length) {
            case 0:
                return;
            case 1:
                return;
            case 2:
                duplications = 3;
                break;
            case 3:
                duplications = 3;
                break;
            case 4:
                duplications = 2;
                break;
            case 5:
                duplications = 2;
                break;
            default:
                duplications = 1;
                break;
            }
            for (let i = 0; i < duplications; i++) {
                displayedPicks.push(...values);
            }
            return displayedPicks;
        },
        onFormChange(ev) {
            if (ev.target.name === "values") {
              this.$refs.wheel.stop();
                const strings = ev.target.value.split("\n").filter(Boolean)
                this.values = strings.map((v, i) => ({
                    name: v,
                    color: getColorInOrder(i, strings.length)
                }));
            }
        }
    },
    mounted() {
        this.defaultValuesString = this.values.map((v) => v.name).join("\n");
        this.valuesString = this.defaultValuesString;
        // $refs.wheel is unset during the initial render, so the template's guarded reads of
        // $refs.wheel.isSpinning/progress never touch those properties and never subscribe to
        // them. Force one more render once the ref is populated so those reads happen and the
        // button reacts from the very first spin instead of only after some other state change.
        this.$nextTick(() => this.$forceUpdate());
    }
};
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
}

form textarea {
    margin: auto;
    margin-top: 18px;
    height: 100%;
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
    justify-content: space-evenly;
}

.dark form textarea {
    color: #ddd;
    background-color: #222;
}
</style>
