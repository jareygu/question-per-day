// 请实现一个range函数，使得下面的代码成立

function range(start, end) {
  // 请在此处完善代码
  return {
    [Symbol.iterator]: function () {
      let now = start
      return {
        next() {
          return now < end ? { value: now++ } : { done: true }
        }
      }
    }
  }
}

// 依次输出 5,6,7,8,9
for (let num of range(5, 10)) {
  console.log(num)
}
