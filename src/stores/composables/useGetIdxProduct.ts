import { type Ref } from 'vue';
import { type TypeCard } from '@/types/card.types';

export const useGetIdxProduct = (id: string, cartState: Ref<TypeCard[]>) => {
  return cartState.value.findIndex((p) => p.id === id);
};
