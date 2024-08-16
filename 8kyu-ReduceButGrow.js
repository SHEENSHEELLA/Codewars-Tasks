// Description:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Solution:

const grow = (x) => x.length === 0 ? 0 : x.reduce((acc, el) => (acc *= el), 1);

// x.length === 0 ? 0 : ... проверяет, пуст ли массив. Если пустой, возвращается 0.
// Если массив не пуст, выполняется reduce, начиная с аккумулятора 1.