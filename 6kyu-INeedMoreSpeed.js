// Description:
// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

// Пояснение по шагам

// Изначально: arr = [1, 2, 3, 4, 5]

// 1-й проход: меняем arr[0] и arr[4] → [5, 2, 3, 4, 1]

// 2-й проход: меняем arr[1] и arr[3] → [5, 4, 3, 2, 1]

// i = 2, j = 2 → цикл останавливается, центральный элемент не трогаем.

// 🔹 Почему это быстро

// Время: O(n/2) ≈ O(n) — каждый элемент меняем один раз.

// Память: O(1) — ничего нового не создаём.

for (let i = 0; i < arr.length/2; i++){
  let temp = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = arr[i];
  arr[i] = temp;
}

// Оба работают одинаково и меняют массив на месте.

// Первый вариант с i, j сразу хранит индекс конца массива в переменной j, не нужно каждый раз вычислять arr.length - 1 - i → немного быстрее на больших массивах.

// Второй вариант с arr.length/2 проще и компактнее, но каждый раз вычисляется arr.length - 1 - i.

// ✅ Вывод:

// Без деструктуризации оба подхода почти одинаковы по сложности O(n) и по памяти O(1).

// Использование двух указателей i, j немного эффективнее, потому что меньше операций вычитания на каждой итерации.