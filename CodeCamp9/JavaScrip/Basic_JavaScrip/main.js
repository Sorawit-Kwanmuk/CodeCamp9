// console.log('This is from external javascript file');
// LAB1, LAB3
// alert('My name is Sorawit Kwanmuk');
// alert('คำสั่ง alert จะแสดงกล่องข้อความใน browser');
// prompt('Please Enter your name');
// confirm ('Are you sure you want to delete ?')
//    ด้านล่างconst name; ไม่ได้กำหนดค่าทำให้error
// const name;
// const name= 'Bill';

// let name;
// name = 'Bill';
// console.log(name);

// LAB1
// let name, personal;
// name ='Bill';
// personal = name ;
// alert(personal);

// LAB2
// let money, nameDad, nameMom, location, age;
// myMoney = 0;
// nameDad = 'John Doe';
// nameMom = 'Jane Doe';
// myAdress = 'Ratchathewi';
// universAge = '23';

// LAB3
// let user, role;
// user = 'iamhero';
// role = 'customer';
// alert(user);

// LAB4
// const firstName;
// let lastName;
// var nickName;
// firstName = 'Sorawit';
// lastName = 'Kwanmuk';
// nickName = 'Bill';
// const firstName;
// let lastName;
// var nickName;
// firstName = 'Jotn';
// lastName = 'Doe';
// nickName = 'Man';
// birthDate = '02/04/1998'; ไมม่ควรทำอย่างยิง

// LAB5
// const BRAND_NAME = 'I am a hero';

// blacktict ` example

// let firstName = 'John';
// let lastName = 'Doe';
// // let fullName = firstName + ' ' + lastName; OLD
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName)

// let func = alert(`Hello`);
// console.log(typeof alert);

// LAB1
// const country = `Thailand`;
// const continent = `Asia`;
// console.log(`number is ${2}`);
// console.log(`result is ${1 + 3}`);
// console.log(`I live in ${country}`);
// console.log(`I live in ${country}, ${continent}`);
// console.log(`I live in ${country + `, ` + continent}`);
// console.log(`I live in ${(country, continent)}`);

// LAB2
// const name = `Sorawit`;
// const sername = `Kwanmuk`;
// const age = `23`;
// const address = `Bankkok`;
// console.log(`Full Name: ${name} ${sername}, Age:${age}, Address ${address}.`);

// typeof `x`;
// typeof x;
// typeof ``;
// typeof Infinity;
// typeof (100 / 0);
// ได้คำตอบเป็นstring
// typeof (1 + `3`);
// ได้คำตอบเป็นint
// typeof (1 * `a`);
// typeof null;

// อัพเดทค่าตัวแปรให้เป็น null, undenfined
// let a = 10;
// a = null;
// a = undefined;

// LAB1 แปลงค่าเป็นstring
// let a = undefined;
// let b = 2;
// let c = a++;
// let d = `${a}`;
// let e = `${b}`;
// let f = `${c}`;
// console.log(`${d} ${e} ${f}`);
//undefined แปลงได้ `undefined`
//ที่aได้ค่าเป็น nan ไม่ใช่ `undefined` เพราะในข้อ c ค่า a ได้ทำการ++
//`undefined`++ ได้ค่าเป็น nan vscode ได้ทำการอัพเดท a ให้เป็น nan
//f จึงได้คำตอบเป็น nan
//2 แปลงได้ `2`
//c แปลงได้ `undefined`++ ได้ค่าเป็น nan

// LAB2 แปลงค่าเป็นตัวเลข
// let a = undefined;
// let b = null;
// let c = b + `4 2`;
// let d = +a;
// let e = +b;
// let f = +c;
// console.log(`${d} ${e} ${f}`);
//a undefined แปลงค่าได้ nan
//b null แปลงค่าได้ 0
//c b=> null=0 => 0+`4 2` `ในระหว่าง4กับ2มีช่องว่างทำให้ไม่สามารถ

