/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s){
  return [...new Set(s.split('').filter(
    c => {
      const b = c.charCodeAt(0).toString(2);
      return (b.match(/1/g) || []).length < (b.match(/0/g) || []).length;
    }
  ))]
}

console.log(
  moreZeros('abcde'), // ['a','b','d']
  moreZeros('thequickbrownfoxjumpsoverthelazydog'), // ['h','b','p','a','d']
  moreZeros('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG'), // ['T','H','E','Q','I','C','B','R','F','X','J','P','L','A','D']
  moreZeros('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'), // ['a','b','d','h','p','A','B','C','D','E','F','H','I','J','L','P','Q','R','T','X','0']
  moreZeros('DIGEST'), // ['D','I','E','T']
);