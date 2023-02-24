<script setup lang="ts">
// import { useCreateRoom, useEnterRoom } from '@/hooks/useRoom'

const roomID = ref('')
// const router = useRouter()

const handleRoomID = () => {
  if (roomID.value.length !== 6)
    return
  const data = useEnterRoom(roomID.value)
}

const enterRoom = async () => {
  const data = useCreateRoom()
  // 打印每一次的数据
  watchEffect(() => {
    console.log(JSON.parse(data.value))
  })
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
        <div cursor-pointer @click="enterRoom">
          创建房间
        </div>
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
