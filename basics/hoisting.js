//variable Hoisting
//you can refer to a variable declared later, without getting an exception. This concept is known as hoisting;

//However, variables that are hoisted return a value of undefined.

var myvar = 'my value';
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();


//Function hoisting

//For functions, only the function declaration gets hoisted to the top and not the function expression.

/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};
