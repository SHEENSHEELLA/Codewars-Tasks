// Description:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


//Solution:
function findUniq(arr) {
  const uniqueElements = [...new Set(arr)];
  const first = uniqueElements[0];
  const second = uniqueElements[1];
    return arr.filter(num => num === first).length === 1 ? first : second;
  }