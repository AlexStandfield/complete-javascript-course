'use strict';

// FUNCTIONS
// 1.
function describeCountry(country, population, capitalCity) {
    const countryDescribed = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryDescribed;
}
// 2.
const denmark = describeCountry('Denmark', 6, 'Copenhagen');
const phillipines = describeCountry('The Phillipines', 108, 'Manila');
const usa = describeCountry('The United States of America', 328, 'Washington D.C.');
// console.log(denmark);
// console.log(phillipines);
// console.log(usa);




// FUNCTION DECLARATIONS VS EXPRESSIONS
// 1.
function percentageOfWorld1(population) {
    return population / 7900 * 100; // 2.
}
// 3.
const usaWorldPop = percentageOfWorld1(328);
const denmarkWorldPop = percentageOfWorld1(6);
const phillipinesWorldPop = percentageOfWorld1(108);
// console.log(usaWorldPop);
// console.log(denmarkWorldPop);
// console.log(phillipinesWorldPop);
// 4.
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const englandWorldPop = percentageOfWorld2(56);
const chinaWorldPop = percentageOfWorld2(1441);
const franceWorldPop = percentageOfWorld2(67);
// console.log(englandWorldPop);
// console.log(chinaWorldPop);
// console.log(franceWorldPop);




// ARROW FUNCTIONS
// 1.
const percentageOfWorld3 = population => population / 7900 * 100;
const englandWorldPop2 = percentageOfWorld3(56);
const chinaWorldPop2 = percentageOfWorld3(1441);
const franceWorldPop2 = percentageOfWorld3(67);
// console.log(englandWorldPop2);
// console.log(chinaWorldPop2);
// console.log(franceWorldPop2);




// FUNCTIONS CALLING OTHER FUNCTIONS
// 1.
const describePopulation = (country, population) => {
    return `${country} has ${population} million people which is about ${percentageOfWorld1(population)}% of the world.`
}
// 3.
// console.log(describePopulation('USA', 350));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('England', 56));




// INTRODUCTION TO ARRAYS
