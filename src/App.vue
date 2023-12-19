<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container">
        <nav class="header__menu">
          <RouterLink :to="{ name: 'home' }">Головна</RouterLink>
          <RouterLink :to="{ name: 'friends' }">Друзі</RouterLink>
          <RouterLink :to="{ name: 'gifts' }">Подарунки</RouterLink>
          <RouterLink :to="{ name: 'assignments' }">Призначення подарунків</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
