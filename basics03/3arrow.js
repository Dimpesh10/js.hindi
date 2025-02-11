const user = {
    username:"Dimpseh Ramchandani",
    price:8888,

    welcomeMessage:function(){
        console.log(`${this.username} ,Welcome to the amazon`);
        console.log(this)
        

    }
}

 user.welcomeMessage();
 user.username = "Hitesh ";

//  console.log(this)//very important
// //  if you do the same in the browser it will give you the window as this 
// // this is because the window is the this in the browser
// // this is an interview question= 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()//when this is use inside the function


// const chai = function(){
//     let username = "hitesh";
//     console.log(this.username)
// }
// now arrow function is nothing but basically the above function but we are using arrow


const chai = ()=>{
    let username = "hitesh";
    console.log(this.username)
}



// chai()

// const Add = (num1,num2) =>{
//     return num1+num2;

// }

// now there is implicit return in this
const Add = (num1,num2) => (num1+num2);
// if we use curly braces{} we have to use return but if we are using round bracket () then we dont have to use return we will use this a lot in react\
const arrow = ({username:"Hellow"})


console.log(arrow)


console.log(Add(3,4))
// see same output but 

