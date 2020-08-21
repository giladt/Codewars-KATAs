/* 
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your 
screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four 
characters into '#'.

*/

// return masked string
function maskify(cc) {
  // return (cc.length<=4) ? 
  //   cc : 
  //   '#'.repeat(cc.length-4)+cc.slice(cc.length-4);

  // even better solution- regex positive lookahead:
  return cc.replace(/.(?=....)/g,'#');
}

console.log(
maskify('4556364607935616'),
maskify('1234'),
maskify('1'),
); // '############5616'