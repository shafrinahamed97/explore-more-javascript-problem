const country = 'Bangladesh';
const age = 51;
const isIndependent = true;
function add(num1, num2) {
    return num1 + num2;
}
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [11, 13, 17, 16, 21, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//Chack Array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(19));
console.log(friends.includes(21));

// Concat

newFreineds = [10, 24, 44, 36, 45];
allFriends = newFreineds.concat(friends);
console.log(allFriends);