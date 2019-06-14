//Business Logic
//Player Object constructor
function Player(score, roll,total) {
  this.score = score;
  this.roll = roll;
  this.total = total;
}
//Methods attached to Player
Player.prototype.roll = function(){
  return Math.floor((Math.random()*6)+1);

}
var p1TotalScore = 0
var p1RollScore = 0
var p2TotalScore = 0
var p2RollScore = 0


function player2() {
  document.getElementbyId("p1roll").disabled = true;
  document.getElementbyId("p2roll").disabled = false;
}
function player1() {
  document.getElementbyId("p1roll").disabled = false ;
  document.getElementbyId("p2roll").disabled = true;
}

//UI Logic
$(document).ready(function(){
	$("#p1roll").click(function(){

    p1RollScore=Math.floor((Math.random()*6)+1);
    if(p1RollScore!=1){
      p1TotalScore+=p1RollScore;
    }else{
      alert("Your dice rolled to 1, it's player 2's turn");
      player2();
    }
    $("#p1RollScore").text(p1RollScore);
    $("#p1TotalScore").text(p1TotalScore);
  });

  $("#p2roll").click(function(){

    p2RollScore=Math.floor((Math.random()*6)+1);
    if(p2RollScore!=1){
      p2TotalScore+=p2RollScore;
    }else{
      alert("Your dice rolled to 1, it's player 2's turn");
      player1();
    }
    $("#p2RollScore").text(p2RollScore);
    $("#p2TotalScore").text(p2TotalScore);
  });
  $("#p2hold").click(function(){
    alert(p2TotalScore);
    if(p2TotalScore==100){
    alert("You are the winner!,game over!")
    }else{
    player1();
    }
 });
  $("#p1hold").click(function(){
    alert(p1TotalScore);
    if(p1TotalScore==100){
    alert("You are the winner!,game over!")
    }else{
    player2();
    }
});
});
