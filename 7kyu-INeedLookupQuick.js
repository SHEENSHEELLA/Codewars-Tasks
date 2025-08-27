// Write

// Array.prototype.toDictionary = function(keyFn, valueFn) {}
// that will take in a key selector function keyFn and an optional value selector function valueFn and return a hash.

// For Example:

// var arr = [1,2,3,4,5];
// arr.toDictionary(k=>k, v=> true) === {1:true, 2:true, 3:true, 4:true, 5:true};
// arr.toDictionary(k=>k, v=> v*v) === {1:1, 2:4, 3:9, 4:16, 5:25};
// arr.toDictionary(k=>k) === {1:1, 2:2, 3:3, 4:4, 5:5}; // if no valueFn supplied, use the current item

//Solution:
Array.prototype.toDictionary = function (keyFn, valueFn) {
  let dict = {}

  for (let item of this) {
    let key = keyFn(item)
    let value = valueFn ? valueFn(item) : item
    dict[key] = value
  }

  return dict
}

// Что делает каждая строка

// Array.prototype.toDictionary = function (keyFn, valueFn) { ... }
// Мы добавляем метод toDictionary всем массивам.
// Когда вы вызовете arr.toDictionary(...), внутри функции this будет ссылаться на сам массив arr.

// let dict = {};
// Создаём пустой объект-словарь, в который будем складывать пары «ключ → значение».

// for (let item of this) { ... }
// Идём по элементам массива (this) с помощью итератора (в порядке индексов). На каждой итерации у нас есть текущий элемент item.

// let key = keyFn(item);
// Вызываем функцию, которую передали как keyFn, и получаем ключ для текущего элемента.

// Важно: ключ в объекте должен быть строкой или символом. Если вернуть число — оно будет приведено к строке; если вернуть объект — он превратится в "[object Object]" (что почти всегда нежелательно).

// let value = valueFn ? valueFn(item) : item;
// Если передана функция valueFn, формируем значение из элемента через неё.
// Если нет — кладём в словарь сам элемент (item) как значение.

// dict[key] = value;
// Записываем пару в словарь. Если такой ключ уже был, значение перезапишется (последний победит).

// return dict;
// Возвращаем готовый объект-словарь.

//Solution 2:
Array.prototype.toDictionary = function (keyFn, valueFn) {
  const obj = {}
  this.forEach((el) => (obj[keyFn(el)] = valueFn ? valueFn(el) : el))
  return obj
}

// Альтернатива без прототипов (часто предпочтительнее):

const toDictionary = (arr, keyFn, valueFn = (x) => x) =>
  arr.reduce((acc, item) => {
    acc[keyFn(item)] = valueFn(item)
    return acc
  }, Object.create(null))

// Сложность: по времени — O(n), по памяти — O(n) (одно присваивание на элемент).

Object.defineProperty(Array.prototype, 'toDictionary', {
  value: function (keyFn, valueFn) {
    const dict = Object.create(null)
    for (const item of this) {
      const k = keyFn(item)
      dict[k] = valueFn ? valueFn(item) : item
    }
    return dict
  },
  enumerable: false, // главное здесь: метод не будет всплывать в for...in
})
// value: — здесь сама функция, которую мы добавляем.

// enumerable: false — делает метод неперечисляемым, его не будет в for...in.

// Остальные флаги (writable, configurable) можно оставить по умолчанию (false) или явно указать, если нужно.
