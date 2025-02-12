const number = 1;

switch(number){
    case 1:
        console.log("january");
        // break;
    case 2:
        console.log("februray");
        // break;
    case 3:
        console.log("march")
        // break;
    case 4:
        console.log("April")
        // break;
    default:
        console.log("Enter correcct value")

// the problem with this is that if we don't use break than it will execute all the code except the default important
// there are some values that are consider false itself these are 
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// except all these values are consider true

// true values that can suprise you 
// "0",'false'," ",[],{},function(){}


// to check if the object or array is empty or not

const array = []

if(array.length === 0){
    console.log("Array is empty")
}

// for object

const object = {

}

if(Object.keys(object).length===0){
    console.log("Object is empty")
}


// Nullish coalsecing operator(??) which is related to null and undefined
const val1 = undefined??10;
console.log(val1);

const val2 = null??10??1000;

console.log(val2);

// terniary operator

// condition?true:false this is the basic syntax of the terniary operator
const water  = 1;

water>8?console.log("water is greater than 8"):console.log("water is less 7");





            
            
}