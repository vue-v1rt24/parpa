<script setup lang="ts">
const linksMenu = [
  { link: 'home', title: 'Главная' },
  { link: 'basket', title: 'Корзина' },
];
</script>

<template>
  <header class="header_bx">
    <div class="container">
      <div class="header">
        <div class="header__logo">
          <RouterLink :to="{ name: 'home' }">
            <img src="/images/logo.svg" alt="логотип" />
          </RouterLink>
        </div>

        <nav>
          <ul class="header__menu">
            <li v-for="link in linksMenu" :key="link.link" class="header__item">
              <RouterLink :to="{ name: link.link }" class="header__link">{{
                link.title
              }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.header__menu {
  display: flex;
  column-gap: 24px;
}

.header__link {
  color: var(--text-color);
}

.header__menu .router-link-active,
.header__menu .router-link-exact-active {
  color: var(--link-active);
}

/*  */

@media (max-width: 576px) {
  .header {
    height: auto;
    flex-direction: column;
    row-gap: 30px;
    margin-bottom: 30px;
  }
}
</style>
