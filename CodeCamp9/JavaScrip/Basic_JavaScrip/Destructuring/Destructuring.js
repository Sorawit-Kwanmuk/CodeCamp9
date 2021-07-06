// LAB 2.1
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [first, second, third] = ["Maya", "Marisa", "Chi"];
// console.log(first); // *"Maya"
// console.log(second); // **"Marisa"
// console.log(third); // ***"Chi"

// LAB 2.2
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
// ];
// console.log(raindrops); // *'Raindrops on roses'
// console.log(whiskers); // **'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // ***['Bright copper kettles','warm woolen mittens',]

// LAB 2.3
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร;
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *[10, 30, 20] เพราะlogตัวnumber ไม่ได้log Destructuring ที่กำหนดไว้

// LAB 2.4
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *8 เพราะ numPlanets Destructuring ได้ดึงnumPlanetsจากบรรทัดบนที่เปลี่ยนเป็น8
// console.log(yearNeptuneDiscovered); // **1846 เหตุผลเดียวกัน
// console.log(facts);

// LAB 2.5
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} เพราะ ...discoveryYears คือค่าที่เหลือที่ไม่ได้ประกาศใช้

// LAB 2.6
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // *
// getUserData({ firstName: "Melissa" }); // **
// getUserData({}); // ***

//LAB 2.7
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = "Jane";
// let admin = "Pete";
// [guest, admin] = [admin, guest];
// console.log(guest);
// console.log(admin);

// LAB 2.8
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age
// โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18
//  ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)
// const user = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 19,
//   },
// ];
// function checkAge(firstName, lastName, age) {
//   if (age > 18) {
//     return;
//   }
// }
// let { firstName, lastName, age } = user;
// checkAge([firstName, lastName, age]);
