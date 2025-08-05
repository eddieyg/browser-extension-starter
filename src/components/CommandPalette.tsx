import {
  AppWindowIcon,
  BookIcon,
  HistoryIcon,
  PlusIcon,
} from 'lucide-react'
import * as React from 'react'
import { toast } from 'sonner'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { sendMessage } from '@/lib/messaging'

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleOpenGithubTab = async () => {
    const res = await sendMessage('createNewTab', 'https://github.com')
    console.log('createNewTab res', res)
    setOpen(false)
    if (res) {
      toast.success(
        'Github has been opened.',
      )
    }
    else {
      toast.error(
        'Failed to open GitHub.',
      )
    }
  }

  const handleShowLastHistory = async () => {
    const res = await sendMessage('getHistory', { maxResults: 1 })
    console.log('getHistory res', res)
    setOpen(false)
    if (res?.length) {
      toast.info(
        <div>
          Last History:
          <br />
          <a href={res[0].url} target="_blank" rel="noopener noreferrer" className="underline">
            {res[0].title}
          </a>
        </div>,
        { closeButton: true },
      )
    }
    else {
      toast.error(
        'Failed to get history.',
      )
    }
  }

  const handleShowCount = async () => {
    const res = await sendMessage('getCount')
    console.log('getCount res', res)
    setOpen(false)
    toast.info(`Curr count is: ${res}`)
  }

  const handleShowBookmarkStatus = async () => {
    const res = await sendMessage('getBookmarkStatus', location.href)
    console.log('getBookmarkStatus res', res)
    setOpen(false)
    toast.info(`Curr page bookmark status: ${res.status}${res.fail ? ` (Fail${res.fail})` : ''}`)
  }

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem onSelect={handleOpenGithubTab}>
              <AppWindowIcon />
              <span>Open Github</span>
            </CommandItem>
            <CommandItem onSelect={handleShowLastHistory}>
              <HistoryIcon />
              <span>Show Last History</span>
            </CommandItem>
            <CommandItem onSelect={handleShowCount}>
              <PlusIcon />
              <span>Show Curr Count</span>
            </CommandItem>
            <CommandItem onSelect={handleShowBookmarkStatus}>
              <BookIcon />
              <span>Show Bookmark Status</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
