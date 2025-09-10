//Description:
// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) ==> [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, 666, [[4], ['c']]) ==> ['a', 'b', 2, 3, 666, 4, 'c']

//Solution:
function flatten(...args) {
  return args.flat(Infinity)
}
// 📌 Здесь JS сам разрулит:

// если элемент массив — он развернётся,

// если элемент не массив — он просто добавится.

//Solution 2:
globalThis.flatten = function (...args) {
  let result = [];

  // helper — рекурсивная функция, которая "раскрывает" один элемент:
  function helper(el) {
    if (Array.isArray(el)) {
      // если el — массив, пробегаем по каждому элементу и рекурсивно вызываем helper
      el.forEach(helper);
    } else {
      // если не массив — просто кладём значение в итог
      result.push(el);
    }
  }

  // перебираем все аргументы, переданные в flatten, и обрабатываем каждый
  args.forEach(helper);

  return result;
}

// flatten(1, [2, [3, 4], 5], 6);

// Как будут выполняться шаги (упрощённый стек вызовов):
// args = [1, [2, [3,4], 5], 6]
// args.forEach → helper(1): не массив → result = [1]
// helper([2, [3,4], 5]) — это массив:
// forEach внутри: helper(2) → result = [1,2]
// helper([3,4]) → массив:
// helper(3) → result = [1,2,3]
// helper(4) → result = [1,2,3,4]
// helper(5) → result = [1,2,3,4,5]
// helper(6) → result = [1,2,3,4,5,6]
// возврат result

// Итог: [1,2,3,4,5,6] — порядок сохранён, вложенность раскрыта.