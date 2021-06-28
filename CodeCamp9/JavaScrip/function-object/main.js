// LAB1
// function sayHelloWorld() {
//   let message = "Hello World";
//   alert(message);
// }
// sayHelloWorld();

// LAB2
// function sayHelloWorld() {
//   let message = prompt("พิมพ์ Hello");
//   alert(message);
// }
// sayHelloWorld();

// LAB3
// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *
// }

// logMessage(message);
// //ใช้message localจากภายในฟังก์ชั่นก่อน
// console.log(message); // **
// //ใช้messageจาก global

// let name = "John";

// function sayHi(input) {
//   console.log(name); // ***john
//   //ได้johnเพราะnameไม่ได้ใช้ let const ในการประกาศตัวแปรใหม่ จึงไปดึงค่าnameมาจากglobal ซึ่งก็คือjohn
//   name = input;
// }

// sayHi();
// console.log(name); // ****
// //ได้undefined เพราะในฟังก์ชั่น name = input ค่าname global ได้อัพเดทเป็น input เมื่อlogเรียกมาจึงได้ค่าundefined
//เฉลย ได้undefind เพราะ sayHi()ส่งค่าว่างไปให้ input ทำให้ input มีค่าเป็น undefind เมื่อถูก name = input ทำให้ name มีค่าเป็น undefind ซึ่ง
//name ในฟังก์ชั่น คือตัวเดียวกันกับ name ที่global ทำให้console.log(name); จึงได้ค่าเป็น undefind

// LAB4
// function sayHi(name) {
//   let name = "Guest";
//   console.log(name); // *
//   //error Uncaught SyntaxError: Identifier 'name' has already been declared
//   //เพราะsayHi("Jim"); ได้ทำการอัพเดทค่าparamiter name ให้เป็นJim แต่ในฟังก์ชั่น
//   //มีคำสั่งประกาศค่าlet name = "Guest"; ซึ่งขัดแย้งกับค่า paramiter name ที่ประการไว้ด้านบน
//   //จึงเกิดerror
// }
// sayHi("Jim");

// LAB5
// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // *
// //sendTo(sender คือการประกาศตัวแปรซื่งตัวแปร sender มีการประกาศค่าตัวแปรsender = Matt อยู่ด้านบนอยู่แล้ว จึงส่งค่าMatt ไปให้ paramiter form
// sendTo(null); // **
// //null เป็นตัวแปรเหมือนตัวเลข เมื่อถูกส่งไปแทนค่าในparamiter จึงได้ออกมาเป็นnull ส่วนparamiter to ไม่มีการส่งค่ามาให้ จึงได้ค่าเป็น undefind

// const sender = "Matt";

// function sendTo(to, from = "CC") {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo("Max"); // ***
// //From CC to Max เพราะ ส่งค่า "Max" ไปให้ to ตัวเดียว ไม่มีการส่งค่าให้ form ดังนั้น form จึงใช้ค่าdefault =CC
// sendTo("Ben", "Jay"); // ****
// //แทนค่ากันปกติ

// LAB6
// let number1 = +prompt("ใส่เลขครั้งที่หนึ่ง");
// let number2 = +prompt("ใส่เลขครั้งที่หนึ่ง");
// function multiply(number1, number2) {
//   alert(number1 * number2);
// }
// multiply(number1, number2);

// LAB7
// let number1 = +prompt("ใส่เลขครั้งที่หนึ่ง");
// let number2 = +prompt("ใส่เลขครั้งที่หนึ่ง");
// function min(number1, number2) {
//   console.log(--number1, --number2);
// }
// min(number1, number2);
//เฉลย
// ทางเลือกที่1
// function min(a, b){
//     if (a<b){
//         return a;
//     } else {
//         return b;
//     }
// }
// วิธีที่2
// function min(a,b){
//     if(a<b) return a;
//     return b;
// }
// วิธีที่3
// function min(a, b) {
//   return a < b ? a : b;
// }

// LAB8
// let username = prompt("Username");
// let password = prompt("Password");
// function login(username, password) {
//   if (username === "admin" && password === "P@ssw0rd") {
//     return alert("Login success");
//   } else {
//     alert("Username or Password is incorrect !!!");
//   }
// }
// login(username, password);

// เฉลย
// วิธีที่1
// function login(username, password) {
//   if (username === "admin" && password === "P@ssw0rd") return true;
//   return false;
// }
// // วิธีที่2
// function login(username, password) {
//   return username === "admin" && password === "P@ssw0rd";
// }

// LAB9
// let number = +prompt("put number");
// function primeNumber(number) {
//   if (number % number === 0) {
//     return alert("This is prime number");
//   } else {
//     alert("this is number");
//   }
// }

// primeNumber(number);
// เฉลย
// function isPrime(number) {
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }
// function logPrimeNumber(number) {
//   for (let i = 2; i <= number; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }
// LAB1 2. Function Expression

// const multiply = function (number1, number2) {
//   return number1 * number2;
// };

// console.log(multiply(17, 7));

// LAB2
// const showModal = alert;
// showModal("Execute modal"); //*Execute modal

// const showModal = alert();
// showModal("Execute modal"); //**Execute modal
//เพราะ alert() เป็นค่าว่าง ทำให้กลายเป็น alert()("Execute modal"); error

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

// LAB4;
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// console.log(answer); // *
// console.log(answer(1337)); // **
// console.log(magic(1337)(42)); // ***
