/*
Count the number of occurrences of each character and return it as a list of 
tuples in order of appearance. For empty output return an empty list.
*/


var orderedCount = function (text) {
  return [...new Set(text)].map(letter => {
    let count = [...text].reduce((sum,char)=>sum += (char === letter),0);
    return [letter, count];
  });
};

console.log(
  orderedCount('abracadabra') // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
);