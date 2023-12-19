<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <v-select
        v-model="itemData.friendId"
        label="Друг"
        :items="selectFriendsList"
        item-title="title"
        item-value="id"
      ></v-select>
      <v-select
        v-model="itemData.giftId"
        label="Подарунок"
        :items="selectGiftsList"
        item-title="title"
        item-value="id"
      ></v-select>
      <v-btn :disabled="isDisabled" block class="mt-2" text="Додати" @click="onAdd"></v-btn>
    </v-sheet>
  </div>
</template>

<script setup>
import { useAssignmentsStore } from '@/stores/assignments'
import { useFriendsStore } from '@/stores/friends'
import { useGiftsStore } from '@/stores/gifts'
import { storeToRefs } from 'pinia'
import { reactive, computed } from 'vue'

const assignmentStore = useAssignmentsStore()
const friendsStore = useFriendsStore()
const giftsStore = useGiftsStore()

const { selectFriendsList } = storeToRefs(friendsStore)
const { selectGiftsList } = storeToRefs(giftsStore)

let itemData = reactive({})

const isDisabled = computed(() => !itemData.giftId || !itemData.friendId)

function onAdd() {
  assignmentStore.addAssignment(itemData)
  itemData.giftId = undefined
  itemData.friendId = undefined
}
</script>

<style lang="scss" scoped></style>
