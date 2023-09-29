user = {
    username : "Vinay",
    prive : 999, // this current ko reffer krta hai
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Nitin";
// user.welcomeMessage();

// console.log(this); // node me this ki value empty object hota hai but windows me windows object hota hai

// function chai(){
//     const username = "Vinay";
//     // console.log(this.username); // function me this object ke jaise work nhi krta hai
// }
// chai();

// const chai = function(){
//     const username = "Nitin";
//     console.log(this.username);
// }

const chai = () => {  // arrow function
    const username = "Vinay";
    console.log(this.username);
}

// chai();

// const add = (num1, num2) => { //explecit return
//     return num1 + num2
// }
// console.log(add(3,4));

const add = (num1 , num2) => (num1 + num2); // implecit function, ek hi line me code write krte h aur return nhi krte h

// console.log(add(3,4));

const two = () => ({username : "Vinay"})
console.log(two());