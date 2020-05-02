## Day 3 Questions

1. What is a conditional statement? Give three examples.
    A conditional statement is based on a concept of if/then/else; if a specified condition is met, then your code runs one or more statements, else your code skips or does something different.These evaluate to true or false. Examples include the if statement, else...if, and switch.

    if (credit >= 700) {
      document.write ("You're Approved!");
    } else {
      document.write ( "We are unable to approve your loan at this time");
    }

    if (orderTotal >= 100) {
      document.write ("You've received a free gift with purchase");
    } else {
      document.write ("");
    }

    if (currentDate!=== 0601) {
      document.write ("Happy Birthday!");
    } else {
      document.write ("");
    }


1. Why might you want to use an if-statement?
    The If statement evaluates or looks for a condition. If the condition is found to be true the code block is run. If statements allow for different scenarios to be available, but not always run if inappropriate. It can also allow for greater personalization, accessibility and automation.

1. What is the JavaScript syntax for an if statement?
    if ("condition") {
      code to run if condition is true;
    }
1. How do you add multiple conditions to an if statement?
    Logical operators && and ||

1. What is the JavaScript syntax for an if/else if/else statement?
    if ("condition") {
      if code block
    }
    else {
      else if code block ();
    }

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

  I'm not sure if you are asking more broadly or this is a point to talk about switch statements. Switch statements allow for a code block with multiple options should the conditions match. So essentially in each scenario this will happen or if no scenario fits run this default.
