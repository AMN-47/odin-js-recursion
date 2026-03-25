#!/usr/bin/node 
console.log("hello world")

//1st Assignment - Fibs  - Using iteration
const fibs = (number) => {
    let fibArray = [];

    for (let i = 0; i < number; i++) {
        if ((fibArray[0] == null) || (fibArray[1] == null)) {
            fibArray.push(i);
        } else {
            let fibNumber = fibArray[fibArray.length -1] + fibArray[fibArray.length -2];
            fibArray.push(fibNumber);
        };
    };
    console.log("Iteration", fibArray);
};

fibs(8); 

// 1st Assignment - Fibs - Using Recursion
const fibsRec = (length) => {
    //These are cases to exclude
};