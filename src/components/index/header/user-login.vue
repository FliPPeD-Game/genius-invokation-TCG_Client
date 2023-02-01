<script setup lang="ts">
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { saveLoginToken } from '@/request/token'

const emit = defineEmits(['isLogin'])

const password = ref('')
const emailCode = ref('')
const allowSendEmail = ref(false)

// 邮箱校验
const emailValue = ref('')
const isErrorEmail = ref(false)
const isRegisted = ref(true)

// 邮箱校验Flag函数
function rightEmailDo() {
  isErrorEmail.value = false
  allowSendEmail.value = true
}
function wrongEmailDo() {
  isErrorEmail.value = true
  allowSendEmail.value = false
}

const emailChange = async () => {
  if (!emailValue.value)
    return

  if (isEmail(emailValue.value)) {
    rightEmailDo()
    isRegisted.value = (await getIsRegisteredByEmail(emailValue.value)).data
  }
  else {
    wrongEmailDo()
  }
}
const emailInput = () => {
  if (emailValue.value === '')
    isErrorEmail.value = true
}
const loginLabel = computed(() => {
  return isRegisted.value ? '登录' : '注册'
})

// 密码一致性判断
const rePassword = ref('')
const isErrorPassWordLabel = ref('')

watch(
  () => rePassword.value === password.value,
  (flag) => {
    if (!isRegisted.value) {
      if (flag)
        isErrorPassWordLabel.value = ''
      else
        isErrorPassWordLabel.value = '两次密码不一致,请重新输入'
    }
  },
)

// 发送邮件
const sendEmailLabel = ref('发送验证码')
const sendEmailToGetCode = async () => {
  const res = await sendEmail(emailValue.value)
  if (res.data) {
    // 发送成功
    let num = 10
    allowSendEmail.value = false
    const timer = setInterval(() => {
      sendEmailLabel.value = `${num}秒后重试`
      num--
      if (num === 0) {
        clearInterval(timer)
        sendEmailLabel.value = '发送验证码'
        allowSendEmail.value = true
      }
    }, 1000)
  }
}

// 登录按钮事件
const submitUserInfo = async () => {
  if (password.value.length < 6 || password.value.length > 16) {
    isErrorPassWordLabel.value = '密码长度应为6-16位'
    return
  }
  let res
  if (isRegisted.value) {
    // 登录
    res = await loginByEmail(emailValue.value, password.value)
  }
  else {
    // 注册
    res = await registerByEmail(emailValue.value, password.value, rePassword.value, emailCode.value)
  }
  if (res.code === 200) {
    // 登录成功
    saveLoginToken(res.data.Authorization)
    USER_INFO.value = res.data.userInfo
    ElMessage({
      showClose: true,
      message: res.message,
      type: 'success',
    })
  }
  else {
    // 登录失败
    ElMessage({
      showClose: true,
      message: res.message,
      type: 'error',
    })
  }
  emit('isLogin')
}

// 登录按钮disabled判断
const isBtnDisabled = computed(() => {
  if (isRegisted.value)
    return !emailValue.value || !password.value || isErrorEmail.value

  else
    return !emailValue.value || !password.value || password.value !== rePassword.value || !emailCode.value || isErrorEmail.value
})
</script>

<template>
  <div class="login-card">
    <div class="column">
      <h1 mb-5 text-4xl font-900>
        {{ loginLabel }}
      </h1>
      <p>快{{ loginLabel }}账号，来一场七圣召唤吧！</p>
      <p color-gray text-sm mt-1>
        {{ isRegisted ? '没有账号?输入邮箱将自动注册' : '该邮箱未绑定账号，现为你注册' }}
      </p>
      <div mt-12>
        <div>
          <input
            v-model="emailValue"
            type="text"
            input
            placeholder="邮箱"
            @change="emailChange"
            @input="emailInput"
          >
        </div>
        <div v-if="isErrorEmail">
          <p color-red text-xs ml-2>
            邮箱格式错误
          </p>
        </div>
        <div
          :class="isErrorEmail ? '' : 'mt-4'"
        >
          <input
            v-model="password"
            type="password"
            input
            placeholder="密码"
          >
        </div>
        <div>
          <p color-red text-xs ml-2>
            {{ isErrorPassWordLabel }}
          </p>
        </div>
        <div
          :class="isErrorPassWordLabel ? '' : 'mt-4'"
        >
          <input
            v-if="!isRegisted"
            v-model="rePassword"

            type="password"
            input
            placeholder="再次确认密码"
          >
        </div>
        <div
          v-if="!isRegisted"

          mt-4
          flex
        >
          <input
            v-model="emailCode"
            type="text"
            input
            mr-8
            placeholder="邮箱验证码"
          >
          <button
            btn
            :disabled="!allowSendEmail"
            rounded-lg
            @click="sendEmailToGetCode"
          >
            {{ sendEmailLabel }}
          </button>
        </div>
        <div flex mt-20 justify-between items-center>
          <button
            btn
            :disabled="isBtnDisabled"
            @click="submitUserInfo"
          >
            {{ loginLabel }}
          </button>
          <a v-if="isRegisted" href="#">忘记密码，点我重置！</a>
        </div>
      </div>
    </div>
    <div class="column" />
  </div>
</template>

<style lang="scss" scoped>
$theme-color: #88abaf;

.login-card {
    background-color: white;
    max-width: 70rem;
    width: calc(100vw - 20rem);
    // min-width: 800px;
    border-radius: 30px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .column {
        padding: 4rem;

        &:last-child {
            background: url('/logo/login_poster.png') center;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;

            &:after {
                content: "";
                position: absolute;
                background: linear-gradient(90deg, white, #ffffff22);
                inset: 0;
            }

            * {
                z-index: 1;
            }
        }
    }
}

//响应式布局
@media(max-width:992px) {
    .login-card {
      display: block;
      width: 500px;
      // text-align: center;
      background: url('/logo/login_poster.png') center;
      background-size: cover;
      background-color: #f6f6f7;

        .column {
            &:last-child {
                display: none;
            }
        }
    }
}
</style>
