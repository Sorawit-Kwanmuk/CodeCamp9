// const studentName = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 },
// ];
// function calGrade(studentName) {
//   for (let i = 0; i <= studentName.length; i++) {
//     let name = studentName[i].name;
//     let score = studentName[i].marks;
//     let grade = "";
//     if (score >= 90) {
//       grade = "A+";
//     } else if (score >= 80) {
//       grade = "A";
//     } else if (score >= 70) {
//       grade = "B";
//     } else if (score >= 60) {
//       grade = "C";
//     } else {
//       grade = "F";
//     }
//     console.log(`${name} has got ${grade}`);
//     i++;
//     return grade;
//   }
// }
// calGrade(studentName);

// let count = 1;
// let result = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     result += count + " ";
//     count++;
//   }P
//   result += "\n";
// }
// console.log(result);

// const x = alert("Hello");
// const y = prompt("insert number");
// console.log("x : ", x);
// console.log("y : ", y);

// Function
//function declaration
// function multiply(x, y) {
//   return x * y;
// }

// //function execution
// const result = function (z) {
//   return z * 2;
// };

// //function arrow
// const result2 = (z) => console.log(z);
// const result3 = (z) => z * 2;
// const result4 = (z) => {
//   console.log(z);
//   return z * 2;
// };

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const james = new Person("James", "Bond", 28, "Blue");
// console.log(james);
// console.log(james.firstName);
// console.log(james.lastName);
// console.log(james.age);
// console.log(james.eyeColor);

// const num = 9876543210;

// function reversedNum(num) {
//   return (
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
//   );
// }

// console.log(reversedNum(num));

// function reverseStr(str) {
//   let a = Array.from("" + str);
//   return a.reverse().join("");
// }
// console.log(reverseStr(1023));

//function Greatest common divisor
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(12, 18));

// function Least common multiple
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(12, 18));

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(lcm(65, 91));

// const str = "change my every first letter of this string to uppercase string";
// const str2 = str.replace(/\w*/g, function (word) {
//   return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
// });
// console.log(str2);

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(lcm(65, 91));

// function gcd(a, b) {
//   const max = a < b ? a : b;
//   let i;
//   for (i = max; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       break;
//     }
//   }
//   return i;
// }
// console.log(gcd(15, 75));

// function lcm(a, b) {
//   const max = a * b;
//   let i = a > b ? a : b;
//   for (; i <= max; i++) {
//     if (i % a === 0 && i % b === 0) {
//       break;
//     }
//   }
//   return i

// const str = "change my every first letter of this string to uppercase string";
// function changeUpper(str) {
//   let pos = 0;
//   let newStr = "";
//   newStr += str[0].toUpperCase();
//   for (let cha of str) {
//     if (pos === str.length - 1) break;
//     if (cha === " ") {
//       newStr += str[pos + 1].toUpperCase();
//     } else newStr += str[pos + 1];
//     pos++;
//   }
//   return newStr;
// }

// console.log(changeUpper(str));
