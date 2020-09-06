/*
Move the first letter of each word to the end of it, then add "ay" to the end 
of the word. Leave punctuation marks untouched.

*/

function pigIt(str){
  //Code here
  return str.split(' ').map(word => {
    return (word[0].match(/[a-z]/i))? word.slice(1) + word[0] + 'ay' : word;
  }).join(' ');
}

console.log(
  pigIt('Pig latin is cool'), // igPay atinlay siay oolcay
  pigIt('Hello world !')     // elloHay orldway !
);