class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log('Gari chole na chole na, chole na re gari chole na');
    }
}

class bus extends vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

    speed(){
        console.log('Hanif mama cought');
    }
}

class truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = `${load} Ton`;
    }

    company(){
        console.log(`${this.name} Group of Industries`)
    }
}

const car = new vehicle('Toyota', 3500000);
// console.log(car);
// car.move();

const ena = new bus('Hino', 20000000, 40, 670);
// console.log(ena);
// ena.speed();

const butterfly = new truck('Butterfly', 4000000, 5);
console.log(butterfly);
butterfly.company();