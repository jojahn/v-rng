<template>
    <div
        class="alert-box"
        v-if="opened"
        ref="alertBox"
        :style="{
            backgroundColor: `#${backgroundColor}`,
            color: `#${color}`
        }"
    >
        <span>{{ header }}</span>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        backgroundColor: { type: String, default: "eee" },
        color: { type: String, default: "333" }
    },
    data: () => ({
        opened: false
    }),
    methods: {
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
    position: fixed;
    z-index: 99999999999;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 0.3rem;
    border: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    pointer-events: none;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    height: calc(1rem + 20px);
    min-width: calc(1rem + 20px);
}

.alert-box > span:first-child {
    font-size: 1.75em;
    font-weight: bold;
}

.dark .alert-box {
    border: 1px solid #111;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
}
</style>
