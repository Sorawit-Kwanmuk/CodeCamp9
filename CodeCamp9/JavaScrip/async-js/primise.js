const fs = require('fs');

// console.log('A');
// const promist = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('Promise');
//     reject(new Error('Promise Error'));
//   }, 3000);
// });
// console.log(promist);
// setTimeout(() => {
//   console.log(promist);
// }, 1000);
// setTimeout(() => {
//   console.log(promist);
// }, 2000);
// setTimeout(() => {
//   console.log(promist);
// }, 3000);
// setTimeout(() => {
//   console.log(promist);
// }, 4000);
// console.log('B');
// promist object มี property 2ตัว
//resolve ใช้เมื่อค้องการให้ Promise ทำงานสำเร็จ
//reject ใช้เมื่อค้องการให้ Promise ทำงานล้มเหลว
// วินาทีที่0-3 state = pending result=undefined
// วินาทีที่3เป็นต้นไป state = fullFilled  resolved result=DONE

// const rejectPromist = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('REJECTED'));
//   }, 3000);
// });

//Promise เป็น asynchronous

// const promisify = new Promise((resolve, reject) => {
//   fs.readFile('./user.json', 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       //   resolve(data);
//       resolve('Read File Success');
//     }
//   });
// });

// promisify.then(
//   function (result) {
//     console.log(result);
//   },
//   function (error) {
//     // console.log(error);
//     console.log(error.message);
//   }
// );
//then จะทำงานเมื่อ state เป็น fullFilled หรือ rejected เท่านั้น ตอน state เป็น <pending> จะยังไม่ทำงาน
//
// promisify เมื่อทำงานสำเร็จ จะส่ง resolve ไปที่ result
// promisify เมื่อทำงานล้มเหลว จะส่ง reject ไปที่ error

const promisifyProduct = new Promise((resolve, reject) => {
  fs.readFile('./product.json', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

promisifyProduct.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error.message);
  }
);
