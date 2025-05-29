// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

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

function mostFrequent(arr) {
    const object = {}

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i]
        if (word in object) {
            object[word] += 1
        } else {
            object[word] = 1
        }
    }

    const uniqueKeys = uniqueValues(arr)
    let result = ""
    let max = 0
    for (let i = 0; i < uniqueKeys.length; i++) {
        const key = uniqueKeys[i]
        if (object[key] > max) {
            max = object[key]
            result = key
        }
    }
    return result
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'banana', 'banana'])) // 'apple'