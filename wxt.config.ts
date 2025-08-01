import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  webExt: {
    // startUrls: ['https://x.com'],
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
    openConsole: true,
    openDevtools: true,
  },
  manifest: {
    name: 'Browser Extension Starter',
    description: 'Based on WXT browser project quick starter',
  },
})
