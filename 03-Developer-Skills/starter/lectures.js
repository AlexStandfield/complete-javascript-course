// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// SETTING UP PRETTIER AND VS CODE
const x = 23;
// if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();
// Changes double quotes to single qoutes, changes arrow fucntions to now automatically put parentheses for the parameter.
// Changed cl as a snippet(shortcut) for console.log()

// INSTALLING NODE.JS AND SETTING UP A DEV ENVIRONMENT
// console.log(calcAge(1998));

// USING GOOGLE, STACKOVERFLOW AND MDN

// Problem 1
// Given an array of termperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 15, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitude?
// - Asnwer: difference between hight and lowest temp

// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore sensor errors
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
// max will be the first element of the array
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement funcionality twice?
// - Answer: No, merge the two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
