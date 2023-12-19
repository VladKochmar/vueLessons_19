<template>
  <div class="manager-container">
    <div class="manager-container__container">
      <h1 class="title">Розподіл подарунків</h1>
      <items-list
        :list="assignmentsModule.filledAssignmentsList"
        :delete-item="assignmentsModule.removeAssignment"
      />
      <assignment-creator />
    </div>
  </div>
</template>

<script setup>
import AssignmentCreator from '@/components/AssignmentCreator.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useAssignmentsStore } from '@/stores/assignments'

const assignmentsModule = useAssignmentsStore()
</script>

<style lang="scss" scoped></style>
