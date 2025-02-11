// function 

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)


}

addTwoNumbers(1212, 23214);
// but we have to chaeck whehter the givven input is number or  not or it is something else 
// parameter is the bracket when function is define
// argument is that when the user give
// argument when function call
// parameter when function define

// function loginUserMessage(Username){
//     return `${Username } has just logged in `


// }

// console.log(loginUserMessage("Dimpesh Ramchandani"));
// console.log(loginUserMessage());//this is important
function loginUserMessage(Username = "Tei maa ki chut") {

    if (Username === undefined) {
        console.log("Enter a Username");
        return
    }


    return `${Username} has just logged in `


}
console.log(loginUserMessage("Dimpesh Ramchandani"));
console.log(loginUserMessage());//this is important



function calculateCartPrice(...num1){//this is not the spread operator that we have learned this is the rest operator or something else it is called based on their conditions

    return num1;
}

console.log(calculateCartPrice(200,400,500,2000));


function calculateCartPrice1(val1,val2,...num1){//this is not the spread operator that we have learned this is the rest operator or something else it is called based on their conditions
    
    return num1;
}

console.log(calculateCartPrice1(200,400,500,2000));
// ok 

// const  User= {
//     username :"Dimpesh Ramchandani",
//     price:10000
// }
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


handleObject({
    username:"Dimpesh Ramchandani",
    price:"teri maa ki chut",
});




