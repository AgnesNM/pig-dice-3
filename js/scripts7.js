
p1Round = [];
p2Round = [];
btn = document.getElementById('p1Roll');
btn.addEventListener('click', function (event){
p1 = function (){
    let random =  Math.floor((Math.random()*6)+1);        
    document.getElementById('p1RollScore').innerHTML = random;
    let scores = p1Round.push(random);       
};
game = function (){
    for(let i=0; i<1;i++){
        p1();                    
    }      
    let finalP1 = p1Round.reduce((sum,current) => sum+current,0); 
    document.getElementById('p1TotalScore').innerHTML = finalP1; 
    if(finalP1 >=100){
        alert(`Player 1 wins!`);
    }
} 
game(); 
});


btn2 = document.getElementById('p2Roll');
btn2.addEventListener('click', function (event){
p2 = function (){
    let random2 =  Math.floor((Math.random()*6)+1);        
    document.getElementById('p2RollScore').innerHTML = random2;
    let scores2 = p2Round.push(random2);       
};
game2 = function (){
    for(let i=0; i<1;i++){
        p2();                    
    }      
    let finalP2 = p2Round.reduce((sum,current) => sum+current,0); 
    document.getElementById('p2TotalScore').innerHTML = finalP2; 
    if(finalP2 >=100){
        alert(`Player 2 wins!`);
    }
} 
game2(); 
});

//This works for two players. We can declare the winners too.
//We need to figure out how to hold.