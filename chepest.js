const phones = [
    {
        name: 'sumsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'
    },
    {
        name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'
    },
    {
        name: 'iphone', camera: 10, storage: '32gb', price: 42000, color: 'silver'
    },
    {
        name: 'Xiaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver'
    },
    {
        name: 'oppo', camera: 10, storage: '32gb', price: 32500, color: 'silver'
    },
    {
        name: 'Nokia', camera: 10, storage: '32gb', price: 30000, color: 'silver'
    },
    {
        name: 'htc', camera: 10, storage: '32gb', price: 62000, color: 'silver'
    }
];
function cheapeastPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];

        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;

}
const mySlection = cheapeastPhone(phones);
console.log(mySlection);

