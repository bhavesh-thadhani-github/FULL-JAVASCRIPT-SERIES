//DESTRUCTURING

const course = {
    courseName: "js in hindi",
    Price: "999",
    courseInstructor: "Bhavesh"
}

const {courseInstructor} = course //Instead of writing course.courseInstructor again & again we can give a syntax like this so we don't have to repeatedly write that code
console.log(courseInstructor);
//we can also provide any other name for courseInstructor like this:
const {courseInstructor: inst} = course //here the name of courseInstructor is changed to inst
console.log(inst);


//JSON & API
//JSON format (we don't have to provide any name to this object & also have to write the keys name in string format):
//We can get APIs in Object format and also sometimes in Array format 
/*This is a JSON format -->
{
    "name": "Bhavesh",
    "coursename": "js in hindi",
    "price": "free"
}
//APIs in Array format (Objects inside Array):
[
    {}
    {}
    {}
]*/


//FOR ReactJS - DESTRUCTURING
// We have to write this: ({props.company}) again & again, so instead of writing this repeatedly we use the following syntax(code):-
/*const navbar = ({company}) => {

}
navbar(company = "Bhavesh")*/