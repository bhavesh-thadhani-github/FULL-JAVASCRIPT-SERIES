// Immediately Invoked Function Expression (IIFE)
/* We use it for 2 reasons:
1) To Prevent Pollution of the Global Scope
2) And to immediately execute it */

//We write IIFE like this: ()() 
//In the 1st parantheses we have to write the function & the 2nd parantheses is used for calling that function
//**We also have to put semicolon at the end of the function, so that it knows when to end & do not create any error 

(function chai(){
    //It's a named IIFE (chai)
    console.log(`DB CONNECTED`);
})();

(function aurcode(){
    //It's a named IIFE (aurcode)
    console.log(`DB CONNECTED TWO`);
})();

//We can also call ARROW Function with IIFE but ALWAYS HAVE TO PUT SEMICOLON AT THE END OF THE IIFE FUNCTION for its ending
//We can also pass Arguments & Parameters
((name) => {
    //It's not a named IIFE bcoz we have not provided any name
    console.log(`DB CONNECTED ARROW ${name}`);
}
)("Bhavesh");
