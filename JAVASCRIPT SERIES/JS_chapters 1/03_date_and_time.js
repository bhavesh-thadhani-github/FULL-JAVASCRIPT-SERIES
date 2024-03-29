//DATES

//(1) DIFFERENT METHODS FOR DATE OBJECT 
let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString()); 
console.log(typeof myDate); //object */
// --------------------
//Rough Work
// console.log(Date())
/*console.log(myDate.getDate());
console.log(myDate.getDay()); //MONDAY -> 1
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth()); //JANUARY -> 0
console.log(myDate.getTime());*/

//(2) DIFFERENT FORMATS FOR DATE OBJECT
/*let myCreatedDate = new Date(2008, 0, 7, 12, 7, 26, 2410) //new Date(Year, Month, Day, Hours, Minutes, Seconds, Milliseconds) : Here 0 means JANUARY & months start from 0(January)
console.log(myCreatedDate.toString()); //toString is necessary to add

myCreatedDate = new Date("2023-01-14") //("YYYY-MM-DD")
console.log(myCreatedDate.toLocaleString()); //OUTPUT -> (MM-DD-YYYY) : Here months start from 1(January) */
// -----------
/*myCreatedDate = new Date("01-14-2023") //("MM-DD-YYYY")
console.log(myCreatedDate.toLocaleString()); //OUTPUT -> (MM-DD-YYYY)*/
// --------------------

//(3) MILLISECONDS & 01-01-1970
/*let myTimeStamp = Date.now() //Gives output in milliseconds from the arbitary date i.e. 01-01-1970
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); //Gives output in milliseconds from the given date i.e. 01-14-2023


console.log(Math.floor(Date.now()/1000)); ////Gives output in milliseconds from the date 01-01-1970, also dividing by 1000 and doing round off by floor*/
// --------------------

//(4)USING MORE METHODS WITH DATE OBJECT
let newDate = new Date()
console.log(newDate.getMonth()); //DISPLAYS OUTPUT FOR MONTH & ALWAYS STARTS FROM 0(JAN)
console.log(newDate.getDay()); //OUTPUT FOR DAY [SUN(0) - SAT(6)]
console.log(newDate.getMonth() + 1); //ADDING 1 IN MONTH TO NOT GET CONFUSED & TO ELIMINATE 0
//---------------------

//(5)CUSTOMIZING TOLOCALESTRING
console.log(newDate.toLocaleString('default',{
    weekday: "long", //Tuesday
    weekday: "short", //Tue
    weekday: "narrow", //T
})); //can customize the toLocaleString method there are also other than weekday properties and you can get values options by pressing Ctrl+spacebar*/
//-----------------------







