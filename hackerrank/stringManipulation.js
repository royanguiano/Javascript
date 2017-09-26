
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


//console.log(twoStrings('hello', 'worldhel')); 

function twoStrings(s1, s2){

    for(let i = 0; i < s1.length; i++){
      let s = s2.indexOf(s1[i]); 
      if(s2.indexOf(s1[i]) == -1){
        return 'NO'; 
      }
  } 
  return 'YES'; 
}



console.log(checkforHackerRank('hereiamstackerrank')); 



function checkforHackerRank(str){
  let hr = 'hackerrank'; 

  if(str.length < hr.length) return 'NO'; 

  let j = 0; 
  for(let i = 0; i < str.length; i++){
    let char = hr.charAt(j); 
    let shar = str.charAt(i); 
    if(j < str.length && char == shar){
      j++; 
    }
  }

  return (j == hr.length ? 'YES': 'NO'); 
}




console.log(makingAnagrams('cde', 'abc'))


function makingAnagrams(str1, str2){
  let chars = []; 


  for(let c1 of str1.split('')) { 
    let c= chars[c1 - 97]++; 
  }
  for(let c2 of str2.split('')) { 
    let cc = chars[c2 - 97]--; 
  }

  let count = 0; 
  for(let i of chars) { 
    let ii = i; 
    count += Math.abs(i); }

  console.log('count' , count);   

}


const funnyString = s => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let s1 = s[i].charCodeAt(0);
    let s2 = s[i + 1].charCodeAt(0);
    let r1 = s[s.length - i - 1].charCodeAt(0);
    let r2 = s[s.length - i - 2].charCodeAt(0);
    if (Math.abs(s1 - s2) !== Math.abs(r1 - r2)) return 'Not Funny';
  }
  return 'Funny';
}



//console.log(funnyString('bcxz')); 

//console.log(gemstonesCalculate(['3', 'abcdde', 'baccd', 'eeabg'])); 

function gemstonesCalculate(arr){
  new Set(arr.slice(1)
              .map(rock => rock.split(''))
              .reduce(matchItems).size); 

  function matchItems(previous, current){
    function previousArray(element){
      return previous.includes(element); 
    }
    
    console.log(current.filter(previousArray));
    return current;  
  }
}

//console.log(funnyStringMatch(3, '0100101010')); 

function funnyStringMatch(n, B){
 let size = B.match(/010/g); 
 return (size === null ? 0 : size.length); 
}






console.log('love letter palidrone ', loveLetterProblem('abcba'))

function loveLetterProblem(s){
  let chars = s.split(''), counter = 0; 
  let j = chars.length -1; 

  for(let i = 0; i <= j; i++){
    if(chars[i].charCodeAt(0) != chars[j].charCodeAt(0)){
      let c1 = chars[j].charCodeAt(0); 
      let c2 = chars[i].charCodeAt(0); 
      counter += c1 - c2;   
    }
    j--;
  }
  return counter; 
}
 















console.log('cesar cypher: ', cesarCypher('middle-Outz', 2, 11)); 


function cesarCypher(s, k, l){
   let str = '', N;
   k = k % 26;  

   for(let i = 0; i < s.length; i++){
    if(s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122){
      N = s[i].charCodeAt(0) + k; 
      if(N > 122){
        N = 96 + N - 122; 
      }
      str += String.fromCharCode(N);
    } else if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90){
      N = s[i].charCodeAt(0) + k; 
      if(N > 90){
        N = 64 + N - 90; 
      }
      str += String.fromCharCode(N);
    } else {
      str += s[i]; 
   }
  }
  return str; 
}




















gameOfThrones('cdcdcdcdeeeef'); 

function gameOfThrones(s){
  let reg = s.toLowerCase(); 
  let reverses = s.split('').reverse().join(''); 

  return (reg == reverses ? 'YES' : 'NO'); 
}


console.log(getLetterFrequency('Wouldnt it make more sense for them to allow use of the beat for the 5 bucks or whatever the beat creater wants to charge but then also split sales.  The recording onthe phone is ok if you plug a mic into it.  Then if things are looking good (ie the song is popular) then they know investing in some studio time would make sense.  I dont know much about the music business but d know reggae/dancehall beats (that are referred to as riddims) tend to well on multiple songs  (if its good/popular riddim, multiple artists will use it and im sure sales are split somewhere along the way).﻿')); 

