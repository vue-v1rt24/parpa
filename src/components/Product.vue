<script setup lang="ts">
import { computed } from 'vue';
import { priceFormat } from '@/utils/priceFormat.util';
import { type TypeProduct } from '@/types/product.types';

const props = withDefaults(
  defineProps<{
    product: TypeProduct;
    type?: 'vertical' | 'horizontal';
  }>(),
  {
    type: 'vertical',
  },
);

const emit = defineEmits<{
  sendingEvent: [id: string];
}>();

//
const isType = computed(() => props.type === 'horizontal');

const imageUrl = computed(() => (isType.value ? '/images/close.svg' : '/images/basket.svg'));
</script>

<template>
  <div :class="['product', { productHorizontal: isType }]">
    <div class="product__img">
      <img src="/images/blind.jpg" alt="" />
    </div>

    <div class="product__content">
      <div class="product__top">
        <div class="product__title">{{ product.title }}</div>
        <span class="product__desc truncate-text">{{ product.description }}</span>
      </div>

      <div class="product__bottom">
        <span class="product__price">{{ priceFormat(product.price) }}</span>

        <span class="product__basket">
          <img :src="imageUrl" @click="emit('sendingEvent', product.id)" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product {
  width: 280px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.product__content {
  position: relative;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.product__title {
  font-size: 24px;
  line-height: normal;
}

.product__desc {
  line-height: 26px;
  opacity: 0.5;
}

.product__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product__price {
  font-size: 18px;
  line-height: 26px;
}

.product__basket {
  cursor: pointer;
}

/*  */

.product.productHorizontal {
  width: 500px;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
}

.productHorizontal .product__content {
  width: 300px;
  height: 100%;
}

.productHorizontal .product__img {
  width: 200px;
  height: 200px;
}

.productHorizontal .product__basket {
  position: absolute;
  top: 0;
  right: 0;
}

/*  */

@media (max-width: 576px) {
  .product {
    width: 100%;
  }

  /*  */

  .product.productHorizontal {
    width: 200px;
    flex-direction: column;
  }

  .productHorizontal .product__content {
    width: 100%;
  }

  .productHorizontal .product__basket {
    top: 10px;
  }
}
</style>
