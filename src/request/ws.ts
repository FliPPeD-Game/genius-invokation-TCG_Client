import { ElMessage } from 'element-plus'
import { getLoginToken } from './token'

const url = `${import.meta.env.VITE_BASE_URL.replace('http', 'ws')}/websocket`

export default () => {
  return useWebSocket(
    url,
    {
      autoReconnect: {
        retries: 3,
        delay: 1000,
        onFailed() {
          ElMessage.error('Failed to connect WebSocket after 3 retries')
        },
      },
      protocols: [getLoginToken()],
    })
}

// const ws = new WebSocket(url, [getLoginToken()])

// ws.onopen = function () {
//   ElMessage.success('WebSocket connected')
// }

// export default ws
