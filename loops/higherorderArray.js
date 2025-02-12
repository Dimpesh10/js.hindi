// for loopf
for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}
// nothing interesting in for loop 
// so while loop
let i = 10;

do{

    console.log("Dimpesh Ramchandani")
    break;
    i++;

}while(i<20);


// tere are some loops that are array specific so that is why i havee writtern the highroderArray
arr = [1,2,3,4,5,6]

for(const  val of arr){
    console.log(val)
}

let string = "Dimpesh Ramchandani"

for(const str of string)
{
    console.log(`The letters in the string are ${str}`)
}

const map = new Map();

map.set("IN","India");
map.set("US","United States of America")
map.set("Fr","France")
map.set("IN","India")

console.log(map);

for(const key of map){
    console.log(key[0]);

}
// another way of doing the same thing
for(const [key,value] of map){
    console.log(key,value);

}

const myObject = {
    'game1':'Pubg',
    'game2':'Counter Strike'

}

// for(const [key,value] of myObject){
//     console.log(key,value);

// }
// this is not the  correct way to iterate an object
// we have different way to interate objects ok ??
