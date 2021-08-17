// syncronus
// console.log("A");
// console.log("B");
// console.log("C");

// //ผลลัพธ์
// // A: 1
// // B: 2
// // C: 3

// // asyncronus
// console.log("A");
// setTimeout(() => {
//   console.log("B"), 1000;
// });
// console.log("C");

//ผลลัพธ์
// A: 1
// C: 2
// B: 3 //เพราะ  setTimeout เป็น asyncronus ไม่ต้องรอบันทัดก่อนหน้าในการทำงาน

// console.log('A');
// const id = setTimeout(() => console.log('*'), 2000);
// setTimeout(() => clearInterval(id), 1000);
// console.log('B');

//callbacks function
// function a(fn) {
//   fn();
// }

// a(() => console.log('A'));

// [1, 2, 3].map(item => {});