// LAB3 แปลงค่าเป็น boolean
// let a = undefined;
// let b = ` `;
// let c = !b;
// let d = !!a;
// let e = !!b;
// let f = !!c;
// console.log(`${d} ${e} ${f}`);
//undefined, null, 0, nan, ` ` แปลงได้ค่าเป็น false
//ค่าอื่นนอกจากนี้ได้ค่าเป็น true

//LAB4
// console.log(`` + 1 + 0);
// console.log(`` - 1 + 0);
// console.log(true + false);
// console.log(6 / `3`);
// console.log(`2` * `3`);
// console.log(`  -9  ` - 5);
// console.log(`  -9  ` + 5);
// console.log(`4px` - 2);
// console.log(2 + 4 + `px`);
// console.log(null + 1);
// console.log(undefined + 1);
//``+ แปลงค่าเป็น string 1 และ 0 จึงกลายเป็น string ต่อกัน
//``แปลงค่าได้0 - 1 + 0 = -1
//แปลง true กับ false ได้ 1 กับ  0
//`3` แปลงเป็ยเลขได้ 3
//`2`*`3` แปลงค่าเป็น 2*3
//`  -9  ` - 5 แปลงค่าได้ -9-5
//`  -9  ` - 5 แปลงได้ `-9`+ เนื่องจากเจอ string+ ทำให้แปลงค่าทั้งหมดเป็น string
//`4px` ไม่สามารถแปลงค่าเป็นตัวเลขได้จึงได้ค่าเป็น nan
// 2+4=6 +string 6 จึงกลายเป็น string ต่อกัน
//null แปลงค่าได้ 0 = 0+1
//undefined แปลงค่าได้ nan = nan + 1 = nan

// LAB5
// let a = 0;
// a = ++a;
// a += 3;
// a *= 17;
// a /= 7;
// console.log(`${a}`);
// 5

// LAB6
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;
// console.log(`${a} ${b} ${c} ${d} ${e}`);
// let a = 1; ดังนั้น a = 1
// let b = 2; ดังนั้น b = 2
// let c = a++; a++ คือใช้ค่าเดิมก่อนนำไปบวก a เดิมมีค่า = 1  ดังนั้น c = 1
// หลังจาก a++ ไปแล้ว a++ = 1++ = 2 => a เก็บค่าเป็น 2 ดังนั้น a = 2
// let d = ++c; ++c คือบวกค่าก่อนนำไปใช้ c เดิม = 1 ++c=> ++1 = 2 c เก็บค่าเป็น 2 ดังนั้น c =2 และ d = 2
// let e = ++d + d++ + d; ++d คือบวกเพิ่อมค่าก่อนนำมาใช้ d ค่าเดิมคือ 2 => ++d = ++2 = 3 d เก็บค่าเป็น 3
// 3 + d++ +d => d++ คือใช้ค่าเดิมก่อนนำไปบวก d ค่าเดิมคือ 3 = 3 + 3 +d => d++ = 3++ d เก็บค่าเป็น 4
// e = 3 + 3 + d => 3 + 3 + 4 = 10 => e เก็บค่าเป็น 10
// a = 2
// b = 2
// c = 2
// d = 4
// e = 10

// LAB7
// const answer1 = +prompt("Enter first number");
// const answer2 = +prompt("Enter second number");
// alert("Answer is " + (answer1 + answer2));
// console.log("answer1 is " + answer1);
// console.log("answer2 is " + answer2);
//ถ้ากดcansel ค่าที่ได้จะเป็น nall แปลงnullเป็น number จะได้ค่าเป็น0

// LAB8
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// alert(c);
//https://docs.google.com/presentation/d/1cV72x-aXekzFT0OoXy2QXXHeId7D5l_Rq4YKRpu6Jeo/edit#slide=id.g6eee719182_1_200
// tisition error
//วิธีแก้
// alert(c.toFixed(2));
//เลขในวงเล็บด้านหลังคือจำนวนจุดทศนิยม

