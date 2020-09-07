/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" 
actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  let res = '';
  for(let i=0; i<s.length; i++){
    if(s[i] !== '#') res+=s[i];
    if(s[i] === '#' && res.length > 0) res = res.slice(0,-1);
  }
  return res;
}

console.log(
  cleanString('abc#d##c'), // "ac"
  cleanString('abc####d##c#') // "" 
);
