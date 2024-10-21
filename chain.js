const data = [{id: 1, name: 'Abul', address: 'Bandarban'}];
// console.log(data[0].address);

const products = {
    count: 5000,
    data:[
        {id: 1, name: 'HP', price: 75000},
        {id: 2, name: 'Macbook', price: 175000},
    ]
}

// console.log(products.data[1].price);


const user = {
    name: 'Shoriful Raj',
    address:{
        city: 'Dhaka',
        street: {
            first: '54/A Uttar Side',
            second: 'Poribag er Goli',
            third: 'No dorai'
        }
    }
}

const user2 = {
    name: 'Abul',
    address:{
        city:'Sylhet',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.second);
console.log(user2.address.street?.second);