// LAB9
// let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);
// console.log(a);
//เฉลย
//ทำในวงเล็บก่อน ต่อมาคือ คำ*/ แล้วค่อย +-
//? + +null nullในที่นี้ เป็นไบนารี่ ให้ทำไบนารี่ก่อน
// 1 * '4' = 4
//4 + +null =4 => ทำ+null ก่อนเพราะเป็นไบนารี่
//4 + +' '=1
//'5' * 2 = -10
// 4 - 10 = -6
//7 + 2 + "" + +!!undefined
//9 + "" + 0 = String 90
//-6 + +('90')
//e = 84

//ที่ทำเอง
//(7 + 2 + "" + +!!undefined) =>  9 + "" + false => 9 + "" + 0 => มี +"" กลายเป็น string 9 และ 0 กลายเป็น string ต่อกันเป็น (90)
//(7 + 2 + "" + +!!undefined) = (90) String ถูกแปลงเป็นตัวเลข = 90
//1 * "4" + +null + +" " - "5" * 2 => 1 * "4" => 1 * 4 = 4
//4 + null = 4 + 0 = 4
//4 + +" " - "5" * 2 => 4 + +" " - 10 => 4 -10 = -6
//a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);
//a = -6 + 90
//a = 84

// exหน้า116 slidr part1
// เปรียบเทียบ
// 'Cat' > 'Dog'
// ได้ค่าเป็น false เพราะค่า unicode C = 67 D = 68
// ถ้าค่าตัวแรกเท่ากัน ค่าที่ยาวกว่าจะชนะ
// 'Cat' > 'Cat1'
// ได้ค่าเป็น false

// Lab1 การเปรียบเทียบ
// console.log("1" > 4);
// console.log("" <= 1);
// console.log("apple" > "pineapple");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
//console.log('1' > 4);
//แปลง '1' เป็น ตัวเลข 1 > 4 = false
// console.log('' <= 1);
// "" = 0  ดังนั้น 0 <= 1 เป็น true
// console.log("apple" > "pineapple");
//pineapple ยาวกว่า apple = false
//console.log(undefined == null); true
//console.log(undefined === null); false
//console.log(NaN !== 2);
//NaN (Not a Number) ไม่เท่ากับ ตัวเลข true
//NaN ไม่เท่ากับอะไรเลย
//NaN (Not a Number) === NaN (Not a Number) false
//NaN ไม่เท่ากับอะไรเลย รวมถึงกับตัวมันเอง
//NaN < > <= => เปรียบเทียบกับอะไรก็จะได้ค่าเป็น false

// ์NOT ให้ผลตรงข้ามกับค่าเดิม
// เช่น!true = false

// let year = prompt('In which year was the ECMAScript-2015 specification published?');
// let message = '';
// if (year === '2015') {
//     message = 'You are right!';
// } else {
//     message = 'You are wrong'
// }

//เขียนแบบConditional operator ‘?’ หรือ ternary
// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?"
// );
// let message = year === "2015" ? "Your are right" : "You are wrong";
// alert(message);

// LAB Conditional operator ‘?’
// LAB 1
// if (0) {
//   alert("Zero");
// } else {
//   alert("Nooo");
// }
// ตอบ;alert("Nooo")
//ถ้า0ไม่ได้ทำอะไรเลย จะถูกเปลี่ยนเป็น booleen 0=false จึงalertเป็น Nooo

// LAB2
// if (" ") alert("Yes");
// else alert("Nooo");
// ตอบ;alert("Yes")

// LAB3
// let myName = prompt("เดาชื่อฉันซิ");
// let message = myName === "Bill" ? "ถูกต้อง" : "ผิด";
// alert(message);

