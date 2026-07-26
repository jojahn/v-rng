<template>
    <div class="alert-box" v-if="opened" ref="alertBox">
        <span>{{ header }}</span>
    </div>
</template>

<script>
export default {
    props: {
        header: String
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
    background-color: #eee;
    padding: 10px;
    border-radius: 0.3rem;
    border: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
}

.alert-box > span:first-child {
    font-size: 1.75em;
    font-weight: bold;
}

.dark .alert-box {
    background-color: #333;
    border: 1px solid #111;
}
</style>
