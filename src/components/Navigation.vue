<template>
    <div class="navigation">
        <router-link class="nav-item active" to="/">Home</router-link>
        <router-link class="nav-item" to="/wheel">Wheel</router-link>
        <router-link class="nav-item" to="/spinner">Spinner</router-link>
        <router-link class="nav-item" to="/dices">Dices</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPath: ""
        }
    }
}
</script>

<style scoped>
.navigation {
    position: fixed;
    display: flex;
    width: 100vw;
    height: auto;
    top: 0;
    justify-content: center;
}

.nav-item {
    color: #333;
    text-decoration: none;
    background: #ddd;
    padding: 10px;
    display: block;
}

.nav-item:hover {
    background: cyan;
    transition: 0.25s;
}

.nav-item:first-child {
    border-radius: 0 0 0 0.5rem;
}

.nav-item:last-child {
    border-radius: 0 0 0.5rem 0;
}
</style>