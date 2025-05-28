// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const splitSentence = text.split(' ')
  let longest = ""
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].length > longest.length) {
      longest = splitSentence[i]
    }
  }
  return longest
}

console.log(longestWord('The duck loves bananas and grapes')) // 'bananas'
