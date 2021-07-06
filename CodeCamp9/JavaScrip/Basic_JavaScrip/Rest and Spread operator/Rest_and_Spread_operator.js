// LAB 1.1
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// function multiply(...param) {
//   let multiplyNum = 1;
//   if (param === "" || param === isNaN) {
//     return "not number";
//   }
//   for (let i = 0; i < param.length; i++) {
//     multiplyNum *= param[i];
//   }
//   return multiplyNum;
// }
// const answer = console.log(multiply(2, 3, 4, 2,));

// LAB 1.2
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
// function filterOutOdds(...number) {
//   let oddNum = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       //   console.log(number[i]);
//       oddNum += ` ${number[i]}`;
//     }
//   }
//   return oddNum;
// }
// const result = console.log(filterOutOdds(1, 2, 3, 4));

//Destructuring
//Noob
// const arr = ["john", "Doe", 27];
// const firstName = arr[0];
// const lastName = arr[1];
// const fullname = arr[0] + arr[1];
// //มาเป็น Destructuring
// const [firstName, lastName] = ["john", "Doe", 27];
// const [, , age] = ["john", "Doe", 27];
