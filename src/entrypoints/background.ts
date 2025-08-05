import { onMessage } from '@/lib/messaging'
import { store } from '@/lib/storage'

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id })

  browser.runtime.onInstalled.addListener(() => {
    browser.tabs.create({ url: 'https://www.google.com' })
    console.log('onInstalled')
  })

  onMessage('createNewTab', async (msg) => {
    console.log('createNewTab', msg)
    await browser.tabs.create({ url: msg.data })
    return Promise.resolve(true)
  })

  onMessage('getHistory', async (msg) => {
    console.log('getHistory', msg)
    const { text = '', maxResults } = msg.data || {}
    const res = await browser.history.search({ text, maxResults })
    return Promise.resolve(res)
  })

  onMessage('getCount', async (msg) => {
    console.log('getCount', msg)
    const res = await store.count.getValue()
    return Promise.resolve(res)
  })

  onMessage('getBookmarkStatus', async (msg) => {
    console.log('getBookmarkStatus', msg)
    if (!msg.data)
      return Promise.resolve({ fail: 'Missing parameters' })

    const allPermissions = await browser.permissions.getAll()
    if (!allPermissions.permissions?.includes('bookmarks')) {
      return Promise.resolve({ fail: 'Not permissions' })
    }

    const bookmarks = await browser.bookmarks.search({
      url: msg.data,
    })
    return Promise.resolve({ status: bookmarks.length > 0 })
  })
})
