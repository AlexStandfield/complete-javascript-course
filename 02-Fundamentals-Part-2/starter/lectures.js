'use strict';
// JavaScript Fundamentals - Part 2




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

const friend1 = 'Michael';
const friend2 = 'Austin';
const friend3 = 'Caleb'; // this is how we would do it without arrays

const friends = ['Michael', 'Austin', 'Caleb']; // best practice for creating arrays
console.log(friends);

const y = new Array(1998, 1999, 2004, 2021); // alternative way to create arrays

console.log(friends[0]); // arrays have a 0 based index, so in the first position the index value will be 0
console.log(friends[2]);

console.log(friends.length); // will give us the amount of elements in an array (not 0 based)
console.log(friends[friends.length - 1]); // will give us the last element in an array

friends[2] = 'Cal'; // array can still be mutated even if it's created with const
console.log(friends);
// friends = ['Bob', 'Alice'] // we cannot however change the entire array

const firstName = 'Alex'
const alex = [firstName, 'Standfield', 2037 - 1998, 'programmer', friends];
console.log(alex);
console.log(alex.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1998, 1999, 2004, 2010, 2018];

calcAge(years); // this will not work because the function expects a single value not an array

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // we usually want to store information from an array into a new array so this is not best practice unless the situation calls for it

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge([years[years.length - 1]])]; // the array expects an expression so as long as it is returning a value it will work
console.log(ages);
*/




/*
BASIC ARRAY OPERATIONS (METHODS)

const friends = ['Michael', 'Austin', 'Caleb'];

// Add Elements
const newLength = friends.push('Micah');
console.log(friends);
console.log(newLength);

friends.unshift('Montana');
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Austin')); // will return the index position of 'Austin'
console.log(friends.indexOf('Bob')); // retuns - 1

friends.push(23);
console.log(friends.includes('Austin')); // will return TRUE
console.log(friends.includes('Bob')); // will return FALSE
console.log(friends.includes(23)); // will return TRUE

if (friends.includes('Michael')) {
    console.log(`You have a friend called Michael.`)
}
*/




/*
INTRODUCTION TO OBJECTS
*/
