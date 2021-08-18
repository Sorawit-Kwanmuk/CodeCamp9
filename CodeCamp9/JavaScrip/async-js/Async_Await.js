const fs = require('fs');
const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const fn = async () => {
  // const number = readFile('./number.json');
  // console.log(number);//Promise { <pending> }

  const number = await readFile('./number.json'); //readFile คือ function ไม่ใช่ fs.readFile
  // console.log(number); //Promise { <fullFiled> }
  const data = await readFile('./product.json');
  console.log(number + data.products[0].price);
  console.log(number * data.products[0].price);
  //function จะกลายเป็น asynchronous ค่าที่ return ออกมา จะเป็น promist
};

fn().then(() => console.log('Call fn'));
