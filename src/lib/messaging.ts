import type { HistoryItem } from '@/lib/types'
import { defineExtensionMessaging } from '@webext-core/messaging'

interface ProtocolMap {
  getHistory: (data?: { text?: string, maxResults?: number }) => HistoryItem[]
  createNewTab: (url?: string) => boolean
  getCount: () => number
  getBookmarkStatus: (url: string) => { status?: boolean, fail?: string }
}

export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>()
