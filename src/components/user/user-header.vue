<script setup lang="ts">
import { Starport } from 'vue-starport'
import TCGLogo from '/logo/tcg_logo.png'
// import ColorThief from 'colorthief'

const reload = inject('reload') as () => void
const router = useRouter()

const areaName = translateAreaName(USER_INFO.value?.avatarInfo.country)
const headerImg = `/header/${areaName}.jpg`

const avatarList = ref([] as AvatarListType[])

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
  avatarList.value = (await getAllAvatars()).data
}

const handleAvatarClick = async (url: string, country: AreaChName) => {
  USER_INFO.value.avatarInfo = {
    url,
    country,
  }
  const res = (await updateUserInfo({
    ...USER_INFO.value,
    password: '',
    rePassword: '',
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
      fixed w-full h-15
      flex justify-between items-center
      px-8 z-999
      backdrop-blur-sm
      shadow-sm
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
          cursor-pointer
          absolute
          left-40 top-37
          z-99
        >
          <Starport
            port="avatar-componet"
            w-26 h-26
          >
            <tcg-avatar
              :src="USER_INFO?.avatarInfo.url"
              backdrop-blur-64
            />
          </Starport>
          <div
            i-material-symbols:android-camera
            absolute
            z-100
            c="white/90"
            left-20 top-19
          />
        </div>
      </template>
      <div
        w-400px h-60
        overflow-hidden
      >
        <el-tabs
          tab-position="left"
          stretch
          h-60
        >
          <el-tab-pane
            v-for="avatars in avatarList"
            :key="avatars.country"
            :label="avatars.country"
            class="avatar-tabs"
            lazy
            p-2
            grid="~ cols-4" gap-5
            overflow-y-auto
            h-60
          >
            <ElImage
              v-for="avatar in avatars.imageInfo"
              :key="avatar.name"
              :src="avatar.src"
              loading="lazy"
              rounded-full
              border="double 4 gray-400"
              cursor-pointer
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
  border-radius: 8px;
  padding: 2px;
}
</style>
