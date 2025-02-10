let date = new Date();
console.log(date);

let date1 = Date.now("01-10-2004");
console.log(date.toLocaleString());

console.log(date.toLocaleString('default',{
    weekday:'short'
    
}));