<template>
  <div class="under-construction">
    <i class="bi bi-gear rotating" />
    <p>{{ t("pageUnderContruction") }}</p>
    <router-link to="/" class="back-to-site-button">
      <i class="bi bi-arrow-left"></i>
      <p>{{ t("backToHomepage") }}</p>
    </router-link>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  components: {},
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
};
</script>

<style scoped>
.under-construction {
  margin-top: 60px;
}
.under-construction i.rotating {
  display: block;
  font-size: 3rem;
  width: 3.2rem;
  margin: auto;
  height: 3.2rem;
}

.rotating {
  -webkit-animation: rotateLugnut 5s linear 0s infinite normal forwards;
  -moz-animation: rotateLugnut 5s linear 0s infinite normal forwards;
  animation: rotateLugnut 5s linear 0s infinite normal forwards;
}

.under-construction p {
  font-size: 1.5rem;
}

.back-to-site-button {
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
}

.back-to-site-button p {
  font-size: 1rem;
  margin: 0 0 0 10px;
}

@-moz-keyframes rotateLugnut {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@-webkit-keyframes rotateLugnut {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes rotateLugnut {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>

<i18n>
{
    "en": {
        "pageUnderContruction": "This page is under construction!",
        "backToHomepage": "Back to homepage"
    },
    "de": {
        "pageUnderContruction": "Diese Seite ist in Bearbeitung!",
        "backToHomepage": "Zurück zur Hauptseite"
    }
}
</i18n>
