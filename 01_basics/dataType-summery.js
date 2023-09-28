// Premitive Type -> call by value
// types 7 -> String, Number, Boolean, null , undefined , bigInt, Symbol 

// let name = "Vinay";
const num = 123;
const isBoolean = true;
const n1 = null;
const Number = 124563n;
const id = Symbol(123);
const userId = Symbol(123);
// console.log(id);
// console.log(typeof id);
// console.log(userId);


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Reference Type (Non Premitive)
// Array, Object, Functions

let arr = ["1" , "2", "3"];
// console.log(arr);

let obj = {
    name: "Vinay",
    age: 22
}
// console.log(obj);

let fun = function() {
    console.log("Hello World");
}
// console.log(typeof fun);

// +++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++++++
// 2 types of memory
// Stack => (Premitive type of value) esme original value copy hoti hai aur esme hm original value ko change nhi kr skte hai
// Heap => (Non-Premitive type of value) esme reference copy hota hai jisase hm original value change kr skte hai

let name = "Vinay" ;
let myName = "Nitin";
console.log(name);
console.log(myName);

let myObj = {
    name: "Vinay",
    age:22,
}


let nObj = myObj;
nObj.name = "Nitin";
nObj.age = 21;
console.log(nObj);
console.log(myObj);


