import { Peer } from 'peerjs'

export const useCreateRoom = () => {
  let peer = {} as Peer
  const { data, send } = ws()
  const sendCommand = JSON.stringify({
    command: 'createRoom',
  })

  send(sendCommand)

  watch(
    () => data.value,
    (val) => {
      if (!val)
        return
      const res = JSON.parse(val)

      if (res.code === 200 && res.command === 'createRoom') {
        peer = new Peer(res.roomId, {
          host: 'localhost',
          port: 9000,
          path: '/myapp',
        })
      }
    },
  )

  return peer
}

export const useEnterRoom = (roomId: string) => {
  const { data, send } = ws()
  // const peer = new Peer()
  // let peerId = ''

  // peer.on('open', (id) => {
  //   console.log(`My peer ID is: ${id}`)
  //   peerId = id
  // })

  const sendCommand = JSON.stringify({
    command: 'enterRoom',
    roomId,
  })

  send(sendCommand)

  return data
}
