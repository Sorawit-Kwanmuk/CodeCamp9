// try {
//   const name = 'John';
//   // name = 'Jim';
//   console.log(firstName);
//   console.log('try ' + name);
// } catch (err) {
//   console.log('catch1 ' + err);
//   console.log('catch2 ' + err.name);
//   console.log('catch3 ' + err.message);
// }

// try {
//   const input = { payee: '', amount: -100, category: '', description: '', date: '27/1/90' };
//   // const input = { firstName: 'John', lastName: 'Smith', age: 'Ten', birthDate: '28/1/90' };
//   if (isNaN(input.amount)) {
//     throw new Error('Amount is not a number');
//   }
//   if (+input.amount < 0) {
//     throw new TypeError('Amount is negative');
//   }
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// Lab 1.1

// try {
//const user = { username: 'john', password: '1234', birthDate: '18/71/2000' };
//const user = { username: 'john', password: '123456', birthDate: '18/71/2000' };
//   const user = { username: 'john', password: '123456', birthDate: '1970-01-02' };
//   if (user.password.length < 6) {
//     throw new Error('Password is too short!');
//   }
//   if (new Date(user.birthDate).getTime === Number && isNaN(new Date(user.birthDate).getTime)) {
//     console.log(user.birthDate);
//   } else {
//     throw new Error('Birthdate is invalid!');
//   }
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// Lab 1.1 เฉลย
// try {
//   // const user = { username: 'john', password: '1234', birthDate: '18/71/2000' };
//   // const user = { username: 'john', password: '123456', birthDate: '18/71/2000' };
//   const user = { username: 'john', password: '123456', birthDate: '1970-01-02' };
//   const err = {};
//   if (user.password.length < 6) {
//     throw new Error('Password is too short!');
//   }
//   if (isNaN(new Date(user.birthDate).getTime)) {
//     throw new Error('Birthdate is invalid!');
//   }
//   if (Object.keys(err).length > 0) {
//     throw new Error(JSON.stringify(err));
//   }
// } catch (error) {
//   console.log(error.message);
// }

// การ import ใน js

// import fs from 'fs';
// const fs = require('fs');

// let b;

// fs.readFile('./user.json', 'utf8', (err, data) => {
//   // console.log(data);
//   // console.log(err);
//   b = data;
//   console.log(b);
// });
// console.log(b); //undefined
//เพราะ fs.readFile เป็น asychronous เมื่อเรียกทำงาน จะำทำงานlet b; แล้วไป console.log(b); เลย
//มันไม่รอให้ fs.readFile ทำงานเสร็จ ดังนั้น b = data; จึงทำงานเสร็จหลังจาก console.log(b);
//utf8 คือมาตรฐานการอ่านไฟล์อักขระ เนื่องจากเวลาคอมพิวเตอร์เซฟ มันจะเซฟเป็นเลขฐาน2
//ไม่สามารถอ่านผลลัพธ์ readFile นอกcallback (err, data) => {} ได้

// setTimeout(() => {
//   console.log(b);
// }, 1000);
//จะได้คำตอบตรงกับ data เพราะหน่วงเวลาจน fs.readFile ทำง่านเสร็จ b = data; หลังจากหมด setTimeout
//จึงค่อย console.log(b);

//การนำข้อมูลมาใช้
// const fs = require('fs');
// fs.readFile('./user.json', 'utf8', (err, data) => {
//   // console.log(data);
//   console.log(err);
//   const users = JSON.parse(data).users;
//   console.log(users);
// });

// fs.readFile('./product.json', 'utf8', (err, data) => {
//   console.log(err);
//   const products = JSON.parse(data).products;
//   console.log(products);
// });

// //ทั้งคู่เป็น asychronous จึงทำงานพร้อมกัน ขึ้นอยู่กับว่าอันไหนเสร็จก่อน

// //add data to file.json
// const data = {
//   transactions: [
//     { id: 2345, product: 'Paprika', price: 20, amount: 1, user: 'example@email.com' },
//   ],
// };
// fs.writeFile('./transaction.json', JSON.stringify(data), 'utf8', err => {
//   if (err) {
//     //หรือจะเขียน if(err!=null)
//     console.log(err);
//   } else {
//     //ถ้าไม่มีerror จะส่งค่าเป็น null มาให้
//     console.log('Save file success');
//   }
// });

//ให้หา user ที่ id="5679" หา product ที่ id = 1346 เสร็จแล้วให้ save ข้อมูลใน transaction.json
//ผู้ซื้อคือ id="5679" ซื้อ id = 1346 จำนวน 5 ชิ้น ได้ point 10 บาท ต่อ 1 point
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
fs.readFile('./user.json', 'utf8', (err, data) => {
  if (err) return console.log(err);

  const users = JSON.parse(data).users;
  //users = ข้อมูล data ทั้งหมด
  const targetUser = users.find(item => item.id === 5679);
  //targetUser คือ user ที่ id = 5679
  console.log(targetUser);

  fs.readFile('./product.json', 'utf8', (err, data) => {
    if (err) return console.log(err);

    const products = JSON.parse(data).products;
    const targetProduct = products.find(item => item.id === 1346);
    console.log(targetProduct);

    const newData = {
      transactions: [
        {
          id: uuidv4(),
          email: targetUser.email,
          product: targetUser.name,
          price: targetProduct.price,
          amount: 5,
        },
      ],
    };
    console.log(newData);

    fs.writeFile('./transaction.json', JSON.stringify(newData), 'utf8', err => {
      if (err) return console.log(err);
      console.log('Save file success');
    });
  });
});
