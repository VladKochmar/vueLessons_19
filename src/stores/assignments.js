import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'

export const useAssignmentsStore = defineStore('assignments', () => {
  let assignments = ref([{ id: 1, friendId: 1, giftId: 3 }])

  const filledAssignmentsList = computed(() => {
    const friendsModule = useFriendsStore()
    const giftsModule = useGiftsStore()

    return !assignments.value.length
      ? []
      : assignments.value.map((assignment) => ({
          id: assignment.id,
          title: `${friendsModule.getFriendById(assignment.friendId).title} - ${
            giftsModule.getGiftById(assignment.giftId).title
          }`
        }))
  })

  function addAssignment(assignment) {
    assignments.value.push({ id: new Date().getTime(), ...assignment })
  }

  function removeAssignment(assignmentId) {
    assignments.value = assignments.value.filter((assignment) => assignment.id !== assignmentId)
  }

  function removeAssignmentByFriendId(friendId) {
    assignments.value = assignments.value.filter((assignment) => assignment.friendId !== friendId)
  }

  function removeAssignmentByGiftId(giftId) {
    assignments.value = assignments.value.filter((assignment) => assignment.giftId !== giftId)
  }

  return {
    assignments,
    filledAssignmentsList,
    addAssignment,
    removeAssignment,
    removeAssignmentByFriendId,
    removeAssignmentByGiftId
  }
})
