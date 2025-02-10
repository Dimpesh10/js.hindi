const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Dimpesh ramchandani";
tinderUser.girlfried = false;

// console.log(tinderUser);

// hello my name is Dimpesh Ramchandani

const regularUser = {
    email:"dimpeshramchandani@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Dimpesh",
            LastName:"Ramchandani",
        }
    }


}

const obj1 = {1:"s",2:"b"};
const obj2= {4:"12",3:"2131"};

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}



// console.log(obj3);
// console.log(obj1);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('girlfried'));


// console.log(regularUser.fullname.userFullname);
