// เริ่มต้นใช้ javascript
// console.log('This is from external javascript file');

// เรียนรู้ function alert, prompt, confirm
// alert('Hello Codecamp');
// prompt('Please enter your name');
// confirm('Are you sure you want to delete ?');

// Lab 1, 3
// คำสั่ง alert จะแสดงกล่องข้อความใน browser
// alert('My name is Earth');

// ประกาศแบบนี้จะ error เนื่องจากไม่ได้ประกาศค่าเริ่มต้น
// const name;

// ประกาศแบบ const ต้องใส่ค่าเริ่มต้นเสมอ
// const name = 'Earth';

// ประกาศแบบ let หรือ var ไม่ต้องใส่ค่าเริ่มต้นก็ได้
// let name;
// name = 'Earth';
// console.log(name);

// Lab 3.1
// let person;
// let name;
// name = 'Earth';
// person = name;
// alert(person);

// Lab 3.3
// const user = 'iamhero';
// const role = 'customer';
// alert(username);

// Lab 3.4
// const firstName = 'Pisut';
// let lastName = 'Theeraphan';
// var nickname = 'Earth';
// // const firstName = 'Hasan';
// // let lastName = 'Samang';
// var nickname = 'Sun';
// birthDate = '1/1/2001'; // ไม่ควรทำ

// backtict example
// let firstName = 'John';
// let lastName = 'Doe';
// // let fullname = firstName + ' ' + lastName; // แบบเก่า
// let fullname = `My name is ${firstName} ${lastName}`;
// console.log(fullname);

// ทดลองใช้ typeof
// let func = alert('Hello');
// console.log(typeof alert);

// Lab 3.5
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 13;
// const address = '190 Mint';
// console.log(`Fullname: ${firstName} ${lastName}, age: ${age}, address: ${address}`);

// อัพเดตค่าตัวแปรให้เป็น null, undefined
// let a = 10;
// a = null;
// a = undefined;

// Lab 5.1
// let a = undefined;
// let b = 2;
// let c = a++;

// let d = String(a);
// console.log(d);
// let e = '' + b;
// console.log(e);
// let f = `${c}`;
// console.log(f);

// Lab 5.2
// let a = undefined;
// let b = null;
// let c = b + '4 2'; // 'null4 2'

// let d = Number(a);
// console.log(d);
// let e = +b;
// console.log(e);
// let f = c * 1;
// console.log(f);

// Lab 5.3
// let a = undefined;
// let b = ' ';
// let c = !b;

// let d = Boolean(a);
// console.log(d);
// let e = Boolean(b);
// console.log(e);
// let f = !!c;
// console.log(f);

// Lab 5.5
// let a = 0;
// a++;
// a += 3;
// a *= 17;
// a %= 7;
// console.log(a);

// Lab 5.6
// let a = 1;
// let b = 2;
// let c = a++; // a = 2, c = 1
// let d = ++c; // c = 2, d = 2
// let e = ++d + d++ + d; // e = 3 + 3 + 4 = 10, d = 4

// Lab 5.7
// let a = Number(prompt('Enter first number'));
// let b = +prompt('Enter second number');
// alert(a + b);

// Lab 5.8
// let a = 0.1;
// let b = 0.2;
// alert((a + b).toFixed(2));

// Lab 5.9
// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// 1 * '4' = 4
// 4 + +null = 4
// 4 + +' ' = 4
// '5' * 2 = -10
// 4 - 10 = -6
// (1 * '4' + +null + +' ' - '5' * 2) ได้ผลเป็น -6
// 7 + 2 + '' + +!!undefined ในวงเล็บ
// 9 + '' + 0 = '90' (ค่าในวงเล็บ)
// -6 + +('90') = 84

// String compare demo
// 'Cat' > 'Cat7'

// ตัวอย่างเขียน if else ให้เป็น ternary
// let year = prompt('In which year was ECMAScript-2015 specification published?');

// เขียนแบบปกติ
// let message = '';
// if (year === '2015') {
//   message = 'You are right!';
// } else {
//   message = 'You are wrong!';
// }

// เขียนแบบ ternary
// let message = year === '2015' ? 'You are right!' : 'You are wrong';
// alert(message);

// Lab 7.3
// const name = prompt('ทายชื๋อฉันซิ');

// if (name === 'Earth' || name === 'เอิธ') {
//   alert('ถูกต้อง');
// } else {
//   alert('ผิดนะ');
// }

// if (name === 'Earth' || name === 'เอิธ') alert('ถูกต้อง');
// else alert('ผิดนะ');

// Lab 7.4
// const inputNumber = prompt('Please enter a number');

