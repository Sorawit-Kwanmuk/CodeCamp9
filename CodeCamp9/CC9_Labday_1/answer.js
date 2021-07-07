// const result1 = { noOfTransaction: sales.length };
// console.log(result1);
// // 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// const result2 = sales.reduce((accumulator, item, index, array) => {
//   if (accumulator[item.customer]) {
//     if (item.discount) {
//       accumulator[item.customer].totalPayment +=
//         +item.product.unitPrice * (1 - +item.discount);
//     } else {
//       accumulator[item.customer].totalPayment += +item.product.unitPrice;
//     }
//     accumulator[item.customer].count++;
//   } else {
//     accumulator[item.customer] = {
//       totalPayment: item.discount
//         ? item.product.unitPrice * (1 - item.discount)
//         : item.product.unitPrice,
//       count: 1,
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result2);

import { sales } from "./data.js";

////////////////////////////////////
// {Um: {totalPrice: 500000, count:5}, Sun: {totalPrice: 35000, count:1}}
// const result2 = sales.reduce((accumulator, item, index, array) => {
//     const {
//       product: {  unitPrice },
//       customer,
//       discount,
//     } = item;
//     if (accumulator[customer]) {
//       if (item.discount) {
//         accumulator[customer].totalPayment += +unitPrice * (1 - +discount);
//       } else {
//         accumulator[customer].totalPayment += +unitPrice;
//       }
//       accumulator[customer].count++;
//     } else {
//       accumulator[customer] = {
//         totalPayment: discount ? unitPrice * (1 - discount) : unitPrice,
//         count: 1,
//       };
//     }
//     return accumulator;
//   }, {});
//   console.log(result2);
//3. ยอดขาดทั้งหมด (หลังหัก discount)
// const result3 = sales.reduce((acc, item) => {
//     const {
//       product: { unitPrice },
//       discount,
//     } = item;
//     acc += (1 - (discount || 0)) * unitPrice;
//     return acc;
//   }, 0);
//   console.log(result3);
//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// const result4 = sales.reduce((acc, item) => {
//   const {
//     product: { name, unitPrice },
//     discount,
//   } = item;

//   if (!acc[name]) {
//     acc[name] = {
//       totalPrice: (1 - (discount || 0)) * unitPrice,
//       count: 1,
//     };
//   } else {
//     acc[name].totalPrice += (1 - (discount || 0)) * unitPrice;
//     acc[name].count++;
//   }
//   return acc;
// }, {});
// console.log(result4);

// const sumBrand = sales.reduce((acc, value) => {
//   let obj = acc.find((val) => {
//     return val.brand == value.product.name;
//   });
//   let sumPrice;
//   if (!obj) {
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice =
//         value.product.unitPrice - value.product.unitPrice * value.discount;
//     } else {
//       sumPrice = value.product.unitPrice;
//     }

//     let tmp = {
//       brand: value.product.name,
//       amount: 1,
//       sumPrice: sumPrice,
//     };
//     acc.push(tmp);
//   } else {
//     obj.amount += 1;

//     if (value.discount) {
//       obj.sumPrice =
//         obj.sumPrice +
//         (value.product.unitPrice - value.product.unitPrice * value.discount);
//     } else {
//       obj.sumPrice = obj.sumPrice + value.product.unitPrice;
//     }
//   }
//   return acc;
// }, []);
// console.log(sumBrand);

//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// const result5 = sales.reduce((acc, item) => {
//     const {
//       product: { name, model, unitPrice },
//       discount
//     } = item;

//     const total = (1 - discount || 1) * unitPrice;

//     if (acc[name]) {
//       if (acc[name][model]) {
//         acc[name][model] = {
//           count: acc[name][model].count + 1,
//           total: acc[name][model].total + total
//         };
//       } else {
//         acc[name][model] = {
//           count: 1,
//           total
//         };
//       }
//     } else {
//       acc[name] = {
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
//     const {
//       product: { unitPrice },
//       discount,
//       type
//     } = item;

//     const total = (1 - discount || 1) * unitPrice;

//     if (acc[type]) {
//       acc[type] = {
//         count: acc[type].count + 1,
//         total: acc[type].total + total
//       };
//     } else {
//       acc[type] = {
//         count: 1,
//         total
//       };
//     }
//     return acc;
//   }, {});
//   console.log(result6);

//7. หายอดรวมในแต่ละวัน
// const result7 = sales.reduce((acc, item) => {
//     const {
//       product: { unitPrice },
//       discount,
//       saleDate
//     } = item;

//     const total = (1 - discount || 1) * unitPrice;

//     if (acc[saleDate]) {
//       acc[saleDate] = {
//         count: acc[saleDate].count + 1,
//         total: acc[saleDate].total + total
//       };
//     } else {
//       acc[saleDate] = {
//         count: 1,
//         total
//       };
//     }
//     return acc;
//   }, {});
//   console.log(result7);

//8. เรียงยอดขายของแต่ละรุ่น
// let result8 = Object.values(
//     sales.reduce((a, c) => {
//       let key = c.product.model;
//       if (!a[key]) {
//         a[key] = [];
//         a[key].total = 0;
//         a[key].model = key;
//       }
//       a[key].total += c.product.unitPrice * (1 - (c.discount ?? 0));
//       return a;
//     }, {})
//   ).sort((a, b) => a.total - b.total);
//   console.log(result8);
//Easy version
// let result8 = sales.reduce((a, c) => {
//     let key = c.product.model;
//     if (!a[key]) {
//       a[key] = {};
//       a[key].total = 0;
//       a[key].model = key;
//     }
//     a[key].total += c.product.unitPrice * (1 - (c.discount ?? 0));
//     // a[key].push(c);
//     return a;
//   }, {});
//   let xresult8 = Object.values(result8).sort((a, b) => a.total - b.total);
//   console.log(xresult8);
//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
// let result9 = sales.reduce((a, c) => {
//   let key = c.customer;
//   if (!a[key]) {
//     a[key] = {};
//     a[key].total = 0;
//     a[key].customer = key;
//   }
//   a[key].total += c.product.unitPrice * (1 - (c.discount ?? 0));
//   // a[key].push(c);
//   return a;
// }, {});
// let xresult9 = Object.values(result9).sort((a, b) => b.total - a.total);
// console.log(xresult9);
