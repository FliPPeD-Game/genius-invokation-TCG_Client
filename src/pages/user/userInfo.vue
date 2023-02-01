<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage, ElTooltip } from 'element-plus'
import type { UploadProps } from 'element-plus'

// 用户信息
const userInfo = reactive({
  ...USER_INFO.value,
  password: '',
})

// 头像上传至服务端成功
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile,
) => {
  userInfo.avatar = URL.createObjectURL(uploadFile.raw!)
}
// 上传头像要求限制
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('头像必须为 JPG 格式!')
    return false
  }
  else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('头像大小不能够超过 2MB!')
    return false
  }
  return true
}
</script>

<template>
  <BgWrap />
  <div
    class="userInfo-container"
  >
    <div class="userInfo-card">
      <el-upload
        action=""
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        flex justify-center items-center
      >
        <ElTooltip
          effect="dark"
          content="点击更换头像"
          placement="right"
        >
          <tcg-avatar
            :src="userInfo.avatar"
            w-30 h-30
          />
        </ElTooltip>
      </el-upload>
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
          {{ '< 返回大厅' }}
        </button>
        <button
          btn
        >
          保存个人信息
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.userInfo-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  // background: url('/logo/login_poster.png') center;
  // background-size: cover;
  .userInfo-card {
    width: 60%;
    max-width: 900px;
    background-color: rgba(255,255,255,0.9);
    padding: 20px 30px;
    border-radius: 30px;
    box-shadow: 0 2px 10px 0 #666666;
  }
}
</style>
