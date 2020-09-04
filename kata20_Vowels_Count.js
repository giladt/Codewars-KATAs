/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  vowelsCount = [...str].reduce((cnt,chr)=>cnt+=['a','e','i','o','u'].includes(chr),0);
  return vowelsCount;
}

console.log(
  getCount("abracadabra") // 5
);