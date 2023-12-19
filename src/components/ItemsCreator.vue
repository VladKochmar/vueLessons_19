<template>
  <div>
    <slot></slot>
    <v-sheet max-width="300" class="mx-auto">
      <v-text-field v-model="itemData.title" :label="label"></v-text-field>
      <v-btn :disabled="isDisabled" block class="mt-2" text="Додати" @click="onAdd"></v-btn>
    </v-sheet>
  </div>
</template>

<script setup>
import { reactive, defineProps, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  addItem: {
    type: Function,
    required: true
  }
})

let itemData = reactive({})

const isDisabled = computed(() => !itemData.title)

function onAdd() {
  props.addItem(itemData)
  itemData.title = ''
}
</script>

<style lang="scss" scoped></style>
