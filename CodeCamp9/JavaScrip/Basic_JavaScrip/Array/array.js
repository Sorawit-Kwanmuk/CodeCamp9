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
// เฉลย
// const friends = ["Boon", "Earth", "Team", "May", "Toon"];
// const friends = new Array("Boon", "Earth", "Team", "May", "Toon");//เลือกเอาสร้างได้เหมือนกัน

// LAB 4.2
// const arr = [1, 2, 4];
// const newArr = arr;
// arr[0] = 3;
// console.log(newArr[0]); // *3 เพราะ arr[0] = 3; อัพเดทค่าarrayเป็น3แล้ว

// เฉลย
// const arr = [1, 2, 4];
// const newArr = arr;
// arr[0] = 3;
// console.log(newArr[0]); // *แก้ตัว1กระทบหมด

// LAB 4.3
// const styles = ["Jazz", "Blues"];
// styles[2] = "Rock-n-Roll ";
// styles[1] = "Classic";
// // styles.shift(); //ลบตัวแรก
// // styles.pop(); //ลบตัวสุดท้าย
// delete styles[0];
// console.log(styles.length);
// console.log(styles);
// เฉลย
// styles = ["Jazz", "Blues"];
// // styles[2] = "Rock-n-Roll";
// styles[styles.length] = "Rock-n-Roll"; //เพิ่มที่ตำแหน่งสุดท้ายของ array
// styles[1] = "Classic";
// delete styles[0];
// console.log(styles);
// console.log(styles.length);

// LAB 4.4
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
// เฉลย
// let arr = [];
// while (1) {
//   let num = prompt("Enter number");
//   //   if (!num /*empty string , null ,( 0 , nan ,undefine แต่สิ่งที่ได้จากpromp ไม่ได้เป็น3ตัวนี้)*/|| num.trim()/*เป็น null จากการกด esc หรือ cancel*/ || isNaN(num)) break;
//   if (num === null || num === "" || num.trim() === "" || isNaN(num)) break;
//   arr[arr.length] = +num;
// }
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// LAB 4.5

// const arr = [2, 3, 5, 7, 11];
// function squareArr(array) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr[i] = array[i] ** 2;
//   }
//   return newArr;
// }
// const newArray = squareArr(arr);
// console.log(newArray);

// เฉลย
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// function aquareArr(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] ** 2;
//   }
//   return result;
// }
// LAB6
// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];
// function calcPrice(sales) {
//   let summary2 = [];
//   for (let i = 0; i < sales.length; i++) {

//     let netPrice;
//     if (sales[i].discount /*=== undefined*/) {
//       //ไม่้ตองใส่ก็ได้ เพราะเมื่อแปลงค่าundefine เป็น booleen มันจะได้เป็น false
//       netPrice = sales[i].price * (1 - sales[i].discount);
//     } else {
//       netPrice = sales[i].price;
//     }
//     summary2[i] = { netPrice: netPrice };
//   }
//   return summary2;
// }
// const summary = calcPrice(sales);
// console.log(summary);

// function calcPrice(sales) {
//   let summary2 = [];
//   for (let i = 0; i < sales.length; i++) {
// summary2[i] = {netPrice : sales[i].discount ? sales[i].price*(1-sales[i].discount) : sales[i].price}
//   }
// return summary2;
// }
// const summary = calcPrice(sales);
// console.log(summary);

// เฉลย
// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];
// const summary = [];
// for (let i = 0; i < sales.length; i++) {
//   /*วิธีที่1*/
//   let netPrice =
//     sales[i].price * (1 - (sales[i].discount ? sales[i].discount : 0));
//   /*วิธี if*/
//   //   let netPrice = 0;
//   //   if (sales[i].discount) {
//   //     netPrice = sales[i].price * (1 - sales[i].discount);
//   //   } else {
//   //     netPrice = sales[i].price;
//   //   }
//   // /*วิธีที่3*/
//   // let netPrice = sales[i].price*(1-salse[i].discount ?? 0)
//   // /*วิธีที่4*/
//   // let netPrice = sales[i].price*(1-salse[i].discount || 0)
//   summary[i] = { netPrice };
// }
