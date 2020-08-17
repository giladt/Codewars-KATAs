/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums){
  return nums && nums.length > 0?nums.sort((a,b)=>parseFloat(a) - parseFloat(b)):[];
}

console.log(solution([1,10,3,2,4,9,8,6,5,7]));
console.log(solution([]));
console.log(solution(1));
console.log(solution(null));