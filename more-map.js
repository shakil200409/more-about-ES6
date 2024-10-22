const numbers = [10,12,35,37,56];
const doubled = numbers.map(num => num*2);
// console.log(doubled);

const fiveBonus = numbers.map(num => num+5);
console.log(fiveBonus);

const halves = numbers.map(num=> num/2);
console.log(halves);

const friends = ['Tom', 'John', 'Jerry'];
const lengths = friends.map(frnd=> frnd.length);
console.log(lengths);

const firstLetter = friends.map(friend=> friend[0]);
console.log(firstLetter);