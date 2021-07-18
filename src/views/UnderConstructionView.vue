<template>
  <div class="under-construction">
      <i class="bi bi-gear" />
      <p>this page is in construction!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.under-construction i {
    display: block;
    font-size: 3rem;
    width: 3.2rem;
    margin: auto;
    height: 3.2rem;

    -webkit-animation: rotateLugnut 5s linear 0s infinite normal forwards;
    -moz-animation: rotateLugnut 5s linear 0s infinite normal forwards;
    animation: rotateLugnut 5s linear 0s infinite normal forwards;
}

.under-construction p {
    font-size: 1.5rem;
}

@-moz-keyframes rotateLugnut { 0% { transform: rotateZ(0deg); } 50% { transform: rotateZ(180deg); } 100% { transform: rotateZ(360deg); }}
@-webkit-keyframes rotateLugnut { 0% { transform: rotateZ(0deg); } 50% { transform: rotateZ(180deg); } 100% { transform: rotateZ(360deg); }}
@keyframes rotateLugnut { 0% { transform: rotateZ(0deg); } 50% { transform: rotateZ(180deg); } 100% { transform: rotateZ(360deg); }}

</style>