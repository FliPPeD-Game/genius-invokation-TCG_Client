import request from '@/request'

const getIsRegisteredByEmail = (email: string) => {
  return request<string, API.Response<boolean>>({
    url: `/user/mail/isUserRegistered/${email}`,
    method: 'GET',
  })
}

const sendEmail = (email: string) => {
  return request<string, API.Response<boolean>>({
    url: `/message/mail/sendCode/${email}`,
    method: 'POST',
  })
}

const registerByEmail = (email: string, password: string, rePassword: string, mailCode: string) => {
  return request<string, API.Response<LoginType>>({
    url: '/user/mail/registerUser',
    method: 'POST',
    data: { email, password, rePassword, mailCode },
  })
}

const loginByEmail = (email: string, password: string) => {
  return request<unknown, API.Response<LoginType>>({
    url: '/mail/login',
    method: 'POST',
    data: { mailAccount: email, password },
  })
}

const updateUserInfo = (userInfo: UserInterface) => {
  return request<UserInterface, API.Response<UserInterface>>({
    url: '/user/updateUserInfo',
    method: 'POST',
    data: userInfo,
  })
}

const getUserCards = () => {
  return request<unknown, API.Response<CardInterface>>({
    url: '/card/info/getUserCardInfoConfig',
    method: 'GET',
  })
}

export {
  getIsRegisteredByEmail,
  registerByEmail,
  sendEmail,
  loginByEmail,
  updateUserInfo,
  getUserCards,
}
