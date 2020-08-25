/*
Given a mixed array of number and string representations of integers, add up 
the string integers and subtract this from the total of the non-string integers.
*/

function divCon(x){
  return x.reduce((sum,val)=> sum += (typeof val === 'string') ? -val : val ,0)
}

console.log(
  divCon([9, 3, '7', '3']), // 2
  divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), // 14; 
  divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), // 13;
);