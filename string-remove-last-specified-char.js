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
// reverse a string , only dealing with simple ASCII characters
function reverse(str) {
  return str.split('').reverse().join('')
}
reverse('foo 𝌆 bar 𝌆 mañana mañana hello world !') // "! dlrow olleh anãnam anañam \udf06\ud834 rab \udf06\ud834 oof"

// also supports UTF-16 or other multi-byte characters
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
