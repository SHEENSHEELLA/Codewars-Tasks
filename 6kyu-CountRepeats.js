// Description:
// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

//Solution:
function countRepeats(str) {
  let count = 0 // Счетчик удаляемых символов

  for (let i = 1; i < str.length; i++) {
    // Если текущий символ равен предыдущему, увеличиваем счетчик
    if (str[i] === str[i - 1]) {
      count++
    }
  }

  return count // Возвращаем количество удаляемых символов
}
