// let p1=3;
// let p2=5;


// function myFunction(p1,p2){
//     return p1*p2;
// }

// console.log(myFunction(p1,p2));


// let x=myFunction(4,5);
// function myFunction(a,b){
//     return a*b;
// }

// console.log(x);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  
  console.log(value)

 
let text = "The temperature is " + toCelsius(77) + "' Celsius";

console.log(text);

// function myfunction(){
//     let carName= "Volvo";
//     onsole.log(carName);
// }
// myfunction();

const person = new Object();

// Add Properties
person.firstName = "Ramesh";
person.lastName = "Shankaar";
person.age = 50;
person.eyeColor = "blue";

const x = person;

x.age=25;

console.log(person);

console.log(person.lastName);

console.log(person["firstName"]  + "is" +  person.age + "years old.");

const pers = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  }
};

console.log(pers.fullName())
console.log("dont wanna work today lets take a day off yay")