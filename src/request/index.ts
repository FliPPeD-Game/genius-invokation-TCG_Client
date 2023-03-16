import type { AxiosHeaders } from 'axios'
import axios from 'axios'
import { getLoginToken } from './token'

const request = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

request.interceptors.request.use((config) => {
  if (getLoginToken())
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${getLoginToken()}`)

  return config
}, (error) => {
  ElMessage.error('网络错误，请稍后再试')
  return Promise.reject(error)
})

request.interceptors.response.use((response) => {
  if (response.status === 403)
    window.location.href = 'user/login'

  return response.data
}, (error) => {
  ElMessage.error('网络错误，请稍后再试')
  return Promise.reject(error)
})

export default request
