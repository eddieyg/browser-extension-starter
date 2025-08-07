const count = storage.defineItem<number>('local:count', {
  defaultValue: 0,
  fallback: 0,
  version: 1,
})

const i18nLocale = storage.defineItem<'en' | 'zh'>('local:i18n_locale', {
  defaultValue: 'en',
  fallback: 'en',
  version: 1,
})

export const store = {
  count,
  i18nLocale,
}
