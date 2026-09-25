// Primitive
// 7 types : String, boolean, symbol, Number, Null, Undefined, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non Primitive)
// Arrays, Object, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "ram",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}


// ######################### Stack , Heap ##############################
// Stack (Primitive)
// Heap (Non Primitive)

let myName = "Ramdotcom";
let anotherName = myName;
anotherName = "codedotcom";

console.log(myName);
console.log(anotherName);

let userOne ={
    email: "ram@23.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "user@com";

console.log(userOne);
console.log(userTwo);

