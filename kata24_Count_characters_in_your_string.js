/*
The main idea is to count all the occurring characters in a 
string. If you have a string like aba, then the result 
should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty 
object literal, {}.
*/

function count (string) {  
  // The function code should be here
  let res = {};
  [...string].forEach(char=>{
    if(!res[char]) {res[char] = 1} else {res[char]++};
  })
   return res;
}

console.log(
  count("aba"), // { a: 2, b: 1 }
  count(""), // {}    
);