import { Peer } from 'peerjs'

export const useCreateRoom = () => {
  console.log('useCreateRoom')
  const peer = new Peer()
  const { data, send } = ws()
  let sendCommand

  peer.on('open', (id) => {
    console.log(`My peer ID is: ${id}`)
    sendCommand = JSON.stringify({
      command: 'createRoom',
      peerId: id,
    })
    send(sendCommand)
  })

  peer.disconnect = () => {
    console.log('Connection lost. Please reconnect')
    peer.reconnect()
  }

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
