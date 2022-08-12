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