<template>
    <div class="backdrop" v-if="opened" ref="backdrop" v-on:click="close">
        <div class="alert-box" v-on:click="onAlertBoxClick">
            <span>{{ header }}</span>
            <button class="close-button" autofocus v-on:click="close">
                {{ t("Close") }}
            </button>
        </div>
    </div>
</template>

<script>
import { useI18n } from "vue-i18n"
export default {
    props: {
        header: String
    },
    data: () => ({
        opened: false
    }),
    setup() {
        const { t } = useI18n()
        return { t }
    },
    methods: {
        onBackdropClick() {
            this.close()
        },
        onAlertBoxClick(event) {
            event.stopPropagation()
        },
        open() {
            this.opened = true
        },
        close() {
            this.opened = false
        }
    }
}
</script>

<style>
.alert-box {
    background-color: #eee;
    padding: 10px;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    user-select: none;
}

.alert-box > span:first-child {
    font-size: 1.75em;
    font-weight: bold;
    margin-bottom: 10px;
}

.dark .alert-box {
    background-color: #333;
}

.backdrop {
    position: fixed;
    z-index: 99999999999;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10vh;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
}

.close-button {
    background-color: transparent;
    color: var(--color);
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 10px;
    font-size: 0.9em;
}
</style>
