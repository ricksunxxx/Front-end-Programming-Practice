/**
 *
 * \f  匹配换页字符。
 * \n  匹配换行字符。
 * \r  匹配回车符字符。
 * \t  匹配制表字符。
 * \v  匹配垂直制表符。
 * \s  匹配任何空白字符，等价于[ \f\n\r\t\v]。
 * \S  匹配任何非空白字符，等价于[^ \f\n\r\t\v]。
 * @name removeEmpty
 * @description 写一个去除制表符和换行符的方法
 * @param {String} str 输入字符
 * @returns {String}
 */

function removeEmpty(str) {
  return str.replace(/[\t\n]/g, '')
}

console.log(removeEmpty(`1\x092\x0a3`)) // 123
