// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// console.log(fruits); // Apple, Orange, Pear
// fruits.push("Mango", "Banana");
// console.log(fruits); // Apple, Orange, Pear, Mango, Banana

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.pop()); // Pear
// console.log(fruits); // Apple, Orange

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift()); // Apple
// console.log(fruits); // Orange, Pear

// let fruits = ["Orange", "Pear"];
// fruits.unshift("Apple");
// console.log(fruits); // Apple, Orange, Pear
// fruits.unshift("Banana", "Mango");
// console.log(fruits); // Banana, Mango, Apple, Orange, Pear

//splice returnสิ่งที่ตัด มันจะไปmodefine array
// let arr = ['I', 'study', 'JavaScript'];
// arr.splice(1, 1); // from index 1 remove 1 element
// console.log(arr); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];
// // remove 3 first elements and replace them with another
// console.log(arr.splice(0, 3, "Let's", "dance"));//splice returnค่าเป็น array
// console.log(arr); // now ["Let's", "dance", "right", "now"]

// let arr = ['I', 'study', 'JavaScript'];
// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, 'complex', 'language');//return ออกมาเป็น array[] เปล่าๆ
// console.log(arr); // "I", "study", "complex", "language", "JavaScript"

// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// // remove 2 first elements
// let removed = arr.splice(0, 2);
// console.logt(removed); //return ได้ "I", "study" <-- array of removed elements

//slice
// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
// console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
// //ตัวอย่างใช้ arr.slice ในการ clone array
// let arr = ["t", "e", "s", "t"];
// let clone = arr.slice();
// console.log(clone); // t, e, s, t

// let arr = [1, 2];
// // create an array from: arr and [3,4]
// console.log(arr.concat([3, 4])); // 1,2,3,4
// // create an array from: arr and [3,4] and [5,6]
// console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// // create an array from: arr and [3,4], then add values 5 and 6
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// let arr =[1,2];
// const newArr = arr.concat([3,[4,5]]);
// console.log(newArr);
// console.log(arr);

//EX
// const names = ["Boom", "Team", "May"];
// // for (let i =0;i<names.length;i++){
// //     console.log(name[i]);
// // }

// // for(let ele of names){//ele = element
// //  console.log(ele);
// // }

// ["Boom", "Team", "May"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// }); //ไม่มีการreturnค่า ถ้าเช็คจะได้เป็น undefined

// const log = () => console.log(`Hello Test`);
// ["Boom", "Team", "May"].forEach(log)

// LAB1
// let fruits = ["Apples", "Pear", "Orange"];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// // what's in fruits?
// console.log(fruits.length); // *4 เพราะทำการpush banana ไปต่อท้าย ทำให้lengthนัดได้4
// เฉลย shoppingCart = fruits ชี้ไปที่ address เดียวกัน เมื่ออัพเดทตัวไดตัวหนึ่ง อีกตัวก็โดนด้วย

// LAB2
// let arr = ["a", "b"];
// arr.push(function () {
//   alert(this);
// });

// arr[2](); // * a,b,function () {alert(this);} เพราะสั่งpush ทั้งfunctionไปต่อท้าย element
//เฉลย alert(this); คือตัว element ใน arr ต่อดวยฟังก์ชั่นที่pushไปต่อท้าย arr.push(function ()คือการเรียกใช้ฟังก์ชั่นในตัวมันเองให้alert

// LAB3
// let animals = ["Dog", "Cat", "Rat"];
// console.log(animals);
// // ["Dog", "Cat", "Rat"]
// animals.push("Fish");
// console.log(animals);
// //["Dog", "Cat", "Rat", "Fish"]
// animals.unshift("Horse");
// console.log(animals);
// // ["Horse", "Dog", "Cat", "Rat", "Fish"]
// animals.splice(Infinity, 0, "Giraffe ", "Snake ");
// console.log(animals);
// ["Horse", "Dog", "Cat", "Rat", "Fish", "Giraffe ", "Snake "];
// animals.shift(animals);
// console.log(animals);
// //["Dog", "Cat", "Rat", "Fish", "Giraffe ", "Snake "]
// animals.pop(animals);
// console.log(animals);
// //["Dog", "Cat", "Rat", "Fish", "Giraffe "]
// animals.shift(animals);
// console.log(animals);
// //["Cat", "Rat", "Fish", "Giraffe "]

