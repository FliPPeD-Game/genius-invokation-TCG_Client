<script setup lang="ts">
const props = defineProps<{ roomId: string }>()
const router = useRouter()
const { share } = useShare({
  title: '快来和我一起玩《七圣召唤》吧！',
  text: props.roomId,
  url: window.location.href,
})

const copyroomId = () => {
  navigator.clipboard.writeText(props.roomId)
  ElMessage({
    message: '房间号已复制',
    type: 'success',
  })
}
</script>

<template>
  <div
    class="bg-bar"
    bg="[url(/wait_bg/diona_bg.png)] center cover"
    h-screen
    flex="~ col" justify-center
  >
    <div
      h-20vh w-full flex-center
    >
      <own-player scale-55 />
      <opponent-player scale-55 />
    </div>
    <div

      h-40vh w-full flex-center
    >
      <own-role-card />
      <h1
        text="white 30 shadow-sm"

        px-16 font-600 italic subpixel-antialiased
      >
        VS
      </h1>
      <own-role-card />
    </div>
    <div

      flex="center col"
      h-20vh w-full cursor-pointer
    >
      <div @click="copyroomId">
        <div
          class="group"
          text="white 8"
          flex font-600
        >
          房间号:
          <span
            group-active:text-shadow-xl
            group-hover-underline="~ offset-5 opacity-10"
          >
            {{ props.roomId }}
          </span>
          <div i-carbon-copy text="3" />
        </div>
      </div>
      <!-- <div bg-gray h="1px" w-full m-2 /> -->
      <div mt-10>
        <button mr-2 under-btn @click="share()">
          分享房间
        </button>
        <button under-btn @click="router.push('/')">
          退出房间
        </button>
      </div>
    </div>
  </div>
</template>
