// Exercise 13: Write a function named 'findById' that takes an array of objects and an id, and returns the object with the matching id, or null if not found.

function findById(arr, id) {
  let found = false
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      found = true
      index = i
      i = arr.length

    }
  }
  return found ? arr[index] : null
}

console.log(findById([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }], 2)) // { id: 2, name: 'Jane' }