// เฉลย push unshif push shift pop shift
// LAB4
// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
// let n = 1;
// function firstFunc(first, n) {
//   if (n === undefined || n === 1) {
//     return first[n];
//   }
// }
// console.log(firstFunc(first, n));

// LAB5
// let arr = [1, 2, 3, 4];
// let newArr = [];
// function clone(arr) {
//   newArr = arr.slice();
//   return newArr;
// }
// clone(arr);
// console.log(newArr);
// เฉลย const clone = arr => arr.slice();

// LAB6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// let c = a.concat(b);
// console.log(c);

// LAB7
// let fish = ["angel", "clown", "mandarin", "sturgeon"];
// fish.splice(0);//หาตำแหน่งที่0 และลบตัวที่เหลือ
// console.log(fish);

// LAB8
// const person = ["John", "Jay", "Jim", "Jame"];
// person.splice(1, 1, "Jack", "Joe ");//indexที่เริ่ม,จำนวนตัวที่จะลบ
// console.log(person);

//LAB9
// const sports = ["football", "volleyball", "tennis", "basketball", "judo"];
// subSports = sports.slice(1, 4);

// LAB10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// Cars.sprice(3, 0, "mazda", "bmw", "nissan");

// LAB11
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach(item => (sum += item));
// console.log(sum);

// LAB12
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// names.forEach(item, index) => console.log(`${index + 1}. ${item}`);

// const product = ["Coke", "Prpsi", "Fanta", "Mirinda"];
// const founded = product.find(item,index,array) =>{
//     return item === 'Pepsi'
// }// founded จะมีค่า= 'Pepsi'

// const product = ["Coke", "Prpsi", "Fanta", "Mirinda"];
// const founded = product.find(item,index,array) =>{
//     return item.includes('e')
// }// founded จะมีค่า= 'Coke' เพราะcoke มี e ทำให้ function มีค่าเป็น true
// //includes จะreturn จตัวที่ทำให้ call back function เป็นจริง

// const idx = product.findIndex((item,index,array) => {
//     return item.includes('z')//มันหาไม่เจอ จะได้ค่าเป็น-1 ถ้าหาเจอจะได้ค่าindex ตำแหน่งที่หาเจอ
// })

// const nums = [1, 3, 8, 11, -2];
// //อยากได้เลขคู่ทั้งหมดของarray ตัวนี้
// const even = nums.filter(function (item, index, arr) {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// LAB13
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("bison")); // *ตำแหน่งที่หาเจอ(เป็น true) คือ index 1
// console.log(beasts.indexOf("bison", 2)); // **ตำแหน่งที่หาตัวที่2เจอ(เป็น true) คือ index 4
// console.log(beasts.indexOf("giraffe")); // ***หาไม่เจอ (false) return เป็น-1
//เฉลย

// LAB14
// const alphabets = ["a", "b", "a", "c", "a", "d"];
// expexted result: [0, 2, 4]
// result2 = [];
// let i = 0;
// for (let item of alphabets) {
//   i++;
//   result2[i] = alphabets.findIndex(item, index, array);
//   return result2;
// }

// console.log(result);
// console.log(result2);

// const alphabets = ["a", "b", "a", "c", "a", "d"];
// function alphabetsFind(alphabets) {
//   let alphabets2 = [];
//   for (let i = 0; i < alphabets.length; i++) {
//     let alphabets2;
//     if (alphabets[i].find("a")) {
//       alphabets2 = alphabets[i].includes("a");
//     }
//     return alphabets2;
//   }
// }
// const alphabets = ["a", "b", "a", "c", "a", "d"];
// let result = [];
// let i = 0;
// result = arr.findIndex(function (item, index, array) {
//   i++;
//   result[i] = alphabets.findIndex("a");
// });

