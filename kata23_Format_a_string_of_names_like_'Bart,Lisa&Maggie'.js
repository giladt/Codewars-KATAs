/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names){
  return names.map(per=>per.name).join(', ').replace(new RegExp(", (?!.*, )") , ' & ');
}

console.log(
  list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), // 'Bart, Lisa, Maggie, Homer & Marge'
  list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), // 'Bart, Lisa & Maggie
  list([{name: 'Bart'},{name: 'Lisa'}]), // 'Bart & Lisa'
  list([{name: 'Bart'}]), // 'Bart'
  list([]), // ''
);