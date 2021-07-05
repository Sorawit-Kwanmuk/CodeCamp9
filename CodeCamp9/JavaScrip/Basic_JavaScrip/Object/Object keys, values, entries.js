// Object.keys, values, entries
// ตัวอย่างการดึงค่า keys values และ entries ของ object
// let user = {
//   name: "John",
//   age: 27,
// };
// console.log(Object.keys(user)); // ["name", "age"]
// console.log(Object.values(user)); // ["John", 27]
// console.log(Object.entries(user)); // [["name", "John"], ["age", 27]]

// ตัวอย่างการใช้ loop กับ Object.keys, values, entries
// let user = { name: "John", age: 27 };
// for (let key of Object.keys(user)) {
//   console.log(key); // name then age
// }
// for (let value of Object.values(user)) {
//   console.log(value); // John then 27
// }
// for (let pair of Object.entries(user)) {
//   console.log(pair); // ['name', 'John'] then ['age', 27]
// }

// LAB 8.1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// Object.keys
// for (let key of Object.keys(salaries)) {
//   sum += salaries[key];
// }
// console.log(sum);
// Object.values
// for (let value of Object.values(salaries)) {
//   sum += value;
// }
// console.log(sum);
// Object.entries
// for (let entry of Object.entries(salaries)) {
//   sum += entry[1];
// }
// console.log(sum);

// LAB 8.2
// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }
