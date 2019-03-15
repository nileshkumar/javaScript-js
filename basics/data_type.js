/*
seven data types:
Boolean -> true and false.
null -> A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
undefined -> A top-level property whose value is not defined.
Number -> An integer or floating point number. For example: 42 or 3.14159.
String -> A sequence of characters that represent a text value. For example: "Howdy"
Symbol -> (new in ECMAScript 2015). A data type whose instances are unique and immutable.
Object -> named containers for values
*/

//In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.
console.log('The answer is ' + 42); // "The answer is 42"
console.log(42 + ' is the answer'); // "42 is the answer"

//In statements involving other operators, JavaScript does not convert numeric values to strings.
console.log('37' - 7); // 30
console.log('37' + 7); // "377"
