// array

const myArr = [0,1,2,3,4,5];
const myHeros = ["saktiman" , "nagraj"];

const myArr2 = new Array(1,2,4,8,3);
// console.log(myArr2);
// console.log(myArr[1]);

// +++++ Array methods  +++++++
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.unshift(10);
// console.log(myArr);
// myArr.shift();
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A " , myArr);
// console.log(myArr.slice(0,3));
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B " , myArr);
const myn2 = myArr.splice(1,3);  // change original array
console.log("C ", myArr);
console.log(myn2);
