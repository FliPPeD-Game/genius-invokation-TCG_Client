import type { RemovableRef } from '@vueuse/core'

const USER_INFO: RemovableRef<UserInterface> = useStorage('userInfo', {
  avatar: '',
  email: '',
  gender: 0,
  lockFlag: false,
  nickname: '',
})

export {
  USER_INFO,
}
