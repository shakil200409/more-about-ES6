const products = [
    {id: 1, name: 'Lenovo', price: 50000},
    {id: 2, name: 'Dell', price: 65000},
    {id: 3, name: 'Hp', price: 55000},
    {id: 4, name: 'Mac', price: 155000},
];

// class has some properties, method
class product {
    // No need to write var/ let/ const, just write the variable name and put value
    country= 'Bangladesh';

    // Specaillity for a class/ adding name
    constructor(name){
        this.name = name;
    }

    // No need to write function on functions
    spaek(talk){
        console.log(`Talking about ${talk}`);
    }
}

const lenovo = new product('Le le lenovo');
console.log(lenovo);

lenovo.spaek('lenovo');


class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log(`Sir is teaching ${this.subject}`);
    }
}

const ratan = new teacher('Ratan', 'Math');
console.log(ratan);
ratan.lecture();

const rashid = new teacher('Rashid', 'Chemistry');
console.log(rashid);
rashid.lecture();