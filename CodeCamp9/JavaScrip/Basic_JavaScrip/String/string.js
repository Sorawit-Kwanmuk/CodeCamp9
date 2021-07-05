// // LAB 3.1
// let message = `c:\\Users\\Admin\\Desktop`;
// console.log(message);

// LAB 3.2
// let message1 = "Welcome to Thailand";
// let message2 = "Don'n be afraid\n";
// let message3 = "สวัสดีประเทศไทย";

// console.log(message1.length);//19
// console.log(message2.length);//16
// console.log(message3.length);//15

// LAB 3.3
// let str = prompt("Input message");
// function ucFirst(str) {
//   console.log(str.slice(0, 1).toUpperCase(1) + str.slice(1, Infinity));
// }
// ucFirst(str);
// เฉลย
// function ucFirst(str) {
//   if (
//     !str /*เช็ค empty string เช็ค null เช็ค nan เช็ค undefine แช่ไม่ได้เช็ค white space*/
//   )
//     return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("sDoa"));
// LAB 3.4
// let message = prompt("Input message");
// function search(message) {
//   if (
//     message.toLowerCase().includes("xxx") ||
//     message.toLowerCase().includes("sex") ||
//     message.toLowerCase().includes("porn")
//   ) {
//     return true;
//   }
//   if (message.toLowerCase().includes("sex")) {
//     return true;
//   }
//   if (message.toLowerCase().includes("porn")) {
//     return true;
//   }
//   return false;
// }

// console.log(search(message));
// เฉลย
// function checkSpam(str) {
//   if (!str) return str;
//   return (
//     str.toLoverCase().includes("xxx") ||
//     str.toLoverCase().includes("sex") ||
//     str.toLoverCase().includes("porn")
//   );
// }
// console.log(checkSpam('xxxxxx');
// LAB 3.5
// let message = prompt("Input message");
// n = message.length;
// function truncate(message) {
//   if (n > 20) {
//     // return console.log(message.substr(1, 20) + "...");
//     message = message.substr(1, 20) + "...";
//     return message;
//   }
//   return message;
// }
// truncate(message);
// console.log(truncate(message));
// เฉลย
// function truncate(str, length) {
//   if (!str) return str;
//   if (str.length < length) return str;
//   return str.slice(0, length - 1) + "...";
// }
// console.log(truncate("'What I'd like to tell on this topic is:'"));

// LAB 3.6
// const money = prompt("Input money");

// function extractCurrencyValue(string, rate) {
//   let currency = string.slice(1);
//   return (currency *= rate);
// }

// const bath = extractCurrencyValue("$120", 30);
// console.log(`THB ${bath}`);

// เฉลย
// function extractCurrencyValue(str, rate) {
//   if (!str) return str;
//   return str.slice(1) * rate;
// }
// console.log(extractCurrencyValue("$120", 30));
