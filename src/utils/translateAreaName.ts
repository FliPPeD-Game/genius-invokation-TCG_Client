const areaNameList = {
  mondstadt: {
    ch: '蒙德',
    en: 'mondstadt',
  },
  liyue: {
    ch: '璃月',
    en: 'liyue',
  },
  inazuma: {
    ch: '稻妻',
    en: 'inazuma',
  },
  sumeru: {
    ch: '须弥',
    en: 'sumeru',
  },
} as const

export type AreaEnName = typeof areaNameList[keyof typeof areaNameList]['en']
export type AreaChName = typeof areaNameList[keyof typeof areaNameList]['ch']
export type AreaName = AreaEnName | AreaChName

export const translateAreaName = (areaName: AreaName) => {
  if (areaNameList[areaName as AreaEnName])
    return areaNameList[areaName as AreaEnName].ch

  for (const key in areaNameList) {
    if (areaNameList[key as AreaEnName].ch === areaName)
      return areaNameList[key as AreaEnName].en
  }
}
