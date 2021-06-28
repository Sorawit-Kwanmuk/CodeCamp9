// LAB3
// const role = prompt("Input ADMIN");
// let checkPermission = function (role, a, b) {
//   if (a(role)) {
//     return a;
//   } else {
//     b(role);
//   }
// };
// let a = function () {
//   if (role === "ADMIN") {
//     alert("ACCESS GRANTED");
//   }
// };
// let b = function () {
//   if (role !== "ADMIN") {
//     alert("ACCESS DENIED");
//   }
// };
// checkPermission(role, a, b);
// เฉลย
// const checkPermission = function (role, success, reject) {
//   if (role === "ADMIN") return success();
//   return reject();
// };
// checkPermission(
//   "ADMIN",
//   function () {
//     alert("ACCESS GRANTED");
//   },
//   function () {
//     alert("ACCESS DENIED");
//   }
// );

// LAB4
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// console.log(answer); // *ƒ (x) {return x * 42;} เพราะกำหนดให้ anser=functionโดยไม่ได้ส่งค่าอะไรให้ฟังก์ชั่น
// console.log(answer(1337)); // **56154 เพราะส่งค่า1337ไปแทนxในฟังก์ชั่น
// console.log(magic(1337)(42)); // ***1764 เพราะส่งไป2ค่าจึงlogออกมาเป็นค่าหลัง
// เฉลย
//* ไม่่ได้ส่งค่าไป = answer = function
//**ส่งค่า 1337 ไป function ทำงานปกติ
//***ก้อนหน้าmagic(1337)แต่ในfunctionไม่มีparamiter ทำให้มีผลเท่ากับสั่งใช้งานfunction magic ทำให้มันreturn functionออกมา ก้อนหลัง(42) เมื่อเจอกับการเรียกใช้functionด้านหน้า มันจะเท่ากับการใส่42เข้าไปในfunction
