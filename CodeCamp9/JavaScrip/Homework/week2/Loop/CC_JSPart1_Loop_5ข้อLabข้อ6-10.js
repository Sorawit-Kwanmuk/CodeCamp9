// LAB6
// let row = +prompt("Input number of row");
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let str2 = "*".repeat(i * 2 - 1);
//     console.log(str2);
//   }
// }
// pyramid(row);
// เฉลย
// let star = "*";
// for (let i = 1; i < 4; i++) {
//   console.log(star);
//   star = star + "*";
// }
// const test = ["a", "b", "c"].join("-");
// "\n"
// console.log(test);

// LAB7
// for (let n = 2; n <= 12; n++) {
//   for (let i = 1; i <= 12; i++) {
//     let j = n * i;
//     console.log(`${n} * ${i} = ${j}`);
//   }
// }

// let number = prompt("in put number")
// for(let i=0;i<n;i++)
// {
//     while(true)
//     {
//        str=scanner.next();
//        if(str.isEmpty())
//           break;
//        int val=Integer.parseInt(str);
//     }
// }

// function draw(n) {
//   let star = " ";
//   for (let i = 1; i <= n; i++) {
//     star = star + "*";
//   }

//   console.log(star);
// }

// draw(2);

// LAB8
// let input = 0;
// let sum = 0;
// let average = 0;
// let n = 1;
// while (true) {
//   input = prompt("Input number");
//   if (
//     input === "0" ||
//     input < 0 ||
//     input.trim === "" ||
//     input == null ||
//     !+input
//   ) {
//     //.trim ตัดwhite space
//     break;
//   }
//   sum = sum + +input;
//   n++;
// }
// average = sum / n;
// console.log(sum);
// console.log(average);

// LAB9
// let n = 1;

// let input1 = +prompt("Input number between 1 => 99");

// if (input1 > 100 || input1 < 1 || input1 === "" || input1 === null) {
//   alert(`does not meet the specified conditions1`);
// } else if (input1 <= 100 || input1 >= 1 || input1 !== "" || input1 !== null) {
//   while (true) {
//     let input2 = +prompt("Guess number");
//     if (input2 === input1) {
//       alert(`you guessed right.You guessed ${n} times. `);
//       break;
//     } else if (
//       input2 > 100 ||
//       input2 <= 1 ||
//       input2 === "" ||
//       input2 === null
//     ) {
//       alert(`does not meet the specified conditions`);
//       break;
//     } else if (input2 > input1) {
//       alert(`too much`);
//     } else if (input2 < input1) {
//       alert(`too little`);
//     }
//     n++;
//   }
// }
// LAB10
// for (let i = 2; i <= 100; i++) {
//   let count = 0;
//   for (let j = 2; j <= 100; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     console.log(i);
//   }
// }
