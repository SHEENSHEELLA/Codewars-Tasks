// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }

// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
  console.log('Вход', glass)
  if (!glass || glass.length === 0) return []

  const densities = { O: 0.8, A: 0.87, W: 1.0, H: 1.36 }
  const rows = glass.length
  const cols = glass[0].length

  // 1. Сплющиваем
  const flat = glass.flat()

  // 2. Считаем сколько каждого типа
  const counts = {}
  for (const el of flat) {
    counts[el] = (counts[el] || 0) + 1
  }

  // 3. Сортируем ключи по плотности
  const types = Object.keys(counts).sort((a, b) => densities[a] - densities[b])

  // 4. Собираем новый стакан
  const result = []
  let row = []
  for (const type of types) {
    let c = counts[type]
    while (c > 0) {
      row.push(type)
      if (row.length === cols) {
        result.push(row)
        row = []
      }
      c--
    }
  }
  // если осталась неполная строка
  if (row.length) result.push(row)
  console.log('Конечный результат', result)
  return result
}


// 1️⃣ Функция и входные данные
// function separateLiquids(glass) {
//   console.log('Вход', glass)
//   if (!glass || glass.length === 0) return []


// glass — это двумерный массив, представляющий стакан.

// Проверка !glass || glass.length === 0 — если массив пустой или undefined, возвращаем пустой массив.

// console.log('Вход', glass) — выводим входной стакан для отладки.

// 2️⃣ Таблица плотностей и размеры стакана
// const densities = { O: 0.8, A: 0.87, W: 1.0, H: 1.36 }
// const rows = glass.length
// const cols = glass[0].length


// densities — объект, где ключи — символы жидкостей, а значения — их плотность.

// rows — количество строк в стакане.

// cols — количество колонок (ширина стакана).

// 3️⃣ Сплющивание массива
// const flat = glass.flat()


// Метод .flat() превращает двумерный массив в одномерный, чтобы проще работать с жидкостями.

// Пример:

// [['H','H','W','O'], ['W','W','O','W']]
// → ['H','H','W','O','W','W','O','W']

// 4️⃣ Подсчёт количества каждого типа
// const counts = {}
// for (const el of flat) {
//   counts[el] = (counts[el] || 0) + 1
// }


// Создаём объект counts, где ключ — тип жидкости, значение — сколько раз встречается.

// (counts[el] || 0) + 1 → если элемента ещё нет, берём 0, иначе прибавляем 1.

// Пример:

// flat = ['H','H','W','O','W','W','O','W','H','H','O','O']
// counts = { H:4, W:4, O:4 }

// 5️⃣ Сортировка типов по плотности
// const types = Object.keys(counts).sort((a, b) => densities[a] - densities[b])


// Object.keys(counts) → массив типов жидкости: ['H','W','O']

// .sort((a, b) => densities[a] - densities[b]) → сортируем по плотности от лёгкой к тяжёлой.

// Пример:

// densities: O=0.8, W=1.0, H=1.36
// types после сортировки: ['O','W','H']

// 6️⃣ Формирование нового стакана
// const result = []
// let row = []
// for (const type of types) {
//   let c = counts[type]
//   while (c > 0) {
//     row.push(type)
//     if (row.length === cols) {
//       result.push(row)
//       row = []
//     }
//     c--
//   }
// }


// result — массив, куда будем собирать строки нового стакана.

// row — текущая строка, которую мы заполняем.

// Для каждого типа жидкости (type) берём количество c = counts[type].

// В цикле while (c > 0) добавляем type в row.

// Когда строка заполнена (row.length === cols), добавляем её в result и начинаем новую строку.

// c-- — уменьшаем количество жидкости данного типа.

// Пример:

// Тип O, количество 4, ширина стакана 4 → одна строка ['O','O','O','O']

// Тип W, количество 4 → вторая строка ['W','W','W','W']

// Тип H, количество 4 → третья строка ['H','H','H','H']