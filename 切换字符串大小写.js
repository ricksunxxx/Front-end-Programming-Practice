/**
 *
 * @name caseConvert
 * @description 切换字符串大小写（即原来小写变大写，原来大写变小写）
 * @param {String} str 输入字符
 * @returns String
 *
 */

// 使用正则方式
function caseConvert(str) {
  const reg = /([a-z]*)([A-Z]*)/g // 用捕获组方式区别开大小写
  const replacer = (match, p1, p2) => {
    return p1.toUpperCase() + p2.toLowerCase()
  }

  return str.replace(reg, replacer)
}

// 使用数组方式
function caseConvert(str) {
  return str
    .split('')
    .map((s) => (/[A-Z]/.test(s) ? s.toLowerCase() : s.toUpperCase()))
    .join('')
}

console.log(caseConvert('!@#a24bcDE!Fg@#Hi$#%JKLmN122')) // "!@#A24BCde!fG@#hI$#%jklMn122"
