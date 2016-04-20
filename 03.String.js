/* * * * * * * * * * * * * * * * * * * * * *
 *   CAVEMAN JS PT 3: STRING.PROTOTYPE     *
 * * * * * * * * * * * * * * * * * * * * * */

// Primitive values can get in on the method madness too! 


// `String.prototype.slice` is a phenomenally useful method that copies
// a piece of a string based on a start index (inclusive) and an end 
// index (non-inclusive). The `Array.prototype` has a very similar 
// method. Design your `slice` to work for both strings and arrays.
var slice = function(stringOrArray, start, end) {
	
	if(end === undefined){
		end = stringOrArray.length;
	}
	if (end > stringOrArray.length){
		end = stringOrArray.length;
	}
	if (end < 0){
		end = stringOrArray.length + end;
	}

	if(start === undefined){
		start = 0;
	}
	if (start < 0){
		start = stringOrArray.length + start;
	}
	
	if(typeof stringOrArray === "string"){
		var string = '';


		for(var i = start; i < end; i++){
			string += stringOrArray.charAt(i);
		}
		return string;
	}

	var arr = [];
for(var j = start; j < end; j++){
  push(arr, stringOrArray[j]);
}
return arr;
};


// `String.prototype.split` can return an array based on a string by 
// breaking it up using a delimiter string. The delimiter is not 
// included in the final array.

var split = function(string, delim) {
  
    var arr = [];
    var splicer = '';
    var nospaceArr = [];
    var joiner = '';
    var final = [];
    var undefArr = [];
       if (delim === undefined){  
          undefArr[0] = string;
          return undefArr;
       };
   
    var splicer = ''
     for(var u = 0; u < string.length; u++){
         if(delim === ''){
        for (var i = 0; i < string.length; i++){
        push(nospaceArr, string[i])
        }
        return nospaceArr;
         }

   
     splicer = slice(string, u, u+delim.length);
     if (delim === splicer){
     push(final,u);
     u+= delim.length-1
     splicer = ''
     } 
     };
     
     if (final.length === 0){
         undefArr[0] = string;
          return undefArr;
     }
     final[final.length] = string.length;
     
    for(var x = 0; x < final.length; x++){
            for(var y = 0; y < string.length; y++){
            if(y === final[x]){
                y = y+ delim.length;
                x = x+1;
            }
            tempString = slice(string, y,final[x]);
            push(arr, tempString);
            y = final[x] -1;
            }
         
        }
    
      
      return arr;
}; 


// `String.prototype.trim` is a handy little method for processing text.
// It returns the input string with all white space removed from the
// beginning and the end. 
var trim = function(string) {
	
	var allButWhite = [];
	var trimmedArr = [];
	var whitespaces = ['\f', '\n', '\r', '\t', '\v','\xA0', '\u00A0','\u2028','\u2029' ]
	for(var i = 0; i < whitespaces.length; i++){
	var a = split(string,whitespaces[i]);
	string = join(a,'');
	
	};
	allButWhite= split(string,' ');
    for(j = 0; j < allButWhite.length; j++){
        if(allButWhite[j] != ''){
            push(trimmedArr,allButWhite[j]);
        }
    }
    string = join(trimmedArr, " ");
    return string;

};


// `String.prototype.replace` modifies a string by searching for a target
// string and replacing it. Note that only the first instance is replaced.
var replace = function(string, target, replacement) {

	var replacementArr = [];
	var finalArr = [];
	var space = false;

	if(target === ''){
		push(finalArr,replacement);
		push(finalArr, string);
		string = join(finalArr,'');
		return string;
	}

	for(var u = 0; u<string.length; u++){
		if(string[u] === " "){
		replacementArr = split(string, ' ');
		space = true;
		u = u+string.length;
		} else {
		replacementArr = split(string, '');
	}
		}
	
	for (var i=0; i<replacementArr.length; i++){
		if(replacementArr[i] === target){
			push(finalArr, replacement)
			target = undefined;
		} else{
		push(finalArr,replacementArr[i])
		}
	}
	if(space){
	string = join(finalArr,' ');
	return string;
	}
	string = join(finalArr, '');
	return string;

};
