// for

/*for (let i = 0; i <= 10; i++) {
    if(i == 7){
        console.log(`7 is the best number`)
        i++; //bcoz of this 7 'll not be printed
    }
    console.log(i);
}

// Loop inside Loop
for (let i =21; i <= 30; i++) {
    console.log("");
    console.log(`Table of: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`inner loop: ${j} and outer loop ${i}`);
        console.log(i + ` * ` + j + ` = ` + i*j);
    }
}*/

// LOOP FOR ARRAYS

/*let myArray = ['flash', 'batman', 'superman']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//SEE CAREFULLY
let myArray2 = ['flash', 'batman', 'superman']
console.log(myArray2.length);
for (let index = 0; index <= myArray2.length; index++) { // Here when we put <= sign at the condition then we will get undefined at the last. Reason -> OBSERVE CAREFULLY
    const element = myArray2[index];
    console.log(element);
}*/


//BREAK & CONTINUE
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        break;
    }
    console.log(`value of index is ${index}`);
    
}
console.log('---------------------')
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue; //it will continue the loop but skip one iteration after this. Do it Practically
    }
    console.log(`value of index is ${index}`);
}
