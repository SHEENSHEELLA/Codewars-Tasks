//Description:
// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

//Solution:

function dashatize(num) {
  // Преобразуем число в массив цифр
  const arr = Array.from(String(Math.abs(num)), Number)

  // Используем reduce для создания строки с дефисами
  const newArr = arr.reduce((acc, digit, i) => {
    // Если цифра нечетная
    if (digit % 2 !== 0) {
      // Если это не начало строки и последний элемент не дефис, добавляем дефис перед цифрой
      if (i > 0 && acc[acc.length - 1] !== '-') {
        acc.push('-')
      }
      acc.push(digit) // Добавляем цифру
      acc.push('-') // Добавляем дефис после цифры
    } else {
      acc.push(digit) // Если четная цифра, просто добавляем её
    }
    return acc
  }, [])

  // Объединяем массив в строку и убираем лишние дефисы в начале и в конце
  const result = newArr
    .join('')
    .replace(/--+/g, '-') // Заменяем несколько дефисов подряд на один
    .replace(/^-/, '') // Удаляем дефис в начале строки
    .replace(/-$/, '') // Удаляем дефис в конце строки

  return result
}
//Solution sorter:

function dashatize(num) {
  // Преобразуем число в массив цифр
  const arr = Array.from(String(Math.abs(num)), Number)

  // Используем reduce для создания строки с дефисами
  return arr
    .reduce((acc, digit, i) => {
      if (digit % 2 !== 0) {
        // Если цифра нечетная
        if (i > 0 && acc[acc.length - 1] !== '-') acc += '-' // Добавляем дефис перед цифрой
        acc += digit + '-' // Добавляем цифру и дефис после
      } else {
        acc += digit // Добавляем четную цифру
      }
      return acc
    }, '')
    .replace(/--+/g, '-') // Заменяем несколько дефисов подряд на один
    .replace(/^-/, '') // Удаляем дефис в начале строки
    .replace(/-$/, '') // Удаляем дефис в конце строки
}
