// ตัวอย่าง Map
// let map = new Map();
// map.set("1", "str1"); // a string key
// map.set(1, "num1"); // a numeric key
// map.set(true, "bool1"); // a boolean key
// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// console.log(map.get(1)); // 'num1'
// console.log(map.get("1")); // 'str1'
// console.log(map.size); // 3

// Map
// ตัวอย่างการสร้าง Map โดยใช้ array with key/value pairs
// array of [key, value] pairs
// let map = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);

// console.log(map.get("1")); // str1

// Iteration over Map
// ตัวอย่าง Iteration map.keys()
// const recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
//   ]);
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }

// ตัวอย่าง Iteration map.values()
// const recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
//   ]);
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }

// ตัวอย่าง Iteration map.entries()
// const recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);
// // iterate over [key, value] entries
// for (let entry of recipeMap) {
//   // the same as of recipeMap.entries()
//   console.log(entry); // cucumber,500 (and so on)
// }

// Set
// // ตัวอย่าง Set
// let set = new Set();
// set.add("John");
// set.add("Jan");
// set.add("Jane");
// set.add("John"); // set.add with the same value don’t do anything
// set.add("Jane"); // set.add with the same value don’t do anything
// // set keeps only unique values
// console.log(set.size); // 3
// for (let user of set) console.log(user); // John (then Jan and Jane)

// เช็คตัวซ้ำ
// const str = "Thailand";
// console.log(new Set(str));

// LAB 7.1
// let map = new Map();
// map.set(name, "Thomas");
// // map.set(age, "31");
// console.log(map.get(name));
// // for (let name of map.values()) {
// //   console.log(name); // 500, 350, 50
// // }
// let map = new Map([
//   [name, "Thomas"],
//   ["age", 31],
// ]);
// console.log(map.get(name));
// map.set(name, "Dan");
// console.log(map.get(name));
// console.log(map.get("age"));
// map.delete("age");
// console.log(map.get("age"));
// console.log(map.has("birthDate"));
// console.log(map.size);
// map.clear();
// เฉลย
// const map = new Map();
// map.set("name", "Thomas");
// map.set("age", 31);
// console.log(map);
// map.set("name", "Dan");
// map.delete("age");
// console.log(map);
// console.log(map.has("birthDate"));
// console.log(map.size);
// map.clear();
// console.log(map);

// LAB7.2
// const arr = [
//   //เป็นiteleble
//   ["email", "codeisfun@example.com"],
//   ["isActive", true],
// ];
// const map = new Map(arr);
// console.log(map);

// LAB 7.3
// const set = new Set();
// set.add("Thailand");
// set.add("Japan");
// set.add("Thailand");
// set.add("China");
// set.add("India");
// set.add("Thailand");
// set.add("China");
// set.add("Singapore");
// set.add("Japan");
// console.log(set); //เลียงตามลำดับที่addไป อันที่ซ้ำอันหลังไม่เอา
// set.delete("India");
// console.log(set);
// console.log(set.size);
// const arr = Array.from(set);
// const arr1 = new Array(...set);
// const arr2 = [...set];
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// LAB 7.4
// const arr = ["Dog", "Giraffe", "Bear"];
// const set = new Set(arr);
// console.log(set);

// LAB 7.5
// const values = [1, 4, 8, 2, 1, 3, 3, 8];
// console.log(unique(values)); // [1, 4, 8, 2, 3]
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
