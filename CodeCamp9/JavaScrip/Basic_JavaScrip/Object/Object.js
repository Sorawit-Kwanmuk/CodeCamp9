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

// LAB12
// const product1 = { name: "Coke", price: 18, size: "500mL" };

// const product2 = product1;
// product2.name = "Pepsi";
// product2.price = 19;

// console.log(product1); // *product2โดนแก้ produck1ก็โดนเช่นกัน เพราะชี้ไปที่ข้อมูลชุดเดียวกัน
// console.log(product2); // **เท่ากับproduct1
// console.log(product1 === product2); // ***true

// LAB13
// const user = { name: 'Jack', role: 'ADMIN' };
// const admin = { name: 'Jack', role: 'ADMIN' };
// console.log(user === admin); // *false ชี้ไปที่ข้อมูลคนละชุดกัน

// LAB14
// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign
// const notebook = {
//   brand: "ASUS",
//   model: "Vivobook D413IA-EB303TS",
//   processor: "AMD Ryzen 7 4700U 3.6GHz",
//   graphics: "Integrated Graphics : AMD Radeon Graphics",
//   ram: "8GB DDR4 Onboard",
//   storage: "512GB PCIe NVMe M.2 SSD",
// };
// for...in...loop
// const cloneNotebook = {};
// for (let key in notebook) {
//   cloneNotebook[key] = notebook[key];
// }
// console.log(cloneNotebook);//for..in..loop ไม่เลียงลำดับข้อมูลให้ ทำให้ออกมาไม่เหมือนต้นฉบับ

// const cloneNotebook = {};//merg ข้อมูลเข้ากับ Object เปล่า จะได้ชุดข้อมูลเหมือนกัน
// Object.assign(cloneNotebook, notebook);
// console.log(cloneNotebook);
// Lab15
// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75
// และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true
// const state1 = { username: "john", point: 100, loading: true };
// const cloneState1 = Object.assign({},state1,
//      {
//          loading: false,
//          point: 75,
//          success: true;
//      }
//      );
//      console.log(cloneState1);
// Object.assign({},??,{?}) ทำจากซ้ายไปขวา โดยเริ่มจากmerg state1เข้ากับObject{ว่าง}
//จะได้cloneState1ที่มีชุดข้อมูลเหมือนต้นฉบับ จากนั้นmerg Object ที่อยู่ขวาสุดเพื่อแก้ไขข้อมูล เนื่อนจากObject
//ให้ความสำคัญข้อมูลขวาสุดมากกว่า

// LAB16
// ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission
// หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };
// const permission = Object.assign(
//   {},
//   permission1,
//   permission2,
//   permission3,
//   permission4
// );//mergข้อมูลจากอันแรกหรือด้านซ้ายไปด้านขวา

// LAB17
// // บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
// let user = {
//   name: "John",
//   sayHi: function () {
//     console.log(this.name);
//   },
// };

// user.sayHi(); // *John

//   LAB18
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
// var name = 'Joe'; //เหมือประกาศว่า window.name ='Jeo' ถ้าประกาศโดยใช้var จะเข้า window Object
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// let user = /*window.*/makeUser();//ตอนที่ตัวนี้เรียกใช้function thisในfunction จะเท่ากับ global Objectเรียกthis อยู่ ซึ่งglobal ในนี้ไม่มี จะให้ Windows Global Object จะได้ {name: 'John',ref: window}
// console.log(user.ref.name); // *ดังนั้นมันจะไปหาproperty ที่ชื่อname ของ window Object ซึ่งก็คือ var name = 'Joe'; คำตอบคือ 'Joe'

// LAB19
// ให้สร้าง Object calculator ซึ่งมี 3 method
// read() ให้รับค่า input 2 ค่า
// sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// mul() ให้ return ค่าผลคูณของเลขทั้งสอง
// let calculator = {
//     // ... your code ...
//   };

//   calculator.read();
//   alert(calculator.sum());
//   alert(calculator.mul());
// let calculator = {
//   //ใช้ this เพื่อให้ method อื่นสามารถเรียกmethodนี้ไปใช้ได้
//   read() {
//     this.input1 = prompt("Enter first number");//this จะเป็นการอ้างถึงcalculator
//     this.input2 = prompt("Enter second number");
//   },
//   sum() {
//     return (
//       +this.input1 + +this.input2
//     ); /*ถ้าในmethodด้านบนไม่ใช้ this แต่ประกาศตัวแปร const input1 ชึ้นมาใหม่แทน จะไม่สามารถเรียกมาใช้ในmethodนี้ได้*/
//   },
//   multiply() {
//     return this.input1 * this.input2;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

// LAB20
// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// read() ให้รับค่า input 2 ค่า
// sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// function Calculator() {
//   this.read = function () {
//     this.input1 = promp("Enter first number");
//     this.input2 = promp("Enter second number");
//   };
//   this.sum = function () {
//     return +this.input1 + +this.input2;
//   };
//   this.multiply = function () {
//     return this.input1 * this.input2;
//   };
// }
// const calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

// LAB21
// ให้สร้าง Constructor Function: Accumulator(startingValue) มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง) และมี method
// read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// show() ให้ alert ค่า currentValue
// function Accumulator(startingValue) {
//   //ทำงานอยู่เบื้องหลัง ถ้ามี new keyword ตามด้วยconstructor function จะเหมือนกับใช้ this = {};
//   this.currentValue = startingValue; //{currentValue: startingValue}
//   this.read = function () {
//     this.currentValue += +prompt("Enter number");
//   };
//   this.show = function () {
//     alert(this.currentValue);
//   };
//   //return this
// }
// const accumulator = new Accumulator(0); //{accumulator: 0}
// // ตอนนี้ในaccumulator มี key value อยู่3ค่า currentValue,read,show
// // accumulator object from new Accumulator(0)
// // {
// //     currentValue: 0,
// //     read: function () {
// //         this.currentValue += +prompt("Enter number");
// //       },
// //     show = function () {
// //         alert(this.currentValue);
// //       }
// // }
// accumulator.read();
// accumulator.read();
// accumulator.read();
// accumulator.show();

// LAB22
// ให้เขียนโค้ดเพื่อ log province ของ product1
// หากมี product2 เป็น object ว่าง ให้ log province ของ product2
// โดยใช้คำสั่งเดียวกับ product1 (หาก Error ให้หาวิธีแก้)
// const product1 = {
//   name: "Water",
//   distributor: {
//     name: "Giraffe Water Company",
//     address: {
//       street: "Phetchaburi",
//       subdistrict: "Thanonphetchaburi",
//       district: "Ratchathewi",
//       province: "Bangkok",
//     },
//   },
// };
// const product2 = {};
// console.log(product1.distributor.address.province);
// console.log(product2?.distributor?.address?.province);
// //product2 ได้ undefine เพราะการใส่ ? คือการให้เช็คก่อนว่ามีหรือไม่ ในตัวอย่างมี product2 แต่ไม่มีข้อมูลต่อ
