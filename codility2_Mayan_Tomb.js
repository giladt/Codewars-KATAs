
function solution(A){
  // Calculate the angle and the direction of each statue
  const gradient = A.map(item=>{
    return JSON.stringify({
      m: item.x/item.y,
      d: {
        x: 0 + item.x > 0 ? 'right':'left',
        y: 0 + item.y > 0 ? 'up':'down'
      }
    });
  });
  // Status on the same line should share the same properties, and 
  // should filtered out from the count when removing duplicates.
  return [...new Set(gradient)].length;
}

const A = [];
A[0] = {x: -1, y: -2}; // statue 0
A[1] = {x:  1, y:  2}; // statue 1
A[2] = {x:  2, y:  4}; // statue 2
A[3] = {x: -3, y:  2}; // statue 3
A[4] = {x:  2, y: -2}; // statue 4

/*
          |    .   .
          |        .
    .     |  .     .
          |        .
          |        .
-------------------
        . |        .
          |    .   .
          |        .
          |        .
          |        .

y = mx + c

-2 = 2 * -1

m = -1/-2 = 0.5   <.
m = 1 / 2 = 0.5   >^
m = 2 / 4 = 0.5   >^
m = -3 / 2 = -1.5 <^
m = 2 / -2 = -1   >.
*/
