// Lab 1
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด)
//เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ alert ค่า value

// class Calculator {
//   constructor(value) {
//     this.value = value;
//   }
//   sum() {
//     let num = +prompt("Enter number");
//     this.value += num;
//     return this.value;
//   }
//   subtract() {
//     let num = +prompt("ลบออก");
//     this.value -= num;
//     return this.value;
//   }
//   multiply() {
//     let num = +prompt("Multiply");
//     this.value *= num;
//     return this.value;
//   }
//   devide() {
//     let num = +prompt("divide");
//     this.value /= num;
//     return this.value;
//   }
//   show() {
//     alert(this.value);
//   }
// }

// let value = new Calculator(10);
// value.sum();
// // value.subtract();
// // value.multiply();
// // value.devide();
// // value.show();
// console.log(value);

// LAB2
// ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice()
// เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
// ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
// ให้ Beverage สืบทอดมาจาก Sale
// ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount,
//  price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
//  ให้ beverage เรียก method calcPrice()
// class Sale {
//     name = name;

//   calcPrice() {
// }
// }
// class Beverage {}
