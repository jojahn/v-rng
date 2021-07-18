<template>
<router-link class="router-link-card" :to="path">
    <div class="card">
        <img v-bind:alt="title" v-bind:src="require(`@/assets/${imgSrc}`)">
        <hr>
        <p>{{ title }}</p>
    </div>
</router-link>
</template>

<script>
export default {
    props: {
        imgSrc: String,
        title: String,
        path: String
    }
}
</script>

<style scoped>
.router-link-card {
    text-decoration: none;
}
.card {
    width: 15em;
    max-height: 15em;
    background-color: #FFF;
    border-radius: 0.3rem;
    border: 1px solid #DDD;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
    cursor: pointer;
    text-decoration: none !important;
    color: #333;
    margin-bottom: 20px;
}

.card hr {
    width: 80%;
    height: 1px;
    border: 0;
    border-top: 1px solid #DDD;
}

.card > p {
    font-size: 1.75rem;
    font-family: 'Dancing Script', cursive;
    font-weight: 500;
}

@media screen and (max-width: 768px)  {
  .router-link-card {
    margin: auto;
    margin-bottom: 20px;
  }
}
.dark .card {
    background-color: #222;
    border: 1px solid #111;
    box-shadow: 2px 2px 20px 10px rgba(0,0,0,0.2);
    color: #FFF;
}
</style>