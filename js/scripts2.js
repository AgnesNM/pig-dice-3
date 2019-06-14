let player1 = document.getElementById('p1roll');
let p1RScore = [];
player1.addEventListener('click', function (event){
    let numbers = Math.floor((Math.random()*6)+1); 
     player1= numbers;
    document.getElementById('p1RollScore').innerHTML = player1;
    document.getElementById('p1TotalScore').innerHTML = player1;
    // for(i=0;i<10;i++){        
    //     p1RScore.push(player1);        
    //     let p1TScore = p1RScore.reduce((sum,current)=> sum+current,0);
    //     document.getElementById('p1TotalScore').innerHTML = p1TScore;        
    // };       
});

let player2 = document.getElementById('p2roll');
player2.addEventListener('click', function (event){
    let random = Math.floor((Math.random()*6)+1); 
     player2= numbers;
    document.getElementById('p2RollScore').innerHTML = numbers;
});

// ////This works. It is however not able to accumulate the total score as every time the button is clicked, 
// //it starts to count afresh. If we loop through the round, it will be an assumption, 
// //as we don't know how many rounds the game will go for.  
//We still haven't figured how to 'hold' and declare the final winner too.
//Achieved steps here:
//- randomly selecting scores for each player and summing them up.


