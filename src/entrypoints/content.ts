export default defineContentScript({
  matches: ['*://*.google.com/*', '*://*.rootdata.com/*'],
  main() {
    console.log('Hello content.')
  },
})
