<script setup lang="ts">
import { ElTooltip } from 'element-plus'

// 用户信息
const userInfo = USER_INFO

// 菜单信息
const menuList = [
  {
    icon: 'i-carbon:user',
    name: '个人信息',
    path: '/user',
  },
  {
    icon: 'i-carbon:settings',
    name: '设置',
    path: '/user/setting',
  },
]

// 路由
const route = useRoute()
</script>

<template>
  <div overflow-hidden>
    <BgWrap />
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
        >
          {{ '< 返回大厅' }}
        </button>
        <ElTooltip
          visible
          placement="left"
          content="欢迎来到个人中心~"
          effect="dark"
        >
          <tcg-avatar
            :src="userInfo.avatar"
            w-15 h-15
          />
        </ElTooltip>
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
            pt-5 pb-5 pl-10 pr-10
            mb-1
            w-full
            rounded-1
            inline-flex
            cursor-pointer
            c-dark
            hover:bg="#cfd1d2"
            hover:border-r="5px solid #736868"
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
        >
          <!-- <router-view /> -->
          <div>
            <input
              v-model="userInfo.nickname"
              mt-5
              type="text"
              input
              placeholder="用户名"
            >
            <div h-10 mt-2>
              <p color-red text-xs ml-2>
                用户名不能为空
              </p>
            </div>
            <input
              v-model="userInfo.email"
              type="text"
              input
              placeholder="邮箱"
            >
            <div h-10 mt-2>
              <p color-red text-xs ml-2>
                邮箱不能为空
              </p>
            </div>
            <input
              v-model="userInfo.gender"
              type="text"
              input
              placeholder="性别"
            >
            <div h-10 mt-2>
              <p color-red text-xs ml-2>
                性别不能为空
              </p>
            </div>
            <input
              v-model="userInfo.password"
              type="text"
              input
              placeholder="密码"
            >
            <div h-10 mt-2>
              <p color-red text-xs ml-2>
                密码不能为空
              </p>
            </div>
            <div flex mt-10 justify-between items-center>
              <button
                btn
              >
                xxxx
              </button>
              <button
                btn
              >
                保存个人信息
              </button>
            </div>
          </div>
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
