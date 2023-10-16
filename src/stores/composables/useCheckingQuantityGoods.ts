import { type ComputedRef } from 'vue';
import { type TypeCard } from '@/types/card.types';
import { type TypeProduct } from '@/types/product.types';

export const useCheckingQuantityGoods = (product: TypeCard, cart: ComputedRef<TypeProduct[]>) => {
  const currentProduct = cart.value.find((p) => p.id === product.id);

  if (currentProduct) {
    if (product.count === +currentProduct.count) {
      return true;
    }
  }

  return false;
};
