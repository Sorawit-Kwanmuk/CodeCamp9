import { sales } from "./data.js";

//1. จำนวน transaction ทั้งหมดที่ขายไปกี่รายการ
// function transactionCount(sales) {
//   for (let element of sales) {
//     return sales.length;
//   }
// }
// const count = console.log(`มีทั้งหมด ${transactionCount(sales)} รายการ`);

//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง และ แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง

// function eachCustomer(sales) {
//   for (let item of sales) {
//     console.log(item);
//     let id = 0;
//     const nameCus = console.log(sales[id].customer);
//     id++;
//     return nameCus;
//   }
// }
// console.log(eachCustomer(sales));

// {Um: {totalPrice: 500000, count:5}, Sun: {totalPrice: 35000, count:1}}
// const result2 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: { unitPrice },
//     customer,
//     discount,
//   } = item;
//   if (accumulator[customer]) {
//     if (discount) {
//       accumulator[customer].totalPayment += +unitPrice * (1 - +discount);
//     } else {
//       accumulator[customer].totalPayment += +unitPrice;
//     }
//     accumulator[customer].count++;
//   } else {
//     accumulator[customer] = {
//       totalPayment: discount ? unitPrice * (1 - discount) : unitPrice,
//       count: 1,
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result2);

//3. ยอดขาดทั้งหมด (หลังหัก discount)
// const result3 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: { unitPrice },
//     discount,
//   } = item;
//   if (accumulator["totalSales"]) {
//     if (discount) {
//       accumulator["totalSales"].total += unitPrice * (1 - discount);
//     } else {
//       accumulator["totalSales"].total += unitPrice;
//     }
//   } else {
//     accumulator["totalSales"] = {
//       total: discount ? unitPrice * (1 - discount) : unitPrice,
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result3);

//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// const result4 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: { unitPrice, model },
//     discount,
//   } = item;
//   if (accumulator[model]) {
//     if (discount) {
//       accumulator[model].total += +unitPrice * (1 - +discount);
//     } else {
//       accumulator[model].total += +unitPrice;
//     }
//     accumulator[model].count++;
//   } else {
//     accumulator[model] = {
//       total: discount ? +unitPrice * (1 - +discount) : +unitPrice,
//       count: 1,
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result4);
//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// const result5 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: { unitPrice, model, model },
//     discount,
//   } = item;
//   if (accumulator[model]) {
//     if (accumulator[model][model]) {
//       if (discount) {
//         accumulator[model][model].total += +unitPrice * (1 - +discount);
//       } else {
//         accumulator[model][model].total += +unitPrice;
//       }
//       accumulator[model][model].count++;
//     } else {
//       accumulator[model][model] = {
//         total: discount ? +unitPrice * (1 - +discount) : +unitPrice,
//         count: 1,
//       };
//     }
//   } else {
//     accumulator[model] = {
//       [model]: {
//         count: 1,
//         total,
//       },
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result5);

// const result5 = sales.reduce((acc, item) => {
//     const {
//       product: { model, model, unitPrice },
//       discount
//     } = item;

//     const total = (1 - discount || 1) * unitPrice;

//     if (acc[model]) {
//       if (acc[model][model]) {
//         acc[model][model] = {
//           count: acc[model][model].count + 1,
//           total: acc[model][model].total + total
//         };
//       } else {
//         acc[model][model] = {
//           count: 1,
//           total
//         };
//       }
//     } else {
//       acc[model] = {
//         [model]: {
//           count: 1,
//           total
//         }
//       };
//     }

//     return acc;
//   }, {});
//   console.log(result5);
//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// const result6 = sales.reduce((acc, item) => {
//   const {
//     product: { unitPrice },
//     discount,
//     saleDate,
//   } = item;
//   if (acc[saleDate]) {
//     if (discount) {
//       acc[saleDate].total += +unitPrice * (1 - +discount);
//     } else {
//       acc[saleDate].total += +unitPrice;
//     }
//   } else {
//     acc[saleDate] = {
//       total: discount ? +unitPrice * (1 - discount) : +unitPrice,
//     };
//   }
//   return acc;
// }, []);
// console.log(result6);

// //7. หายอดรวมในแต่ละวัน
// const result7 = sales.reduce((acc, item) => {
//   const {
//     product: { unitPrice },
//     discount,
//     saleDate,
//   } = item;
//   if (acc[saleDate]) {
//     if (discount) {
//       acc[saleDate].total += +unitPrice * (1 - +discount);
//     } else {
//       acc[saleDate].total += +unitPrice;
//     }
//   } else {
//     acc[saleDate] = {
//       total: discount ? +unitPrice * (1 - discount) : +unitPrice,
//     };
//   }
//   return acc;
// }, {});
// console.log(result7);

// //8. เรียงยอดขายของแต่ละรุ่น
// const result8 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: { unitPrice, model, name },
//     discount,
//   } = item;
//   if (accumulator[model]) {
//     if (discount) {
//       accumulator[model].total += +unitPrice * (1 - +discount);
//     } else {
//       accumulator[model].total += +unitPrice;
//     }
//   } else {
//     accumulator[model] = {
//       total: discount ? +unitPrice * (1 - +discount) : +unitPrice,
//       name: `${name} model: ${model}`,
//     };
//   }
//   return accumulator;
// }, {});

// let arr = Object.values(result8);
// arr.sort((a, b) => b.total - a.total);
// console.log(arr);
//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
// const result9 = sales.reduce((accumulator, item) => {
//   const {
//     product: { unitPrice },
//     discount,
//     customer,
//   } = item;
//   if (accumulator[customer]) {
//     if (discount) {
//       accumulator[customer].total += +unitPrice * (1 - +discount);
//     } else {
//       accumulator[customer].total += +unitPrice;
//     }
//   } else {
//     accumulator[customer] = {
//       total: discount ? +unitPrice * (1 - +discount) : +unitPrice,
//       name: customer,
//     };
//   }
//   return accumulator;
// }, {});

// let arr = Object.values(result9);
// arr.sort((a, b) => b.total - a.total);
// console.log(arr);
