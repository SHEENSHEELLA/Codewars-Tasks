//Description:
// Mastermind or Master Mind is a code-breaking game for two players. The modern game with pegs was invented in 1970 by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. It resembles an earlier pencil and paper game called Bulls and Cows that may date back a century or more. (Source Wikipedia)

// mastermind board

// Rules
// The Mastermind (computer) will select 4 colours. The colours are randomly selected from ["Red", "Blue", "Green", "Orange", "Purple", "Yellow"]. Colours can be duplicated but there will always be exactly 4.

// The Mastermind will return an array back to you. For every correctly positioned colour in the array an element of "Black" is returned. For every correct colour but in the wrong position an element of "White" will be returned.

// Passing the correct array will pass the Kata test and return "WON!".

// Passing an invalid colour will fail the test with the error "Error: you have given an invalid colour!".

// Passing an invalid array length will fail the test with the error "Error: you must pass 4 colours!".

// Guessing more than 60 times will fail the test with the error "Error: you have had more than 60 tries!".

// All colours are capitalised.

// The return array will be shuffled!

// Task
// Your task is to create a method called mastermind() that will take an object called game. The object has already been preloaded so you do not need to worry about it.

// Within your method you must pass an array into the game object method .check(). This will evoke the object to check your array to see if it is correct.

// Example
// If the Mastermind selected the following colours

// secret code - red, blue, green, yellow

// Then the array you are trying to solve is ["Red", "Blue", "Green", "Yellow"]

// So you guess with

// guess - red, orange, yellow, orange

// ["Red", "Orange", "Yellow", "Orange"]

// Your method would look like this.

// function mastermind(game){
//   answer = game.check(["Red", "Orange", "Yellow", "Orange"]);
// }
// The element 0 => Red is at the correct index so Black is added to the return array. Element 2 => Yellow is in the array but at the wrong index position so White is added to the return array.

// The Mastermind would then return ["Black", "White"] (But not necessarily in that order as the return array is shuffled by the Mastermind).

// Keep guessing until you pass the correct solution which will pass the Kata.

// Check result
// To check the Masterminds return value

//   answer = game.check(["Red", "Orange", "Yellow", "Orange"]);
//   console.log(answer);
// Good luck and enjoy!

//Solution:
function mastermind(game) {
  const colors = ['Red', 'Blue', 'Green', 'Orange', 'Purple', 'Yellow']
  const codeLength = 4
  let attempts = 0
  let foundTotal = 0
  let knownColors = [] // [{ color: 'Red', count: 2 }, ...]

  // ===== Фаза 1: определяем, сколько каждого цвета есть =====
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    let guess = Array(codeLength).fill(color)
    let feedback = game.check(guess)
    attempts++

    // if (typeof feedback === 'string' && feedback === 'WON!') {
    //   console.log('Угадано!', guess)
    //   return
    // }
    if (feedback === 'WON!') return

    const blackCount = feedback.filter((f) => f === 'Black').length

    if (blackCount > 0) {
      knownColors.push({ color, count: blackCount })
      foundTotal += blackCount
    }

    // Если уже угадаем все цвета, можно выходить
    // if (knownColors.reduce((sum, c) => sum + c.count, 0) === codeLength) break
  }
  console.log(knownColors)
  console.log(attempts)

  // ===== Фаза 2: уточняем позиции =====
  let guess = []
  for (let obj of knownColors) {
    guess.push(...Array(obj.count).fill(obj.color))
  }

  // ===== Фаза 3: уточняем позиции =====
  while (attempts < 60) {
    let feedback = game.check(guess)
    attempts++

    if (feedback === 'WON!') {
      console.log(`Угадано за ${attempts} ходов:`, guess)
      return
    }

    const blacks = feedback.map((f, i) => f === 'Black') // true/false
    // const whites = feedback.map((f, i) => f === 'White') // true/false

    // Если все позиции угаданы
    if (blacks.every((b) => b)) break

    // ===== Меняем местами только позиции с White =====
    // let whiteIndices = []
    // for (let i = 0; i < whites.length; i++) {
    //   if (whites[i]) whiteIndices.push(i)
    // }

    let whiteIndices = []
    feedback.forEach((f, i) => {
      if (f === 'White') whiteIndices.push(i)
    })

    //   let whiteIndices = []
    // for (let i = 0; i < blacks.length; i++) {
    //   if (!blacks[i]) whiteIndices.push(i)
    // }

    // Простейшая перестановка: циклический сдвиг
    if (whiteIndices.length > 1) {
      let temp = guess[whiteIndices[0]]
      for (let i = 0; i < whiteIndices.length - 1; i++) {
        guess[whiteIndices[i]] = guess[whiteIndices[i + 1]]
      }
      guess[whiteIndices[whiteIndices.length - 1]] = temp
    }
    // Если whiteIndices.length === 1, можно пробовать другой свободный цвет
  }
}

//Optimized Solution:
function mastermind(game) {
  const colors = ['Red', 'Blue', 'Green', 'Orange', 'Purple', 'Yellow']
  const codeLength = 4
  let foundTotal = 0
  let knownColors = []

  // ===== step 1 =====
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    const guess = Array(codeLength).fill(color)
    const feedback = game.check(guess)

    if (feedback === 'WON!') return

    const blackCount = feedback.filter((f) => f === 'Black').length

    if (blackCount > 0) {
      knownColors.push({ color, count: blackCount })
      foundTotal += blackCount
    }
  }

  // ===== step 2 =====
  let guess = []
  for (let obj of knownColors) {
    guess.push(...Array(obj.count).fill(obj.color))
  }

  // ===== step 3 =====
  while (true) {
    let feedback = game.check(guess)

    if (feedback === 'WON!') {
      return
    }

    let whiteIndices = []
    feedback.forEach((f, i) => {
      if (f === 'White') whiteIndices.push(i)
    })

    // The simplest permutation: cyclic shift
    if (whiteIndices.length > 1) {
      let temp = guess[whiteIndices[0]]
      for (let i = 0; i < whiteIndices.length - 1; i++) {
        guess[whiteIndices[i]] = guess[whiteIndices[i + 1]]
      }
      guess[whiteIndices[whiteIndices.length - 1]] = temp
    }
  }
}