const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const readFile = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   });
// };

// const fn = async () => {
//   // const number = readFile('./number.json');
//   // console.log(number);//Promise { <pending> }
//   //await คือ รอจนกว่า primise ด้านหลัง await ทำงานเสร็จเท่านั้นจึ้งจะทำงานต่อ
//   const number = await readFile('./number.json'); //readFile คือ function ไม่ใช่ fs.readFile
//   // console.log(number); //Promise { <fullFiled> }
//   const data = await readFile('./product.json');
//   //ถ้า await เกิด error ขึ้น มันจะ throw error ออกไปหาตัวรับ error เช่น catch ถ้าไม่มีตัวดักจับ error
//   //await จะหยุดทำงาน
//   console.log(number + data.products[0].price);
//   console.log(number * data.products[0].price);
//   //function จะกลายเป็น asynchronous ค่าที่ return ออกมา จะเป็น promist
// };

// fn().then(() => console.log('Call fn'));

// save users ลงในไฟล์ users.json
//1# save ข้อมูลในแบบ promise then catch
//2# save ข้อมูลในแบบ async await
const users = [
  { id: uuidv4(), email: 'example1@email.com', password: '123456', point: 100 },
  { id: uuidv4(), email: 'example2@email.com', password: '654321', point: 50 },
  { id: uuidv4(), email: 'example3@email.com', password: '142536', point: 0 },
  { id: uuidv4(), email: 'example4@email.com', password: '635241', point: 10 },
  { id: uuidv4(), email: 'example5@email.com', password: '456123', point: 15 },
];
//convert to javascript

// const saveFile = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, JSON.stringify(data), err => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// saveFile('./users.json', users)
//   .then(() => console.log('saveFile success'))
//   .catch(err => console.log(err));

// const saveAsFile = async () => {
//   await saveFile('./users.json', users);
// };
// saveAsFile();

//ให้ read user.json
//เพิ่ม newUser เข้าไปต่อท้ายใน user.json
//save file user.json
// const newUser = {
//   id: uuidv4(),
//   email: 'example6@email.com',
//   password: '461523',
//   point: 20,
// };

// const addUser = async () => {
//   const saveAdd = await saveFile('./users.json', users.concat(newUser));
//   saveAdd.push(newUser);
//   console.log(saveAdd);
// };
// addUser();

//เฉลย save users ลงในไฟล์ users.json
//1# save ข้อมูลในแบบ promise then catch
//2# save ข้อมูลในแบบ async await

function writeFile(fileName, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, JSON.stringify(data), 'utf8', function (err) {
      if (err) {
        return reject(err);
      } else {
        resolve();
      }
    });
  });
}

// writeFile('./users.json', users)
//   .then(function () {
//     console.log('writeFile success');
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//arrow
// const main = async () => {
//   try {
//     await writeFile('./users.json', users);
//     console.log('writeFile success');
//   } catch (err) {
//     console.log(err);
//   }
// };
// async function main() {
//   try {
//     await writeFile('./users.json', users);
//     console.log('writeFile success');
//   } catch (err) {
//     console.log(err);
//   }
// }
// main();

//เฉลย ให้ read user.json
//เพิ่ม newUser เข้าไปต่อท้ายใน user.json
//save file user.json
function readFile(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) {
        return reject(err);
      } else {
        resolve(JSON.parse(data)); //แปลง json เป็น javaScript
      }
    });
  });
}

// const newUser = {
//   id: uuidv4(),
//   email: 'example6@email.com',
//   password: '461523',
//   point: 20,
// };

// readFile('./users.json')
//   .then(function (result) {
//     result.push(newUser);
//     return writeFile('./users.json', result);
//   })
//   .then(function () {
//     console.log('writeFile success');
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function main() {
  try {
    const result = await readFile('./users.json');
    result.push(newUser);
    await writeFile('./users.json', result);
    console.log('writeFile success');
  } catch (err) {
    console.log(err);
  }
}

main();