// const result = alphabetsFind(alphabets);
// console.log(result);
// เฉลย แบบfor.loop
// const alphabets = ["a", "b", "a", "c", "a", "d"];
// const indexes = [];
// // for (let i = 0; i < alphabets.length; i++) {
// //   if (alphabets[i] === "a") {
// //     indexes.push(i);
// //   }
// // }
// //ใช้index of
// let idx = alphabets.indexOf("a"); //เขียนอย่างนี้จะreturn aตัวแรกแค่ตัวเดียว
// while (idx !== -1) {
//   //ถ้าวนหลูบจนหมดแต่ไม่ตรงเงื่อนไข จะได้ผลเป็น-1
//   indexes.push(idx)
//   idx = alphabets.indexOf("a", idx + 1);
// }

// LAB15
// console.log([1, 2, 3].includes(2)); // *หา2 เจอ แบบไม่กำหนดตำแหน่ง
// console.log([1, 2, 3].includes(4)); // **หา4ไม่เจอ
// console.log([1, 2, 3].includes(3, 3)); // ***หา3ในตำแหน่งindex3ไม่เจอ เพราะมีแค่index2
// console.log([1, 2, 3].includes(3, -1)); // ****หา3ในตำแหน่งindex-1 คือ นับจากด้านหลังมา1 เจอ
// console.log([1, 2, NaN].includes(NaN)); // *****inclused พิเษศตรงที่NaN สามารถเท่ากับNaNได้
// console.log(["1", "2", "3"].includes(3)); // ******element มีแต่"3" ซึ่งเป็นstring จึงหาไม่เจอ
//*
// LAB16

// const nums = [7, 9, -5, -1, 0, 3];
// const found = nums.find((element) => element < 0);
// console.log(found);
// เฉลย
// const nums = [7, 9, -5, -1, 0, 3];
// const firstNegativeNum = nums.find(item => item < 0);

// LAB17
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// const result = inventory.filter((inventory) => inventory.name === "cherries");
// console.log(result);
// เฉลย
// const result = inventory.find((item) => item.name === "cherries");
// LAB18
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];
// // expexted result: 1
// const result = [];
// result2 = tasks.findIndex((tasks) => tasks.id === 2);
// result[0] = { result: result2 };
// console.log(result);
// เฉลย
// const idx = tasks.findIndex((item) => item.id === 2);

// LAB19
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// function change(id, objIndex) {
//   objIndex = tasks.findIndex((obj) => obj.id == id);
//   tasks[id].name = objIndex;
//   console.log(tasks);
// }
// change(2, "Travelling");

// เฉลย
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];
// function updateTask(id, newName){
//     const idx = tasks.findIndex(item => item.id === id)//หาidก่อน ถ้าไม่มีจะได้ค่าเป็น -1 และจะเข้าเงื่องไขด้านล่าง
//     if(idx !== -1){
//         tasks[idx].name = newName;
//     }
// }
// updateTask(2,Travelling );
// console.log(tasks);

// LAB20
// function deleteTask(id) {
//   const idx = tasks.findIndex((item) => item.id === id);
//   if (idx !== -1) {
//     task.splice(idx, 1);
//   }
// }
// เหลือ ข้อ 4 21 22
// LAB 21.1
// const array = [9, 17, 23, 5];
// //ค่าที่มากกว่า10
// const result = array.filter(item > item > 10);
// console.log(result);
// LAB 21.2
// const array = [1, 2, 3, 4];
// const result = array.filter((item) => item % 2 === 1);
// console.log(result);
// Transform an array
//ค่าที่เป็นเลขคี่
// LAB 21.3
// const array = [1, "1", 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const result = array.filter(item => typeof item ==='number');
// console.log(result);
// LAB 21.4
// const array = ["apple", "banana", "orange", "pineapple", "watermeon"];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const result = array.filter((item) => item.length > 6);
// console.log(result);
// LAB 21.5
// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const result = array.filter((item) => item > 0);
// console.log(result);
// LAB 21.6
// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const result = array.filter((item) => item % 3 === 0);
// console.log(result);

