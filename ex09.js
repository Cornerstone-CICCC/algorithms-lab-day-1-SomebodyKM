// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {


  // set newArr, 
  let newArr = []

  // use for loop to scan over the first array [ 1,2] [3,4] [5,[6,7]] ;
  for (i = 0; i < arr.length; i++) {

    const inner1 = arr[i]

    //  use anotheer for loop to scan over the second array inside the first array 1,2;3,4;5,[6,7] ; 
    for (j = 0; j < inner1.length; j++) {
      const inner2 = arr[i][j]

      // add the numbers into newArr if it's already a number
      if (inner2.length === undefined) {
        newArr.push(inner2)
      } else {

        // use the third for loop to scan over the last array inside the second array 1,2,3,4,5,6,7
        for (x = 0; x < inner2.length; x++) {
          // add the numbers into newArr
          newArr.push(arr[i][j][x])
        }
      }
    }
  }
  return newArr
}

console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]


