//forEach takes callback function,so we have to give a function to forEach()

const coding = ['python','java','ruby','cpp','js']

//1) forEach -> Noraml Function
coding.forEach( function (item){
    console.log(item);
} )

//2) forEach -> Arrow Function
coding.forEach( (val) => {
    console.log(val);
} )

//3) forEach -> first Declaration the function then giving its Reference
function printMe(value) {
    console.log(value);
}
coding.forEach(printMe)

//4) forEach -> item,index,array
//forEach has access of item & index of the array & also has the access of full array

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

//-----------------------------
// MY SHORT PROJECT 
/*const period = ['Hydrogen','Helium','Lithium','Beryllium','Boron']


function goblin(element,number,table){
    const first = Array.from(element[0]+element[1])
    element = first.join()
    console.log(element,number+1,table)
}
period.forEach(goblin)*/

//5) forEach -> Accessing Objects(values) inside Array

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    }
]
myCoding.forEach( (index) => {
    console.log(index.languageFileName);
} )
