// var c = 300
let a = 300  // global scope
if (true) {  // {} -> block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // console.log(c);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Vinay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Vinay"
    if (username === "Vinay") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // hoiesting concept

function addone(num){
    return num + 1
}



// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// const add = addTwo(5);
// console.log((add));