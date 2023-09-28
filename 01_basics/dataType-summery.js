// Premitive Type -> call by value
// types 7 -> String, Number, Boolean, null , undefined , bigInt, Symbol 

let name = "Vinay";
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
console.log(arr);

let obj = {
    name: "Vinay",
    age: 22
}
console.log(obj);

let fun = function() {
    console.log("Hello World");
}
console.log(typeof fun);
