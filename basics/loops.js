/*

The statements for loops provided in JavaScript are:

for statement
do...while statement
while statement
labeled statement
break statement
continue statement
for...in statement
for...of statement

*/

//break statement

//When you use break without a label, it terminates the innermost enclosing
//while,do-while, for, or switch immediately and transfers control to the following statement.
//When you use break with a label, it terminates the specified labeled statement.

//Continue statement

//The continue statement can be used to restart a while, do-while, for, or label statement.

//for...of statement
//The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)

var arr = [3, 5, 7];
for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}
