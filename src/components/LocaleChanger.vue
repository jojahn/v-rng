<template>
    <div class="locale-changer">
    <select v-model="i18n.global.locale">
        <optgroup>
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
        </option>
        </optgroup>
    </select>
  </div>
</template>

<script>
import i18n from '../i18n';
export default {
    data () {
        return { i18n, langs: ['en', 'de'] }
    }
}
</script>

<style scoped>
.locale-changer {
    width: 60px;
    height: 40px;
    border-radius: 0.3rem;
    border: 1px solid #aaa;
    background-color: #ddd;
    cursor: pointer;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 120px;
    z-index: 99;
}

.locale-changer select {
    height: 50px;
}

optgroup {
    height: 50px;
}

.locale-changer option {
    background: red;
        height: 50px;
}
</style>
