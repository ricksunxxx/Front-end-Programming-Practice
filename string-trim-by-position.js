/**
 *
 * @name stringTrimByPosition
 * @description 去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
 * @param {String} str 输入字符
 * @param {String} position 去除空格的位置（前：before、后：after、中间：middle、前后：both、全部：all）
 * @returns String
 *
 */

function stringTrimByPosition(str, position = 'both') {
  if (typeof str !== 'string') {
    throw new Error('The first argument should be string type')
  }

  // 全部正则
  const regs = {
    before: /^\s*/g,
    after: /\s*$/g,
    middle: /(\S)\s+(\S)/g,
    both: /(^\s*)|(\s*$)/g,
    all: /\s*/g,
  }

  const reg = regs[position]

  if (!reg) {
    throw new Error(
      'The second argument should be [before|after|middle|both|all]'
    )
  }

  // 去除字符串中间空格
  if (position === 'middle') {
    while (str.match(reg)) {
      str = str.replace(reg, '$1$2')
    }
    return str
  }

  return str.replace(reg, '')
}

stringTrimByPosition(' hello world !  ', 'before') // "hello world !  "
stringTrimByPosition(' hello world !  ', 'after') // " hello world !"
stringTrimByPosition(' hello world !  ', 'middle') // " helloworld!  "
stringTrimByPosition(' hello world !  ', 'both') // "hello world !"
stringTrimByPosition(' hello world !  ', 'all') // "helloworld!"