// if (inputNumber > 0) {
//   alert('Positive number');
// } else if (inputNumber === '0') {
//   alert('Zero');
// } else if (inputNumber < 0) {
//   alert('Negative number');
// } else {
//   alert('Invalid number');
// }

// Lab 7.5
// const inputNumber = prompt('Please enter a number');

// const remainder = inputNumber % 2;
// if (remainder % 2 === 0) {
//   alert('Even number');
// } else if (remainder % 2 === 1) {
//   alert('Odd number');
// } else {
//   alert('Invalid number');
// }

// Lab 7.6
// const firstNumber = prompt('Please enter first number');
// const secondNumber = prompt('Please enter second number');

// const booFirstNumber = !!firstNumber;
// const booSecondNumber = !!secondNumber;

// const isValidFirstNumber = !isNan(firstNumber);

// if (booFirstNumber === true && booSecondNumber === true) {
//   alert('valid number');
// } else {
//   alert('invalid');
// }

// if (firstNumber === null || secondNumber === null) {
//   alert('invalid number');
// } else {
//   if (firstNumber.trim() === '' || secondNumber.trim() === '') {
//     alert('invalid number');
//   } else {
//     if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//       alert(+firstNumber + +secondNumber);
//     } else {
//       alert('invalid number');
//     }
//   }
// }

// Lab 7.7
// const username = prompt('Username');
// const password = prompt('Password');

// if (username === '' || username === null) { // !username
//   alert('username is required');
// } else if (password === '' || password === null) { // !password
//   alert('password is required');
// } else {
//   if ((username === 'admin' && password === '1234')
//   || (username === 'john' && password === 'qwerty')) {
//     alert(`Hello ${username}`);
//   } else {
//     alert('invalid username or password');
//   }
// }

// Lab 7.8
// const grade = prompt('Enter score');

// if (grade >= 80) {
//   alert('A');
// } else if (grade >= 70) {
//   alert('B');
// } else if (grade >= 60) {
//   alert('C');
// } else if (grade >= 50) {
//   alert('D');
// } else {
//   alert('F');
// }

// Lab 7.10
// let login = prompt('Enter username');
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';

// Lab 7.13
// const number = prompt('Please enter number');

// switch (number) {
//   case '1':
//     alert('One');
//     break;
//   case '0':
//     alert('Zero');
//   break;
//   case '-1':
//     alert('Minus one');
//   break;
//   default:
//     alert('Invalid number');
// }

// Lab 7.14
// let a = +prompt('a?');

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2, 3');
//     break;
// }

// Lab 8.3
// let user = prompt('Enter username');
// if (user === '' || user === null) {
//   user = 'guest';
// }

// let isCorrectPassword = false;

// if (user === 'codecamp') {
//   const password = prompt('Enter password');
//   if (password === '123456') {
//     user = 'codecamp';
//     isCorrectPassword = true;
//   } else {
//     alert('wrong password');
//   }
// } else {
//   user = 'guest';
// }

// if (isCorrectPassword || user === 'guest') {
//   alert(`welcome ${user}`);
// }

// Lab 8.3 refactor
// let user = prompt('Enter username') || 'guest';

// let isCorrectPassword = false;

// if (user === 'codecamp') {
//   const password = prompt('Enter password');
//   if (password === '123456') {
//     user = 'codecamp';
//     isCorrectPassword = true;
//   } else {
//     alert('wrong password');
//   }
// } else {
//   user = 'guest';
// }

// (isCorrectPassword || user === 'guest') && alert(`welcome ${user}`);

// Lab 9.3
// วิธีที่ 1
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// วิธีที่ 2
// for (let i = 1; i < 51; i++) {
//   console.log(i * 2);
// }

// วิธีที่ 3
// for (let i = 0; i < 101; i = i + 2) {
//   console.log(i);
// }

// // วิธีที่ 4
// let i = 2;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// Lab 9.4
// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumFinal = 0;
// let sumSquareTwo = 0;
// let sumSquareThree = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;

//   if (i % 2 === 0) {
//     sumEven += i;
//     sumSquareTwo += i ** 2;
//   } else {
//     sumOdd += i;
//   }

//   if (i % 3 === 0) {
//     sumSquareThree += i ** 2;
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   sum += i;

//   if (i % 2 === 0) {
//     sumEven += i;
//     if (i % 6 !== 0) {
//       sumFinal += i ** 2;
//     }
//   } else {
//     sumOdd += i;
//   }

//   if (i % 3 === 0 && i % 6 !== 0) {
//     sumFinal -= i ** 2;
//   }
// }

// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(sumFinal);

// Lab 9.5
// let sum = 100000;
// for (let i = 0; i < 10; i++) {
//   // sum = (sum * 2.5) / 100 + sum;
//   // หรือ
//   sum += 0.025 * sum;
// }
// console.log(sum.toFixed(2));
