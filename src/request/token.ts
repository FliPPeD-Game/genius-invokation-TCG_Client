const TOKENNAME = 'loginToken'

const saveLoginToken = (token: string) => {
  localStorage.setItem(TOKENNAME, token)
}

const getLoginToken = () => {
  return localStorage.getItem(TOKENNAME)
}

const removeLoginToken = () => {
  localStorage.removeItem(TOKENNAME)
}

export {
  saveLoginToken,
  getLoginToken,
  removeLoginToken,
}
