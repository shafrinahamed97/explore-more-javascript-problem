function isBestFriend(firstPerson, secondPerson) {
    if (typeof firstPerson.name === "string" && typeof secondPerson.name === "string" && typeof firstPerson.friend === 'string' && typeof secondPerson.friend === "string") {
        if (firstPerson.name === secondPerson.friend && secondPerson.name === firstPerson.friend) {
            return true
        }
        else {
            return false
        }

    }
    else {
        return 'Name must be String'
    }



}

console.log(isBestFriend({ name: 'abul', friend: 'babul' }, { name: 'babul', friend: 'abul' }))