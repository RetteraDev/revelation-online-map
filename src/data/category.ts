import { ECategory } from "./enums";


export interface ICategory {
  name: string
  icon?: string
  hide?: boolean
}

export const categories: Record<string, ICategory> = {
  [ECategory.MINING]: { name: 'Горное дело' },
  [ECategory.HERBALISM]: { name: 'Травничество' },
  [ECategory.WOODCRAFTING]: { name: 'Заготовка древесины' },
  [ECategory.MERCHANT]: { name: 'Ресурсы у торговцев' },
  [ECategory.FISHING]: { name: 'Рыбалка', hide: true },
  [ECategory.SHADOW]: { name: 'Мир теней', hide: true },
  [ECategory.OTHER]: { name: 'Прочее' }
};