// LAB4
// let number = +prompt("พิมพ์ตัวเลข"); ไม่จำเป็นต้องใส่+ เพราะเมื่อไปใช้ในif เมื่อเจอ ><= ตัวแปล number จะถูกแปลงค่าเป็นตัวเลข
// let number = +prompt("พิมพ์ตัวเลข");
// if (number > 0) {
//   message = "Positive number";
// } else if (number === "0") {
//   message = "Zero";
// } else if (number < 0) {
//   message = "Negative number";
// } else {
//   message = "Invalid number";
// }
// alert(message);

//LAB5
// let number = +prompt("พิมพ์ตัวเลข");
// const remainder = number % 2;
// if (remainder === 0) {
//   message = "Even number";
// } else if (remainder % 2 === 1) {
//   message = "Odd number";
// } else [(message = "Invalid number")];
// alert(message);

//LAB6
// trim คือการremove white space ด้านหน้า และด้านหลังออก
// let number1 = prompt("พิมพ์ตัวเลขครั้งแรก");
// let number2 = prompt("พิมพ์ตัวเลขครั้งที่2");
// sumNumber = +number1 + +number2;
// let type = isNaN(sumNumber);
// if (number1 === null || number2 === null) {
//   message = "Invalid number";
// } else if (number1.trim() === "" || number2.trim() === "") {
//   message = "Invalid number";
// } else if (type === true) {
//   message = "Invalid number";
// } else {
//   message = sumNumber;
// }
// alert(message);
//เฉลย
// let firstNumber = prompt("พิมพ์ตัวเลขครั้งแรก");
// let secondNumber = prompt("พิมพ์ตัวเลขครั้งที่2");
// if (firstNumber === null || secondNumber === null) {
//   alert("invalid number");
// } else {
//   if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//     alert(+firstNumber + +secondNumber);
//   } else {
//     alert("invalid number");
//   }
// }

// // LAB7
// let username = prompt("Username");
// let password = prompt("Password");
// let message = "";
// if (username === "") {
//   message = "username is required";
// } else if (password === "") {
//   message = "password is required";
// } else if (
//   (username === "admin" && password === "1234") ||
//   (username === "john" && password === "qwerty")
// ) {
//   message = "Hello " + username;
// } else {
//   message = "invalid username or password";
// }
// alert(message);
// เฉลย
// const username = prompt("Username");
// const password = prompt("Password");
// if (username === "") { //!usename
//   alert("username is required");
// } else if (password === "") {//!passwore ใช้ได้เหมือนกัน
//   alert("password is required");
// } else {
//   if (
//     (username === "admin" && password === "1234") ||
//     (username === "john" && password === "qwerty")
//   ) {
//     alert(`Hello ${username}`);
//   } else {
//     alert("invalid username or password");
//   }
// }
// LAB8
// let point = +prompt("ใส่คะแนนที่นี่!");
// let message = "";
// if (point >= 80) {
//   message = "A";
// } else if (point >= 70) {
//   message = "B";
// } else if (point >= 60) {
//   message = "C";
// } else if (point >= 50) {
//   message = "D";
// } else {
//   message = "F";
// }
// alert(message);
//เฉลย
// const grade = prompt("Enter score");
// if (isNaN(grade) || grade === "") {
//   alert("Please enter your score");
// } else if (grade >= 80) {
//   alert("A");
// } else if (grade >= 70) {
//   alert("B");
// } else if (grade >= 60) {
//   alert("C");
// } else if (grade >= 50) {
//   alert("D");
// } else {
//   alert("F");
// }
// LAB9
// let age = prompt("How old are you");
// let message = age >= "18" ? "Allowed" : "Not allowed";
// alert(message);

// LAB10
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

// let login = prompt("Enter username");
// let message = "";
// let message = login == "Employee" ? "Hello" : "Not allowed";

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// //เฉลย
// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
// alert(message)
// LAB11 ???????????????????????????????????????????????????????????//
// const grade = prompt("Enter score");
// let message =
//   grade >= 80
//     ? "A"
//     : grade >= 70
//     ? "B"
//     : grade >= 60
//     ? "C"
//     : grade >= 50
//     ? "E"
//     : "F";
// alert(message);
// LAB12 ????????????????????????????????????????????????????????????

