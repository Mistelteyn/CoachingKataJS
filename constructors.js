let normal = normalFunction(1,2);
function normalFunction(arg1,arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
    console.log("I am a normal Function");
}

function objectConstructor(arg1,arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
    console.log("Object Constructed");
}

function createObject(arg1,arg2){
    let returnObject = {}
    returnObject.arg1 = arg1;
    returnObject.arg2 = arg2;
    return returnObject;
}


let objectC = new objectConstructor(1,2);
let objectD = new objectConstructor(3,5);
let createdObject = createObject(5,6);
console.log(createdObject);
console.log(objectC.constructor == objectD.constructor);
console.log(typeof createdObject);
console.log(typeof objectC);
// console.log(normal.args1);

// function Book() { 
   
//   } 
  
var myBook = new Book();

myBook instanceof Book    // true
console.log(myBook instanceof Object)  // false

myBook.constructor === Book; 

function Book(name, year) {
    this.name = name;
    this.year = '(' + year + ')';
}
var firstBook = new Book("Pro AngularJS", 2014);
var secondBook = new Book("Secrets Of The JavaScript Ninja", 2013); 
var thirdBook = new Book("JavaScript Patterns", 2010);

var testStringObject = new String("string");
console.log(testStringObject);

// function Human(firstName, lastName) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName
}
Human.prototype.fullName = function(){
	console.log(this.firstName + " " + this.lastName);
}

var person1 = new Human("Ghino", "Punzalan");
var person2 = new Human("Sachin", "Tendulkar");
person1.fullName(); // Ghino Punzalan

