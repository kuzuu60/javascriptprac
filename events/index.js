//eg of event handler attributes

{/* <element event='some JavaScript'></element> */}

//eg; onclick attribute(with code) is added to a <button> element:

{/* <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button> */}


// let text = "We are the so-called \"Vikings\" from the north.";
// let text = 'it\'s  alright.'
// let length = text.length;

let a=3;
let b=10;

console.log(`the value of a is ${a} and b is ${b}`)


console.log();

let text = "HELLO WORLD";
let char = text.charCodeAt(0);

console.log(char);

const name = "W3Schools";
let letter = name.at(8);

/* or use
let letter = name[8]; */

console.log(letter);

let word = "Apple, Banana, Kiwi";
let part = word.slice(-12,-6);

console.log(part);

let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7);

console.log(part1);