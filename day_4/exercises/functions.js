/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
//function printName() {
//  console.log("Estelle Staffieri");
//
//printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(firstName, lastName)
 {var firstName = "Estelle";
  var lastName = "Staffieri";
  var fullName = firstName + " " + lastName;
console.log(fullName)
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function score(numOne,numTwo){
  numOne=10;
  numTwo=7;
  sums = numOne + numTwo;
  console.log(sums)
}
score();

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function Printheadline(greeting, firstName)
 {var greeting = "I see the assassins have failed.";
  var firstName = "Charlotte";
  var humor = "Good morning " + firstName + " " + greeting;
console.log(humor)
}

Printheadline();

function hello(){
  console.log("Sam I am");
}
hello();

function hello_someone(){
  name = "Sam";
  console.log(name + " I am!");
}

hello_someone();
