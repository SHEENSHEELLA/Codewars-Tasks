// Description:
// Be Concise IV - Index of an element in an array
// Task
// Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.

// function find(arr, el) {
//   for (let i = 0; i < arr.length; i++) {
//     if (array[i] === element) return i;
//     arr[i]=== el ? i : "Not found"
//   }
//   return "Not found";
// }

//Solution:
const find = (arr, el) =>
  arr.indexOf(el) !== -1 ? arr.indexOf(el) : 'Not found'
