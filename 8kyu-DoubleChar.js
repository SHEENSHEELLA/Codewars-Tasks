//Description:

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//Solution:
function doubleChar(str) {
  return str
    .split('') // Разбиваем строку на массив символов
    .map((char) => char + char) // Удваиваем каждый символ
    .join('') // Соединяем массив обратно в строку
}

//Solution 2:
function doubleChars(str) {
  return str.replace(/./g, '$&$&') // Заменяем каждый символ на два одинаковых
}

console.log(doubleChars('String')) // "SSttrriinngg"

//Short:

const doubleChar = (str) => str.replace(/./g, '$&$&')