// The "switch" statement
// const age = +prompt("Enter your age");
// switch (age) {
//   case 34:
//     alert("Too young");
//     break;
//   case 35:
//     alert("Exactly!");
//     break;
//   case 36:
//     alert("Too old");
//     break;
//   default:
//     alert("Not close");
// }
// LAB13 switch case
// const number = prompt("Enter number");
// switch (number) {
//   case "1":
//     alert("One");
//     break;
//   case "0":
//     alert("Zero");
//     break;
//   case "-1":
//     alert("Minus zero");
//     break;
//   default:
//     alert("Invalid number");
// }

// LAB14
// let a = +prompt('a?');

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

// let a = +prompt("a?");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
//   default:
//     alert("Invalid number");
// }

// LAB15
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }

// const browser = prompt("Input your browser");
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }
//LAB1 falsy
// alert(null || 2 || undefined);
// alert(alert(1) || 2 || alert(3));
// //มันไม่alert(1) returnค่า มันเปรียบเสมือนว่าเป็น
// // undefine ซื่งมีค่าเท่ากับ false จึงไปดูตัวถัดไปซึ่งคือ2 จึงalert(2)
// alert(1 && null && 2);
// alert(alert(1) && alert(2));
// alert(null || (2 && 3) || 4);

// LAB2
// if (-1 || 0) alert("first");
// if (-1 && 0) alert("second");
// //0 คอนเวิด เป็น false falseเละอะไรก็ได้false จึงไม่มีการalertค่าใดๆ
// if (null || (-1 && 1)) alert("third");
// // andมีความสำคัญมากกว่า หรือ จึงทำ-1 && 1ก่อน คอนเวิดได้ true

// LAB3
// let user = prompt("ชื่อผู้ login");
// if (user === "" || user === null) {
//   user = "guest";
// }
// if (user === "codecamp") {
//   const password = prompt("password");
//   if ((password = "123456")) {
//     user = "codecamp";
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   user = "guest";
// }
// alert("Welcome " + user);

// เฉลย
// let user = prompt("Enter username");
// if (user === "" || user === null) {
//   user = "guest";
// }
// let isCorrectPassword = false;
// if (user === "codecamp") {
//   const password = prompt("Enter password");
//   if (password === "123456") {
//     user = "codecamp";
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   user = "guest";
// }
// // if(user === 'codecamp' && password ====='123456'){
// //     alert(`welcome ${user}`);
// // }
// //ผิด เพราะถึงใส่passwordผิดก็ยังขึ้น welcome codecamp อยู่ เพราะค่าpasswordใช้ได้แค่ใน
// // {
// //     const password = prompt('Enter password');
// //     if (password ==='123456') {
// //         user = 'codecamp'
// //     } else {
// //         alert('Wrong password');
// //     }
// // } else {
// //     user = 'guest';
// // }

// //นี่คือวิธีแก้password ไปเพิ่มบรรทัด if (isCorrectPassword ด้านบน
// if (isCorrectPassword || user === "guest") {
//   alert(`welcome ${user}`);
// }

// LAB3 แบบ refactor falsy ที่เรียนมา ถ้าข้อมูลที่ใส่มาแปลงได้เป็นfalse userจะไปใช้ 'guest'แทน
// let user = prompt("Enter username") || "guest";
// let isCorrectPassword = false;
// if (user === "codecamp") {
//   const password = prompt("Enter password");
//   if (password === "123456") {
//     user = "codecamp";
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   user = "guest";
// }
// (isCorrectPassword || user === "guest") && alert(`welcome ${user}`);
//falsesy value ในกรณีที่ค่าในวงเล็บแรก เป็นtrue ให้ไปทำงานงานวงเล็บ2
//แต่ถ้าวงเล็บแรกเป็นfalse ให้สิ้นสุดการทำงานที่วงเล็บแรกเลย

