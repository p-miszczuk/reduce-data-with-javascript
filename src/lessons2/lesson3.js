let data = [1,2,3];

let doubled = data.reduce((acc,value) => {
    acc.push(value*2) 
    return acc
}, [])

console.log("My doubled data: ", doubled)

let doubleMap = data.map(item => item * 2)

console.log(doubleMap)

const data2 = [1,2,3,4,5,6]
const evens = data2.reduce(function(acc,value){
    if (value % 2 === 0) {
        acc.push(value)
    }

    return acc
}, [])

console.log(evens)

const evenFiltered = data2.filter(item => item %2 === 0)
console.log(evenFiltered)

const filterMapped = data2.filter(item => item % 2 === 0)
                          .map(value => value * 2)
console.log(filterMapped)

let bigData = []
for (let i=0; i<1000000; i++)
    bigData.push(i)

console.time("filter and map")
const filterMapTest = bigData.filter(item => item % 2 === 0)
                          .map(value => value * 2)
console.timeEnd("filter and map")

console.time("reduce")
const reduceTest = bigData.reduce(function(acc, val){
    if(val % 2 === 0) {
        acc.push(val)
    }
    return acc
},[])
console.timeEnd("reduce")
