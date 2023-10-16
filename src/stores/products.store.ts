import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type TypeProduct } from '@/types/product.types';

export const useProductsStore = defineStore('products', () => {
  const productsState = ref<TypeProduct[]>([]);

  //
  const products = computed(() => {
    return productsState.value;
  });

  //
  async function getProducts() {
    try {
      const data = await fetch('/db.json');
      productsState.value = await data.json();
    } catch (error) {}
  }

  //
  return {
    productsState,
    products,
    getProducts,
  };
});
