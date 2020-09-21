/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors) {
  let tower = [];
  for(let curFloor = 1; curFloor <= nFloors; curFloor+=1){
    let floor = ' '.repeat(nFloors - curFloor) + 
                '*'.repeat(curFloor + (curFloor - 1)) + 
                ' '.repeat(nFloors - curFloor);
    tower.push(floor);
  }
  return tower;
}

console.log(
  towerBuilder(1), // ["*"]
  towerBuilder(2), // [" * ","***"]
  towerBuilder(3), // ["  *  "," *** ","*****"]
);