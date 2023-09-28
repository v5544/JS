// singleton -> Singletons are used to create an instance of a class if it does not exist or else return the reference of the existing one
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Vinay",
    "full name": "Vinay Singh",
    [mySym]: "myKey1", // Symbol ko use krne ke liye squer bracket ka use krte hai
    age: 18,
    location: "Jaipur",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["lastLoginDays"]);

JsUser.email = "vinay@chatgpt.com"
// Object.freeze(JsUser) // freeze ko use krte hai value lene ke liye
JsUser.email = "vinay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());