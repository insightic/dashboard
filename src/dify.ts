import { type EventSourceMessage, fetchEventSource } from '@microsoft/fetch-event-source'

class DifyAPI {
  private readonly BASE_URL = 'https://api.dify.ai/v1'

  private postEventSource(
    url: string,
    data: { [key: string]: any },
    onmessage: (msg: EventSourceMessage) => void,
    onclose: () => void
  ) {
    return fetchEventSource(`${this.BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_DIFY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      onmessage(msg) {
        onmessage?.(msg)
      },
      onclose() {
        onclose?.()
      }
    })
  }

  sendChatMessage(
    message: string,
    onmessage: (msg: EventSourceMessage) => void,
    onclose: () => void
  ) {
    const resp = this.postEventSource(
      '/chat-messages',
      {
        inputs: {},
        query: message,
        response_mode: 'streaming',
        conversation_id: '',
        user: 'abc-123'
      },
      onmessage,
      onclose
    )
  }
}

export default new DifyAPI()
