$(document).ready(function(){

  var cards=["Ace", "King","Queen","Jack",10,9,8,7,6,5,4,3,2]
  var suits=["hearts", "clubs", "spades", "diamonds"]

  suits.forEach(function(s1){
    cards.forEach(function(c1){
      $("#display").append("<li>" + c1 + " of " + s1 + "</li>");
    });
  });
});
