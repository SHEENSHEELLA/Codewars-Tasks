// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution 1:
function solution(str) {
  // Если длина нечетная, добавляем подчеркивание
  if (str.length % 2 !== 0) {
    str += '_'
  }

  const pairs = []
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2))
  }
  return pairs
}

//Solution 2:
function splitIntoPairs(str) {
  // Если длина нечетная, добавляем подчеркивание
  if (str.length % 2 !== 0) {
    str += '_'
  }
  return str.match(/.{1,2}/g) || []
}

// Регулярное выражение /.{1,2}/g:

// . (точка) означает любой символ, кроме символа новой строки.
// {1,2} — это квантификатор, который говорит, что мы ищем от 1 до 2 совпадений подряд.
