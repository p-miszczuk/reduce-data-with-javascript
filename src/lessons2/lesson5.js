let data = [1,2,3,4]

function reducer (acc, val) {
    return acc + val
}

const sum = data.reduce(reducer)

console.log(sum)

const data2 = ["vote1",'vote2','vote1','vote2'];

function reducer2 (acc, val) {
    if(acc[val]) {
        acc[val] = acc[val] + 1;
    } else {
        acc[val] = 1
    }

    return acc
}

const tally = data2.reduce(reducer2, {})
console.log(tally)

const tally2 = data2.reduce(reducer2)
console.log(tally2)