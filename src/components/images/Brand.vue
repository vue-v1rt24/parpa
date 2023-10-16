<script setup lang="ts"></script>

<template>
  <img class="btn-box__brand" src="/images/brand.svg" alt="" />
</template>

<style lang="css" scoped>
.btn-box__brand {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: brand 2s linear infinite;
}

@keyframes brand {
  0% {
    transform: translateX(-50%) rotateY(0);
  }
  100% {
    transform: translateX(-50%) rotateY(360deg);
  }
}
</style>
