// there are two types of data
// one is primitive datatype which are called by value ie they are copied and given
// there are 7 types of primitive datatype :string,number,boolean,null(means empty nothing else),undefined,symbol,BigInt,
// non primitive or reference type:Arrays ,Object and functions

const id =Symbol('123');
const idSy =Symbol('123');

console.log(id===idSy);

const bigNumber = 2193812094812034983123243274983247324;
console.log(bigNumber);


// there are two types of memory stack and heap memorey
// stack (primitive) and heap(non-primitive or pass by reference)
// in stack it gives the copy of the variable but in the heap it gives reference so if we change in one ,the change is visible in the other also

