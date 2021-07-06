// Lab 2.1
// const number = 1375000000000;
// const number = 1_375_000_000_000;
// const number = 1375e9;

// Lab 2.2
// const number = 255;
// console.log(number.toString(2));
// console.log(number.toString(8));
// console.log(number.toString(16));

// Lab 2.3
// const calcPoint = sale => Math.floor(sale / 100);

// Lab 2.4
// const printNumber = num => (Math.floor(num * 100) / 100).toFixed(2);
// console.log(printNumber(5.1));
// const printNumber = num => {
//   const spl = ('' + num).split('.');
//   if (!spl[1] || spl[1].length <= 2) return num.toFixed(2);
//   return `${spl[0]}.${spl[1].slice(0, 2)}`;
// };
// console.log(printNumber(5.567777777));

// Lab 2.5
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }

// Lab 2.6
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// Lab 2.7
// function rollDice() {
// return Math.floor(Math.random() * 6 + 1);
// หรือ
// return Math.floor(random(1, 7));
// }

// Lab 2.8
// function circumference(r) {
//   return Math.PI * 2 * r;
// }

// Lab 2.9
// function diagonal(w, l) {
// return Math.sqrt(Math.pow(w, 2) + Math.pow(l, 2));
// or
// return Math.sqrt(w ** 2 + l ** 2);
// }

// Lab 2.10
// const convertDegToRad = function (deg) {
//   return (deg / 180) * Math.PI;
// };

// For loop กับ Array
// const arr = ['Boon', 'Earth', 'Team', 'May', 'Toon', 'Pang'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i + 1}. Hello ${arr[i]}`);
// }

// let i = 0;
// for (let item of arr) {
//   i++;
//   console.log(`${i}. Hello ${item}`);
// }

// add element to array
// const arr = [];
// arr[arr.length] = 1;
// arr[arr.length] = 4;
// console.log(arr);

// array push demo
// let fruits = ['Apple', 'Orange'];
// const ret = fruits.push('Pear');
// console.log(ret);
// console.log(fruits);

// array splice demo
// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// // remove 3 first elements and replace them with another
// console.log(arr.splice(0, 3, "Let's", 'dance'));
// console.log(arr); // now ["Let's", "dance", "right", "now"]

// array concat demo
// let arr = [1, 2];
// const newArr = arr.concat([3, [4, 5]]);
// console.log(newArr);
// console.log(arr);

// วิธี loop element array แบบที่ 1
// const names = ['Boon', 'Team', 'May'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// วิธี loop element array แบบที่ 2
// for (let ele of names) {
//   console.log(ele);
// }

// Array forEach demo
// const ret = ['Boon', 'Team', 'May'].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// console.log(ret);

// const log = (item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// };

// const newLog = () => console.log(`Hello Test}`);

// ['Boon', 'Team', 'May'].forEach(newLog);

// Lab 5.3
// const animals = ['Dog', 'Cat', 'Rat'];
// animals.push('Fish');
// animals.unshift('Horse');
// animals.push('Giraffe', 'Snake');
// animals.shift();
// animals.pop();
// animals.shift();
// console.log(animals);

// Lab 5.5
// const clone = arr => arr.slice();

// // Lab 5.6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// const c = a.concat(b);
// console.log(c);

// // Lab 5.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0);

// // Lab 5.8
// const person = ['John', 'Jay', 'Jim', 'Jame'];
// person.splice(1, 1, 'Jack', 'Joe');

// // Lab 5.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const subSports = sports.slice(1, 4);

// // Lab 5.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3, 0, 'mazda', 'bmw', 'nissan');

// Lab 5.11
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach(item => (sum += item));
// console.log(sum);

// // Lab 5.12
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// names.forEach((item, index) => console.log(`${index + 1}. ${item}`));

// const products = ['Coke', 'Pepsi', 'Coke', 'Mirinda'];
// const founded = products.find((item, index, array) => {
//   return item.includes('z');
// });

// const idx = products.findIndex((item, index, array) => {
//   return item === 'Coke';
// });

// const nums = [1, 3, 8, 11, -2];
// const even = nums.filter(function (item, index, arr) {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// Lab 5.14
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// const indexes = [];
// for (let i = 0; i < alphabets.length; i++) {
//   if (alphabets[i] === 'a') {
//     indexes.push(i);
//   }
// }

// let idx = alphabets.indexOf('a');

// while (idx !== -1) {
//   indexes.push(idx);
//   idx = alphabets.indexOf('a', idx + 1);
// }

// Lab 5.16
// const nums = [7, 9, -5, -1, 0, 3];
// const firstNegativeNum = nums.find(item => item < 0);

// // Lab 5.17
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// const result = inventory.find(item => item.name === 'cherries');

// // Lab 5.18
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// const idx = tasks.findIndex(item => item.id === 2);

// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// Lab 5.19
// function updateTask(id, newName) {
//   const idx = tasks.findIndex(item => item.id === id);
//   if (idx !== -1) {
//     tasks[idx].name = newName;
//   }
// }

// updateTask(2, 'Travelling');
// console.log(tasks);

// Lab 5.20
// function deleteTask(id) {
//   const idx = tasks.findIndex(item => item.id === id);
//   if (idx !== -1) {
//     tasks.splice(idx, 1);
//   }
// }

// deleteTask(1);
// console.log(tasks);
