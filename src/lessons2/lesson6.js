import { catchClause } from "@babel/types";

let data = [[1,2,3],[4,5,6],[7,8,9]]

const flattenData = data.reduce((acc,val) => acc.concat(val), [])
console.log(flattenData)

const input = [
    {
        title: "Batman Begins",
        year: 2005,
        cast: [
            "Christian Bale",
            "Michael Caine",
            "Liam Neeson"
        ]
    },
    {
        title: "The Dark Night",
        year: 2008,
        cast: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart"
        ]
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        cast: [
            "Christian Bale",
            "Gary Oldman",
            "Tom Hardy"
        ]
    }
]

const stars = input.reduce((acc,val) => acc.concat(val.cast), [])
console.log(stars)

const stars2 = input.reduce(function(acc,value){
   
    value.cast.forEach(function(star) {
        if (acc.indexOf(star) === -1) {
            acc.push(star)
        }        
    });
    return acc
},[])
console.log(stars2)