"use strict";
var fn = function () { return 'response'; };
var a;
var b;
var c;
var myArray;
a = 10;
b = true;
c = 'rol';
myArray = [1, 2, 3];
//tuple 
var myArrayTuple = [1, true];
function add(a, b, c, d, e) {
    if (d === void 0) { d = 0; }
    if (e === void 0) { e = 0; }
    // d is optional too, if no value then 0
    return a + b;
}
var sum = add(1, 2, 3);
console.log('x');
console.log(sum);
// union type
var g; // g can be only number or boolean, not any, not string
