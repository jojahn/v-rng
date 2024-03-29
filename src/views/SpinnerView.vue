<template>
  <div class="spinner-view">
    <Spinner
      ref="spinner"
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
          : 'bi-arrow-clockwise')
      "
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
      </form>
    </ConfigurationPane>
  </div>
</template>

<script>
import { DEFAULT_COLORS, defaultConfiguration } from "@/services/defaultValues";
import Spinner from "@/components/randomizer/Spinner.vue";
import ActionButton from "@/components/generic/ActionButton.vue";
import ConfigurationPane from "@/components/globals/ConfigurationPane.vue";

export default {
  components: {
    Spinner,
    ActionButton,
    ConfigurationPane
  },
  data() {
    return {
      maxTime: 7000,
      spinTime: 2000,
      fadeOutTime: 10000,
      valuesString: "",
      values: [],
      defaultValuesString: ""
    };
  },
  methods: {
    spin() {
      if (this.$refs.spinner.isSpinning) {
        this.$refs.spinner.stop();
      } else {
        this.$refs.spinner.spin();
      }
    },
    onFormChange(ev) {
      if (ev.target.name === "values") {
        this.values = ev.target.value.split("\n").map((v, i) => ({
          name: v,
          color: DEFAULT_COLORS[i % DEFAULT_COLORS.length]
        }));
      }
    }
  },
  mounted() {
    this.values = defaultConfiguration.wheel.values;
    this.defaultValuesString = this.values.map((v) => v.name).join("\n");
    this.valuesString = this.defaultValuesString;
  }
};
</script>

<style scoped>
.spinner-view {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
}
form {
  display: flex;
  flex-direction: column;
}

form textarea {
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
