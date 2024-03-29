// for of
//structure of FOR OF
/*for (const iterator of object) {
    statement
}*/

// ["", "", ""]
// [{}, {}, {}]

// 1]  for of -> array
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

// 2]  for of -> string
const greetings = 'Hello World'
for (const greet of greetings) {
    if (greet == ' ') {  //if there is a space in the sentence then it will be ignored and continue keyword will work
        //console.log('sorry');
        continue
    }
    console.log(`Each word: ${greet}`);
}

// MAP  -> map are like objects only 
// 1)they do not accept or show duplicate/same values 
// 2)The order in which you entered the key-value pairs that order will remain same in output also. THE ORDER REMAIN SAME
// 3] Using Map
const map = new Map()
map.set('IND', 'INDIA') //IND is key & INDIA is value
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')
map.set('IND', 'INDIA') //this will not be printed

console.log(map);

// 4]  For of -> Map
for (const key of map) {
    console.log(key); //we'll get output in array format, where one array contains a single key and value
}
// to get key and value separately
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// 5]  For of -> Objects
//FOR OF LOOP WILL NOT WORK ON OBJECTS
/*const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key,value] of myObj) {
    console.log(key, ':-', value);
}*/