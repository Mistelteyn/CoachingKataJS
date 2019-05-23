{
    let ex = "go";
    console.log(ex); //go
}
//    console.log(ex); //ex is not defined

// {//compiler enters scope
//     let me = "go"; // put variable me to memory
//     console.log(me); 
//     let me = "stay"; // compiler detects error
//                     // Uncaught SyntaxError: Identifier 'me'
//                     // has already been declared
//     console.log(me);
// }

//Template Literals ES6
let person = {name:"Ghino",age:23};
console.log(`I am ${person.name}, malapit na mag ${person.age+1}`);

//ES5
let person2 = {name:"Wolfstein", age:"unknown"};
console.log("Name: Layfon " + person2.name + 
" Alseif " + "Age: " + person2.age);

//Rest Parameter
function showValues(...values){
    console.log(values); //(4) [1, 2, 3, "IB!"]
}
showValues(1,2,3,"IB!");

//Spread Operator
var someWords = ["Hello","Fudge"]
var combinedWords = ["Hey","Bitch",...someWords];
console.log(combinedWords); //(4) ["Hey", "Bitch", "Hello", "Fudge"]
function spreadSomeLove(firstString,...words){
    console.log(words);// (2) ["Hello", "Fudge"]
    console.log(...words) //Hello Fudge
}
spreadSomeLove("hmm, ",...someWords);


//Loop: for of

for(let x of "String"){
    console.log(x);
}

someWords.forEach(element => {
    console.log(element);
});