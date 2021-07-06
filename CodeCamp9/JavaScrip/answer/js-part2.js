// Lab 1.1
// function sayHelloWorld() {
//   alert('Hello World');
// }

// sayHelloWorld();

// Lab 1.2
// const input = prompt('Enter your name');
// const input2 = prompt('Enter your name too')

// function sayHelloUser() {
//   alert(`Hello ${input}`);
// }

// function sayHelloUser2() {
//   alert(`Hello ${input2}`);
// }

// sayHelloUser();
// sayHelloUser2();

// function sayHelloUser(name) {
//   alert(`Hello ${name}`);
// }

// sayHelloUser(input);
// sayHelloUser(input2)

// Lab 1.6
// console.log(multiply(2, 3));

// function multiply(a, b) {
//   return a * b;
// }

// Lab 1.7
// วิธีที่ 1
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// วิธีที่ 2
// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }
// วิธีที่ 3
// function min(a, b) {
//   return a < b ? a : b;
// }

// Lab 1.8
// วิธีที่ 1
// function login(username, password) {
//   if (username === 'admin' && password === 'P@ssw0rd') return true;
//   return false;
// }
// // วิธีที่ 2
// function login(username, password) {
//   return username === 'admin' && password === 'P@ssw0rd';
// }

// Lab 1.9
// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// function logPrimeNumber(number) {
//   for (let i = 2; i <= number; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }

// Lab 1.12
// function getLongText() {
//   return (
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
// }

// console.log(getLongText()); // *

// Lab 1.13
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) return true;
//   return confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }

// Lab 1.14
// function max(a, b, c, d) {
//   if (a === undefined) {
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
//           if (isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(d)) {
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

// function isNumeric(number) {
//   return !(!number || number.trim() === '' || !+number);
// }

// ลอง log ฟังก์ชันแบบมีวงเล็บตามหลังชื่อฟังก์ชันกับไม่มีวงเล็บตามหลังชื่อฟังก์ชัน
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum); // (*)
// console.log(sum(2, 5)); // (**)

// ลองทดสอบ callback function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('You agreed.');
// }
// function showCancel() {
//   alert('You canceled the execution.');
// }
// // functions showOk, showCancel are passed as arguments to ask
// ask('Do you agree?', showOk, showCancel);

// Lab 2.1
// const multiply = function (a, b) {
//   return a * b;
// };

// Lab 2.3
// const checkPermission = function (role, success, reject) {
//   if (role === 'ADMIN') return success();
//   return reject();
// };

// checkPermission(
//   'ADMIN',
//   function () {
//     alert('ACCESS GRANTED');
//   },
//   function () {
//     alert('ACCESS DENIED');
//   }
// );

// Lab 2.4
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// // answer = function(x) {
// //   return x * 42;
// // }

// console.log(answer); // *
// console.log(answer(1337)); // **
// console.log(magic(1337)(42)); // ***

// console.log(multiply(17, 7));

// Lab 3.1
// const multiply = (a, b) => a * b;
// console.log(multiply(23, 9));

// Lab 3.6
// const convertDayToSecond = day => day * 24 * 60 * 60;

// Lab 3.7
// const modSeven = number => (number % 7 === 0 ? true : false);
// shorter version
// const modSeven = number => number % 7 === 0;

// Lab 3.8
// const calcFootballPoint = (win, draw) => win * 3 + draw;

// // Lab 3.9
// const isLeapYear = year => {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   }
//   return year % 4 === 0;
// };

// Lab 3.10
// const calcAge = birthYear => {
//   let day = 0;
//   for (let i = birthYear; i <= 2020; i++) {
//     day += isLeapYear(i) ? 366 : 365;
//   }
//   return day;
// };

// console.log(calcAge(2019));

// Lab 3.11
// const convertFarenheitToCelsius = fah => ((fah - 32) * 5) / 9;

// Lab 3.12
// const factorial = n => {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// };

// const factorial = n => {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));
