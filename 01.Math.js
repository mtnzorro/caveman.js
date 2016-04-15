/* * * * * * * * * * * * * * * * * * * * * *
 *    CAVEMAN JS PT 1: THE MATH OBJECT     *
 * * * * * * * * * * * * * * * * * * * * * */

// The Math object has all sorts of useful functions that JavaScript
// programmers use every day. Functions like `Math.sqrt` (square root)
// or `Math.random` (generates random number). But we're caveman coders
// so we're going to go without, and implement this functions manually.


// Our first function, `Math.floor` rounds a number down to the next
// whole number. To get you in the swing of things, this first one is
// implemented for you.
var floor = function(number) {
  var r = number % 1;
  return number < 0 ? number - (!r ? 0 : 1 + r) : number - r;
};


// `Math.ceiling` also rounds a to a whole number, but it rounds up.
var ceiling = function(number) {
  var r = number % 1;
  if (!r){
  	return number
  }
  if (number < 0){
  	return number - ( 1 + r) + 1
  }   
  return number - r + 1;
};


// `Math.abs` returns the absolute value of a number.
var abs = function(number) {
   if(number < 0){
      return (number * -1);
  }
return number
};


// As JavaScript doesn't have an exponent operator, you'll need 
// `Math.pow` to raise a number to a power. Too bad you can't use that.
var pow = function(base, exponent) {
  
  if (exponent === 0){
  	return 1;
  }
  if (exponent < 0){
    exponent = exponent * -1;
    var neg = true;	
  }
  if(exponent === 1){
  	return base;
  }
  var constant = base;
  for(var i = 2; i <= exponent; i++){
    base = base * constant;
  }
  if (neg){
    return 1/base;	
  }
  return base;
};


// `Math.max` is a function that that compares any number of numbers
// and returns the largest. Let's make a version that compares two.
var max = function(x, y) {
 if (y > x){
 	return y;
 }
 return x;
};


// I bet you can guess what `Math.min` is suppossed to do. This time,
// use the `arguments` keyword so that we can compare more than two.
var min = function() {
  var arr = [];
    for (var i = 0; i < arguments.length; i++){
      arr[i]= arguments[i];
    }
  arr = arr.sort(function(a,b){return a -b});
  return arr[0];
};
