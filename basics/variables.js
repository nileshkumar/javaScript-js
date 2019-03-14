/*
Declarations
------------
var:
    Declares a variable, optionally initializing it to a value.
let:
    Declares a block-scoped, local variable, optionally initializing it to a value.
const:
    Declares a block-scoped, read-only named constant.
*/

//A variable declared using the var or let statement with no assigned value specified has the value of undefined.
//An attempt to access an undeclared variable results in a ReferenceError exception

var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;


//The undefined value behaves as false when used in a boolean context.
//The undefined value converts to NaN when used in numeric context.
var a;
console.log(a + 2);  // Evaluates to NaN

//When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.

var n = null;
console.log(n * 32); // Will log 0 to the console

//You can create a read-only, named constant with the const keyword.

const PI = 3.14;

//A constant cannot change value through assignment or be re-declared while the script is running.
//It must be initialized to a value.
//You cannot declare a constant with the same name as a function or variable in the same scope.


//Global variables

/*
Global variables are in fact properties of the global object. In web pages, the global object is window,
so you can set and access global variables using the window.variable syntax.
*/
