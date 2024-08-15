// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//Solution 1:
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0
  let sum2 = 0
  arr1.forEach((num) => (sum1 += num))
  arr2.forEach((num) => (sum2 += num))
  return sum1 + sum2
}

//Solution 2:
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((sum, num) => sum + num, 0)
}

// Объяснение:
// arr1.concat(arr2) объединяет оба массива в один.
// reduce суммирует все элементы нового массива, начиная с нуля.
