<script setup lang="ts">
import { ref } from 'vue'

// 用户表单
const userForm = ref({ ...USER_INFO.value, password: '', rePassword: '' })

// 校验消息
const verifyMessage = reactive({
  nickName: {
    label: '',
    visible: false,
  },
  email: {
    label: '',
    visible: false,
  },
  gender: {
    label: '',
    visible: false,
  },
  password: {
    label: '',
    visible: false,
  },
  rePassword: {
    label: '',
    visible: false,
  },
})

const changeGender = (e: any) => {
  userForm.value.gender = e.target.value
}
const saveUserInfo = () => {
  if (!userForm.value.nickname) {
    verifyMessage.nickName.label = '用户名不能为空'
    verifyMessage.nickName.visible = true
    return
  }
  if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userForm.value.email))) {
    verifyMessage.email.label = '邮箱格式错误'
    verifyMessage.email.visible = true
    return
  }
  if (!userForm.value.gender) {
    verifyMessage.gender.label = '请选择性别'
    verifyMessage.gender.visible = true
    return
  }
  if (userForm.value.password.length < 6 || userForm.value.password.length > 16) {
    verifyMessage.password.label = '密码长度应为6-16位'
    verifyMessage.password.visible = true
    return
  }
  if (userForm.value.password !== userForm.value.rePassword) {
    verifyMessage.rePassword.label = '两次密码不一致,请重新输入'
    verifyMessage.rePassword.visible = true
  }
  // 调用接口
}
</script>

<template>
  <div p-10>
    <input
      v-model="userForm.nickname"
      type="text"
      ipt
      placeholder="用户名"
    >
    <div :class="!verifyMessage.nickName.visible && 'invisible'" h-10 mt-2>
      <p color-red text-xs ml-2>
        {{ verifyMessage.nickName.label }}
      </p>
    </div>
    <input
      v-model="userForm.email"
      type="text"
      ipt
      placeholder="邮箱"
    >
    <div :class="!verifyMessage.email.visible && 'invisible'" h-10 mt-2>
      <p color-red text-xs ml-2>
        {{ verifyMessage.email.label }}
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
          :checked="Number(userForm.gender) === 1"
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
          :checked="Number(userForm.gender) === 2"
          @change="changeGender"
        >
        <label radio-lab for="woman">女</label>
      </div>
    </div>
    <div :class="!verifyMessage.gender.visible && 'invisible'" h-10 mt-2>
      <p color-red text-xs ml-2>
        {{ verifyMessage.gender.label }}
      </p>
    </div>
    <input
      v-model="userForm.password"
      type="text"
      ipt
      placeholder="密码"
    >
    <div :class="!verifyMessage.password.visible && 'invisible'" h-10 mt-2>
      <p color-red text-xs ml-2>
        {{ verifyMessage.password.label }}
      </p>
    </div>
    <input
      v-model="userForm.rePassword"
      type="text"
      ipt
      placeholder="再次确认密码"
    >
    <div :class="!verifyMessage.rePassword.visible && 'invisible'" h-10 mt-2>
      <p color-red text-xs ml-2>
        {{ verifyMessage.rePassword.label }}
      </p>
    </div>
    <div
      absolute
      bottom-0
      right-5
      mt-10
    >
      <button
        btn
        @click="saveUserInfo"
      >
        保存个人信息
      </button>
    </div>
  </div>
</template>
