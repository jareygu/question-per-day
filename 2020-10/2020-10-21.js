// 请写一个算法求多个数组之间的交集（数组项都是基本类型）

function intersection(...arrays) {
  return arrays.reduce((p, c) => p.filter(e => c.includes(e)), arrays[0])
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 2, 1, 5, 6, 7]
const arr3 = [2, 4, 7, 8, 3]

// 输出 [2,4]
console.log(intersection(arr1, arr2, arr3))
