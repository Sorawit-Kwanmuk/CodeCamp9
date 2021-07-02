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

// Transform an array
// LAB23
// const array = [1, 2, 30, 400];
// let result = array.map((item) => item * 2);
// console.log(result);
// const array = [1, 2, 3, 4];
// let result = array.map((item) => `${item}`);
// console.log(result);
// const array = [1, "1", 2, {}];
// let result = array.map((item) => typeof item);
// console.log(result);

// const array = ["apple", "banana", "orange"];
// // result: ["APPLE", "BANANA", "ORANGE"]
// let result = array.map((item) => item.toUpperCase());
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

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// let result = array.map((item) => {
//   if (item < 0) {
//     return (item = item * -1);
//   }
//   return item;
// });
// console.log(result);

// const array1 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// let result = array1.map((item) => item.toFixed(2));
// console.log(result);
