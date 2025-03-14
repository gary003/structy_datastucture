/*
pair product
Write a function, pairProduct, that takes in an array and a target product as arguments. 
The function should return an array containing a pair of indices whose elements multiply to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.
There is guaranteed to be one such pair whose product is the target.
*/

const pairProduct = (numbers, targetProduct) => {
  const table = [[]]

  for (let i = 0; i < numbers.length; i += 1) {
    const newComb = table.map((c) => [...c, [numbers[i], i]])
    table.push(...newComb)
  }

  return table.reduce((acc, val) => {
    if (val.length !== 2) return acc
    if (val[0][0] * val[1][0] === targetProduct) acc = [val[0][1], val[1][1]]
    return acc
  }, [])
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)) // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)) // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)) // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)) // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)) // -> [1, 2]
