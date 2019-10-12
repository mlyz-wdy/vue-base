/**
 * 根据长度截取字符串，拼接省略号
 * @param {String} string 源字符串
 * @param {Number} length 要截取的长度
 * @param {Bool} screen 是否要根据屏幕判断长度
 */
const subStringWithEllipsis = (string, length, screen) => {
  if (screen) {
    let screenWidth = document.body.clientWidth
    if (screenWidth < 1700 > 1500) {
      length += 2
    }
    if (screenWidth > 1700) {
      length += 4
    }
  }
  if (string.length > length) {
    let newString = string.substr(0, length)

    return newString + '...'
  }
  return string
}

// 输出03:05:59 时分秒
const secondFormat = result => {
  if (!result || result <= 0) {
    return '00:00:00'
  }
  var h =
    Math.floor(result / 3600) < 10
      ? '0' + Math.floor(result / 3600)
      : Math.floor(result / 3600)
  var m =
    Math.floor((result / 60) % 60) < 10
      ? '0' + Math.floor((result / 60) % 60)
      : Math.floor((result / 60) % 60)
  var s =
    Math.floor(result % 60) < 10
      ? '0' + Math.floor(result % 60)
      : Math.floor(result % 60)
  return (result = h + ':' + m + ':' + s)
}

const getFileSize = size => {
  if (!size) {return '0B'}
  var num = 1024.0 // byte
  if (size < num) {return size + 'B'}
  if (size < Math.pow(num, 2)) {return (size / num).toFixed(2) + 'K'} // kb
  if (size < Math.pow(num, 3)) {return (size / Math.pow(num, 2)).toFixed(2) + 'M'} // M
  if (size < Math.pow(num, 4)) {return (size / Math.pow(num, 3)).toFixed(2) + 'G'} // G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T' // T
}

const formatGender = gender => {
  if (gender === 0) {
    return ''
  } else if (gender === 1) {
    return '男'
  } else if (gender === 2) {
    return '女'
  }
}

export { subStringWithEllipsis, secondFormat, getFileSize, formatGender }
