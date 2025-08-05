import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  webExt: {
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
    openConsole: true,
    openDevtools: true,
  },
  manifest: {
    name: '__MSG_extName__',
    description: '__MSG_extDescription__',
    default_locale: 'en',
    permissions: ['history', 'storage'],
    optional_permissions: ['bookmarks'],
  },
})
