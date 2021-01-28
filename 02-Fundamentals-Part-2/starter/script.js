'use strict';
/*
ACTIVATING STRICT MODE

'use strict'; // activates strict mode for the entire script

let hasDriversLicense = false;
const passTest = true; // remember default to use const

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio'; // JavaScript reserving this word for potential use in the future
// const private = 534;
*/




/*
FUNCTIONS

function logger() {
    console.log(`My name is Alex`);
}

logger(); // invoking the function, calling the function, or running the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // the called function holds the value of juice, need to capture that value, captures the value for later use
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // does not capture the value but simply logs the result

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/




/*
FUNCTION DECLARATIONS VS. EXPRESSIONS

function calcAge1(birthYear) { // Function Declaration
    return 2037 - birthYear;
}

const age1 = calcAge1(1998); // calling, invoking or running the function
console.log(age1);

const calcAge2 = function (birthYear) { // Function Expression
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age1, age2);
*/




/*
ARROW FUNCTIONS
*/
