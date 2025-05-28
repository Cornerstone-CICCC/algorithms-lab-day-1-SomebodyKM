// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  const splitText = text.split(" ")
  const reversedText = splitText.reverse()
  const newText = reversedText.join(" ")
  return newText
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'