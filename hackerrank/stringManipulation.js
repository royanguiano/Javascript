
//console.log(gemstones([ 'abcdde', 'baccd', 'eeabg' ]));

//[ 'abcdde', 'baccd', 'eeabg' ]

function gemstones(arr){
	console.log(

  // A JavaScript Set only allows distinct entries so we avoid duplicates.
  // Also, converting to lowercase means we can ignore case when doing matching.
  new Set(arr.toLowerCase() 
  
    // Split input by newline
    .split('\n') 
    
    // Extract a subarray which ignores index 0: each line = one rock
    .slice(1)
    
    // For each rock, convert to an array of elements
    .map(rock => rock.split(''))
    
    // Now an array of arrays [ [ 'A', 'B' ], [ 'C', 'D' ] ]
    
    // Iterate through all 'inner' arrays in 'outer' array.
    // For each 'inner' array we will create a new array which contains only those items which are in both the current and previous 'inner' arrays.
    // This new array becomes the input for the next iteration.
    // See function breakout below...
    .reduce(keepOnlyItemsWhichAreInBothArrays)
    
    // Return the size of the new Set. We know each element will only be counted once because they're all lowercase and Set only allows distinct entries
  ).size
);


// Reduce function
//
// Walkthrough:
//
// for array [ 
//         [ 'A', 'B' ], 
//         [ 'B', 'C' ], 
//         [ 'B', 'E' ] 
//       ]
// Iteration 1 compares: [ 'A', 'B' ], [ 'B', 'C' ]
// Iteration 1 results in new array [ 'B' ]
// Iteration 2 compares: [ 'B' ], [ 'B', 'E' ]
// Iteration 2 results in new array [ 'B' ]
// Function returns [ 'B' ]

function keepOnlyItemsWhichAreInBothArrays(prev, curr) {
  
  // Returns true if 'element' is in 'prev'.
  function isInPreviousArray(element) {
    return prev.includes(element);
  }

  // Create new array out of items which return true for the function above.
  return curr.filter(isInPreviousArray);
}
}


//console.log(altChars('AAAA')); 

function altChars(s){
	let current, prev, front, counter = 0; 

	s = s.toLowerCase(); 
	s = s.split(''); 

	for(let i = 0; i < s.length - 1; i++){
		if(s[i] === s[i + 1]){
			counter++; 
		}
	}
	return counter; 
}

console.log(minSteps(7, '0100101010')); 
//format: 010

function minSteps(n, B){
	//console.log(B.length - B.split('').join('')); 
	
	let regex = /010+/g; 
	let result = B.match(regex); 

	//console.log(B.replaceAll(regex));
	if(result !== null){
		console.log(result.length); 
	} else {
		console.log(0)
	}
}

console.log(maxLen(10, 'beabeefeab'));
function maxLen(n, s){
    // Complete this function
    let c = s.split(''), temp = {}; 

    for(let i = 0; i < c.length; i++){
    	 if(!temp[c[i]]){
    	 	temp[c[i]] = 1; 
    	 } else {
    	 	temp[c[i]] += 1; 
    	 }
    }

    

    console.log(temp); 

    return c; 

}

//hereiamstackerrank
//hackerrank
console.log(findhackerrank('ereiamstarckeank')); 

function findhackerrank(s){
  let temp = 'hackerrank', counter = 0, hackerrank = {}, testobject = {};
  let length = temp.length; 

  for(let i = 0; i < temp.length; i++){
    if(hackerrank[temp[i]]){
      hackerrank[temp[i]] += 1; 
    } else {
      hackerrank[temp[i]] = 1; 
    }
  } 

for(let i = 0; i < s.length; i++){
    if(testobject[s[i]]){
      testobject[s[i]] += 1; 
    } else {
      testobject[s[i]] = 1; 
    }
  } 

  for(let key in hackerrank){
   //key = letter
   //hackerrank[key] = number

    if(hackerrank[key] <= testobject[key]){
      //console.log('hackerrank found in this string'); 

    } else {
            console.log('hackerrank not found missing: ', key); 
            return 'no match'; 
    }
  }

  console.log('hacker rank table: ', hackerrank, 'another hasH: ', testobject);
  return 'matched'; 
}



function main() {
    //creating a string
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        // your code goes here
    }

    let word = 'hackerrank', 
        regex = /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/; 
    
   for(let i = 0; i <= q; i--){
       console.log(s[i]); 
       
        if(s.match(regex)){
                console.log('YES'); 
            }  else {
                console.log('NO'); 
            }
        }
    
}


console.log(twoStrings('hello', 'worldhel')); 

function twoStrings(s1, s2){

    for(let i = 0; i < s1.length; i++){
      let s = s2.indexOf(s1[i]); 
      if(s2.indexOf(s1[i]) == -1){
        return 'NO'; 
      }
  } 
  return 'YES'; 
}



























