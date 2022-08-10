const friends = [12, 42, 59, 44, 66, 71, 30];

//Remove elements from an array
//And, if neccessary, inserts new elements in their place,
//returing the deleted elements.
//will change the original array
const partial = friends.splice(2, 3, 99, 555, 7777);
console.log(partial);
console.log(friends);