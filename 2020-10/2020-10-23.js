// 请按照下面的题目要求实现一个函数去重方法

// 1. 如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
// 2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
// 3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1,c:1}}, {a: "1"}, {a: {c: 1, b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1,c: 1}}, {a: "1"}, "meili"]

function doSet(arr) {
  function equal(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') {
      return a === b
    }
    // return JSON.stringify(a) === JSON.stringify(b)

    
  }

  return arr.reduce((pre, cur) => {
    !pre.find(e => equal(e, cur)) && pre.push(cur)
    return pre
  }, [])
}

doSet([123, 'meili', '123', 'mogu', 123])
doSet([123, [1, 2, 3], [1, '2', 3], [1, 2, 3], 'meili'])
doSet([
  123,
  { a: 1 },
  { a: { b: 1, c: 1 } },
  { a: '1' },
  { a: { c: 1, b: 1 } },
  'meili'
])
