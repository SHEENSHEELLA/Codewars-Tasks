// Description:

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

//Solution:

const fixTheMeerkat = arr => ([arr[0], arr[2]] = [arr[2], arr[0]], arr);

// Деструктурирующее присваивание: [arr[0], arr[2]] = [arr[2], arr[0]] — это та же операция, которая меняет местами первый и последний элементы массива.

// Запятая: В стрелочных функциях, когда необходимо выполнить несколько операций и вернуть значение, можно использовать запятую. В этом случае, после присваивания происходит возврат измененного массива arr.


// function fixTheMeerkat(arr) {
//     const temp = arr[2];    // Сохраняем значение первого элемента
//     arr[2] = arr[0]; // Присваиваем значение второго элемента первому
//     arr[0] = temp;
//     return arr
// }

// function fixTheMeerkat(arr) {
// [arr[0], arr[2]] = [arr[2], arr[0]] 
//     return arr
// }