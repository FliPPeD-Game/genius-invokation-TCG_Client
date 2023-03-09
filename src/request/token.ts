const TOKENNAME = 'loginToken'

const saveLoginToken = (token: string) => {
  localStorage.setItem(TOKENNAME, token)
}

const getLoginToken = () => {
  const token = localStorage.getItem(TOKENNAME) ?? ''
  return token
}

const removeLoginToken = () => {
  localStorage.removeItem(TOKENNAME)
}

export {
  saveLoginToken,
  getLoginToken,
  removeLoginToken,
}
