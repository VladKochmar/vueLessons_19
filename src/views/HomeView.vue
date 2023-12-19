<script setup></script>

<template>
  <div class="block">
    <div class="block__container">
      <h1 class="block__title title">Вітаємо у резиденції Миколая!</h1>
      <p class="text">Тут ви зможете обрати подарунки для своїх друзів</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  // .block__title
  &__title {
    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }
}
</style>
