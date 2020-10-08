/*
For a given string s find the character c (or C) with longest consecutive 
repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more 
characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/

function longestRepetition(s) {
  let longest = 0;
  let longestChar = '';
  let char = '';
  let repitition = 1;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (char === s[i + 1]) {
      repitition++;
    } else {
      if (repitition > longest) {
        longestChar = char;
        longest = repitition;
      }
      repitition = 1;
    }
  }

  return [longestChar, longest];
}

console.log(
  longestRepetition("aaaabb"), // ["a", 4]
  longestRepetition("bbbaaabaaaa"), // ["a", 4]
  longestRepetition("cbdeuuu900"), // ["u", 3]
  longestRepetition("abbbbb"), // ["b", 5]
  longestRepetition("aabb"), // ["a", 2]
  longestRepetition(""), // ["", 0]
  longestRepetition("ba"), // ["b", 1]
)