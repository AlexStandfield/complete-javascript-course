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

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}
console.log(yearsUntilRetirement(1998, 'Alex'));
console.log(yearsUntilRetirement(1999, 'Montana'));
*/




/*
FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));
*/




/*
REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired! 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1998, 'Alex'));
console.log(yearsUntilRetirement(1999, 'Montana'));
*/




/*
INTRODUCTION TO ARRAYS
*/
