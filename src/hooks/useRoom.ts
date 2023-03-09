import { Peer } from 'peerjs'

export const useCreateRoom = () => {
  const { data, send } = ws()
  const peer = new Peer()
  let sendCommand

  peer.on('open', (id) => {
    console.log(`My peer ID is: ${id}`)
    sendCommand = JSON.stringify({
      command: 'createRoom',
      peerId: id,
    })
    send(sendCommand)
  })

  return data
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
