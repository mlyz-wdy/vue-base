import axios from 'axios'
import { notification } from 'ant-design-vue'
import app from './app.js'

// http request 拦截器
// 根据环境切换接口地址
axios.defaults.baseURL = process.env.HOST
axios.defaults.timeout = 5000

axios.interceptors.request.use(
  config => {
    if (!config.data) {
      config.data = {}
    }
    config.headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token')
    }
    return config
  },
  error => Promise.reject(error)
)

let requestLock = false
// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    requestLock = false
    return res.data
  },
  // eslint-disable-next-line complexity
  error => {
    if (!error.response) {
      return
    }
    let resStatus = error.response.status
    let failReason = error.response.data.failureReason
    if (resStatus === 502) {
      if (!requestLock) {
        notification.error({
          message: '出错了',
          duration: 2,
          description: '系统重启了，请稍等！'
        })
      }
      requestLock = true
      return error
    }
    if (resStatus === (500 || 400)) {
      if (!requestLock) {
        notification.error({
          message: '网络超时',
          duration: 2,
          description: '网络请求超时，请稍后重试'
        })
      }
      requestLock = true
      return error
    }
    if (failReason === 4011 || failReason === 4012 || failReason === 4012) {
      let isExpired = true
      app.goLogin(isExpired)
    }
  }
)

export default axios
