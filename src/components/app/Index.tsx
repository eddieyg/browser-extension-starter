import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { store } from '@/lib/storage'
import { cn } from '@/lib/utils'
import wxtLogo from '/wxt.svg'

type Target = 'popup' | 'sidepanel'

function App({ target }: { target: Target }) {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    store.count.getValue().then(setCount)
  }, [])

  const handleUpdateCount = () => {
    const next = count + 1
    store.count.setValue(next)
    setCount(next)
  }

  const handlePermissions = async () => {
    const allPermissions = await browser.permissions.getAll()
    if (!allPermissions.permissions?.includes('bookmarks')) {
      await browser.permissions.request({ permissions: ['bookmarks'] })
    }
  }

  const targetClassNameMap = {
    popup: 'w-[300px] h-[300px]',
    sidepanel: 'w-dvw h-dvh',
  }

  return (
    <>
      <div className={cn(
        'flex justify-center items-center flex-col gap-6',
        targetClassNameMap[target],
      )}
      >
        <img src={wxtLogo} alt="" />

        <Button className="w-[180px]" onClick={handleUpdateCount}>
          {t('App.count-is')}
          :
          {count}
        </Button>

        <Button className="w-[180px]" onClick={handlePermissions}>
          {t('App.request_permissions')}
        </Button>
      </div>
    </>
  )
}

export default App
