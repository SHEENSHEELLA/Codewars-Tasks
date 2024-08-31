// Description:
// Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

//     sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']

//     sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

//Solution:
function sort(array, indexes) {
  // Создаем массив для хранения отсортированных элементов
  const sortedArray = new Array(array.length)

  // const sortedArray = []; оба варианта (с new Array(array.length) и с []) будут работать корректно для данной задачи.

  // Располагаем элементы в массиве sortedArray по индексам
  indexes.forEach((index, i) => {
    sortedArray[index] = array[i]
  })

  return sortedArray
}
