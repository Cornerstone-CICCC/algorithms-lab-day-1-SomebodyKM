// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let isInArr = false

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isInArr = true
      }
    }
    if (!isInArr) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]