function increment(input) {return input + 1}
function decrement(input) {return input - 1}
function double(input) {return input * 2}
function halve(input) {return input / 2}

const inicialVal = 1;

const pipeline = [
    increment,
    increment,
    increment,
    double,
    increment,
    decrement,
    halve
]

let final = pipeline.reduce(function(acc,fn){
    return fn(acc)
},inicialVal)

console.log(final)

let finalRight = pipeline.reduceRight(function(acc,fn){
    return fn(acc)
},inicialVal)

console.log(finalRight)