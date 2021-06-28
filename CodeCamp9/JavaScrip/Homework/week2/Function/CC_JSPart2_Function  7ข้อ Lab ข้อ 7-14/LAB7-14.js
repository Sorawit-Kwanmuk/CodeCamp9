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

// LAB10
// function squareNum(num) {
//   const result = num * num;
// }

// console.log(squareNum(2)); // *undefined เพราะไปแสดงตัวแปรconst result = num * num;ในfunction จึงใช้local ไม่ได้ใช้2

// LAB11
// function sayHi(age) {
//   if (age < 12) alert("Hi kid");
// }
// console.log(sayHi); // *ƒ sayHi(age) {if (age < 12) alert("Hi kid");} เพราะไม่ได้ส่งค่าอะไรไป จึงlog ออกมาเป็นตัวfunctionเอง
// console.log(sayHi(10)); // **undefined เพราะหลังจากfunctionทำงานalerdไปแล้ว ค่าageจะถูกล้าง

// function sayHi(name) {
//   if (name) {
//     alert("Hi " + name);
//     return;
//   } else {
//     return "Who are you";
//   }
// }
// console.log(sayHi("John")); // ***undefined เพราะหลังจากfunctionทำงานalerdไปแล้ว ค่าnameจะถูกล้าง
// console.log(sayHi()); // ****ส่งเป็นค่าว่างจึงได้ค่าelse

// Lab 12
// function getLongText() {
//   return;
//   ("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
// }

// console.log(getLongText()); // *undefined เพราะหลังreturnมี; และLoremอยู่คนละบรรทัดกับreturn functionจึงทำงานไปจนถึงแค่returnแล้วจบการทำงาน

// LAB13
//ORIGIN
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
// ใช้ if แต่ห้ามใช้ else
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//       return confirm("Did parents allow you?");
//   }
// ใช้ ? แทน if
// function checkAge(age) {
//   age = age > 18 ? true : confirm("Did parents allow you?");
// }
// ใช้ || แทน if
// function checkAge(age) {
//   age > 18;
//   true || confirm("Did parents allow you?");
// }

// LAB14
// function max(n1, n2 = 0, n3 = 0, n4 = 0) {
//   console.log(Math.max(n1, n2, n3, n4));
// }
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); //9
// เฉลย
// function max(a, b, c, d) {
//   if (a !== undefined) {
//     return;
//   } else {
//     if (b === undefined) {
//       return isNumeric(a) ? +a : NaN;
//     } else {
//       if (c === undefined) {
//         return isNumeric(a) && isNumeric(b) ? (a > b ? a : b) : NaN;
//       } else {
//         if (d === undefined) {
//           if (isNumeric(a) && isNumeric(b) && isNumeric(c)) {
//             if (a > b && a > c) return a;
//             return b > c ? b : c;
//           } else {
//             return NaN;
//           }
//         } else {
//           if (isNumeric(a) && isNumeric(b) && isNumeric(c)) {
//             if (a > b && a > c && a > d) return a;
//             if (b > c && b > d) return b;
//             return c > d ? c : d;
//           } else {
//             return NaN;
//           }
//         }
//       }
//     }
//   }
// }
// //ไม่ทัน

// function isNumeric(number) {
//   return !(!number || number.trim() === "" || !+number);
// }
