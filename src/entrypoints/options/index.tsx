import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import { I18nProvider } from '@/components/i18n.tsx'
import App from '@/components/options/Index.tsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
      <Toaster position="top-center" />
    </I18nProvider>
  </React.StrictMode>,
)
