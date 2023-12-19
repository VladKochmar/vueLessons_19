import { getModuleTemplate } from './helpers/moduleTemplate'

const friendsList = [
  { id: 1, title: 'Баба Галя' },
  { id: 2, title: 'Дід Петро' },
  { id: 3, title: 'Онука Оленка' }
]

export const useFriendsStore = getModuleTemplate('Friends', 'Friend', friendsList, 'friendId')
