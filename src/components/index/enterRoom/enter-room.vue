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

  console.log('send')
  const data = useEnterRoom(roomID.value)
  watchEffect(() => {
    if (!data.value)
      return
    console.log(JSON.parse(data.value))
    const { peerID } = JSON.parse(data.value)
    console.log(peerID)
    const peer = new Peer()
    const peerConnect = peer.connect(peerID)
    peerConnect.on('open', () => {
      peerConnect.send('hello')
    })
  })
}

const enterRoom = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在创建房间...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  try {
    const data = useCreateRoom()
    console.log(data)
    // 打印每一次的数据
    watchEffect(() => {
      if (!data.value)
        return
      const res = JSON.parse(data.value)
      loading.close()
      console.log(res)
      if (res.code === 200 && res.command === 'createRoom')
        router.push(`room/${encodeURIComponent(res.data.roomID)}`)
    })
  }
  catch (error) {
    loading.close()
    ElMessage.error('创建房间失败')
  }
}
</script>

<template>
  <div
    text="white 2xl"
    bg-black
    overflow-hidden
    rounded-xl
  >
    <div
      class="group"
      relative
      overflow-hidden
    >
      <img
        src="/header/mondstadt.jpg"
        transition duration-300 ease-in-out
        opacity-70
        group-hover="opacity-100 scale-140"
        w-65vw h-20vh
        object-cover object-center
      >
      <div absolute z-200000 top="50%" text-center w-65vw>
        <button under-btn cursor-pointer @click="enterRoom">
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
        transition duration-300 ease-in-out
        overflow-hidden
        opacity-70
        group-hover="opacity-100 scale-140"
        w-65vw h-20vh
        object-cover object-center
      >
      <div
        absolute
        z-30000
        top="30%"
        w-65vw
        flex="~ col"
        justify-center
        items-center
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
