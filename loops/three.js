const coding = ["js","cpp","puthon","java","Ruby","php"]
// coding.forEach(function(item){
//     console.log(item);
// });

// call back doesn't have the name in it 
// now do somethin

// we can also use arrow functoin in this 

// coding.forEach((value)=>{
//     console.log(value);
    

// })

// now when we define a arrow function we genreally do like this greet = ()=>{} but we dont have to give name in the call back function so we are not giving name to this function
// we can also give function as a parameter to the forEach function

function printMe(item){
    console.log(item);

}

coding.forEach(printMe);


// we are not executing the function we are just giving the reference of it
// also we have more parameters for forEach here index and array parameter also
coding.forEach((index,arr,item)=>{
    console.log(index,arr,item)

})
// remember this you will get benefit form this 

const myCoding = [
    {
        languageName : "Javascript",
        languageFile :  "js",
    },
    
    {
        languageName : "java",
        languageFile :  "java",
    },
    {
        languageName : "python",
        languageFile :  "py",
    },

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})