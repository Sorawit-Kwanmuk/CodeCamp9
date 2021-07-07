// 1.Create a Basic JavaScript Object
// let dog = {
//     name:"a",
//     numLegs: 4
//   };

// 2.Use Dot Notation to Access the Properties of an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   console.log(dog.name);
//   console.log(dog.numLegs);

//   // Only change code below this line

// 3.Create a Method on an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//      return "This dog has " + dog.numLegs + " legs.";
//      }
//   };
//   dog.sayLegs();
//   console.log(dog.name);
//   console.log(dog.numLegs);
//   // Only change code below this line

// 4.Make Code More Reusable with the this Keyword
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };

//   dog.sayLegs();

// 5.Define a Constructor Function
// function Dog() {
//     this.name = "a";
//     this.color = "red";
//     this.numLegs = 8;
//   }

// 6.Use a Constructor to Create Objects
// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }
// // Only change code below this line

// let hound = new Dog();

// 7.Extend Constructors to Receive Arguments
// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//   }
//   let terrier = new Dog("a","red");

// 8.Verify an Object's Constructor with instanceof
// let House = function (numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
//   const myHouse = new House(4);
//   myHouse instanceof House
//   // Only change code below this line

// 9.Understand Own Properties
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }

//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line

//   for(let property in canary) {
//     if(canary.hasOwnProperty(property)) {
//       ownProps.push(property);
//     }
//   }
//   console.log([ownProps]);
