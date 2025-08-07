import type { I18nLocale } from '@/i18n'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TypographyH1, TypographyH3 } from '@/components/ui/typography'
import { defaultI18nLocale, i18nLanguages } from '@/i18n'
import { store } from '@/lib/storage'
import wxtLogo from '/wxt.svg'

function App() {
  const { t } = useTranslation()
  const [i18nLocale, setI18nLocale] = useState<I18nLocale>(defaultI18nLocale)

  const handleChangeLocale = async (locale: I18nLocale) => {
    setI18nLocale(locale)
    await store.i18nLocale.setValue(locale)
    toast.success(t('App.setting-saved-successfully'))
  }

  useEffect(() => {
    store.i18nLocale.getValue().then(setI18nLocale)
  }, [])

  return (
    <>
      <div className="w-dvw h-dvh flex justify-center items-center flex-col gap-8 py-4">

        <div className="w-[1000px] min-h-full border rounded-md">

          <div className="flex items-center gap-4 border-b py-4 px-6">
            <img src={wxtLogo} className="h-[32px]" alt="" />
            <TypographyH1>
              {t('App.setting')}
            </TypographyH1>
          </div>

          <div className="py-4 px-6">
            <div className="flex gap-8 items-center">
              <div className="text-base font-normal w-[120px]">{t('App.language')}</div>
              <Select onValueChange={l => handleChangeLocale(l as any)} value={i18nLocale}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder={t('App.language')} />
                </SelectTrigger>
                <SelectContent>
                  {
                    i18nLanguages.map(locale => (
                      <SelectItem key={locale.code} value={locale.code}>
                        {locale.name}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
