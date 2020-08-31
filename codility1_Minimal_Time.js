/*
Given six digits, find the earliest valid time that can be
displayed on a digital clock (in 24-hour format) using those 
digits. For example, given digits 1, 8, 3, 6, 4 the earliest 
valid time is "12:36:48". Note that "12:34:68" is not a valid 
time.

Write a function:
  def solution(A, B, C, D, E, F)

that, given six integers A, B, C, D, E and F, returns the 
earliest valid time in "HH:MM:SS" string format, or "NOT 
POSSIBLE" if it is not possible to display a valid time 
using all six integers.

For example, given 1, 8, 3, 2, 6, 4 the function should 
return "12:36:48".
Given 0, 0, 0, 0, 0, 0, the function should return "00:00:00".
Given 0, 0, 0, 7, 8, 9, the function should return "07:08:09".
Given 2, 4, 5, 9, 5, 9, the function should return "NOT POSSIBLE".

Assume that:
  * A, B, C, D, E and F are integers within the range [0..9].

In your solution, focus on correctness. The performance of your
solution will not be the focus of the assessment.
*/

function solution(A,B,C,D,E,F){
  let time = [A,B,C,D,E,F];
  let temp = null;

  time.sort();
  if(time[0]*10+time[1] >= 24 ) return "NOT POSSIBLE";
  
  let n = time.length-1;
  let x = 1;
  
  while(time[n-x] * 10 + time[n] >= 60 && n>2 && x<4){
    if(time[n-x-1] * 10 + time[n] >= 60) {
      temp = time[n-x-1];
      time[n-x-1] = time[n-1];
      time[n-1] = temp;
      x++;
    } else {
      temp = time[n-x-1];
      time[n-x-1] = time[n-1];
      time[n-1] = temp;
      n -= 2;
      x = 1;
    }
  }

  return (time[0]*10+time[1] >= 24 ) ? 
    "NOT POSSIBLE" : 
    `${time[0]}${time[1]}:${time[2]}${time[3]}:${time[4]}${time[5]}`;
}
console.log(
  solution(1, 8, 3, 2, 6, 4) + "\n" + // "12:36:48".
  solution(0, 0, 0, 0, 0, 0) + "\n" + // "00:00:00".
  solution(0, 0, 0, 7, 8, 9) + "\n" + // "07:08:09".
  solution(1, 2, 2, 2, 4, 1) + "\n" + // "07:08:09".
  solution(2, 4, 5, 9, 5, 9) + "\n" + // "NOT POSSIBLE".
  solution(9, 8, 3, 2, 6, 4) + "\n"   // "NOT POSSIBLE".
);