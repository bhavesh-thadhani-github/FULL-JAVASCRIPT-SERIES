//We use FOR-OF => ARRAYS | FOR-IN => OBJECTS
//FORIN

// 1) for in -> objects
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    //  console.log(key); //we'll get all the keys in myObj
     console.log(`${key} -> ${myObj[key]}`); //get full key-value pair
}

// 2) for in -> arrays
/*const myArr = ['js', 'java', 'rb', 'py', 'cpp']

for (const key in myArr) {
    console.log(key); //by using forin -> arrays we'll get only keys i.e. 0,1,2,... but not it's values
    //to get its values:
    console.log(myArr[key]);
}
// for of -> arrays
for (const key of myArr) {
    console.log(key); //This output & line no. 20 output 'll be same
}*/

// 3) for in -> Maps
//  For maps -> forin loop won't work but forof will work
const map = new Map()
map.set('IND', 'INDIA') //IND is key & INDIA is value
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')

for (const key in map) {
    console.log(key);  //NO OUTPUT
}
for (const key of map) {
    console.log(key);
}

