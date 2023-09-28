let score = 400;
// console.log(score);
// console.log(typeof score);

let balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

let otherValue = 21123.859;
// console.log(otherValue.toPrecision(4));

let hundred = 10000000;
// console.log(hundred.toLocaleString()); // usa standard
// console.log(hundred.toLocaleString('en-IN')); // indian standard

// ++++++++++++++  Math  +++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.round(4.5));
// console.log(Math.min(2,4,3,1,8));
// console.log(Math.max(2,4,3,1,8));

// console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min) + min));