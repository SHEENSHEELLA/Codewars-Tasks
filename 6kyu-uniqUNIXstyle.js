// Description:
// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

//Solution:

function uniq(a) {
  return a.filter((item, index) => {
  // Проверяем, является ли текущий элемент первым вхождением в массив
  return index === 0 || item !== a[index - 1];
});
}