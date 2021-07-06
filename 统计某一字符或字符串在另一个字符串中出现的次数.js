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
function stringCharCount(parentStr, childStr) {+
  // 零宽度的子表达式之间是不互斥的，即同一个位置可以同时由多个零宽度子表达式匹配
  // (?=)先行断言只进行匹配，并不将匹配到的内容保存到最后结果，也就是每次匹配成功时，不消耗子子表达式匹配到的内容
  return (parentStr.match(new RegExp(`(?=${childStr})`, 'g')) || []).length
}

console.log(stringCharCount('aaaa', 'aa')) // 3
console.log(stringCharCount('ababab', 'aba')) // 2
