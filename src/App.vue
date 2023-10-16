<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from './stores/products.store';
import TheHeader from './components/TheHeader.vue';

//
const store = useProductsStore();
const route = useRoute();

//
const isLoad = ref(false);
const check = ref('fade');

//
watchEffect(() => {
  if (route.name === 'home' || !isLoad.value) {
    store.getProducts();
    isLoad.value = true;
  }
});
</script>

<template>
  <TheHeader />

  <RouterView v-slot="{ Component }">
    <Transition name="slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="css" scoped>
main {
  will-change: transform, opacity;
}

/*  */

.slide-appear-active {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}
</style>
