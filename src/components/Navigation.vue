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
    position: absolute;
    display: flex;
    width: 100%;
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
    transition: 0.5s;
}

.nav-item:hover {
    background: #ccc;
}

.nav-item:first-child {
    border-radius: 0 0 0 0.3rem;
}

.nav-item:last-child {
    border-radius: 0 0 0.3rem 0;
}

.dark .nav-item {
    color: #ddd;
    background: #222;
}

.dark .nav-item:hover {
    background: #111;
}
</style>