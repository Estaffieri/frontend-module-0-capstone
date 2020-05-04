## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object groups together variables and functions and are made up of key value pairs. An array is a flexible container holding data type values, like integer, string and boolean. An array can be part of an object.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore: {
  name:"Fun For Floofs",
  groomer: true,
  leashes: 47,
  employeesArray: ["Larry" , "Mo" , "Curly"]
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

console.log(states[1];

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
states."MN"="Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
While an array is a type of object, an object can hold arrays AND multiple key value pairs. If you need to create a complex data structure an object may be the better option.

1. What questions do you still have about objects?
