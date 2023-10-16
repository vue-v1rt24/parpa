<script setup lang="ts">
const props = defineProps<{
  title: string;
  isDisabled?: boolean;
}>();

const emit = defineEmits<{
  load: [];
}>();
</script>

<template>
  <button type="button" class="btn-load" @click="emit('load')" :disabled="isDisabled">
    {{ title }}
  </button>
</template>

<style lang="css" scoped>
.btn-load {
  width: 142px;
  height: 25px;
  font-family: var(--font);
  font-size: 16px;
  color: #6a6a6a;
  background-color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  user-select: none;
  padding: 0 18px;
  transition: color 0.3s, box-shadow 0.3s;
}

.btn-load:hover {
  color: var(--text-color);
}

.btn-load:active {
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
}

.btn-load:disabled {
  color: #6a6a6a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
</style>
