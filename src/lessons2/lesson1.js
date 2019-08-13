let data = [15,3,20];

let reducer = (akk, item) => akk + item

let initialValue = 10;

let total = data.reduce(reducer, initialValue)

console.log("the sum is: " + total)
