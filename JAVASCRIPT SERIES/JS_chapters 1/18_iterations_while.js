// while

//FORMAT OF WHILE LOOP
/*INITIALISATION
while (CONDITION) {
    statement
    INCREMENT/DECREMENT
}*/

/*let index = 0
while (index <= 10) {
    console.log(index);
    index = index + 2
}

let myArray = ['captain america', 'thor', 'ironman']
let myVar = 0
console.log(myArray.length);
while (myVar < myArray.length) {
    console.log(myArray[myVar]);
    myVar++
}*/
// -----------------------------------------------------------
//do-while
//The do-while loop will always run for 1 time bcoz we are checking the condition at the end

//FORMAT OF DO-WHILE LOOP
/*INITIALISATION
do {
    statement 
    INCREMENT/DECREMENT
} while (CONDITION);*/

let score = 0 //if here we write 11 then also the do-while loop will execute for one time, so it 'll print 11
do {
    console.log(`Score is ${score}`);
    score = score + 2
} while (score <= 10);

//-------------------------------------
// TEST TO PRINT TABLE USING FOR LOOP
/*for (let i = 61; i <= 70; i++) {
    console.log("");
    console.log(`Table of ${i}:`);
    for (let e = 1; e <= 10; e++) {
        console.log(i*e);
    }
}*/




