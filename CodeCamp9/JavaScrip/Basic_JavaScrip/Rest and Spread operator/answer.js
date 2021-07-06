// //LAB 1.1
// function multiply(...number) {
//   let result = 1;
//   for (let num of number) {
//     result = result * num;
//   }
//   return result;
// }
// miltiply(2, 3, 4, 5);

// //LAB 1.2
// function filterOutOdds(...number) {
//   return number.filter((item) => item % 2 === 0);
// }
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// // let arr = [1,2,3,4];
// // filterOutOdds(...arr)//filterOutOdds(1,2,3,4,)

// Array destructuring
// Looping with .entries()

// const user = {
//   name: "John",
//   age: 30,
// };
// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }
