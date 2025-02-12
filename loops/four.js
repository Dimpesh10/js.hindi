const coding = ["js","cpp","puthon","java","Ruby","php"]


// const value = coding.forEach((items)=>{
//     console.log(items)
//     return items; 
// });


// console.log(value)

// so it is not returing the value fuck this forEach


// const myNums = [2,31,34,42,45,32,525,53,532,23]
// const newNums = myNums.filter((num)=>num>5)
// console.log(newNums)
// so it is giving me the filter after applyting the condition in that myNums
const myNums = [1,2,4,5,6,34,41,131];
// const newNums = myNums.filter((num)=>{
//     num>4
// })
// console.log(newNums);
// const newNums1 = myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums1);

// see nothing is return if you add {} bracket cause when you use {} a new scope is open so you have to use return here compulsory we have learn the same thing arrow.js
// we can use implicit function for this also it can be of great help

const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }

})

console.log(newNums);

// we can use this instead of filter as you wish you want to do 


