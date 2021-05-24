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

/**
 * 如果字符是从左到右逐个位置进行匹配，那么算法就不一样了，举例：'aaaa'中的'aa'出现了3次
 */
function stringCharCount(parentStr, childStr) {
  return (parentStr.match(new RegExp(`(?=${childStr})`, 'g')) || []).length // 正向肯定预查,非获取匹配,预查不消耗字符,在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
}

console.log(stringCharCount('aaaa', 'aa')) // 3
console.log(stringCharCount('ababab', 'aba')) // 2
