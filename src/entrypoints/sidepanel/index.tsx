import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/app/Index'
import { I18nProvider } from '@/components/i18n'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <App target="sidepanel" />
    </I18nProvider>
  </React.StrictMode>,
)
