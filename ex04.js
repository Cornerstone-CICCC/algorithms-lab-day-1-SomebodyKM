// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  const object = {}

  for (i = 0; i < arr.length; i++) {
    const word = arr[i]
    if (word in object) {
      object[word] += 1
    } else {
      object[word] = 1
    }
  }
  return object
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }