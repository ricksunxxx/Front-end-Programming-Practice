/**
 *
 * @name generateRandomArray
 * @description 用递归算法生成一个数组长度为 5 且元素的随机数在 2-32 间不重复的值
 * @param {Number} min
 * @param {Number} max
 * @param {Number} length
 * @param {Array} arr
 * @returns Array
 *
 */

function generateRandomArray(min, max, length, arr = []) {
  /**
   * Math.random() 函数返回一个浮点数,  伪随机数在范围从0到小于1
   *
   * Math.floor(Math.random() * (max - min)) + min;       // 含最小值，不含最大值
   * Math.floor(Math.random() * (max - min) + 1 ) + min;  // 含最小值，含最大值
   *
   */
  let digital = Math.floor(Math.random() * (max - min) + 1) + min //   2 <= digital <= 32

  if (arr.length === length) {
    return arr
  }

  if (!arr.includes(digital)) {
    arr.push(digital)
  }

  return generateRandomArray(min, max, length, arr)
}

generateRandomArray(2, 32, 5)
