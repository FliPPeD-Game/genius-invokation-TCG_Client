declare namespace API {
  interface Response<T> {
    code: number
    message: string
    data: T
  }
}

declare interface UserInterface {
  avatarInfo: {
    country: AreaChName
    url: string
  }
  email: string
  gender: 0 | 1 | 2
  lockFlag: boolean
  nickname: string
  password: string
  rePassword: string
}

declare interface LoginType {
  Authorization: string
  userInfo: UserInterface
}

declare interface AvatarType {
  name: string
  src: string
}

declare interface AvatarListType {
  country: AreaChName
  imageInfo: AvatarType[]
}
