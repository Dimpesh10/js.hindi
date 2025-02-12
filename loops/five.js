const myNumers = [1,2,3,4,5,6,7,8,9]
const num = myNumers.map((num)=>num+10)
console.log(num);
const num1 = myNumers.map((num1) => {num1+10});
console.log(num1);

// see it basically the same OK Dimpesh Ramchandani


// chaining 

const newNums = myNumers
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num)=>num>40)

// so this is chaining 
// after the first map the new array is not yet gone to newnNums so the second map will make changes in this new array
console.log(newNums);
