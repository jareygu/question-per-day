// 请说出以下代码输出的是什么？

let test = (function (a) {
    this.a = a   // window.a = 1
    return function (b) {
        console.log(this.a + b)
    }
})(
    (function (a) {
        return a
    })(1, 2)

    // 1
)

test(4)   // window.a + 4
// 5
