var someArray = [6, 1, 9, "Rey Mysterio"];
someArray.forEach(myFunction);

function myFunction(value) {
  console.log(value);
/* 6
   1
   9
   Rey Mysterio  */
}

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2); //(5) [90, 8, 18, 32, 50]

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(over18); // (2) [45, 25]


var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN" 
  };
  Object.defineProperty(person, "language", {enumerable:false});
  console.log(Object.getOwnPropertyNames(person));
 //["firstName", "lastName", "language"]

 var person2 = {
    firstName: "Jon",
    lastName : "Snow",
    language : "EN" 
  };
  Object.defineProperty(person2, "language", {enumerable:false});
  console.log(Object.keys(person2));
 //["firstName", "lastName"]

 var someProto = {
     someProperty: "someValue",
     someMethod: function (){
         console.log("Executed someMethod");
     }
 }
 var newObject = Object.create(someProto);
 console.log(newObject);


