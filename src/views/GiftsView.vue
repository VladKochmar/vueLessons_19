<template>
  <div class="manager-container">
    <div class="manager-container__container">
      <h1 class="title">Список подарунків</h1>
      <items-list :list="giftsStore.gifts" :delete-item="giftsStore.removeGift" />
      <items-creator label="Назва" :add-item="giftsStore.addGift">
        <h4>Новий подарунок</h4>
      </items-creator>
    </div>
  </div>
</template>

<script setup>
import ItemsCreator from '@/components/ItemsCreator.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useGiftsStore } from '@/stores/gifts'

const giftsStore = useGiftsStore()
</script>

<style lang="scss" scoped></style>
