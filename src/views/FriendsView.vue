<template>
  <div class="manager-container">
    <div class="manager-container__container">
      <h1 class="title">Список друзів</h1>
      <items-list :list="friendsStore.friends" :delete-item="friendsStore.removeFriend" />
      <items-creator :add-item="friendsStore.addFriend" label="Ім'я">
        <h4>Новий друг</h4>
      </items-creator>
    </div>
  </div>
</template>

<script setup>
import ItemsCreator from '@/components/ItemsCreator.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useFriendsStore } from '@/stores/friends'

const friendsStore = useFriendsStore()
</script>

<style lang="scss" scoped></style>
