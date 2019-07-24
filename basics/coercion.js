//Coercion comes in two forms in JavaScript: explicit and implicit.

//explicit coercion:
var a = "42";

var b = Number( a );

console.log("Explicit Coercion");
console.log(a);				// "42"
console.log(b);	      // 42 -- the number!

//implicit coercion:
var a = "42";

var b = a * 1;	// "42" implicitly coerced to 42 here

console.log("Implicit Coercion");
console.log(a);				// "42"
console.log(b);				// 42 -- the number!
