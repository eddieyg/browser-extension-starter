import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import wxtLogo from '/wxt.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-[300px] h-[300px] flex justify-center items-center flex-col gap-6">
        <img src={wxtLogo} alt="" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="w-[180px]" onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </Button>
      </div>
    </>
  )
}

export default App
