p1round = [];
btn = document.getElementById('p1Roll');
btn.addEventListener('click', function (event){
p1 = function (){  
    let random =  Math.floor((Math.random()*6)+1); 
    document.getElementById('p1RollScore').innerHTML = random;
    let scores = p1round.push(random);       
};
game = function (){
    for(let i=0; i<1;i++){
        p1();                    
    }      
    let finalp1 = p1round.reduce((sum,current) => sum+current,0); 
    document.getElementById('p1TotalScore').innerHTML = finalp1; 
} 
game(); 
});

//This works for one player. We need to add player two, 
//then figure out how to hold and declare the winner.