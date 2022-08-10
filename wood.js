/*
Fixed: per item wood requirement
1. Chair --> 3 cft
2. Table --> 10 cft
3. Bed --> 50 cft

vary: quantity

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perchairwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;

    const chairwood = chairQuantity * perchairwood;
    const tablewood = tableQuantity * pertablewood;
    const bedwood = bedQuantity * perbedwood;

    const totalwood = chairwood + tablewood + bedwood;
    return totalwood;

    //     console.log(chairQuantity, bedQuantity, tableQuantity);
    // 

}
const totalwood = woodCalculator(2, 2, 5);
console.log('total wood required:', totalwood);
