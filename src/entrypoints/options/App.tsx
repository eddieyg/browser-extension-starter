import { TypographyH1 } from '@/components/ui/typography'
import wxtLogo from '/wxt.svg'

function App() {
  return (
    <>
      <div className="w-dvw h-dvh flex justify-center items-center flex-col gap-6">
        <img src={wxtLogo} alt="" />

        <TypographyH1>
          Option
        </TypographyH1>
      </div>
    </>
  )
}

export default App
