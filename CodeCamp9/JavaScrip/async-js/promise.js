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

// const promiseProduct = new Promise((resolve, reject) => {
//   fs.readFile('./product.json', 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       // resolve(data);
//       resolve(JSON.parse(data).products);
//     }
//   });
// });

// promiseProduct.then(
//   function (result) {
//     console.log(result);
//   }
// function (error) {
//   console.log(error.message);
// }
// );

// promiseProduct.catch(function (err) {
//   console.log(err);
// });
//catch ทำงานเมื่อ promiseProduct error เท่านั้น เปรียบเสมือน นำ error ของ  then ออกมาใช้ด้านนอก
//ในกรณีที่ then ไม่มีตัวดัก error

//เดิมเราเขียนแบบนี้
// promiseProduct.then(successCallback, errorCallback);
//จะเขียนรวมกัน เป็นแบบนี้ ซึ่งแบบนี้ดีกว่า
// promiseProduct.then(successCallback).catch(errorCallback);

// promiseProduct
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//สามารถเขียนแยกเป็นแบบนี้
// function successCallback(result) {
//   console.log(result);
//สามารถเขียน function ในนี้ได้อีกเยอะแยะมากมาย
// }

// function errorCallback(err) {
//   console.log(err);
//สามารถเขียน function ในนี้ได้อีกเยอะแยะมากมาย
// }

// promiseProduct.then(successCallback).catch(errorCallback);

//finally จะทำงานเสมอ ไม่ว่าจะ fullFilled หรือ rejected ก็จะทำงาน
//มักจะใช้ปิดการทำงาน database
// promiseProduct
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log('Finally block');
//   });

//A-Z promise

//version เข้าใจง่าย
// function delayLog(text, ms) {
//   return new Promise(resolve => {
//     setTimeout(function () {
//       console.log(text);
//       resolve();
//     }, ms);
//   });
// }
//version callback
// const delayLog = (text, ms) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(text);
//       resolve();
//     }, ms);
//   });
// };

// delayLog('A', 1000).then(() => {
//   delayLog('B', 1000).then(() => {
//     delayLog('C', 1000).then(() => {
//       delayLog('E', 1000).then(() => {
//         delayLog('F', 1000).then(() => {});
//       });
//     });
//   });
// });

// const promist = new Promise((resolve, reject) => {
//   resolve(1);
// });

// //promist chaining
// promist
//   .then(result => {
//     console.log('then 1 :' + result);
//     return result * 2;
//     // return new Promise(resolve => resolve());
//   })
//   .then(result => {
//     console.log('then 2 :' + result);
//     return result * 4;
//     // return new Promise(resolve => resolve());
//   })
//   .then(result => {
//     console.log('then 3 :' + result);
//     return result * 8;
//     // return new Promise(resolve => resolve());
//   });

// //A-Z version promise chaining
// const delayLog = (text, ms) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(text);
//       resolve(); //ถ้าไม่มี .then จะทำงานไม่ได้ เพราะ.then จะทำงานเมื่อเจอ resolve ถ้าไม่มีจะเปรียบเสมือนว่า delayLog ยังทำงานไม่เสร็จ
//       // status จะเป็น pendding ตลอด เลยไปต่อไม่ได้
//       // resolve(); ใช้บอกว่า การทำงานเสร็จแล้ว state จะเป็น fullFilled
//     }, ms);
//   });
// };

// delayLog('A', 1000)
//   .then(() => {
//     return delayLog('B', 1000);
//   })
//   .then(() => {
//     return delayLog('C', 1000);
//   })
//   .then(() => {
//     return delayLog('E', 1000);
//   })
//   .then(() => {
//     return delayLog('F', 1000);
//   }) //มี บรรทัดเดียว ไม่ต้องใส่ return ก็ได้
//   .then(() => delayLog('G', 1000))
//   .then(() => delayLog('H', 1000))
//   .then(() => delayLog('I', 1000))
//   .then(() => delayLog('J', 1000));

// const delayTime = (text, ms) => {
//   return new Promise(resolve => {
//     setTimeout(function () {
//       console.log(text);
//       resolve(text);
//     }, ms);
//   });
// };

// delayTime(1, 1000)
//   .then(result => delayTime(result + 1, 1000))
//   .then(result => delayTime(result + 1, 1000))
//   .then(result => delayTime(result + 1, 1000));

//ทอยลูกเต๋า ข้อที่1

// const rollDice = () => Math.floor(Math.random() * 6) + 1;
// const promiseObject = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score); //คือค่าที่ส่งออกไป
// });

// promiseObject
//   .then(result1 => {
//     console.log('current: ' + result1 + ', accumulate: ' + result1);
//     return result1; //return ค่าเป็น resolve(result1) ของ promise มื่อมีการ .then จะนำค่าที่return ไปใช้ค่อใน result2
//     //เมื่อมีการส่ง resolve state ของ promise จะเปลี่ยนจาก pending เป็น fullFilled ด้วย
//   })
//   .then(result2 => {
//     const score2 = rollDice();
//     console.log('current: ' + score2 + ', accumulate: ' + (score2 + result2));
//     return result2 + score2; //resolve(result2 + score2) ไปเป็นค่า result3
//   })
//   .then(result3 => {
//     const score3 = rollDice();
//     console.log('current: ' + score3 + ', accumulate: ' + (score3 + result3));
//     return result3 + score3;
//   });

//ทอยลูกเต๋า ข้อที่2
// const rollDice = () => Math.floor(Math.random() * 6) + 1;
// const play = () => {
//   return new Promise((resolve, reject) => {
//     const score = rollDice();
//     if (score > 3) {
//       resolve(score); // resolve ทำงานใน .then
//     } else {
//       reject(score); // reject ทำงานใน .catch
//     }
//   });
// };

// play() //result ครั้งแรกได้ค่ามาจากการเรียก play() ตรงนี้
//   .then(result => {
//     console.log('score: ' + result);
//     return play(); //result2 ได้ค่ามาจากการเรียก play() ตรงนี้ แล้ว return ค่า resolve promise ออกไป
//     //return result เฉลยๆ ไม่ได้ เนื่องจาก ค่าจากการทอยเต๋า อาจเป็น resolve หรือ reject ก็ได้
//     //ถ้าจะ return เป็น result ต้องมี trow err เพื่อกรอง reject
//   })
//   .then(result2 => {
//     console.log('score: ' + result2);
//     return play(); //result3 ได้ค่ามาจากการเรียก play() ตรงนี้ แล้ว return ค่า resolve promise ออกไป
//   })
//   .then(result3 => {
//     console.log('score: ' + result3);
//     console.log('All done');
//   })
//   .catch(err => {
//     console.log('stop: ' + err);
//   });

//เหมือนข้อที่1 แต่มี throw คอยดัก reject

const rollDice = () => Math.floor(Math.random() * 6) + 1;
const dice = new Promise((resolve, reject) => {
  const score = rollDice();
  resolve(score);
});
//dice ตัวนี้ เขียนขึ้นมาเป็น ตัวแปร ไม่สามารถ เรียกใช้ซ้ำได้เหมือนด้านบน
//ถ้าจะใช้ซ้ำต้องเขียน return (const dice = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score);
// });)
//ของ .then
dice
  .then(result1 => {
    if (result > 3) {
      console.log('score: ' + result1);
    } else {
      throw result1;
    }
  })
  .catch(err => {
    console.log('stop: ' + err);
  });
