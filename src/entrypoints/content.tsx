import React from 'react'
import ReactDOM from 'react-dom/client'
import { CommandPalette } from '@/components/content/CommandPalette'
import { Toaster } from '@/components/ui/sonner'
import '@/index.css'

export const PortalContext = React.createContext<HTMLElement | null>(null)

function ContentRoot() {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  )

  return (
    <React.StrictMode>
      <PortalContext.Provider value={portalContainer}>
        <div ref={setPortalContainer} id="command-portal-container">
          <CommandPalette />
        </div>
        <Toaster />
      </PortalContext.Provider>
    </React.StrictMode>
  )
}

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'browser-extension-starter-main',
      position: 'inline',
      anchor: 'body',
      isolateEvents: ['keydown', 'keyup', 'keypress', 'wheel', 'input'],
      onMount: (container, shadow) => {
        // compat toaster css
        document.head.querySelectorAll('style').forEach((styleEl) => {
          if (styleEl.textContent?.includes('[data-sonner-toaster]')) {
            shadow.querySelector('html>head')!.append(styleEl)
          }
        })

        const app = document.createElement('div')
        app.id = 'main-root'
        container.append(app)

        const root = ReactDOM.createRoot(app)
        root.render(<ContentRoot />)
        return root
      },
      onRemove: (root) => {
        root?.unmount()
      },
    })

    ui.mount()
  },
})
