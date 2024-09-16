//Description:

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//Not refactored solution:
function maskify(cc) {
  if (cc.length <= 4) {
    return cc
  } else {
    const repeatTime = cc.length - 4
    const result = '#'.repeat(repeatTime) + cc.slice(repeatTime)
    return result
  }
}

//Short solution:

const maskify = (cc) =>
  cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4)

// cc.slice(-4) — slice(-4) извлекает последние 4 символа из строки cc

//or
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

//or
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}

// Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.