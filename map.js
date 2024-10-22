const numbers = [2,4,5,6,9];

function doubleIt(num){
    // console.log('Num now: ', num);
    return num*2;
}
const double2 = n => n*2;

const result = numbers.map(doubleIt);
console.log(result);

const output = numbers.map(double2);
console.log(output);

const output2 = numbers.map(n => n*2);
console.log(output2);

// const doubled =[];

// for(num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }

// console.log(doubled);
