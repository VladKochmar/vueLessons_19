import { getModuleTemplate } from './helpers/moduleTemplate'

const giftsList = [
  { id: 1, title: 'Торт' },
  { id: 2, title: 'Шовдарь' },
  { id: 3, title: 'Листівка' }
]

export const useGiftsStore = getModuleTemplate('Gifts', 'Gift', giftsList, 'giftId')
