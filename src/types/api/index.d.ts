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
}

declare interface CardInterface {
  index: number
  configs: [
    {
      roleCardInfos: RoleCardInfo[]
      title: string
      actionCardInfos: any[]
    },
  ]
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


interface RoleCardInfo {
  id: number
  name: string
  elementType: number
  roleSkillInfos: RoleSkillInfo[]
  weapon: string
  belongs: string[]
  hp: string
  resource: string
}

// roleSkillInfo Type
interface RoleSkillInfo {
  skillText: string
  skillCosts: SkillCost[]
  type: string[]
  resource: string
  name: string
  id: string
}

// skillCost Type
interface SkillCost {
  costType: string
  icon: string
  costNum: string
}
