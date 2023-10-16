<script setup lang="ts"></script>

<template>
  <svg viewBox="0 0 200.4 200.4" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M200.4 100.2c0 55.4-44.7 100.2-99.9 100.2C45.4 200.4.6 155.6.6 100.2.6 44.8 45.4 0 100.5 0c55.2 0 99.9 44.8 99.9 100.2"
      fill="#ffc93b"
    />
    <path
      d="M21.2 100.6C19.8 45.3 44.6 16.7 87.3.8 38.1 7 0 49.2 0 100.2c0 55.4 44.7 100.2 99.9 100.2 9.2 0 18.2-1.2 26.7-3.5-4.1.5-8.4 1-12.6.7-45.8-2.3-91.3-41.6-92.7-97"
      fill="#faad1e"
    />
    <g fill="#a76701">
      <circle xmlns="http://www.w3.org/2000/svg" _fill="#fff" r="15.3" cx="63.9" cy="83.5" />
      <circle xmlns="http://www.w3.org/2000/svg" _fill="#fff" r="15.3" cx="137.4" cy="83.5" />
      <!--transition: fill 0.2s ease 0s, transform 0.2s ease 0s;-->
    </g>
    <path
      d="M78.99 140.255h43.578a5 5 45 0 1 5 5v3.34a5 5 135 0 1-5 5H78.99a5 5 45 0 1-5-5v-3.34a5 5 135 0 1 5-5z"
      fill="#a76701"
      class="mouth"
    />
  </svg>
</template>

<style lang="css" scoped>
svg {
  animation: spooky 2s alternate infinite linear;
  display: inline-block;
  width: 9rem;
}

@keyframes spooky {
  0% {
    transform: translateY(1em);
  }
  100% {
    transform: translateY(-1em);
  }
}

circle {
  transform: scaleY(1.31);
  transform-origin: 63.9px 83.7px;
  animation-name: eyes;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.mouth {
  animation-name: mouth;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes eyes {
  0%,
  100%,
  50%,
  54% {
    transform: scaleY(1.31);
  }
  15% {
    transform: scaleY(1.31) translateX(-1.5em);
  }
  45% {
    transform: scaleY(1.31) translateX(1.5em);
  }
  52% {
    transform: scaleY(0.25);
  }
}

@keyframes mouth {
  0%,
  100%,
  50% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-1.5em);
  }
  45% {
    transform: translateX(1.5em);
  }
}
</style>
