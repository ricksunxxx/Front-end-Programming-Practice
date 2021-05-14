/**
 *
 * @name stringRemoveLastSpecifiedLetter
 * @description 去除字符串中最后一个指定的字符
 * @param {String} str 待处理的字符串
 * @param {String} letter 指定的字符
 * @returns String
 *
 */

function stringRemoveLastSpecifiedLetter(str, letter) {
  str = [...str].reverse().join('')
  return [...str.replace(new RegExp(letter), '')].reverse().join('')
}

stringRemoveLastSpecifiedLetter('foo 𝌆 bar 𝌆 hello world !', 'o') // "foo 𝌆 bar 𝌆 hello wrld !"
