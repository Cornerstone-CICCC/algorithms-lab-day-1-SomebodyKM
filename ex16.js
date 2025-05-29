// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j]
    }
  }
  return sum
}

console.log(sumNestedArray([[1, 2, 3], [4, 5], [6, 7, 8]])) // 36