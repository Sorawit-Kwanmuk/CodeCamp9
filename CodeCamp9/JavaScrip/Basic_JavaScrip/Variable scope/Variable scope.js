// Lab 3.1
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร;
// let name = "John";
// function sayHi() {
//   alert("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // *Hi Pete name๔ุกอัพเดทให้เป็น pete ก่อนที่จะเรียกใช้function

// LAB3.2
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function makeWorker() {
//   let name = "Pete";
//   return function () {
//     alert(name);
//   };
// }
// let name = "John";
// let work = makeWorker();
// work(); // * Pete เพราะเป็น local

// LAB3.3
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร;
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // *Hello, John ใช้ user local กับ phrase global

// LAB3.4
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร;
// let x = 1;
// function func() {
//   console.log(x); // * error เพราะlog ก่อนที่จะประกาศตัวแปรx มำให้logหาxไม่เจอ
//   let x = 2;
// }
// func();

// LAB3.5
// จงเขียนฟังก์ชัน inBetween(a, b) และ inArray(...arr) โดยให้ได้ผลลัพธ์ตามตัวอย่างด้านล่าง
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {}
// for (let value of arr) {
//   if (arr>=a) {

//   }
// }

// alert(arr.filter(inBetween(3, 6))); // expected: 3,4,5,6
// alert(arr.filter(inArray(1, 2, 10))); // expected: 1,2

// arr.filter((item,index,array)=>())
// arr.filter(inBetween(3, 6))
// function inBetween(){
//     return (item,index,array) => {}
// }