// LAB21.7
// const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const result = array.filter((item) => item.startsWith("E"));
// console.log(result);
// LAB21.8
// const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result = array.filter((item) => item === item.toUpperCase());
// console.log(result);
// LAB21.9
// const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const result = array.filter((item) =>
//   item.toLocaleLowerCase().includes("buri")
// );
// console.log(result);
// LAB21.10
// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];
// // อายุไม่น้อยกว่า 18
// const result = array.filter((item) => item.age >= 18);
// console.log(result);
// LAB21.11
// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];
// // id ไม่เท่ากับ 4
// const result = array.filter((item) => item.id !== 4);
// console.log(result);
// // LAB21.12
// const array = [
//   { name: "John", birth: "2001-07-31" },
//   { name: "Jack", birth: "1990-06-24" },
//   { name: "Jim", birth: "1984-12-13" },
//   { name: "Jeff", birth: "1996-02-05" },
//   { name: "Joe", birth: "2002-06-13" },
// ];
// // เกิดเดือน 6
// LAB22
// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b
// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item < b);
// }
// console.log(filterRange([1, 7, 11, 15, 9, 6], 5, 10));
// const result = array.filter((item) => item.birth[6] === "6");
// LAB23.1
// const array = [1, 2, 30, 400];
// let result = array.map((item) => item * 2);
// console.log(result);
// เฉลย
// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const result = array.map(item * 2);
// console.log(result);

// LAB23.2
// const array = [1, 2, 3, 4];
// let result = array.map((item) => `${item}`);
// console.log(result);

// LAB23.3
// เฉลย
// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result = array.map((item) => "" + item);
// console.log(result);
// LAB23.4
// const array = [1, "1", 2, {}];
// let result = array.map((item) => typeof item);
// console.log(result);
// เฉลย
// const array = [1, "1", 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map((item) => typeof item);
// console.log(result);

// LAB23.5
// const array = ["apple", "banana", "orange"];
// // result: ["APPLE", "BANANA", "ORANGE"]
// let result = array.map((item) => item.toUpperCase());
// console.log(result);
// เฉลย
// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map(item => (item.toUpperCase());
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// let result = array.map((item) => {
//   if (item % 2 === 0) {
//     return (item = "even");
//   }
//   return (item = "odd");
// });
// console.log(result);

// LAB23.6
// เฉลย
// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map((item) => (item % 2 ? "odd" : "even"));
// console.log(result);

// LAB23.4
// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// let result = array.map((item) => {
//   if (item < 0) {
//     return (item = item * -1);
//   }
//   return item;
// });
// console.log(result);

// LAB23.7
// เฉลย
// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map((item) => Math.abs(item));
// console.log(result);

// LAB23.7
// const array1 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// let result = array1.map((item) => item.toFixed(2));
// console.log(result);

// LAB23.8
// เฉลย
// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const result = array.map((item) => item.toFixed(2));
// console.log(result);

// LAB23.8
// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const result = array.map((item) => MONTH[item]);
// console.log(result);

// LAB23.10
// เฉลย
// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const result = array.map((item) => Math.sqrt(Math.sqrt(item)));
// console.log(result);

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: ["apple", "banana", "watermelon"]
// const result = array.map((item) => item.name);
// console.log(result);

// LAB23.11
// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: [14, 18, 32]
// const result = array.map((item) => item.age);
// console.log(result);

// LAB23.12
// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map((item) => `${item.name} ${item.surname}`);
// console.log(result);

// LAB23.13
// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
// const result = array.map((item) => {
//   return {
//     name: item.name,
//     birth: item.birth,
//     age: 2021 - item.birth.split("-")[0],
//   };
// });
// console.log(result);

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
// const result = array.map(item => `<tr><td>${item.name}</td><td>${item.birth.split('-')[2]} ${MONTHS[+item.birth.split('-')[1]-1].toLowerCase()}${item.birth.split('-')</td></tr>}`)

