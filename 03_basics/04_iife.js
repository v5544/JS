// Immediately Invoked Function Expressions (IIFE)
// global scope ke jo polution h us polution ko hatane ke liye iife ka use kiya


(function chai(){  // named IIFE
    console.log("DB Connected");
})();

( (name) => {
    console.log(`DB connect to ${name}`)
} )("Vinay")
