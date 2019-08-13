const luke = {
    name: "luke skywalker",
    jedi: true,
    parents: {
        father: {
            jedi: true
        },
        mother: {
            jedi: false
        }
    }
}

const han = {
    name: "han solo",
    jedi: false,
    parents: {
        father: {
            jedi: false
        },
        mother: {
            jedi: false
        }
    }
}

const anakin = {
    name: "anakin skywalker",
    jedi: true,
    parents: {
        mother: {
            jedi: false
        }
    }
}

let characters = [luke,han,anakin]

function fatherWasJedi(character) {
    let path = 'parents.father.jedi'
    return path.split(".").reduce(function(obj, field) {
        if (obj)
            return obj[field]
        
        return false
    }, character)

}

characters.forEach(function(character){
    console.log(character.name + "'s father was a jedi: ", fatherWasJedi(character))
})
