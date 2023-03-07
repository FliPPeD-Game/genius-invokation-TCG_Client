// roleCardInfo Type
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
