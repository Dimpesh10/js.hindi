const marvelHeros = ["ironMan","captianAmerica","blackWindow"];
const dcHeros = ["batMan","SuperMan"]

console.log(marvelHeros);

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

all_newHeros = [...marvelHeros,...dcHeros]
console.log(all_newHeros);

new_real_array = [1,2,3,4,[12,23,1,342,2],[1,23,[12,324,52,425235,314124,[121214324,3412412,4134134,134124]]]];

console.log(new_real_array.flat(Infinity));



console.log(Array.isArray("Dimpesh Ramchandani"));
console.log(Array.from("Dimpesh Ramchandani"));
console.log(Array.from({name:"Dimpesh Ramchandani"})); //interesting case can be asked in interview


