// Basic DataStructure : Object
// 1.Add Key-Value Pairs to JavaScript Objects
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };

//   // Only change code below this line
//   foods["bananas"] = 13;
//   foods["grapes"] = 35;
//   foods["strawberries"] = 27;
//   // Only change code above this line

//   console.log(foods);

// 2.Modify an Object Nested Within an Object
// let userActivity = {
//   id: 23894201352,
//   date: "January 1, 2017",
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// // Only change code below this line
// userActivity.data.online = 45;
// // Only change code above this line

// console.log(userActivity);

// 3.Access Property Names with Bracket Notation
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };

//   function checkInventory(scannedItem) {
//     // Only change code below this line
//     return foods[scannedItem];
//     // Only change code above this line
//   }

//   console.log(checkInventory("apples"));

// 4.Use the delete Keyword to Remove Object Properties
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };

//   // Only change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   // Only change code above this line

//   console.log(foods);

// 5.Check if an Object has a Property
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };

//   function isEveryoneHere(userObj) {
//     // Only change code below this line
//       if (
//       userObj.hasOwnProperty("Alan") &&
//       userObj.hasOwnProperty("Jeff") &&
//       userObj.hasOwnProperty("Sarah") &&
//       userObj.hasOwnProperty("Ryan")
//     ) {
//       return true;
//     }
//     return false;
//   }
//     // Only change code above this line

//   console.log(isEveryoneHere(users));

// 6.Iterate Through the Keys of an Object with a for...in Statement
// function countOnline(usersObj) {
//     // Only change code below this line
//   let result = 0;
//     for (let user in usersObj) {
//       if (usersObj[user].online === true) {
//         result++;
//       }
//     }
//     return result;
//     // Only change code above this line
//   }

// 7.Generate an Array of All Object Keys with Object.keys()
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };

//   function getArrayOfUsers(obj) {
//     // Only change code below this line
//     return Object.keys(obj);
//     // Only change code above this line
//   }

//   console.log(getArrayOfUsers(users));

// 8.Modify an Array Stored in an Object
// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//       username: 'kennethCodesAllDay',
//       joinDate: 'March 26, 2016',
//       organization: 'freeCodeCamp',
//       friends: [
//         'Sam',
//         'Kira',
//         'Tomo'
//       ],
//       location: {
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA'
//       }
//     }
//   };

//   function addFriend(userObj, friend) {
//     // Only change code below this line
//     userObj.data.friends.push(friend);
//     return userObj.data.friends;
//     // Only change code above this line
//   }

//   console.log(addFriend(user, 'Pete'));
