// Description:
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

//Solution:
function findUniq(arr) {
  // Функция для очистки строки от пробелов и приведения к нижнему регистру
  const normalize = (str) =>
    [...new Set(str.replace(/\s+/g, '').toLowerCase())].sort().join('')

  // Очищенные и отсортированные строки
  const cleanedArr = arr.map(normalize)

  // Считаем вхождения каждого нормализованного вида строки
  const counts = cleanedArr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1
    return acc
  }, {})

  // Находим уникальный нормализованный вид строки
  const uniqueStr = Object.keys(counts).find((key) => counts[key] === 1)

  // Возвращаем оригинальную строку, которая соответствует уникальному нормализованному виду
  return arr[cleanedArr.indexOf(uniqueStr)]
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])) // 'BbBb'
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])) // 'foo'
