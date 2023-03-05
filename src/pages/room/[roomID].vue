<script setup lang="ts">
const props = defineProps<{ roomID: string }>()
// const router = useRouter()

const copyRoomID = () => {
  navigator.clipboard.writeText(props.roomID)
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
      w-full h-20vh flex-center
    >
      <own-player scale-55 />
      <opponent-player scale-55 />
    </div>
    <div
      w-full h-40vh
      flex-center
    >
      <own-role-card />
      <h1
        text="white 30 shadow-sm"
        px-16
        italic font-600 subpixel-antialiased
      >
        VS
      </h1>
      <own-role-card />
    </div>
    <div
      w-full h-20vh
      flex-center
      cursor-pointer
      @click="copyRoomID"
    >
      <span
        text="white 8"
        font-600 flex
      >
        房间号:<span>
          {{ props.roomID }}
        </span>
        <div i-carbon-copy text="3" />
      </span>
    </div>
  </div>
</template>
