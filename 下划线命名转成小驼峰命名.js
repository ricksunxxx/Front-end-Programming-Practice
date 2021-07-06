/**
 *
 * @name toLittleCamelCase
 * @description 下划线命名转成小驼峰命名
 * @param {String} str 下划线字符
 * @returns String
 *
 */
// 使用正则方式处理
function toLittleCamelCase(str) {
  str = str.replace(/^_+|_+$/g, '').replace(/_+/g, '_') // 先处理'_'
  let reg = /_(\w)/ // 这里不要加全局标志g
  let arr = str.match(reg)

  while (arr) {
    str = str.replace(reg, arr[1].toUpperCase())
    arr = str.match(reg)
  }

  return str
}

// 使用数组方式处理
function toLittleCamelCase(str) {
  return str
    .split('_')
    .filter((s) => !!s)
    .map((s, index) => (index === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join('')
}

console.log(toLittleCamelCase('abc_de_fghi_j_k_lmn')) // "abcDeFghiJKLmn"
console.log(toLittleCamelCase('_abc_de_fghi_j_k_lmn')) // "abcDeFghiJKLmn"
console.log(toLittleCamelCase('_abc_de_fghi_j_k_lmn_')) // "abcDeFghiJKLmn"
console.log(toLittleCamelCase('_abc_____________de_fghi_j_k_lmn_')) // "abcDeFghiJKLmn"
