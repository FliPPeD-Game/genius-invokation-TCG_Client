import type { RemovableRef } from '@vueuse/core'

const USER_INFO: RemovableRef<UserInterface> = useStorage('userInfo', {
  avatarInfo: {
    country: '' as AreaChName,
    url: '',
  },
  email: '',
  gender: 0,
  lockFlag: false,
  nickname: '',
})

const USER_CARDS: RemovableRef<any> = useStorage('userCards', {})

export {
  USER_INFO,
  USER_CARDS,
}
