const PI = 3.141592653589793;
   //for constants value must be assigned as soon as constant is declared
   //cannot be reassigned

console.log(PI)

const cars = ["SAAB", "Volvo", "BMW"];
//u can create a constant array and modify elements


// change elements
cars[1]='Toyota';

//add eleemnts
cars.push("Lamborghini");
console.log(cars)

const car = {type:"Ferrari", model:"458", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "ALUCard";

console.log(car)


//var is not a block element thus can be accessed from outside the block and can be redeclared

// var x=3;
// {
//    var x=2;
// }

let x = 10;
x-=5;


console.log(x,"value has changed even tho it is alr ");

//but constants and let retain their value

let y=10;

{
   let y=0;
}

console.log(y);

carName = "Volvo";
var carName;
console.log(carName);

let text1 = "2";
let text2 = "5";
let result = text1 < text2;

console.log(result)

let text3 = "It is very hot today,";
text3 += "is it not?";

console.log(text3);


// console.log(5>>2);

let a = 6**2;
a++;
let b = a;
console.log(b)


console.log(typeof 42);

let Car = "";
console.log(Car)