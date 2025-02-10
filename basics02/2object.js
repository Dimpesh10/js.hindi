// singleton
// Object.create();

// Object Literal

fistSymbol = Symbol("key1");

const JsUser = {
    name:"Dimpesh Ramchandani",
    age:21,
    location:"chennai",

    [fistSymbol] :"Dimpesh Ramchandani",//Onlyt way to use symbol as a key in the object no other wway 
    // if we want to refer symbol in the object we first need to declare the symbol and then we have to put square bracket

    email:"ramchandanidimpesh123@gmail.com",
    MobileNo:"8000242987",
    isLoggedIn  :false,
    lastLogininDays : ["monday","tuesday"],
    "okIamNoob":"hello My name is Dimpesh"
};

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["okIamNoob"]);//now you cant use the JsUser.okIamNoob method you have to use this 
console.log(typeof JsUser[fistSymbol]);


JsUser["email"] = "dimpeshramchandani2004@gmail.com";
console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser["email"] = "ramchandanipoonam4@gmail.com";


console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JsUser user");
}
JsUser.greetingTwo = function(){
    console.log( `hello JsUser user ${this.location}`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());
