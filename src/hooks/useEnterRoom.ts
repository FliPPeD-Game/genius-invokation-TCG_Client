import { Peer } from 'peerjs'

export const useEnterRoom = () => {
  const { data, send } = ws()
  const peer = new Peer()
  let peerId = ''

  peer.on('open', (id) => {
    console.log(`My peer ID is: ${id}`)
    peerId = id
  })

  const sendCommand = JSON.stringify({
    command: 'create',
    id: peerId,
  })

  send(sendCommand)

  return data
}
