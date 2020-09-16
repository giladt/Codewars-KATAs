/*
  Create an algorithm to count the number of zeros that appear between 1 and N.

  Examples:

  There are 2 zeros from 1 to 20: 10, 20

  There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

*/

/* Solution I */
// function countZeros(n) {
  //   let zeros=0;
  //   for(cnt=10;cnt<=n;cnt+=1){
  //     zeros+= cnt.toString().split('').filter(i => i==='0').length;
  //   }
  //   return zeros;
  // }
  
/* Solution II */
function countZeros(n) {
  let str='';
  for(cnt = 1; cnt <= n; cnt += 1) str += cnt.toString().replace(/[^0]/g,'');
  return str.length;
}


console.log(
  countZeros(10), // returns 1
  countZeros(100), // returns 11
  countZeros(200) // returns 31
);