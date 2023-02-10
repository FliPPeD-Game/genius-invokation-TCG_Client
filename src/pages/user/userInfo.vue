<script setup lang="ts">
// 用户信息
const userInfo = USER_INFO

const changeGender = (e: any) => {
  userInfo.value.gender = e.target.value
}
</script>

<template>
  <div p-10>
    <input
      v-model="userInfo.nickname"
      mt-5
      type="text"
      ipt
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
      ipt
      placeholder="邮箱"
    >
    <div h-10 mt-2>
      <p color-red text-xs ml-2>
        邮箱不能为空
      </p>
    </div>
    <div flex>
      <div>
        <input
          id="man"
          radio-ipt
          name="gender"
          type="radio"
          value="1"
          :checked="Number(userInfo.gender) === 1"
          @change="changeGender"
        >
        <label radio-lab for="man">男</label>
      </div>
      <div ml-5 cursor-pointer>
        <input
          id="woman"
          radio-ipt
          name="gender"
          type="radio"
          value="2"
          :checked="Number(userInfo.gender) === 2"
          @change="changeGender"
        >
        <label radio-lab for="woman">女</label>
      </div>
    </div>
    <div h-10 mt-2>
      <p color-red text-xs ml-2>
        性别不能为空
      </p>
    </div>
    <input
      v-model="userInfo.password"
      type="text"
      ipt
      placeholder="密码"
    >
    <div h-10 mt-2>
      <p color-red text-xs ml-2>
        密码不能为空
      </p>
    </div>
    <!-- <div flex mt-10 justify-between items-center>
      <button
        btn
      >
        {{ '< 返回大厅' }}
      </button>
      <button
        btn
      >
        保存个人信息
      </button>
    </div> -->
  </div>
</template>
