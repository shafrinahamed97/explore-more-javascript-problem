/* 1. Radian To Degree */

function radianToDegree(radian) {

    const degree = radian * 57.2958;
        return parseFloat(degree.toFixed(2));
}

const inputRadiun = '3';
const resultDegree = radianToDegree(inputRadiun);
console.log(resultDegree);




/* 2. Is JavaScriptFile */
function isJavaScriptFile(filename) {

    if (filename.match(/\.[0-9a-z]+$/i)) {
        if (filename.endsWith('.js')) {
            return true;
        }
        else { return false }
    }
    else {
        return "invalid filename"
    }

}
console.log(isJavaScriptFile("shafrin.js"));
var patt1 = /\.[0-9a-z]+$/i;




/* 3. Oil Price       */
function oilPrice(diesel, petrol, octane) {
    if (typeof diesel === "number" && typeof petrol === "number" && typeof octane === "number") {
        return (114 * diesel + 130 * petrol + 135 * octane)

    }
    else {
        return "The input should be integer"
    }



}
console.log(oilPrice(1, 2, 3));

/* 4 Local Bus Total Cost */
function publicBusFare(passengerNumber) {

    if (typeof passengerNumber === "number") {
        const busNumber = Math.floor(passengerNumber % 50);


        return Math.floor(busNumber % 11) * 250
    }
    else {
        return 'Input Should be Number'
    }



}

console.log(publicBusFare(235))


/* 5 Best Friend */

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