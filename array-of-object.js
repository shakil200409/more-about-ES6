const products = [
    {id: 1, name: 'Lenovo', price: 50000},
    {id: 2, name: 'Dell', price: 65000},
    {id: 3, name: 'Hp', price: 55000},
    {id: 4, name: 'Mac', price: 155000},
];

// map

const prices = products.map(p => p.price);
// console.log(prices);
const names = products.map(p => p.name);
// console.log(names);

// forEach
products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p => p.price > 60000);
// console.log(expensive);

// Find
const affordable = products.find(p => p.price < 60000);
// console.log(affordable);

// Reduce
const total = products.reduce((accum, current)=> accum + current.price, 0);
// console.log(total);
