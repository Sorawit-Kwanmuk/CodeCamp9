// Basic DataStructure : Array (12ข้อ)
// 1.Use an Array to Store a Collection of Data
// let yourArray=[true,false,2,2,"three"]; // Change this line

// 2.Access an Array's Contents Using Bracket Notation
// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1]="e"
// // Only change code above this line
// console.log(myArray);

// 3.Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//     let arr1 =arr
//     // Only change code below this line
//   arr1.push(7, 'VIII', 9)
//   arr1.unshift('I', 2, 'three');
//     // Only change code above this line
//     return arr1;
//   }
//   console.log(mixedNumbers(['IV', 5, 'six']));

// 4.Remove Items from an Array with pop() and shift()
// function popShift(arr) {
//   let popped = arr.pop(); // Change this line
//   let shifted = arr.shift(); // Change this line
//   return [shifted, popped];
// }

// console.log(popShift(["challenge", "is", "not", "complete"]));

// Splice
// 1.Remove Items Using splice()
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// let newArr = arr.splice(1,4)
// // Only change code above this line
// console.log(arr);

// Slice;
// 1.Add Items Using splice()
// function htmlColorNames(arr) {
//     // Only change code below this line
//   const arr1=arr
//   arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
//     // Only change code above this line
//     return arr1;
//   }

//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// 2.Copy Array Items Using slice()
// function forecast(arr) {
//     // change code below this line
//     let arr1 = arr;
//     arr1.slice(2, 4);
//     return arr1.slice(2, 4);
//   }

// do not change code below this line
//   console.log(
//     forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
//   );

// Spread Operator with Array
// 1.Copy an Array with the Spread Operator
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// 2.Combine Arrays with the Spread Operator
// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence=['learning',...fragment, 'is', 'fun']; // Change this line
//     return sentence;
//   }

//   console.log(spreadOut());

// indexOf
// 1.Check For The Presence of an Element With indexOf()
// function quickCheck(arr, elem) {
//     // Only change code below this line
//   if (arr.indexOf(elem) >= 0) {
//       return true;
//     }
//     return false;
//     // Only change code above this line
//   }

//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Loop and Other
// 1.Iterate Through All an Array's Items Using For Loops
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) === -1) {
//         newArr.push(arr[i]);
//       }
//     }
//     // Only change code above this line
//     return newArr;
//   }

//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// 2.Create complex multi-dimensional arrays
// let myNestedArray = [
//     // Only change code below this line
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     ['loop', 'shift', 6, 7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array',["deep"]],
//     ['mutate', 1327.98, 'splice', 'slice', 'push',[["deeper"]]],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[["deepest"]]]]
//     // Only change code above this line
//   ];
