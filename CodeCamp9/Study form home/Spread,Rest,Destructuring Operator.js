// Spread Operator
// //add element ของ array ที่มีอยู่แล้ว
// let bookBuy = ["Sepien", "GTD", "bujo"];
// let bookToHave = ["math", "phisic", "SuperProduct"];
// //ถ้าเราอยากจะแทรกelement ของbookBuy เข้าไปในelementของ bookToHave จะใช้
// let bookToHave = ["math", "phisic", ...bookBuy, "SuperProduct"];
// console.log(bookToHave);
// //ผ่านelement ของ array เข้าไป
// function addThreeNumbers(x, y, z) {
//   console.log(x + y + z);
// }
// const args = [0, 1, 2, 3, 4, 5];
// //เพิ่มเข้าไปในfucntionทีละตัว
// addThreeNumbers(args[0], args[1], args[2]);
// //การ pass element เข้าไปเป็น agument ของ function
// addThreeNumbers(...args); //ถ้ามีเกินargument จะใช้เลียงมาตามจำนวนที่ใช้จากด้านหน้า

// //สามารถใช้copy array,clone array
// const array = [1, 2, 3, 4, 5];
// const array2 = [...array];
// array.push(6);
// console.log(array);
// console.log(array2);

// //เอา array มาต่อกัน
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// // ปกติเราจะใช้ arr.concat(arr2) เพื่อเอา array มาต่อกัน โดยเอา arr เป็นตัวตั้งและเอาarr2มาต่อท้าย
// arr.concat(arr2);
// const newArr = [...arr, ...arr2];

// Rest Operator

//มัดรวมelementเข้าไปในarray
// int = [1, 2, 3, 4, 5, ...any];
// multiplier = 2;
// function multiply(multiplier, ...intArray) {
//   console.log(multiplier);
//   console.log(intArray);
//   return intArray.map((int)=>int*multiplier);
// }

// Destructuring
//Object Destructuring
// const myObject = {
//   name: "Soawit",
//   surname: "Kwanmuk",
//   nickname: "Bill",
// };
// //การใช้ Destructuring
// //ชื่อ key จะต้องตรง ถ้าเราใส่ key ไม่ตรงจะได้เป็น undefined เพราะเบื้องหลังแล้ว เมื่อkey ผิด surnamr
// //มันจะหมายถึง let surnamr = myObject.surnamr; ซึ่งmyObject ไม่มี surnamr ดังนั้นจะเป็น undefined
// const { name, surname, nickname } = myObject;
// console.log(name, surname, nickname);
// //การถอดค่าแบบดั้งเดิม
// let name = myObject.name;
// let surname = myObject.surname;
// let nickname = myObject.nickname;

// //กำหนดชื่อตัวแปรใหม่
// const { name: newName, surname: newSurname, nickname: newNickname } = myObject;
// console.log(newName, newSurname, newNickname);

// //Nested Object Destructuring
// const nest = {
//   start: { x: 5, y: 10 },
//   end: { x: 7, y: 12 },
// };
// //startX = 5;
// //startY = 10;
// const {
//   start: { x: startX, y: startY },
// } = nest;
// console.log(startX, startY);

// //Array Destructuring
// const arr = [1, 2, 3, 4, 5, 6];
// const [q, r] = arr;
// //q = 1;
// //r = 2;
// //เทียบเลียงตามindex
// //ถ้าอยากให้ r = 6;
// //const [q, , , , , r] = arr; เพื่อให้ r = indexที่6

// //ใช้ ...Operator
// const [q, r, ...arg] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //q=1
// //r=2
// //arg=[3,4,5,6,7,8,9,10]

//In React
// const myObject = {
//   name: "Soawit",
//   surname: "Kwanmuk",
//   nickname: "Bill",
// };
// const profileUpdate = (object) => {
//   const { name, surname, nickname } = object;
//   console.log(name, surname, nickname);
// };
// profileUpdate(myObject);
//หรือจะใช้
