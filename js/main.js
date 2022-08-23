console.log('Hello World');
console.log('Hello Again');

// Basics of JavaScript   // = comment

/* << multiline comment open
    
-- Variable Declaration in JS --
Primitive Data Types: String, Number, Boolean, undefined, Null
Object: Object, Array, Function

Control Flow
*/ 

// Variable declaration
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';
console.log(myName);
console.log(typeof myName);

// String can be created using '', "", or ``. The tick marks have a special behavior to format the string.
// Tick Marks + ${varName} is equivalent to f"{var_name}" in Python.
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);

// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14

console.log(pi);
console.log(typeof pi);

// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// undefined
var something;

console.log(something);
console.log(typeof something);

// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull);


// Object
var myObject = {
    a: 123,
    text: 'Hello!'
};

console.log(myObject);
console.log(typeof myObject);

// Array
var myArr = ['Brian', 'Chicago', 'Temple']

console.log(myArr);
console.log(typeof myArr);

// Function
function abc(){};

console.log(abc);
console.log(typeof abc);

// Accessing Properties in Objects
var person ={
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

person.first = 'Frank'

console.log(person);
console.log(typeof person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot notation
console.log(`My first name is ${person.last}`);

// Accessing values in an Array
var newArr = [2, 4, 6, 8, 10]
// Must use bracket notation with an array
console.log(newArr[2]);
// Arrays also have a length property automatically added
console.log(newArr.length)

var mixedArr = [1, 'Hello', {a: 123, b:321, hello: 'Hello'}, [1, 2, 3], function abc(){}];
console.log(mixedArr);

console.log(mixedArr[2]['a']);

console.clear();

// let - Allows us to declare a variable similar as var "let is block-scoped, var is global-scoped"
let myCity = 'Chicago';
console.log(myCity);

// Create a block with {}

if (true){
    var myState = 'Illinois'; // Declare global variable mySTate
    let color = 'blue'; // Declare block variable color
    // let myCity = 'Springfield'; // Declare block variable myCity
    console.log(myCity, myState, color)
};

console.log(myCity, myState);

// const - similar to let (block scoped) - 2 differeces: 1. Needs a value when declared 2. Cannot be reassigned
const newVariable = 'something';
console.log(newVariable);

// newVariable = 'another thing'; // min.js:144 Uncaught TypeError: Assignment is constant variable.

const myBirthday = true;
let ageOfPerson = 40;

if (myBirthday){
    const favColor = 'Green';
    ageOfPerson = ageOfPerson + 1; // OK because ageOfPerson was declared with "let"
    // myBirthday = false; // Error because myBirthday was declared with "const"
    console.log(ageOfPerson);
    console.log(favColor);
}

// console.log(favColor); // Error: favColor not defined

const cities =['Chicago', 'New York', 'Denver', 'San Diego']

console.log(cities);

cities[1] = 'San Francisco'

console.log(cities);

// cities = ['Austin', 'Portland']
// console.log(cities);

const newPerson = {
    first: 'Abraham',
    last: 'Lincoln'
};

console.log(newPerson);

newPerson.first = 'Abe';

console.log(newPerson);

/* newPerson = {
    first: 'George',
    last: 'Washington'
};
*/

// let myname;

// if (true){
//      myname = 'dajkhaga'   
// }

// Clear the console for the next topic
console.clear();

/*
 Basic Math Operations
*/

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5;  // sum = sum + 5
console.log(sum);
sum++; // sum = sum +1 // sum += 1
console.log(sum);

// Subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff - 3
console.log(diff);
diff--; // diff = diff -1; diff -= 1
console.log(diff);

// Multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 2; // prod = prod * 2
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2
console.log(quotient);

// Exponents
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder); 
remainder %= 2; // remainder = remainder % 2
console.log(remainder);

// Floor Division - no built-in operator - use built-in Math module
let floor = Math.floor(19/4)
console.log(floor);

// + operator with a number and string
let myString = 'My age is ';
let myNewAge = 55;

let addedString = myString + myNewAge;
console.log(addedString);
console.log(typeof addedString);

console.log(square);

let quizOne = square + '4';
// undefined, 629, --6254--, 625+4
console.log(quizOne)

let answer = square + '4';
console.log(answer);

let quizTwo = square - '4';
// undefined, 621, 6254, 625-4
console.log(quizTwo);

// let test = 'for' - 'or'
// console.log(test);

let test = '5' + 5 + 5;
console.log(test);

console.clear();

// JavaScript Comparisons

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == checks for equality while allowing for type conversion
// === checks for equality but does not allow for type conversion

console.log(1 == true);

console.log('10' < 5);

// Be careful with type conversions

console.log('10' > '9'); // Both values are strings, no conversion needed, compares alphabetically

// When JavaScript compares objects, it looks for REFERENCE ONLY!!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['cat', 'bird', 'dog'];
let newerArr = animals;

console.log(animals == newerArr);
console.log(animals == ['cat', 'bird', 'dog']);
console.log(newerArr == ['cat', 'bird', 'dog']);

animals.push('horse');
console.log(newerArr);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===)
// Not Equal yes conversion (!=), Not Equal no conversion (!==)
console.log(5 != '5');
console.log(5 !== '5');

console.clear();

// Control Flow

// if (condition expression){code to execute if true};

let newNumber = 10;

console.log('Begin');
if (newNumber > 65){
    console.log('Senior')
} else if (newNumber > 18) {
    console.log('Adult')
} else {
    console.log('Child')
};
console.log('End');

// Ternary Operator - (condition) ? value if true : value if false
// PYTHON: age_group = 'Adult' if age > 18 else 'Child'

let ageGroup = (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup);

// PYTHON: age_group_2 = 'Senior' if age > 65 else 'Adult' if age > 18 else 'Child'

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup2);

// && - and
// || - or

newNumber = 10;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 && newNumber > 65){
    console.log('You get a Discount');
};

console.clear();

/*
    Javascript Loops
    for, for...in, for...of, while, do while
*/

// Standard for loop
// for(counter; expression/condition; increment/decrement for counter){code to execute each loop}

console.log('Loop has started');

for (let i = 0; i <= 20; i++){
    console.log(i);
};

console.log('Loop has ended');

let colors = ['red', 'green', 'purple', 'pink'];

for (let i=0; i<colors.length;i++){
    console.log(i, colors[i]);
};

// for...in -- used to loop over the properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// for (let variable in obj){code to execute for each property in object}
for (let t in teams){
    console.log(t);
    console.log(teams[t]);
};

// for...of -- used to loop over the elements in an Array
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']

for (let p of planets){
    console.log(p);
};

// While Loop
// while (condition){code to execute while condition is true}

let num1 = 1;

while (num1 < 10){
    console.log(num1);
    num1++;
};

// Do While loop... DO the first portion AT LEAST ONCE
// If the while condition is still true, continue the while loop

// do {code to execute} while (condition)

let k = 100;

do {
    k *= 2;
    console.log(k);
} while (k < 10);

/* do {
    var firstName = prompt('What is your name?')
} while (firstName !== 'Brian');
*/