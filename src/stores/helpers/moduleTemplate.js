import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useAssignmentsStore } from '../assignments'

export function getModuleTemplate(moduleName, itemName, list, assignmentIdName) {
  return defineStore(moduleName.toLowerCase(), () => {
    const data = ref(list)

    const selectList = computed(() => {
      const assignmentsModule = useAssignmentsStore()

      return !assignmentsModule.assignments.length
        ? data.value
        : data.value.filter(
            (item) =>
              !assignmentsModule.assignments.some(
                (assignment) => assignment[assignmentIdName] === item.id
              )
          )
    })

    const getById = computed(() => (id) => data.value.find((item) => item.id == id))

    function add(item) {
      data.value.push({ id: new Date().getTime(), ...item })
    }

    function remove(id) {
      data.value = data.value.filter((item) => item.id !== id)
      useAssignmentsStore()[`removeAssignmentBy${itemName}Id`](id)
    }

    return {
      [moduleName.toLowerCase()]: data,
      [`select${moduleName}List`]: selectList,
      [`get${itemName}ById`]: getById,
      [`add${itemName}`]: add,
      [`remove${itemName}`]: remove
    }
  })
}
