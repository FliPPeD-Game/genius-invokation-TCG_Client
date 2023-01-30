declare namespace API {
  interface Response<T> {
    code: number
    message: string
    data: T
  }
}

declare interface UserInterface {
  avatar: string
  email: string
  gender: 0 | 1 | 2
  lockFlag: boolean
  nickname: string
}

declare interface LoginType {
  Authorization: string
  userInfo: UserInterface
}
