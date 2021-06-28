// Lab 1 Loop
// let i = 3;

// while (i) {
//   alert(i--);
// }
// 3 เพราะไม่มี condition i-- จึงใช้ค่าเดิมคือ 3
// LAP2 โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่
// let i = 0;
// while (++i < 5) alert(i);
// 4 เพราะ ++i ได้ทำการบวกก่อนนำ่าไปใช้ เมื่อเงื่อนไขคคือ ++i<5 ดังนั้นเมื่อค่าi=5
// ทำให้เงื่อนไขเป็นfalse ++i<5 จึงมีค่าเป็น4
// let i = 0;
// while (i++ < 5) alert(i);
// 5 เพราะ i++ ได้ใช้ค่าเดิมก่อนที่จะทำการ+ ดังนั้นค่าที่i<5 ในloop ที่ยังเป็นtrue
// หลังจากที่ใช้ค่าi=4ที่ทำให้เงื่อนไขเป็นจริงไปแล้ว จึงทำการ++ ทำให้ค่าสุดท้าน i=5

// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }
// เฉลย
// แบบที่1
// for (i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }
// แบบที่2
// for (let i=1; i < 51; i++){
//     console.log(i*2)
// }

// let i = 1;
// while (i < 101) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// FIX
// let i = 1;
// while (i < 101) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// เฉลย
// let i = 2;
// while (i <= 100) {
//   console.log(i);
//   i = i + 2;
// }
// LAB4 หาผลรวมตั้งแต่ 1 ถึง 100
// let i = 1;
// let q = 0;
// while (i <= 101) {
//   console.log(q);
//   q = q + i;
//   i = i + 1;
// }
// LAB4 หาผลรวมเฉพาะเลขคู่
// let i = 1;
// let q = 0;
// while (i <= 100) {
//   if (i % 2 === 0) {
//     q = q + i;
//     console.log(q);
//   }
//   i++;
// }
// LAB4 ผลรวมเฉพาะเลขคี่
// let i = 1;
// let q = 0;
// while (i <= 100) {
//   if (i % 2 === 1) {
//     q = q + i;
//     console.log(q);
//   }
//   i++;
// }
// let q = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     q = i ** 2;
//     q = console.log(q);
//   }
// }
// เฉลย
// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumFinal = 0;
// let sumSquareTwo = 0;
// let sumSquareThree = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += 1;
//   if (i % 2 === 0) {
//     sumEven += i;
//   }
// }
// for (let i = 1; i <= 100; i++) {
//   sum += 1;
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (i % 2 === 0) {
//     sumEven += i;
//     sumSquareTwo += i ** 2;
//   } else {
//     sumOdd += i;
//   }
//   if (i % 3 === 0) {
//     sumSquareThree += 1 ** 2;
//   }
// }
// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(sumSquareTwo);
// console.log(sumSquareThree);
// console.log(sumSquareTwo - sumSquareThree);

// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (i % 2 === 0) {
//     sumEven += i;
//     if (i % 6 !== 0) {
//       sumFinal += i ** 2;
//     }
//   } else {
//     sumOdd += i;
//   }
//   if (i % 3 === 0 && i % 6 !== 0) {
//     sumSquareThree -= 1 ** 2;
//   }
// }
// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(sumFinal);

// LAB 5
// วิธีที่1
// let sum = 100000;
// for (let i = 0; i < 10; i++) {
//   sum = (sum * 2.5) / 100 + sum;
// }
// console.log(sum.toFixed(2));
// วิธีที่2
// let sum = 100000;
// for (let i = 0; i < 10; i++) {
//   sum = (1 + 0.025) * sum;
// }
// console.log(sum.toFixed(2));

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

// เฉลย;
// let str ='';
// for (let i =0;i<4;i++){
//     for(let j=0;j<4;j++){
//         if (i>=j){
//             str +='*';
//         }else{
//             break;
//         }
//     }
//     str += '\n'
// }
// console.log(str)

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
// LAB7
// for (let n = 2; n <= 12; n++) {
//   for (let i = 1; i <= 12; i++) {
//     let j = n * i;
//     console.log(`${n} * ${i} = ${j}`);
//   }
// }

// เฉลย
// let str = ""; //ต้องกำหนดค่าเริ่มต้นให้stringไม่งั้นมันจะแปรค่าเป็นundefine
// for (let i = 2; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     str += `${i} x ${j} = ${i * j}\n`;
//   }
// }

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

// เฉลย
// let sum =0;
// let count =0;
// while (1) {
//   //ใส่1เพื่อบังคับให้loopทำงาน

//   let input = prompt("Enter number"); //ถ้ากด esc หรือกดcancel จะได้ค่าเป็นnull
//   if (
//       //แบบที่1
//     //   +input <= 0 || !+input//+แปลงสิ่งที่ไม่ใช่ตัวเลขเป็น Nan ซึ่งNaN = false แต่เราต้องการให้ifมันทำงาน จึงใส่!เพื่อแปลง false เป็นtrue เพื่อให้ตรงเงื่อนไขการทำงาน
//       //แบบที่2
//     input < 0 ||
//     input === "0" ||
//     input === null ||
//     input.trim(2) === "" ||
//     !+input
//   ) {
//     break;
//   }
// sum+= +input;
// count++
// }
// console.log('sum:' + sum);
// console.log('averrage: ' + sum/count);
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
// เฉลย
// const correctNumber = prompt("Enter correct number");
// if (
//   // !correctNumber || correctNumber.trim() === "" || !+correctNumber
//   !isNumeric(correctNumber)
// ) {
//   //เช็คว่าไม่เป็นnull || enty string
//   alert("You don't enter a number");
// }
// let count = 0;
// while (1) {
//   const guessNumber = prompt("Guess my number");
//   if (!isNumeric(guessNumber)) {
//     alert("You don't enter a number");
//     continue;
//   }
//   count++; //ใส่ไว้ตรงนี้เพราะจะไม่นับรอบที่ทายถูก
//   if (+correctNumber === +guessNumber) {
//     alert(`ยินดีด้วย คุณทายทั้งหมด ${count} ครั้ง`);
//     break;
//   } else if (+correctNumber < +guessNumber) {
//     alert("ค่ามากเกินไป");
//   } else {
//     alert("ค่าน้อยเกินไป");
//   }
// }

// function isNumeric(number) {
//   return !(!number || number.trim() === "" || !+number);
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
// เฉลย
// for (let i = 2; i <= 100; i++) {
//   let isPrime = false;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = true;
//       break;
//     }
//   }
//   if (!isPrime) console.log(i);
// }
