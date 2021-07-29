// MAP
// 1.Use the map Method to Extract Data from an Array
// Only change code below this line

// var ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

// // Only change code above this line

// console.log(JSON.stringify(ratings));

// 2.Implement map on a Prototype
// The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   var newArray = [];
//   // Only change code below this line
//     this.forEach(i => newArray.push(callback(i)));
//   // Only change code above this line
//   return newArray;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });

// Filter
// 3.Use the filter Method to Extract Data from an Array
// Only change code below this line

// var filteredList = watchList
//   .map(function(e) {
//     return { title: e["Title"], rating: e["imdbRating"] };
//   })
//   .filter(e => e.rating >= 8);

// // Only change code above this line

// console.log(filteredList);

// 4.Implement the filter Method on a Prototype ** ข้อนี้ยังไม่ต้องทำ

// Slice
// 5.Return Part of an Array Using the slice Method
// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line
//   return anim.slice(beginSlice, endSlice);
//     // Only change code above this line
//   }
//   var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//   sliceArray(inputAnim, 1, 3);

// 6.Remove Elements from an Array Using slice Instead of splice
// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.slice(0,3);

//     // Only change code above this line
//   }
//   var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//   nonMutatingSplice(inputCities);

// Concat
// 7.Combine Two Arrays Using the concat Method
// function nonMutatingConcat(original, attach) {
//     // Only change code below this line

//   return original.concat(attach)
//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);

// 8.Add Elements to the End of an Array Using concat Instead of push
// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.concat(newItem);

//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingPush(first, second);

// Reduce
// 9.Use the reduce Method to Analyze Data
// function getRating(watchList){
//     // Add your code below this line
//     var averageRating = watchList.filter(film => film.Director === "Christopher Nolan")
//       .map(film => Number(film.imdbRating)).reduce((sumOfRatings, rating) => sumOfRatings + rating)/watchList.filter(film => film.Director === "Christopher Nolan").length;
//     return averageRating;
//   }
//   console.log(getRating(watchList));

// Application
// 10.Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// const squareList = arr => {
//     // Only change code below this line
//     return arr.filter(num => num > 0 && num % parseInt(num) === 0)
//             .map(num => Math.pow(num, 2));
//     // Only change code above this line
//   };

//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

// Sort
// 11.Sort an Array Alphabetically using the sort Method
// function alphabeticalOrder(arr) {
//     // Only change code below this line
//       return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
//     // Only change code above this line
//   }
//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// 12.Return a Sorted Array Without Changing the Original Array
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);

// Every
// 13.Use the every Method to Check that Every Element in an Array Meets a Criteria
// function checkPositive(arr) {
//     // Only change code below this line
//    return arr.every(val => val > 0);
//     // Only change code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);

// Some
// 14.Use the some Method to Check that Any Elements in an Array Meet a Criteria
// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.some(elem => elem > 0);

//     // Only change code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);
