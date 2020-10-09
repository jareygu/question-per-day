// 把一个字符串的大小写取反（大写变小写, 小写变大写)
// 例如: AbC 变成 aBc。

function transform(str) {
  if (!str || typeof str !== 'string') return ''

  return str
    .split('')
    .reduce(
      (r, c) =>
        c >= 'A' && c <= 'Z' ? r + c.toLowerCase() : r + c.toUpperCase(),
      ''
    )
}
