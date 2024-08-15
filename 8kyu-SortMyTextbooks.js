// Description:
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

//Solution 1:

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    // Сравниваем строки, учитывая символы и приводим к нижнему регистру
    const normalizedA = a.toLowerCase()
    const normalizedB = b.toLowerCase()

    // Сравнение с учетом ASCII-кодов
    for (let i = 0; i < Math.min(normalizedA.length, normalizedB.length); i++) {
      if (normalizedA[i] !== normalizedB[i]) {
        return normalizedA.charCodeAt(i) - normalizedB.charCodeAt(i)
      }
    }
    return normalizedA.length - normalizedB.length // Если строки равны по символам, сравниваем длину
  })
}

//Solution 2:

function sorterBP(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  )
}

//Другие варианты решения без присутствия символов с строках:

// function sorter(textbooks) {
//   return textbooks.sort((a,b) => a.replace(/[^a-z0-9]/gi, '').toLowerCase().localeCompare(b.replace(/[^a-z0-9]/gi, '').toLowerCase()))
// }

// function sorter(textbooks) {
//   return textbooks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// }

// Сравнение:

// .localeCompare() предоставляет более "умное" сравнение, учитывающее язык и правила сортировки.
// Оператор > сравнивает строки на основе ASCII-кодов.
