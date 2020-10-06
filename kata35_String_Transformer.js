/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
  return str
    .split(' ')
    .map(word => word.replace(/([a-z]*)([A-Z]*)/g, (match, p1, p2) => [p1.toUpperCase(), p2.toLowerCase()].join('')))
    .reverse()
    .join(' ');
}

console.log(
  stringTransformer('Example string'), // 'STRING eXAMPLE'
  stringTransformer('AnoTher exaMplE'), // 'EXAmPLe aNOtHER'
)