import { ElMessage } from 'element-plus'
import { getLoginToken } from './token'

export const getWs = () => {
  return useWebSocket(
    'ws://127.0.0.1:8888/websocket',
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
