const numbers = [12,37,35,25,69];

const players = [70,75,66,68,72,67];

// const selected = players.filter(p=> p>=70);
// const selected = players.filter(p=> p>=80);
// const selected = players.filter(p=> p>=60);
// const selected = players.filter(p=> p%2 ===0);
const selected = players.filter(p=> p%2 ===1);

// console.log(selected);

const friends = ['Tom', 'Jerry', 'Mina', 'Oggy', 'Olivia', 'Jack', 'Bob'];

const filterFrnd = friends.filter(frnd => frnd.length >= 4);

console.log(filterFrnd);