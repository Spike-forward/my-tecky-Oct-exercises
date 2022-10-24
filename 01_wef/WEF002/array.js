let a = [] // empty basket
let b = [1, 2, 3, 4]
let c = [1, "jason", true] // not suggest to avoid different type in array

console.log(typeof a) // array also type of object special type
console.log(Array.isArray(a))
console.log(Array.isArray("jason"))
console.log(b.length)

//get 2 from [1,2,3,4]
//index start from 0
//index range: 0 to length -1 // python can accept negative number js use at for the same way
// We will use common use array 
console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])
console.log(b[4]) // undefined

// add new item to array
console.log(b)
b.push(100)
console.log(b)

[1, 3]