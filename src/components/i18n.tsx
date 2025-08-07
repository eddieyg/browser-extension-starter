import { I18nextProvider } from 'react-i18next'
import { initI18n } from '@/i18n'
import { store } from '@/lib/storage'

export interface I18nProviderProps {
  children: React.ReactNode
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const i18n = initI18n()

  useEffect(() => {
    store.i18nLocale.getValue().then(i18n.changeLanguage)
    const unwatch = store.i18nLocale.watch((l) => {
      i18n.changeLanguage(l)
    })
    return () => {
      unwatch()
    }
  }, [])

  return (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      {children}
    </I18nextProvider>
  )
}
