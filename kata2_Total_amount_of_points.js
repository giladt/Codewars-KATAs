function points(games) {
  let totalScore = 0;
  
  for (let endScore of games) {
    if(endScore[0] > endScore[2]) totalScore+=3 
    else if(endScore[0] === endScore[2]) totalScore+=1;
  }

  return totalScore;
}