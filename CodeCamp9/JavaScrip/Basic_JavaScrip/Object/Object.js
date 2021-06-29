// // const car = {
// //   brand: "Mercedez Benz",
// //   color: "Blue",
// //   model: "C220",
// // }; //{key value}
// // car.price = 1000;
// // console.log(car);

// // car.color = "Red";
// // console.log(car);
// // //นี่คือการอัพเดทค่าkey value

// // delete car.color;
// // console.log(car);
// // //การลบค่าkey value
// // // test
// // const car = {
// //   brand: "Mercedez Benz",
// //   color: "Blue",
// //   model: "C220",
// //   distributor: {
// //     name: "Benz Thonglor",
// //     address: {
// //       road: "Sukhumvit",
// //       district: "Wattana",
// //       province: "Bankkok",
// //     }, //userect ซ้อน userect
// //   },
// // };
// // car.distributor.address.province = "Trat";
// // //อัพเดทค่าkey value ที่อยู่ในuserectที่อยู่ซ้อนในuserect

// // car.price = 1000;
// // console.log(car);

// // car.color = "Red";
// // console.log(car);

// // delete car.color;
// // console.log(car);

// const brand = "Mercedez Benz"; //สามารถให้ key ดึงค่ามาจากตัวแปรได้
// const car = {
//   brand, //brand: brand, มีค่าเท่ากัน เรีกว่าแบบ shorthand เขียนเมื่อค่ากับชื่อkeyเหมือนกัน
//   color: "Blue",
//   model: "C220",
//   distributor: {
//     name: "Benz Thonglor",
//     address: {
//       road: "Sukhumvit",
//       district: "Wattana",
//       province: "Bankkok",
//     }, //userect ซ้อน userect
//   },
// };

// const user = {
//   name: "John",
//   age: 27,
// };

// console.log("name" in user); // true user.name exists
// console.log("birthDate" in user); // false user.birthDate doesn't exist
// //ใช้ in ในการตรวจสอบหา key ใน userect

//For in lopp ใช้loopกับ คู่ key value ของuserect เท่านั้น
// const brand = "Mercedez Benz"; //สามารถให้ key ดึงค่ามาจากตัวแปรได้
// const car = {
//   brand, //brand: brand, มีค่าเท่ากัน เรีกว่าแบบ shorthand เขียนเมื่อค่ากับชื่อkeyเหมือนกัน
//   color: "Blue",
//   model: "C220",
//   distributor: {
//     name: "Benz Thonglor",
//     address: {
//       road: "Sukhumvit",
//       district: "Wattana",
//       province: "Bankkok",
//     }, //userect ซ้อน userect
//   },
// };
// let i = 0;
// for (let key in car) {
//   //   console.log("Iteration " + i + ":" + key);
//   console.log(`keyname: ${key} has value: ${car[key]}`); //ใช้ car.key ไม่ได้ เพราะจะเป็นการไปหาkey ที่มีชื่อว่าkeyแทน
//   i++;
// }

// LAB1
// const person = {
//   name: "Sorawit KWanmuk",
//   age: "23",
//   gender: "male",
//   address: "Bankkok",
//   phoneNumber: "0877316012",
// };
// เฉลย
// const person = {
//   name: "Earth",
//   age: 30,
//   gender: "Male",
//   adress: `75/5 Banthadthong Rd. Pathumwan Bankkok`,
//     phone:'0877316012'
// };

// LAB2
// const user = {
//   name: "John",
//   surname: "Doe",
// };
// user.name = "Matt";
// console.log(user);

// delete user.name;
// console.log(user);
// เฉลย
// const user = {};
// user.name ='John';
// user['surname']='Doe';
// user.name='Matt';
// delete user.name;
// LAB3
// const user = {
//   name: "John",
//   surname: "Doe",
//   nickname: "a",
// };
// function isEmpty(user) {
//   for (let key in user) {
//     if (
//       user[key] !== null ||
//       user[key] !== undefined ||
//       user[key] !== "" ||
//       user[key] !== isNaN
//     ) {
//       return console.log(true);
//     }
//   }
//   console.log(false);
// }

// isEmpty(user);
// เฉลย
// for (let key in obj){//ถ้ามีkeyแม้แต่ตัวเดียวในobject ดนพ loop นี้จะทำงาน
//     return falseว
// }
// return true;

// LAB4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = salaries.John + salaries.Ann + salaries.Pete;
// function isEmpty(user) {
//   for (let key in salaries) {
//     if (
//       user[key] !== null ||
//       user[key] !== undefined ||
//       user[key] !== "" ||
//       user[key] !== isNaN
//     ) {
//       return console.log(sum);
//     }
//   }
//   console.log(0);
// }

