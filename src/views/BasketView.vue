<script setup lang="ts">
import { computed } from 'vue';
import { useCardStore } from '@/stores/cart.store';
import Product from '@/components/Product.vue';
import CartEmpty from '@/components/images/CartEmpty.vue';

//
const store = useCardStore();

//
const products = computed(() => store.cart);

//
const delProd = (id: string) => {
  store.remove(id);
};
</script>

<template>
  <main class="container">
    <div v-if="!products.length" class="notProducts">
      <CartEmpty />

      <div class="notProducts__bottom">
        <h1 class="notProducts__title">Товаров в корзине пока нет</h1>
        <RouterLink :to="{ name: 'home' }" class="notProducts__link">Исправить ситуацию</RouterLink>
      </div>
    </div>

    <div v-else class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        type="horizontal"
        @sending-event="delProd"
      />
    </div>
  </main>
</template>

<style lang="css" scoped>
.notProducts {
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.notProducts__bottom {
  margin-top: 60px;
}

.notProducts__title {
  font-size: 30px;
}

.notProducts__link {
  font-size: 20px;
  color: var(--text-color);
  border-bottom: 1px solid;
  display: inline-block;
  margin-top: 30px;
  transition: border-color 0.2s;
}

.notProducts__link:hover {
  border-color: transparent;
}

/*  */

.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;
  padding-bottom: 80px;
}

/*  */

@media (max-width: 576px) {
  .products {
    justify-items: center;
  }
}
</style>
