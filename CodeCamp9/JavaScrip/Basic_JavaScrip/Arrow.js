// let calcBMI = (weight, height) => {
//     const heightSquare = height ** 2;
//     const bmi = weight / heightSquare;
//     return bmi;
//   };
// LAB1
// let number = (a, b) => a * b;
// console.log(number(23, 9));

// LAB2

// LAB3;
// const square = (n) => {
//   n ** 2;
// };

// console.log(square(7)); // *
//เป็นundefined เพราะ มีการเปิด{} จะถือว่ามี function body จำเป็นต้องมี return

// const calcCircleArea = (r) => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // **28.274333882308138

// LAB4
// const logName = (name) => console.log(name);
// const logName = name => console.log(name);
//เหมือนกัน

// LAB5
// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Do you agree?",
//   (let = () => alert("You agreed.")),
//   (let = () => alert("You canceled the execution."))
// );

// LAB6
// const convertDayToSecond = (day) => day * 24 * 60 * 60;
// console.log(convertDayToSecond(2) + " second");

// LAB7
// const monSeven = (number) => (number % 7 === 0 ? true : false);
// const monSeven = (number) => number % 7 === 0;
//ternary มีค่าเท่ากัน
// LAB8
// const score = prompt("put Score Win, Draw, Lose");
// let i = 0;
// let allScore = 0;
// let scoreCalculate = (score) => {
//   if (score === "Win") {
//     i = i + 3;
//     allScore = allScore + i;
//     alert(i);
//   } else if (score === "Draw") {
//     i = i + 1;
//     allScore = allScore + i;
//     alert(i);
//   } else if (score === "Lose") {
//     i = i + 0;
//     allScore = allScore + i;
//     alert(i);
//   } else {
//     alert("it not score");
//   }
//   return;
// };

// scoreCalculate(score);
// console.log(allScore);

// const scoreW = +prompt("ชนะกี่ครั้ง");
// const scoreD = +prompt("เสมอกี่ครั้ง");
// const scoreL = +prompt("แพ้กี่ครั้ง");
// let i = 0;
// let scoreCalculate = (scoreW, scoreD, scoreL) => {
//   if (scoreW >= 0) {
//     scoreW = scoreW * 3;
//     scoreD = scoreD * 1;
//     scoreL = scoreL * 0;
//     i += scoreW + scoreD + scoreL;
//   } else {
//     alert("This is not a score.");
//   }
//   console.log(i);
// };
// scoreCalculate(scoreW, scoreD, scoreL);

// LAB9
// let year = prompt("In put year");
// let leapYear = (year) => {
//   if (+year % 100 === 0 || +year % 400 === 0) {
//     alert("this is not a leap year");
//   } else if (+year % 4 === 0) {
//     alert("This is a leap year.");
//   } else {
//     alert("that's not a year");
//   }
// };
// leapYear(year);

// LAB10
// let day = +prompt("ใส่วันที่เกิด");
// let month = +prompt("ใส่เดือนที่เกิด");
// let year = +prompt("ใส่ปีที่เกิด");
// let birthDayCal = (day, month, year) => {
//   if ((isNaN !== day, month, year)) {
//     day = 31 - day;
//     month = (12 - month) * 30;
//     year = (2020 - year) * 365;
//     1;
//     countDay = day + month + year;
//     alert(`${countDay} days`);
//   } else {
//     alert("That's not a birthday");
//   }
// };
// birthDayCal(day, month, year);
// เฉลย
// const calAge = (birthYear) => {
//   let age = 2020 - birthYear;

//   return age;
// };

// LAB11
// let farenheit = +prompt("enter temperature");
// let celsius = 0;
// let farenheitChange = (farenheit) => {
//   if (isNaN !== farenheit) {
//     celsius = ((farenheit - 32) * 5) / 9;
//     alert(`${celsius.toFixed(2)} °C
//     `);
//   }
// };
// farenheitChange(farenheit);
// LAB12
// let numFactorial = prompt("input factorial");
// let factorial = (numFactorial) => {
//   let answer = 1;
//   if (numFactorial == 0 || numFactorial == 1) {
//     return answer;
//   } else {
//     for (let i = numFactorial; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// };
// answer = factorial(numFactorial);
// alert("The factorial of " + numFactorial + " is " + answer);
