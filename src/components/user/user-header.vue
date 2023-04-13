<script setup lang="ts">
import { Starport } from 'vue-starport'
import TCGLogo from '/logo/tcg_logo.png'
// import ColorThief from 'colorthief'
import { ElImage } from 'element-plus'

const reload = inject('reload') as () => void
const router = useRouter()

const areaName = translateAreaName(USER_INFO.value?.avatarInfo.country)
const headerImg = `/header/${areaName}.jpg`

const avatarList = ref([] as AvatarListType[])
const avatarLoading = ref(false)

// const colorThief = new ColorThief()
// // 获取图片主色调
// const getMainColor = async (src: string) => {
//   const img = new Image()
//   img.src = src
//   const color = await colorThief.getColor(img)
//   return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
// }

// const defaultColorThief = ref('')
// // 页面加载时获取主色调
// onMounted(async () => {
//   defaultColorThief.value = await getMainColor(headerImg)
// })

const handleAvatarShow = async () => {
  if (avatarList.value.length)
    return
  avatarLoading.value = true
  avatarList.value = (await getAllAvatars()).data
  avatarLoading.value = false
}

const handleAvatarClick = async (url: string, country: AreaChName) => {
  USER_INFO.value.avatarInfo = {
    url,
    country,
  }
  const res = (await updateUserInfo({
    ...USER_INFO.value,
  })).code
  if (res === 200)
    reload()
}
</script>

<template>
  <header
    relative
    h="50"
    :style="{
      background: `url(${headerImg}) no-repeat center/cover`,
    }"
  >
    <div

      fixed z-999 h-15 w-full flex items-center justify-between px-8 shadow-sm backdrop-blur-sm
      text="white 3xl"
    >
      <img :src="TCGLogo" alt="TCGLogo" h-18 cursor-pointer @click="router.push('/')">
      <div i-carbon-home cursor-pointer @click="router.push('/')" />
    </div>
    <ElPopover
      popper-class="avatar-popover"
      placement="right-start"
      :width="410"
      trigger="click"
      p-0
      @show="handleAvatarShow"
    >
      <template #reference>
        <div

          absolute left-40 top-37 z-99 cursor-pointer
        >
          <Starport
            port="avatar-componet"
            h-26 w-26
          >
            <tcg-avatar
              :src="USER_INFO?.avatarInfo.url"
              backdrop-blur-64
            />
          </Starport>
          <div

            c="white/90"
            i-material-symbols:android-camera absolute left-20 top-19 z-100
          />
        </div>
      </template>
      <div
        v-loading="avatarLoading"
        h-60 w-400px
        overflow-hidden
      >
        <el-tabs
          tab-position="left"
          h-60
          class="animate__animated animate__flipInX"
        >
          <el-tab-pane
            v-for="avatars in avatarList"
            :key="avatars.country"
            :label="avatars.country"
            class="animate__animated animate__flipInX avatar-tabs"

            grid="~ cols-4"

            lazy h-60 gap-5 overflow-y-auto p-2
          >
            <ElImage
              v-for="avatar in avatars.imageInfo"
              :key="avatar.name"
              :src="avatar.src"
              loading="lazy"

              border="double 4 gray-400"
              cursor-pointer rounded-full
              hover="shadow-xl transform scale-120"
              @click="handleAvatarClick(avatar.src, avatars.country)"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
    </ElPopover>
  </header>
</template>

<style>
.avatar-tabs {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;     /* Firefox */
}
.avatar-tabs::-webkit-scrollbar {
  display: none;            /* Safari and Chrome */
}
.avatar-popover {
  border-radius: 0.75rem !important;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border: 0 !important;
  backdrop-filter: blur(100px);
}
</style>