// isEmpty(salaries);
// เฉลย
// const calcSumSalaries = function (obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// };
// let salaries = {
//   john: 1000,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(calcSumSalaries(salaries));
// LAB5
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj, num) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= num;
//     }
//   }
// }
// multiplyNumeric(menu, 5);
// console.log(menu);
// เฉลย
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = (obj, num) => {
//   const result = {};
//   for (let key in obj) {
//     if (isNaN(obj[key])) {
//       result[key] = obj[key];
//     } else {
//       result[key] = obj[key] * num;
//     }
//   }
//   return result;
// };
// LAB6
// เฉลย
// const username = prompt("Enter username");
// const email = prompt("Enter email");
// const password = prompt("Enter password");

// const user = {
//   username: username,
//   email: email,
//   password: password,
// };
// //shothand
// const user = {
//   username,
//   email,
//   password,
// };
// LAB7 เฉลย //promp สร้างobject
// let obj = {};
// while (1) {
//   const key = prompt("Enter key");
//   if (key === "stop") break;
//   const value = prompt("Enter value");
//   if (value === "stop") break;
//   if (key && key.trim()) {
//     obj[key] = value;
//   } else {
//     alert("Invalid key");
//   }
// }
// console.log(obj);
// LAB8 เฉลย
// let fruits = {};
// while (1) {
//   const key = prompt("Enter fruits");
//   if (ker === "stop") break;
//   const value = prompt("Enter amount");
//   if (value === "stop") break;

//   if (key && key.trim()) {
//     if (value > 1) {
//       fruits[`${key}s`] = value;
//     } else {
//       fruits[key] = value;
//     }
//   } else {
//     alert("Invalid key");
//   }
// }
// LAB9 เฉลย //ต้องเขียนvalidate ดักuser พิมพ์สิ่งที่เราไม่ต้องการเสมอ
// const name = prompt("Enter Product name");
// const amount = prompt("Enter amount");
// const price = prompt("Enter price");
// const discount = prompt("Enter discount");
// const product = {
//   name,
//   amount,
//   price,
// };
// if (discount !== 0) {
//   product.discount = discount;
// }
// function calcNetPrice(obj) {
//     //ใช้ if
//     if (obj.discount){
//         return (obj.price * amount * (100 - obj.discount)) / 100;
//     }
//     return obj.price*obj.amount;
//     //เขียนแบบสั้น ใช้ truthy value || ตัวแรกเป็นจริงใช้ตัวแรกเลยไม่สนตัวหลัง
// //   return (obj.price * amount * (100 - obj.discount || 0)) / 100;
// }
// console.log(calcNetPrice(product));
// LAB10 เฉลย
// const employees = {
//   john: {
//     salary: 1000,
//     address: { district: "Ratchathewi", province: "Bangkok" },
//   },
//   peter: {
//     salary: 1500,
//     address: { district: "Pathumwan", province: "Bangkok" },
//   },
//   mike: {
//     salary: 800,
//     address: { district: "Pakkret", province: "Nonthaburi" },
//   },
//   sarah: {
//     salary: 2200,
//     address: { district: "Sriraja", province: "Chonburi" },
//   },
// };
// const name = prompt("Enter employee name");
// if (employees[name]) {
//   console.log(
//     `Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].district}, ${employees[name].address}`
//   );
// }else{console.log('Not found');}

// LAB11
// const user = {
//   email: "cc@gmail.com",
//   isActive: true,
// };

// user.isActive = false;
// console.log(user); // *error เพราะเปลี่ยนค่าuserโดยตรงไม่ได้ เนื่องจากประการเป็นconst
// user = {};
// console.log(user); // **

// Cloning and merging, Object.assign
// ตัวอย่างวิธีการ clone object แบบใช้ for in loop
// let user = {
//   name: "John",
//   age: 30,
// };
// let clone = {}; // the new empty object
// // let's copy all user properties into it
// for (let key in user) {
//   //keyรอบแรกมีค่าเป็นname => clone['name'] = 'john'
//   //รอบที่2 มีค่าเป็น age => clone['age'] = '30'
//   clone[key] = user[key];
// }

// Cloning and merging, Object.assign
// const user = {};
// const permission1 = { canView: true };
// const permission2 = { canEdit: false };

// // user = {
// //   canView: true,
// //   canEdit: false,
// // };
// Object.assign(user, permission1, permission2);
// //เริ่มmergeจากขวาไปซ้าย เริ่มจาก merge permission1 เข้ากับ permission2
// //จะได้ result {canEdit: false, canView: true}
// //ขั้นที่2 merge resultเข้ากับ user
// //จะได้ result user = { name: "John", canView: true, canEdit: true }

// const user = {
//   name: "Earth",
//   introduce: function () {
//     // alert("Hello. My name is Earth"); //ใช้this ในการอ้างถึงpropertyในตัวมันเอง
//     alert(`Hello. My name is ${this.name}`);
//   },
// };
// // user.introduce();

// const admin = {
//   name: "Admin",
// };
// admin.introduce = user.introduce;
// admin.introduce();

// function sayHello() {
//   console.log(this);
// }

// sayHello();
// //this จะนับตัวที่เรียกมันเป็นสำคัญ เช่น admin.sayHello ชื่อที่ออกจะเป็น admin
// //เพราะadminเป็นคนเรียกใช้function ที่มีthisอยู่

// Constructor, operator "new" ต้องขึ้นต้นด้วยตัวใหญ่
