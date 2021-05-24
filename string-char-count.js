/**
 *
 * @name stringCharCount
 * @description 统计某一字符或字符串在另一个字符串中出现的次数
 * @param {String} parentStr 输入字符
 * @param {String} childStr 指定字符或字符串
 * @returns String
 *
 */

// 使用正则方式
function stringCharCount(parentStr, childStr) {
  return (parentStr.match(new RegExp(childStr, 'g')) || []).length
}

// 使用字符串分割成数组的方法
function stringCharCount(parentStr, childStr) {
  return parentStr.split(childStr).length - 1
}

console.log(stringCharCount('abcabbccc', 'a')) // 2
console.log(stringCharCount('abcabbccc', 'b')) // 3
console.log(stringCharCount('abcabbccc', 'c')) // 4
console.log(stringCharCount('abcabbccc', 'ab')) // 2
console.log(stringCharCount('abcabbccc', 'abc')) // 1
console.log(stringCharCount('abcabbccc', 'd')) // 0
