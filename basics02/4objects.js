// deconstructor
const course = {
    name: "apan college",
    price: 6000,
    worthit: false,
    courseInstructor: "shradha khapra"
}
const { courseInstructor } = course;

console.log(courseInstructor);
// we can also give some different name to the courseInstructor if it feel too long like this dimpesh ramchandani ok thumb nothing but practising my new style of typing os using thumb a lot of types
const { courseInstructor: Instructor } = course;

console.log(Instructor);

// so when we call an api the api call return in an form similar to the the object which is known as Jason 
// only difference is that first all the keys are also in string and there is no name given to the Jason

// {
//     "dimpesh":"Ramchandani",
//     "thumb":"similar",
//     "ok":"thunb"

// }

// api can also come in the form of array having multiple Jason

// [{},
// {},
// ]



