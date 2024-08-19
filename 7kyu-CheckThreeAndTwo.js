// Description:

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//Solution:
function checkThreeAndTwo(array) {
  // Подсчитываем количество каждого элемента
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  // Извлекаем количество вхождений в массив
  const values = Object.values(counts)

  // Проверяем, есть ли в массиве 3 и 2 одинаковых значения
  return values.includes(3) && values.includes(2)
}

// Подсчет вхождений:

// Мы используем reduce() для создания объекта counts, где ключи — это элементы массива, а значения — количество их вхождений.
// Например, для массива ['a', 'a', 'a', 'b', 'b'], объект counts будет { a: 3, b: 2 }.
// Проверка условий:

// С помощью Object.values(counts) извлекаем массив значений [3, 2].
// Проверяем, содержит ли массив значения 3 и 2, используя includes().

//Short Solution:
const checkThreeAndTwo = array => {
  const values = Object.values(array.reduce((acc, item) => (acc[item] = (acc[item] || 0) + 1, acc), {}));
  return values.includes(3) && values.includes(2);
};
