const count = storage.defineItem<number>('local:count', {
  defaultValue: 0,
  fallback: 0,
  version: 1,
})

export const store = {
  count,
}
