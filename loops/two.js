const myObject = {
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
    'swift':"swift by apple"
}

// we have for in loop for Object

for(const key in myObject){
    console.log(`${key} the value is ${myObject[key]}`);
}


const array = ["rs","cpp","puthon"];

for(const key in array){
    console.log(key)
}
// So you can see that the keys is only printed by the for in 
// whereas forof loop print the value of the array or Object ok?

for(const key in array){
console.log(array[key])
}

const map = new Map();
map.set("IN","India");
map.set("US","United States of America")
map.set("Fr","France");
map.set("IN","India");


for(const key in  map){
    console.log(key);

}

// map is not iterable that's way ok?
// mand bhudi
