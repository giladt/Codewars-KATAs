/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how 
many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1

Note: In Ruby years will start from 1593.
*/

function unluckyDays(year){
  let cnt=0;
  for(let month=0; month<12; month++) if(new Date(year,month,13).getDay() === 5) cnt++;
  return cnt;
}

console.log(
  unluckyDays(1586), // should be: 1
  unluckyDays(1001), // should be: 3
  unluckyDays(2819), // should be: 2
  unluckyDays(2792), // should be: 2
  unluckyDays(2723), // should be: 2
  unluckyDays(1909), // should be: 1
  unluckyDays(1812), // should be: 2
  unluckyDays(1618), // should be: 2
  unluckyDays(2132), // should be: 1
  unluckyDays(2065), // should be: 3
);