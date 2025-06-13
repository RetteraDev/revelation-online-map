export default function compressSearchParams(ids: string[]): string {
  const selectedIds = new Map<string, string[]>();

  // Группируем значения по ключам (первым символам)
  ids.forEach(id => {
    const key = id[0];
    const value = id[1];
    
    if (!selectedIds.has(key)) {
      selectedIds.set(key, []);
    }
    selectedIds.get(key)?.push(value);
  });

  // Формируем результирующую строку
  return Array.from(selectedIds.entries())
    .map(([key, values]) => key + values.sort( () => .5 - Math.random() ).join(''))
    .join('_');
}


export function decompressSearchParams(compressed: string): string[] {
  return compressed.split('_')
    .flatMap(group => {
      const key = group[0];
      const values = group.slice(1).split('');
      return values.map(value => `${key}${value}`);
    });
}
