/**
 *
 * @name stringRemoveLastSpecifiedChar
 * @description 去除字符串中最后一个指定的字符
 * @param {String} str 待处理的字符串
 * @param {String} char 指定的字符
 * @returns String
 *
 */

// reference: https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript

// reverse a string using built-in functions, only dealing with simple ASCII characters
function reverse(str) {
  return str.split('').reverse().join('')
}
reverse('foo 𝌆 bar 𝌆 mañana mañana hello world !') // "! dlrow olleh anañam anañam �� rab �� oof"

// reverse a string without using built-in functions, only dealing with simple ASCII characters
function reverse(str) {
  for (var i = str.length - 1, s = ''; i >= 0; s += str[i--]) {}
  return s
}
reverse('foo 𝌆 bar 𝌆 mañana mañana hello world !') // "! dlrow olleh anañam anañam �� rab �� oof"

// reverse a string supporting UTF-16 or other multi-byte characters
function reverse(str) {
  return [...str].reverse().join('')
}
reverse('foo 𝌆 bar 𝌆 mañana mañana hello world !') // "! dlrow olleh anãnam anañam 𝌆 rab 𝌆 oof"

// 去除字符串中最后一个指定的字符
function stringRemoveLastSpecifiedChar(str, char) {
  str = reverse(str)
  str = str.replace(new RegExp(char), '')
  return reverse(str)
}

stringRemoveLastSpecifiedChar('foo 𝌆 bar 𝌆 mañana mañana hello world !', 'ñ') // "foo 𝌆 bar 𝌆 mañana maana hello world !"
stringRemoveLastSpecifiedChar('foo 𝌆 bar 𝌆 mañana mañana hello world !', '𝌆') // "foo 𝌆 bar  mañana mañana hello world !"
stringRemoveLastSpecifiedChar('foo 𝌆 bar 𝌆 mañana mañana hello world !', 'o') // "foo 𝌆 bar 𝌆 mañana mañana hello wrld !"

// 或者使用正则
function _stringRemoveLastSpecifiedChar(str, target) {
  let reg = new RegExp(`${target}(?=([^${target}]*$))`) // ?=表示先行断言，会匹配到第一个target，它需满足跟在它后面到结尾都不再有target的出现
  return str.replace(reg, '')
}
