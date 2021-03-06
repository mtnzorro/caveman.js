/* * * * * * * * * * * * * * * * * * * * * *
 *    CAVEMAN JS PT 2: ARRAY.PROTOTYPE     *
 * * * * * * * * * * * * * * * * * * * * * */

// Part of what makes arrays so powerful are the many useful methods
// attached to the `Array.prototype`. It makes it easy to take a set of
// data and `sort` or `filter` it. Of course, as cavemen we are throwing
// all those functions out the window and implementing them from scratch.

// Note that normally these functions are called directly on the array,
// i.e. [1, 2, 3].pop(), but since we are doing this manually, we'll 
// have to input the array as the first argument.


// `Array.prototype.pop` removes the last element from an array and 
// returns it. Since this is your first one, I'll give it to you.
var pop = function(array) {
  var popped = array[array.length - 1];
  if (array.length) array.length--;
  return popped;
};


// `Array.prototype.push` is just the opposite of `pop`, adding a new
// value to the end of an array, and returning the new length.
var push = function(array, value) {
  array[array.length] = value;
  return array.length;
};


// `Array.prototype.shift` removes the first element from an array.
// This won't be quite as simple as `pop` was.
var shift = function(array) {
  var newArr = array[0];
  var shiftArr = [];
for(var i = 1; i < array.length; i++){
    array[i-1] = array[i];
  }
if (array.length) array.length--;
return newArr;
};


// `Array.prototype.unshift` adds an value to the start of an array.
var unshift = function(array, value) {
  var temp = [];
  temp[0] = value;

 for(i = 0; i < array.length; i++){
  temp[i+1] = array[i];
 }
 for(i = 0; i < temp.length; i++){
  array[i] = temp[i];
 } 
return array.length;
};


// `Array.prototype.join` combines an array of substrings into a single 
// string with an optional delimiter string in between each one. If no 
// delimiter is provided, it should use a comma.
var join = function(array, delim) {
  if (delim === undefined){
  delim = ",";
}
var str = '';
for(i = 0; i < array.length - 1; i++){
 str += array[i] + delim;    
}
str += array[array.length - 1];
return str;

};



// `Array.prototype.reverse`, as you might expect, takes an array and 
// flips it. It's always good to reuse useful code, so I've solved 
// `reverse` using your version of `push`. You got that working, right?
var reverse = function(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i--) {
    push(reversed, array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    array[j] = reversed[j];
  }

  return array;
};


// `Array.prototype.concat` will combine any number of sub-arrays into a 
// new larger array. You may find some of your previous functions useful 
// here too. Note that concat does not mutate any of the original arrays!
var concat = function() {
  
  
  var arr = [];
  var concatArr = [];
    for (var key in arguments){
      push(arr, arguments[key]);
    }
    
  var len = arr.length;
    for (var i = 0; i < len; i++){
     
     var x = shift(arr);
     
     if( typeof x != 'object'){
      push(concatArr,[x]);
      } else {
          push(concatArr,x);
      } 
  //console.log(typeof x);
  }
      
       var finalArr = [];
for (var j = 0; j < concatArr.length; j++){
     for(var k = 0; k < concatArr[j].length; k++){
     
       push(finalArr, concatArr[j][k]);
      
      }
     }      
    
   return finalArr; 

};

