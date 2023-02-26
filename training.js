// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//====================================================================================
// Потрібно написати функцію, яка отримує цей набір і повертає кількість очок,
// яку наша команда ( x ) набрала у чемпіонаті за заданими правилами

// Очки нараховуються за кожен матч наступним чином:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

//====================================================================================

// 0) створити змінну totalPoints
// 1) перебрати масив
// 2) порівняти в елементі масива значення - результат гри і присвоїти бали команді Х
// 3) вивести загальну кількість балів команди Х

//? variant 1
// function points(games) {
//   let totalPoints = 0;
//   //   let gameResult = 0;

//   for (const game of games) {
//     let gameResult = game.split(":");

//     if (gameResult[0] > gameResult[1]) {
//       totalPoints += 3;
//     } else if (gameResult[0] === gameResult[1]) {
//       totalPoints += 1;
//     }
//     totalPoints += 0;
//   }
//   return totalPoints;
// }

//* variant 2
// const points = (games) =>
//   games.reduce((output, current) => {
//     return (output +=
//       current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
//   }, 0);

//* variant 3
// function points(games) {
//   let total = 0;
//   games.map((game) => {
//     if (game[0] === game[2]) {
//       total += 1;
//     } else if (game[0] > game[2]) {
//       total += 3;
//     }
//   });
//   return total;
// }

//* variant 4
// const points = (a) =>
//   a.reduce((r, e) => {
//     const x = e[0];
//     const y = e[2];
//     return r + (x > y ? 3 : x < y ? 0 : 1);
//   }, 0);

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );
// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// );
// console.log(
//   points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
// );
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
// );
// console.log(
//   points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
// );

//!====================================================================================
