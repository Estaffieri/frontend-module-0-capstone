/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 7;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
    This if...else statement is evaluating if the condition of doorChoice is stricly equal to 1, returning as true,
    the variable of bearClothing will return as the string "hat". If this condition is false the variable
    bearClothing will return as the string "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
    bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
    bearClothing would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
    This if...else statement first checks if the condition of the bearChoice variable is true in being stricly equal to 1.
    If found to be true the console logs a concatenated response of strings and the variable bearClothing. If false, it proceeds
    to the else if statement with the condition that bearChoice is stricly equal to 2. If this is true an alternate concatenated
    response is logged to the console. This procees is repeated as the script runs and checks that conditions are true or false.
    If the variable bearChoice is not equal to 1,2, or 3, so returns as false, the else statemtent is logged to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
    This would return "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
    The bear is trying on a hat that is too small. You let the bear know and the bear starts to cry.

7. What is your favorite ending?
*/ I thought the idea of a bear trying on a scarf that was too small was a funny image, but I didn't want to make the bear cry.
    I opted for being best friends with the bear tying on a hat.
