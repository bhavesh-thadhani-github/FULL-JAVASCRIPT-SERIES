//for of

/*const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    console.log(`Each greet is ${greet}`);
}

//Maps
const map = new Map()
map.set('IND','INDIA')
map.set('USA','United States of America')
map.set('FR','FRANCE')
map.set('IND','INDIA')

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value)
}

const myObj ={
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key,value)
}*/

/*const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js','ruby','python','java','cpp']
for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()
map.set('IND','INDIA')
map.set('USA','United States of America')
map.set('FR','FRANCE')
map.set('IND','INDIA')

for (const key in map) {
    console.log(key);
}*/

//IN -> object,array  | map not iterable
//FOR -> array,map    | object not iterable

// foreach vey used

const coding =['js','ruby','java','python','cpp']

// coding.forEach( function (item) {
//     console.log(item)
// } )


// coding.forEach((item) => console.log(item))

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => console.log(item.languageName) )



