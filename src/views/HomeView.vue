<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProductsStore } from '@/stores/products.store';
import { useCardStore } from '@/stores/cart.store';
import Product from '@/components/Product.vue';
import Button from '@/components/Button.vue';
import Brand from '@/components/images/Brand.vue';

//
const storeProduct = useProductsStore();
const storeCart = useCardStore();

const isVisibleBtn = ref(true);
const isLoad = ref(false);

const from = 0;
const to = ref(4);
const limit = 4;

//
const products = computed(() => {
  return storeProduct.products.slice(from, to.value);
});

//
const load = async () => {
  isLoad.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  to.value += limit;

  isLoad.value = false;

  if (to.value >= storeProduct.products.length) {
    isVisibleBtn.value = false;
  }
};

const addToCard = (id: string) => {
  storeCart.add(id);
};
</script>

<template>
  <main class="container">
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @sending-event="addToCard"
      />
    </div>

    <div class="btn-box">
      <Brand v-show="isLoad" />
      <Button title="Показать ещё" @load="load" :is-disabled="isLoad" v-if="isVisibleBtn" />
    </div>
  </main>
</template>

<style lang="css" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 280px);
  justify-content: space-between;
  gap: 107px;
  padding-bottom: 40px;
}

/*  */

.btn-box {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
}

/*  */

@media (max-width: 1600px) {
  .products {
    gap: 60px;
  }
}

@media (max-width: 1366px) {
  .products {
    gap: 40px;
  }
}

@media (max-width: 1300px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
    justify-content: center;
  }

  .btn-box {
    justify-content: center;
    padding-top: 75px;
  }
}
</style>
