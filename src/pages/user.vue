<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// 初始化
onBeforeMount(() => {
  if (route.fullPath === '/user')
    router.replace('/user/userInfo')
})

// 菜单信息
const menuList = [
  {
    icon: 'i-carbon:user',
    name: '个人信息',
    path: '/user/userInfo',
  },
  {
    icon: 'i-carbon:settings',
    name: '设置',
    path: '/user/setting',
  },
]
</script>

<template>
  <div overflow-hidden>
    <!-- <BgWrap /> -->
    <div
      w-100vw h-100vh
      relative
    >
      <div
        flex justify-between items-center
        p-5 h-25
      >
        <button
          btn
          @click="router.push('/')"
        >
          {{ '< 返回大厅' }}
        </button>
        <!-- <ElTooltip
          visible
          placement="left"
          content="欢迎来到个人中心~"
          effect="dark"
        >
          <tcg-avatar
            :src="USER_INFO.avatar"
            w-15 h-15
          />
        </ElTooltip> -->
      </div>
      <div
        flex
        absolute
        top-25 bottom-5 left-5 right-5
        card
        bg="#fff/90"
      >
        <div
          w-50
        >
          <div
            v-for="item in menuList"
            :key="item.name"
            :class="item.path === route.fullPath && 'isActive'"
            py-5 px-10
            mb-1
            w-full
            rounded-1
            inline-flex
            cursor-pointer
            c-dark
            hover:bg="#cfd1d2"
            hover:border-r="5 solid #736868"
            @click="router.push(item.path)"
          >
            <div :class="item.icon" />
            <span
              ml-2
            >
              {{ item.name }}
            </span>
          </div>
        </div>
        <div
          overflow-y-scroll
          flex-1
          ml10
          relative
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.isActive {
  background: #cfd1d2;
  border-right: 5px solid #736868;
}
</style>
