

function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");
}

// sayMyName()   // sayMyName()-> executation and sayMyName -> reference

// function addTwoNumber(num1,num2){
//     let add = num1+num2
//     console.log(add);
// }

// addTwoNumber(5,3); // 8
// const result = addTwoNumber(3,"a");  // 3a
// console.log(typeof result); // undefined
// addTwoNumber(2,"4")  // 24
// addTwoNumber("2",4); // 24

function addTwoNumber(num1,num2){
    // const result = num1+num2;
    // return result;

    return num1+num2;
}

const result = addTwoNumber(3,5);
// console.log(result);

function logInUser(username){
    if(username === undefined){
        console.log("please login");
        return;
    }
    return `just login ${username}`
}

// const login = logInUser("Vinay");
// const login = logInUser("");
// const login = logInUser();
// console.log(login);

function calCartPrice(val1,val2,...num1){ //...num1(rest operator)
    return num1;
}

const ans = calCartPrice(200,300,400,100);
// console.log(ans);

const user = {
    username:"Vinay",
    price: 199
}
function handleObject(anyobject){
//    console.log(`User name is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"sam",
    price: 399
})

const arr = [200,300,100,600];
function returnSecondValue(getArr){
    return getArr[1];
}
const arrAns = returnSecondValue(arr);
console.log(arrAns);
