// LAB1
// let billion = 1.375e12;
// console.log(billion);
// เฉลย
// const number = 1375000000000;
// const number = 1_375_000_000_000;
// const number = 1375e9;
// const number = 1.3755e12;

//LAB2
// const num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));
// เฉลย
// const number = 255;
// console.log(number.toString(2));
// console.log(number.toString(8));
// console.log(number.toString(16));

// LAB3
// let number = prompt("Input money");
// function point(number) {
//   number = number / 100;
//   console.log(`You have ${Math.floor(number)} points`);
// }
// point(number);

// เฉลย
// const calcPoint = sale => Math.floor(sale/100);

// LAB4

// const num = +prompt("Input number");
// function decimal(num) {
//   num = Math.floor(num.toFixed(2));
//   console.log(num);
// }

// decimal(num);

// เฉลย
// // const printNumber = (num) => {
// //   return (Math.floor(num * 100) / 100).toFixes(2);
// // };
// const printNumber = (num) => (Math.floor(num * 100) / 100).toFixes(2);
// console.log(printNumber(3.1289)); //3.13
// LAB5
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
//เกิดinfinit loop เพราะ มันไม่ใช่0.2เปะๆ มันคือ 0.2000000000000000000? เมื่อบวกตัวมันเองไปเลื่อยๆแต่ไม่มีวันเป็น10แบบเปะๆจึงเกิดเป็นinfinit

// LAB6
// เฉลย
// function random(min, max) {
//    return min + Math.random()*(max-min)
//    //สมสุติกำหนดให้1-5 =กว้าง4 ไม่นับค่าmax
// }

// LAB7
// function rollDice() {
//   return Math.floor(Math.random() * 6 + 1);
// }
//random 1-6 ต้องเปิดLAB6

// LAB8
// function circumference(r) {
//   return Math.PI * 2 * r;
// }

// LAB9
// function diagonal(w, l) {
//   return Math.sqrt(Math.pow(w, 2) + Math.pow(l, 2));//sqrt squareroot pow ยกกำลัง
// }

// LAB10
// function convertDegToRad = function(deg){
//     return (deg / 180)* Math.PI; //PI คือค่าพาย
// }

// const arr = ["Boon", "Earth", "Team", "May", "Toon", "Pang"];
// let i = 1;
// for (let item of arr) {
//   console.log(`${i}. Hello ${item}`);
//   i++;
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Hello ${arr[i]}`);
// }

// LAB 4.1
// const arr = ["Boon", "Earth", "Team", "May", "Toon"];

// LAB 4.2
// const arr = [1, 2, 4];
// const newArr = arr;

// arr[0] = 3;
// console.log(newArr[0]); // *3 เพราะ arr[0] = 3; อัพเดทค่าarrayเป็น3แล้ว

// LAB 4.3
// const styles = ["Jazz", "Blues"];
// styles[2] = "Rock-n-Roll ";
// styles[1] = "Classic";
// // styles.shift(); //ลบตัวแรก
// // styles.pop(); //ลบตัวสุดท้าย
// delete styles[0];
// console.log(styles.length);
// console.log(styles);

// LAB4.4
// const arr = [];
// let i = 0;
// while (1) {
//   let num = prompt("Input number");
//   if (isNaN(+num) || num === null || num === "") {
//     console.log("s");
//     break;
//   }
//   item = num;
//   arr[i] = item;
//   i++;
//   console.log(arr);
// }
// let sum = 0;
// for (let item of arr) {
//   sum += +item;
// }
// console.log(sum);
// LAB5
