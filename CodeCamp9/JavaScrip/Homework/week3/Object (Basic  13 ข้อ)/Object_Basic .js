// 1.Build JavaScript Objects
// var myDog = {
//   // Only change code below this line
//   name: "B",
//   legs: 4,
//   tails: 1,
//   friends: ["gender", "men"],

//   // Only change code above this line
// };

// Access Property and Value

// 2.Accessing Object Properties with Dot Notation
// // Setup
// var testObj = {
//     hat: "ballcap",
//     shirt: "jersey",
//     shoes: "cleats"
//   };

//   // Only change code below this line

//   var hatValue = testObj.hat;      // Change this line
//   var shirtValue = testObj.shirt;    // Change this line

// 3.Accessing Object Properties with Bracket Notation
// Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };

//   // Only change code below this line

//   var entreeValue = testObj["an entree"];   // Change this line
//   var drinkValue = testObj["the drink"];    // Change this line

// 4.Accessing Object Properties with Variables
// Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };

//   // Only change code below this line

//   var playerNumber=16;       // Change this line
//   var player = testObj[playerNumber];   // Change this line

// Update,Add,Delete Property and Value
// 5.Updating Object Properties
// Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.name="Happy Coder"
//   // Only change code below this line

// 6.Add New Properties to a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark="woof"

// 7.Delete Properties from a JavaScript Object
// // Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails
//   // Only change code below this line

// Intermediate
// 8.Using Objects for Lookups*ใช้เรื่องฟังก์ชันเล็กน้อย
// Setup
// function phoneticLookup(val) {
//     var result = "";

//     // Only change code below this line
//     var lookup = {
//       "alpha":"Adams",

//       "bravo":"Boston",

//       "charlie":"Chicago",

//       "delta":"Denver",

//       "echo":"Easy",

//       "foxtrot":"Frank",
//     }

//     // Only change code above this line
//      result=lookup[val];
//      return result;
//   }

//   phoneticLookup("charlie");

// 9.Testing Objects for Properties *ใช้เรื่องฟังก์ชันเล็กน้อย
// function checkObj(obj, checkProp) {
//     // Only change code below this line
//      if(obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//     // Only change code above this line
//     } else {
//       return "Not Found";
//     }
//   }

// Complex Object
// 10.Manipulating Complex Objects
// var myMusic = [
//     {
//       artist: "Billy Joel",
//       title: "Piano Man",
//       release_year: 1973,
//       formats: ["CD", "8T", "LP"],
//       gold: true
//     },
//     {
//       artist: "a",
//       title: "a",
//       release_year: 2000,
//       formats: ["a", "b", "c"]
//     }
//   ];

// 11.Accessing Nested Objects
// var myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };

//   var gloveBoxContents = myStorage.car.inside["glove box"];

// 12.Accessing Nested Arrays
// var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];

//   var secondTree = myPlants[1].list[1];

// Application;
// 13.Record Collection
// Setup
// var recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };

//   // Only change code below this line
//   function updateRecords(records, id, artist, value) {
//     if (artist !== 'tracks' && value !== "") {
//       records[id][artist] = value;
//     } else if (artist === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//       records[id][artist] = [value];
//     } else if (artist === "tracks" && value !== "") {
//       records[id][artist].push(value);
//     } else if (value === "") {
//       delete records[id][artist];
//     }
//     return records;
//   }

//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
