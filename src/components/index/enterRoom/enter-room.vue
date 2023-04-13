<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { Peer } from 'peerjs'

const roomID = ref('')
const router = useRouter()

const handleRoomID = () => {
  if (roomID.value.length !== 6)
    return

  if (roomID.value.length > 6)
    roomID.value = roomID.value.slice(0, 6)

  const data = useEnterRoom(roomID.value)
  watchEffect(() => {
    if (!data.value)
      return
    const { peerID } = JSON.parse(data.value)
    const peer = new Peer()
    const peerConnect = peer.connect(peerID)
    peerConnect.on('open', () => {
      peerConnect.send('hello')
    })
  })
}

const enterRoom = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在创建房间...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  const data = useCreateRoom()
  // 打印每一次的数据
  watch(
    () => data.value,
    (val) => {
      if (!val)
        return
      const res = JSON.parse(val)

      if (res.code === 200 && res.command === 'createRoom') {
        loading.close()
        router.push(`roomId/${encodeURIComponent(res.roomId)}`)
      }
    },
  )
}
</script>

<template>
  <div
    text="white 2xl"

    overflow-hidden rounded-xl bg-black
  >
    <div
      class="group"
      relative
      overflow-hidden
    >
      <img
        src="/header/mondstadt.jpg"

        group-hover="opacity-100 scale-140"

        h-20vh w-65vw object-cover object-center opacity-70 transition duration-300 ease-in-out
      >
      <div top="50%" absolute z-200000 w-65vw text-center>
        <button cursor-pointer under-btn @click="enterRoom">
          创建房间
        </button>
      </div>
    </div>
    <div
      class="group"
      relative
      overflow-hidden
    >
      <img
        src="/header/liyue.jpg"

        group-hover="opacity-100 scale-140"

        h-20vh w-65vw overflow-hidden object-cover object-center opacity-70 transition duration-300 ease-in-out
      >
      <div

        top="30%"

        flex="~ col"

        absolute z-30000 w-65vw items-center justify-center
      >
        <input
          v-model="roomID"
          ipt
          type="text"
          w="30%"
          placeholder="加入房间，请输入房间号"
          @input="handleRoomID"
        >
      </div>
    </div>
  </div>
</template>
