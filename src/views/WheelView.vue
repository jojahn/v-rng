<template>
    <Wheel ref="wheel" :values="values" />
    <ActionButton iconClass="bi bi-arrow-clockwise" v-bind:callback="spin" />
    <ConfigurationPane name="wheel">
      <form v-on:change="onFormChange">
        <textarea name="values" v-model="valuesString"></textarea>
      </form>
      <KeyIcon className="bi-shift"/>
      <KeyIcon className="bi-arrow-return-left"/>
    </ConfigurationPane>
</template>


<script>
// @ is an alias to /src
import { DEFAULT_COLORS } from "@/services/defaultValues";
import Wheel from '@/components/Wheel.vue'
import ActionButton from '@/components/ActionButton.vue'
import ConfigurationPane from '@/components/ConfigurationPane.vue';
import KeyIcon from '@/components/KeyIcon.vue';

export default {
  components: {
    Wheel,
    ActionButton,
    ConfigurationPane,
    KeyIcon
  },
  data() {
    return {
      valuesString: "Birds\nCats\nDogs\n",
      values: [{ name: "Birds", color: DEFAULT_COLORS[0] },
        { name: "Cats", color: DEFAULT_COLORS[1] },
        { name: "Dogs", color: DEFAULT_COLORS[2] }]
    };
  },
  methods: {
    spin() {
      this.$refs.wheel.spin();
    },
    onFormChange(ev) {
      if (ev.target.name === "values") {
        this.values = ev.target.value.split("\n").map((v, i) => ({ name: v, color: DEFAULT_COLORS[i % DEFAULT_COLORS.length] }));
      }
    }
  }
}
</script>

<style scoped>
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