
import {showImg} from '../../request/url.js'

export default {
  state: {
    userName: '用户名',
    userAvatar: ''
  },
  getters: {
    userName: state => state.userName,
    userAvatar: state => state.userAvatar
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userName = userInfo.nickName || ''
      state.userAvatar = userInfo.avatarId ? (showImg + userInfo.avatarId) : ''
    }
  }
}