// LAB24
// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
// function camelize(sta) {
//   const splitted = str.split("-");
//   console.log(splitted);
//   const transform = splitted.map((item, index) => {
//     if (index === 0) return item;
//     return item[0].toUpperCase() + item.slice(1);
//   });
//   console.log(transform);
//   return transform.join("");
// }
// console.log(camelize('border-radaius-top'));

// LAB25
// const arr = [11, 17, 23, 13, 7, 19]; /*.sortเรียงstringจากน้อยไปหามาก*/
// arr.sort((a, b) => b - a);//b-4เลียงจากมากไปหาน้อย

// LAB26
// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => a ** 2 - b ** 2); //ถ้าa-bมีค่ามากกว่า0aกับbจะสลับกันเรียงจากน้อยไปหามาก
// console.log(arr);

// LAB27
// const arr = [
//   { name: "John", age: 25 },
//   { name: "Leon", age: 26 },
//   { name: "Mick", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 28 },
// ];
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);

// LAB28
// จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// ตัวอย่างผลลัพธ์
// function copySorted(arr) {
//   const result = arr.slice(0);
//   return result.sort();
// //   return arr.slice(0).sort();
// }

// let arr = ["React", "Vue", "Angular"];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// LAB29
// const nums = [-3, 2, 11, -7, 4, 6]; //acc  = accumulator
// const result = num.reduce((acc, item) => acc * item);//#1
// const result = num.reduce((acc, item) => acc * item, 1);//#2

// LAB30
// const scores = [
//   { score: 90, subject: "HTML", weight: 0.2 },
//   { score: 95, subject: "CSS", weight: 0.3 },
//   { score: 85, subject: "JavaScript", weight: 0.5 },
// ];
// // expected result: 89
// const result = scores.reduce((acc, item) => acc + item.score * item.weight, 0);
// console.log(result);

// LAB31
// จงหาค่ามากสุดและน้อยสุดใน arr
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// const result = arr.reduce(
//   (acc, item, index) => {
//     if (index === 0) return { min: item, max: item };
//     if (item > acc.max) acc.max = item;
//     if (item < acc.min) acc.min = item;
//     return acc;
//   },
//   { min: 0, max: 0 }
// );
// console.log(result);

// EX Array Reduce
// const num = [-3, 2, 11, -7, 4, 6];
// const result = num.reduce((accumulator, item, index, array) => {
//   console.log(`acc: ${acc}, item: ${item}, index: ${index}, array: ${array}`);
//   return accumulator + item;
// }, 0 /*initial value คือค่าเริ่มต้นของaccumulator*/);
//first call function
//ส่ง เข้าไปในfunctionรอบแรก จะเท่ากับ accumulator = initial value (0), item = first element of array (-3), index = array index(0)
//array = self([-3,2,11,-7,4,6]) return accumulator + item (0+ -3 = -3)

//second call callback function
//accumulator = return value from first call (-3), item = second element of array (2) index = array index (1)
//array = self([-3,2,11,-7,4,6]) return accumulator + item(-3 + 2 = -1)/*-3 คือ accumulator 2 คือ item*/

//third call callback function
//accumulator = return value from third call (-1), item = third element of array (11), index = array index(2)
//array = self([-3,2,11,-7,4,6]) return accumulator + item(-1 + 11 = 10)

//fourth call callback function
//accumulator = return value from third call (10), item = fourth element of array (-7) index = array index (3)
//array = self([-3,2,11,-7,4,6]) return accumulator + item(10 + -7 = 3)

//fifth call callback function
//accumulator = return value from fourth call (3), item = fifth element of array (4) index = array index (4)
//array = self([-3,2,11,-7,4,6]) return accumulator + item(3 + 4 = 7)

//sixth call callback function
//accumulator = return value from fifth call (7), item = sixth element of array (6) index = array index (5)
//array = self([-3,2,11,-7,4,6]) return accumulator + item(7 + 6 = 13)

//end of array no more call callback function then return  value from last call (13) to result
