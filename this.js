class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping now.`);
    }
};

const kodom = new person('Kodom Ali', 31);
console.log(kodom);

kodom.sleep();

const sodrul = new person('Sodrul Mia', 36);
console.log(sodrul);
sodrul.sleep();


// Practice
function showThis() {
    console.log(this);
}
// showThis();

// console.log(this); 

const obj = {
    name: 'Alice',
    greet() {
        console.log(this.name);
    }
};
// obj.greet(); // Logs 'Alice'

function greet() {
    console.log(this.name);
}
const object = { name: 'Alice' };
// greet.call(object); // Logs 'Alice'

