const fs = require('fs');

//ดึงข้อมูล จาก 2 file มา * dyo ในรูปของ promise
// const readFile = new Promise(resolve => {
//   fs.readFile('./product.json', 'utf8', (err, data) => {
//     if (err) return console.log(err);

//     const products = JSON.parse(data).products;
//     const targetPrice = products.find(item => item.id === 1346);
//     const price = targetPrice.price;
//     resolve(price);
//   });
// });

// readFile
//   .then(price => {
//     console.log(price);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//เฉลย ดึงข้อมูล จาก 2 file มา * dyo ในรูปของ promise
// const readFile = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(JSON.parse(data));
//         //แปลงข้อมูล จากไฟ .json ที่เป็น string ให้มาเป็น Javascript
//       }
//     });
//   });
// };

//bad version เกิด callback Hell ซ้อนกันเป็นชั้นๆ
// readFile('./number.json').then(result1 => {
//   readFile('./product.json').then(result2 => {
//     const price = result2.products[1].price;
//     console.log(result1 + price);
//     console.log(result1 * price);
//   });
// });

//good version
// let number;
// readFile('./number.json')
//   .then(result1 => {
//     number = result1;
//     return readFile('./product.json'); //ผลจากการเรียกอ่านไฟล์ จะได้ promise เพื่อใช้ใน.then ตัวถัดไป
//   })
//   .then(result2 => {
//     //ตอนนี้ result2 มีค่าเป็น object products ทั้งก้อน จากการอ่านไฟล์./product.json
//     console.log(number + result2.products[1].price);
//     console.log(number * result2.products[1].price);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//แก้ปัญหาต้องประกาศตัวแปรหลายตัว ในกรณีที่ต้องใช้หลายไฟล์ โดนการใช้ promiseArr
const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(JSON.parse(data));
        //แปลงข้อมูล จากไฟ .json ที่เป็น string ให้มาเป็น Javascript
      }
    });
  });
};
const promiseArr = [readFile('./number.json'), readFile('./product.json')];
//รอจนกระที่ง promist ทุกตัว resolv เสร็จ
//ข้อควรระวัง การเลียงลำดับการอ่านมีผลกับลำดับของ array ของ promiseArr
Promise.all(promiseArr)
  .then(result => {
    // console.log(result);
    // ผลที่ได้คือ array รวมที่อ่านมาจากทุกไฟล์
    //[ 20, { products: [ [Object], [Object], [Object] ] } ]
    console.log(result[0] + result[1].products[1].price);
    console.log(result[0] * result[1].products[1].price);
  })
  .catch(err => {
    console.log(err);
    //ถ้ามีการerror ตัวใดตัวหนึ่ง .catch
  });
