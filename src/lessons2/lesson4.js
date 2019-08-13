function reducer(acc, val, index, array) {
    let intermediaryValue = acc + val;

    if (index === array.length - 1) {
        return intermediaryValue / array.length
    }
    return intermediaryValue
}

const data = [1,2,3,3,4,5,3,1];

const mean = data.reduce(reducer, 0)

console.log(mean)