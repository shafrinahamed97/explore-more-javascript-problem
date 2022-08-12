const price = [{
    diesel: 114, petrol: 130, octane: 135
}
];

function oilPrice(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(product);
    }

}
const expense = oilPrice(price);
console.log(expense);