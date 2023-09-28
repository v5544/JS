let name = "Vinay";
let myName = new String("Nitin");  // another way to declare the String
let age = 22;
let values;
// console.log(name + age + values);

console.log(`my name is ${name} and my age is ${age}`);
// console.log(myName[0]);
// console.log(myName.__proto__);
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.charAt("2"));
// console.log(myName.indexOf("t"));

let newString = myName.substring(0 , 3);
// console.log(newString);

let anotherString = myName.slice(-2, 4);  
// console.log(anotherString);

let stringOne = "   Vinay    "
let newStringOne = stringOne.trim();  // remove space in the string
// console.log(newStringOne);

let url = "https://google.com/vinay%20singh"
let urlOne= url.replace("%20","")
console.log(url);
console.log(urlOne);
let urlInclude = url.includes("%20" , "1");
console.log(urlInclude);
let urlTwo = url.split("%20","-");
console.log(name.split("-")); // separator , (separator,limit)