import axios from './axios.js'
import store from '../store'
export default {
  // 账户信息
  async reqUserDetail(params) {
    let res = await axios.post('/api/user/userDetail', params)
    if (!res.resultStates) {
      store.commit('setUserInfo', res.content)
      return res.content
    }
  }
}
