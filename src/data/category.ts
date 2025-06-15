import { ECategory } from "./enums";


export interface ICategory {
  name: string
  icon?: string
  hide?: boolean
}

export const categories: Record<string, ICategory> = {
  [ECategory.MINING]: { name: 'Горное дело', icon: 'mining' },
  [ECategory.HERBALISM]: { name: 'Травничество', icon: 'herbalism' },
  [ECategory.WOODCRAFTING]: { name: 'Заготовка древесины', icon: 'woodcrafting' },
  [ECategory.MERCHANT]: { name: 'Ресурсы у торговцев', icon: 'merchant' },
  [ECategory.FISHING]: { name: 'Рыбалка', hide: true },
  [ECategory.SHADOW]: { name: 'Мир теней', icon: 'shadow-1' },
  [ECategory.OTHER]: { name: 'Прочее' }
};
