import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useProductsStore } from './products.store';
import { useCheckingQuantityGoods } from './composables/useCheckingQuantityGoods';
import { useGetIdxProduct } from './composables/useGetIdxProduct';
import { type TypeCard } from '@/types/card.types';
import { storeLocalUtil } from '@/utils/localeStorage.util';

import { POSITION, useToast } from 'vue-toastification';

const key = 'card';

export const useCardStore = defineStore('card', () => {
  const storeProducts = useProductsStore();
  const cartState = ref<TypeCard[]>(storeLocalUtil.get(key) || []);

  const toast = useToast();

  //
  const cart = computed(() => {
    return storeProducts.products.filter((p) => cartState.value.find((d) => d.id === p.id));
  });

  //
  const add = (id: string) => {
    const idx = useGetIdxProduct(id, cartState);
    const product = cartState.value[idx];

    try {
      if (product) {
        if (useCheckingQuantityGoods(product, cart)) {
          throw new Error('Товар закончился');
        }

        product.count++;
      } else {
        cartState.value.push({
          id,
          count: 1,
        });
      }

      storeLocalUtil.set(key, cartState.value);
    } catch (error) {
      if (error instanceof Error) {
        toast.warning(error.message, {
          position: POSITION.TOP_CENTER,
        });
      }
    }
  };

  const remove = (id: string) => {
    const idx = useGetIdxProduct(id, cartState);
    cartState.value.splice(idx, 1);
    storeLocalUtil.set(key, cartState.value);
  };

  //
  return {
    cartState,
    cart,
    add,
    remove,
  };
});