console.log(strtotoken('Hi, welcome to CSC 220.It is your first assigment')); 

function getLetterFrequency(S){
  let counter = {}; 

  for(let i = 0; i < S.length; i++){
    if(counter[S[i]]){
      counter[S[i]] += 1; 
    } else {
      counter[S[i]] = 1; 
    }
  }

  for(let i in counter){
    console.log(counter[i] , i); 
  }
}

function strtotoken(S){
  S = S.split(''); 

  for(let i = 0; i <= S.length; i++){

    if(i == S.length){
      console.log(S.splice(0, i).join('')); 
    }

    if(S[i] == ' ' || S[i] == ',' || S[i] == '.'){
      S.splice(i, 1); 
      let char = i; 
      console.log(S.splice(0, i ).join('')); 
      i = 0; 
    }
  }
}


console.log(checkbits(6)); 

function checkbits(n){
  let bina = Number(n).toString(2); 
  let counter = 0; 

  for(let i in bina){
    if(bina[i] == '1'){
      counter++; 
    } 
  }
  return counter; 
}

//console.log(maxLength(10, 'beabeefeab')); 


function maxLength(n, s){
  let pair = [[],[]]; 
  let count = [[], []]; 

  for(let i = 0; i < n; i++){
    let letter = s.charAt(i); 
    let letterNumber = letter.charCodeAt(0) - 97; 
    letterNumber = String.fromCharCode(letter); 

    for(let col = 0; col < 26; col++){
      if(pair[letterNumber][col] == letter){
        count[letterNumber][col] = -1; 
      }

      if(pair[letterNumber][col] !== -1){
        pair[letterNumber][col] = letter; 
        count[letterNumber][col]++; 
      }
    }
  }

}

console.log(anagram('xaxbbbxx')); 
//s1 = xaxb
//s2 = bbxx

function anagram(s){
  let s1 = s.slice(0, s.length / 2), 
      s2 = s.slice(s.length / 2), 
      counter = 0; 

  if(s1.length != s2.length) return -1; 

  s1 = s1.split(''); 
  s2 = s2.split(''); 
  for(let i = 0; i < s2.length; i++){
    let c = s2[i]; 
    let position = s1.indexOf(c);
    if(position != -1){
      s1.splice(position, 1);
      

    } else {
      counter++; 
    }
  }
  return counter; 
}

console.log('find longest string: ', findUSlength('aba', 'cbc')); 


function findUSlength(a, b){
  a.length == b.length ? console.log(-1) : console.log(Math.max(a.length, b.length)); 
}

console.log('findcharcodeat: ', findAddedChar('abcd', 'abcde')); 

function findAddedChar(s, t){
  var charCode = 0;  

  for(let i = 0; i < t.length; i++){
      let char = t[i];
      let code = t.charCodeAt(i); 
      charCode += code;
    }
  for(let i = 0; i < s.length; i++){
    let char = s[i];
    let code = s.charCodeAt(i); 
    charCode -= code;
  }

return String.fromCharCode(charCode); 
}

console.log('number of moves: ', judgeCircle('RLUURDDDLUL')); 


function judgeCircle(moves){
  let numberofmoves = {}; 

  for(let i = 0; i < moves.length; i++){
    if(!numberofmoves[moves[i]]){
      numberofmoves[moves[i]] = 1; 
    } else {
      numberofmoves[moves[i]] += 1; 
    }
  }

  if(numberofmoves['R'] == numberofmoves['L'] && numberofmoves['U'] == numberofmoves['D']){
    return true; 
  } else {
    return false; 
  }
}

//canConstruct("a", "b") -> false
//canConstruct("aa", "ab") -> false
//canConstruct("aa", "aab") -> true


console.log('can construct: ', canConstruct('aac', 'aba'));  

function canConstruct(ransomeNote, magazine){
  let test = [], code = 0; 

  for(let i in magazine){
    code = magazine.charCodeAt(i); 
    code = code - 97; 
    if(test[code] > 0){
      test[code] += 1;
    }  else {
      test[code] = 1; 
    }
  }
  for(let i in ransomeNote){
    let notnumber = test[ransomeNote.charCodeAt(i) - 97]; 
    if(--test[ransomeNote.charCodeAt(i) - 97] < 0 || notnumber == undefined){
      return false; 
    }
  }
  return true; 
}















