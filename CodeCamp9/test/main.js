// const studentName = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 },
// ];
// function calGrade(studentName) {
//   for (let i = 0; i <= studentName.length; i++) {
//     let name = studentName[i].name;
//     let score = studentName[i].marks;
//     let grade = "";
//     if (score >= 90) {
//       grade = "A+";
//     } else if (score >= 80) {
//       grade = "A";
//     } else if (score >= 70) {
//       grade = "B";
//     } else if (score >= 60) {
//       grade = "C";
//     } else {
//       grade = "F";
//     }
//     console.log(`${name} has got ${grade}`);
//     i++;
//     return grade;
//   }
// }
// calGrade(studentName);

// let count = 1;
// let result = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     result += count + " ";
//     count++;
//   }P
//   result += "\n";
// }
// console.log(result);

// const x = alert("Hello");
// const y = prompt("insert number");
// console.log("x : ", x);
// console.log("y : ", y);

// Function
//function declaration
// function multiply(x, y) {
//   return x * y;
// }

// //function execution
// const result = function (z) {
//   return z * 2;
// };

// //function arrow
// const result2 = (z) => console.log(z);
// const result3 = (z) => z * 2;
// const result4 = (z) => {
//   console.log(z);
//   return z * 2;
// };

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const james = new Person("James", "Bond", 28, "Blue");
// console.log(james);
// console.log(james.firstName);
// console.log(james.lastName);
// console.log(james.age);
// console.log(james.eyeColor);

// const num = 9876543210;

// function reversedNum(num) {
//   return (
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
//   );
// }

// console.log(reversedNum(num));

// function reverseStr(str) {
//   let a = Array.from("" + str);
//   return a.reverse().join("");
// }
// console.log(reverseStr(1023));

//function Greatest common divisor
// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }
// console.log(gcd(12, 18));

// // function Least common multiple
// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }
// console.log(lcm(12, 18));

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(lcm(65, 91));

// const str = "change my every first letter of this string to uppercase string";
// const str2 = str.replace(/\w*/g, function (word) {
//   return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
// });
// console.log(str2);

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(lcm(65, 91));

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i

// const str = "change my every first letter of this string to uppercase string";
// function changeUpper(str) {
//   let pos = 0;
//   let newStr = "";
//   newStr += str[0].toUpperCase();
//   for (let cha of str) {
//     if (pos === str.length - 1) break;
//     if (cha === " ") {
//       newStr += str[pos + 1].toUpperCase();
//     } else newStr += str[pos + 1];
//     pos++;
//   }
//   return newStr;
// }

// console.log(changeUpper(str));

// !!!!!!!!!!!!!!! OBJECT !!!!!!!!!!!!!!!
// Clone Object
// const ping = {
//   phone: "0622341385",
//   address: "Jalan Kaki",
// };
// const mint = { phone: "0805555555", address: "Jalan Kaki", food: "soup" };
// const jame = {};
// Object.assign(jame, ping, mint);
// jame.phone = "0949443468";
// console.log(jame);
// console.log(ping);
// console.log(mint);
// const jame2 = { ...ping, ...mint };
//เอาvalueตัวหลังไปใส่ไว้ใน jame2 จากนั้นเอาvalue ของ ping ไปอัพเดทค่าของjame2 ถ้ามีค่าkeyตรงกัน ถ้าkeyไม่ตรงกันจะเพิ่มkeyตัวใหม่

// Object bm
//คือสามารถมี function เป็น valueได้

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     alert(this.name + " " + this.age);
//     //สามารถใช้ user.name ได้ แต่ถ้าเรา clone object จะใช้งานไม่ได้ Hardcode ไม่ยืดหยุ่นตามสิ่งที่มันควรจะเป็น
//   },
// };
// user.sayHi();
// let admin = { ...user };
// admin.name = "P'Ying";
// console.log(admin);
// admin.sayHi();

// !!!!!!!!!!!!!!!!!!!!this + Constructor function!!!!!!!!!!!!!!!!!!!!!!
//EX normal fucntion
// function User(a, b, c) {
//   firstName = a;
//   lastName = b;
//   age = c;
// }
//ถ้าเราต้องการสร้าง Object จากฟังก์ชั่น constructor User, Object ที่ถูกสร้างขึ้น จะมี property คาม
//ที่กำหนดไว้ในฟังก์ชั่น constructor User นั่นเอง
//EX ฟังก์ชั่น constructor function
// function User(a, b, c) {
//   //this = {}
//   this.firstName = a;
//   this.lastName = b;
//   this.age = c;
//   this.dayOlds = function () {
//     return this.age * 365.25;
//   };
//   //return this;
// }
// const ice = new User("Ice", "Cream", 22);
// //ice = function(){return{firstName: "Ice", lastName: "Cream", age: 22}};
// console.log(ice);

// for (let key in ice) {
//   console.log("key: ", key);
//   console.log("value: ", ice[key]);
// }
// console.log(ice.dayOlds());

// const boon = new User("Boon", "Chai", 25);
// consile.log(boon.dayOlds());

// !!!!!!!!!!!!!!!!!!!!!!!!!Optionnal chaining!!!!!!!!!!!!!!!!!!!!!!!!!
//สำคัญมาก ใช้ใน react
//EX
// let user = {};
// console.log(user.address.province); //error เพราะ user เป็น objectเปล่า ทำให้.address เป็น undefined .province ดึงข้อมูลจาก undefined จึง error
// console.log(user.address?.province); //ป้องกันการerrorของข้อมูล user.มีadressไหมถ้ามีไปหา.provinceต่อ ถ้าไม่ หยุดการค้นหา

// const toon = {
//   name = "Nuttapat",
//   weight = 70,
//   height = 180,
//   bmi: function () {
//     return this.weight / (this.height/100)**2;
//   },
// }
// console.log(toon.bmi());
// toon.weight = 75;
// console.log(toon.bmi());

//constructor function
// function calculateBMI(name, w, h) {
//   this.name = name;
//   this.weight = w;
//   this.height = h;
//   this.bmi = function () {
//     return this.weight / (this.height / 100) ** 2;
//   };
//   return this;
// }
// const toon = new calculateBMI("Nuttapat", 70, 180);
// console.log(toon.bmi());
// const ohm = new calculateBMI("ohmnaja", 58, 169);
// console.log(ohm.bmi());
