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