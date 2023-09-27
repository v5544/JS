const accountId = 12312;
let email = "vinay@google.com";
var city = "Uttar Pradesh";
let state;

/*
prefer not to use var
because of issue of block scope and functional scope
*/

// accountId = 2;  // not allowed
console.log(accountId);

email = "nitin@google.com";
city = "Azamghar";
console.table([email , city , state])