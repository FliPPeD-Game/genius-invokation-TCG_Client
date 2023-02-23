export const useEnterRoom = () => {
  const { data, send } = ws()

  const sendCommand = JSON.stringify({
    command: 'create',
  })

  send(sendCommand)

  return data
}
