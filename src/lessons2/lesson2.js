let votes = [
    "angular",
    "angular",
    "react",
    "react",
    "react",
    "angular",
    "ember",
    "react",
    "vanilla"
]

var initalValue = {}

let reducer = function (tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1
    }   

    return tally
}

let result = votes.reduce(reducer, initalValue)

console.log(result)