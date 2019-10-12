// eslint-disable-next-line complexity
let isInvalid = obj => {
  if (typeof obj === 'string') {
    let test = obj.trim()
    switch (test) {
      case '':
        return true
      case 'undefined':
        return true
      case 'false':
        return true
      case 'NaN':
        return true
    }
  }
  if (typeof obj === 'number') {
    if (obj === 0) {
      return true
    }
  }
  if (typeof obj === 'object') {
    if (obj === null) {
      return true
    }
    if (obj && obj.length === 0) {
      return true
    }
  }
  if (obj === undefined) {
    return true
  }
  return false
}

let isValid = obj => !isInvalid(obj)

// eslint-disable-next-line complexity
let checkInput = (str, type) => {
  // 校验
  switch (type) {
    case 'phone': // 手机号码
      return /^1[0-9]{10}$/.test(str)
    case 'tel': // 座机
      return /^(0d{2,3}-d{7,8})(-d{1,4})?$/.test(str)
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': // 密码以字母开头，只能包含字母、数字和下划线
      return /^[a-zA-Z]w{5,17}$/.test(str)
    case 'postal': // 邮政编码
      return /[1-9]d{5}(?!d)/.test(str)
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': // 邮箱
      return /^[w-]+(.[w-]+)*@[w-]+(.[w-]+)+$/.test(str)
    case 'money': // 金钱(小数点两位)
      return /^d*(?:.d{0,2})?$/.test(str)
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]d|[01]?d?d).){3}(?:25[0-5]|2[0-4]d|[01]?d?d))/.test(str)
    case 'date': // 日期时间
      return /^(d{4})-(d{2})-(d{2}) (d{2})(?::d{2}|:(d{2}):(d{2}))$/.test(str) || /^(d{4})-(d{2})-(d{2})$/.test(str)
    case 'number': // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[u4E00-u9FA5]+$/.test(str)
    case 'lower': // 小写
      return /^[a-z]+$/.test(str)
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    case 'input': // 常用输入框
      return /^[\u4e00-\u9fa5A-Za-z0-9]{1,20}/.test(str)
    default:
      return true
  }
}

let whatBrowser = () => {
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  console.log(userAgent) // 可以将这个打印出来会很清晰的展示出浏览器的类型
  var isOpera = userAgent.indexOf('Opera') > -1
  if (isOpera) {
    return 'Opera'
  } // 判断是否Opera浏览器
  if (userAgent.indexOf('Firefox') > -1) {
    return 'FF'
  } // 判断是否Firefox浏览器
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome'
  } // 判断是否是chrome浏览器
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  } // 判断是否Safari浏览器
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
    return 'IE'
  } // 判断是否IE浏览器
}
export { isInvalid, isValid, checkInput, whatBrowser }
