const { status, data, send, open, close } = useWebSocket(
  'ws://websocketurl',
  {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        alert('Failed to connect WebSocket after 3 retries')
      },
    },
  })
