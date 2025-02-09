const scroe = 400;
console.log(scroe);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());

const my_name = balance.toString();
// console.log(my_name)
console.log(my_name.length);
console.log(balance.toFixed(1));

const otherNumber = 123.821234;
console.log(otherNumber.toPrecision(3));

const zeros = 10000000;
console.log(zeros.toLocaleString("en-In"));

// +++++++++++++++++++++++Math+++++++++++++++

// console.log(Math.abs(-1212));
// console.log(Math.round(1.21));
// console.log(Math.ceil(12121212.1));
// console.log(Math.floor(31324.1));
// console.log(Math.min(1, 21, 123, 123, 21, 31, 2414, 24));


// random

console.log(Math.floor(Math.random()*10)+1)
max = 100
min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)