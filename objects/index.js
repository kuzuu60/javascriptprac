

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };


// console.log(person.name + "," + person.age + "," + person.city)

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// //example of adding new properties by giving value
// person.nationality= "Allah akhbar";

// // can also delete a property by using the keyword
// // delete person.age, person.["age"]

// console.log(person)
// const y = person;

// y.age = 14;

// console.log(y.age)  // deosnt matter even if we use person.age

// // Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };

// console.log(text);

// we can make js obj using keywords like new Object();

const laptop = new Object();
laptop.brand = "Asus";
laptop.model = "vivobook";
laptop.ram = "16 gb";



console.log(laptop);
console.log(laptop.ram);
console.log(laptop["brand"]);

//this is an exmaple ofObject Methods
//toUpperCase()can be used to convert text to uppercase

const pers = {
  firstName: "Jon",
  lastName : "Done",
  id       : 5590,
  fullName : function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  }
};

console.log(pers.fullName());
//without () givesfunction definition
console.log(pers.fullName);

// syntax for accessing the property of an object is
// let age = person.age, person.["age"], person[x]


//nested objects ,Property values in an object can be other objects:

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj);
console.log(myObj.myCars.car3);

const per = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(per);

console.log(myArray);

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}

console.log(text);


// this is and example of an object constructor function
// function P(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

//use new Person( )to create objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Nepalese";
  //sets default nationality value
  this.fullName =  function(){
    return this.firstName + " " + this.lastName;
  };
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
//adding property to a created object is easy
myFather.nationality = "japanese";
//this take priority as it comes after
//else nationality would've been nepalese



// Person.nationality = "English";
//but u cannot add a new property to an object constructor
//To add a new property, you must add it to the constructor function prototype
// Person.prototype.nationality = "English";
// console.log(myFather);

mySister.changeName = function (name){
  this.lastName = name;
}
//assigns last name with value of name substituting .this with mySister

console.log("My father is"+" "+ myFather.firstName);

console.log("My mother is " + myMother.fullName());
mySister.changeName("Hitler");
console.log("my sister is " + mySister.fullName());

// If you want every Person to have a changeName method, add it to the prototype instead:

Person.prototype.changeName = function(lastName) {
  this.lastName = Carter;
};


