function oilPrice(diesel, petrol, octane) {
    if (typeof diesel === "number" && typeof petrol === "number" && typeof octane === "number") {
        return (114 * diesel + 130 * petrol + 135 * octane)

    }
    else {
        return "The input should be integer"
    }



}
console.log(oilPrice(1, 2, 3));