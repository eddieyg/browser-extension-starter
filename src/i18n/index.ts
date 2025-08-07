import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enResource from './locales/en.json'
import zhResource from './locales/zh.json'

export const i18nLanguagesMap = {
  en: {
    code: 'en',
    name: 'English',
  },
  zh: {
    code: 'zh',
    name: '简体中文',
  },
} as const

export const i18nLanguages = Object.values(i18nLanguagesMap)

export const defaultI18nLocale = i18nLanguagesMap.en.code

export type I18nLocale = keyof typeof i18nLanguagesMap

export function initI18n() {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enResource,
        },
        zh: {
          translation: zhResource,
        },
      },
      lng: defaultI18nLocale,
      fallbackLng: defaultI18nLocale,

      interpolation: {
        escapeValue: false,
      },
    })
  return i18n
}
