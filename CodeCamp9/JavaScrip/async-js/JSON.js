// JSON form
// {
//     "firstName": "John",,
//     "lastName": "Smith",
//     "age": 25,
//     "isMarried": false,
//     "car": null,
//     "number": [1, 2, 3, 4, 5],
//     "string" : ["one", "two", "three", "four", "five"],
//     "obj": {
//         "city": "New York",
//         "country" : "USA"
//     }
//     "cannot be" : undefined
//     //JSON ไม่รู้จัก undefined ไม่สามารถใช้ได้ เพราะ undefined มีแค่ใน Javascript เท่านั้น JSON ต้องใช้ได้กับทุกภาษา

// }

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 25,
//   isMarried: false,
//   phoneNumber: ['098-145-7648', '099-579-1543'],
//   address: {
//     street: '123 Main Street',
//     city: 'New York',
//     country: 'USA',
//   },
//   sayHi: function () {
//     // ไม่สามารถใช้ได้ และโดนตัดออก
//     console.log('Hi');
//   },
//   sex: undefined, // ไม่สามารถใช้ได้ และโดนตัดออก
// };

// //แปลง เป็น JSON
// const json = JSON.stringify(obj);
// //JSON เขียนเป็น string เท่านั้น
// console.log(json);

// const num = 100;
// const jsonnum = JSON.stringify(num);
// console.log(jsonnum);
// console.log(typeof jsonnum);

//แปลงJSON เป็น Object
const response = '{"status": "success", "time": "2021-08-17T08:12:27"}';
const parseResponse = JSON.parse(response);
console.log(parseResponse);
console.log(typeof parseResponse);
