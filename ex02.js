// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  let result = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      result.push(products[i])

    }
  }
  return result
}

console.log(filterByCategory([
  { name: 'Apple', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Banana', category: 'Fruit' },
], 'Fruit')) // [{ name: 'Apple', category: 'Fruit' }]
