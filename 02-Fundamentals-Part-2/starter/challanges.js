'use strict';

/*
CODING CHALLENGE #1
*/
// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2.
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins2, avgKoalas2);
// 3.
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        return `Dolphines win with an average score of ${avgDolphins}!`;
    } else if (avgKoalas > avgDolphins * 2) {
        return `Koalas win with an average score of ${avgKoalas}!`;
    } else {
        return `Nobody Wins`
    }
}
// 4.
console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(avgDolphins2, avgKoalas2));




/*
CODING CHALLENGE #2
*/