newFunction();


function newFunction() {
    p1Round = [];
    p2Round = [];
    btn = document.getElementById('p1Roll');
    btn.addEventListener('click', function (event) {
        p1 = function () {
            let random = Math.floor((Math.random() * 6) + 1);
            if (random === 1) {
                let scores = p1Round.push(0);
                alert(`You rolled 1, player 2's turn`);
            }
            document.getElementById('p1RollScore').innerHTML = random;
            if (random != 1) {
                let scores = p1Round.push(random);
            }
        };
        game = function () {
            for (let i = 0; i < 1; i++) {
                p1();
            }
            let finalP1 = p1Round.reduce((sum, current) => sum + current, 0);
            document.getElementById('p1TotalScore').innerHTML = finalP1;
            if (finalP1 >= 100) {
                alert(`Player 1 wins!`);
            }
        };
        game();
    });
    btnH = document.getElementById('p1Hold');
    btnH.addEventListener('click', function (event) {
        alert(`Player 1 holds! It's player 2's turn!`);
    });
    btn2 = document.getElementById('p2Roll');
    btn2.addEventListener('click', function (event) {
        p2 = function () {
            let random2 = Math.floor((Math.random() * 6) + 1);
            if (random2 === 1) {
                let scores2 = p2Round.push(0);
                alert(`You rolled 1, player 1's turn`);
            }
            document.getElementById('p2RollScore').innerHTML = random2;
            if (random2 != 1) {
                let scores2 = p2Round.push(random2);
            }
        };
        game2 = function () {
            for (let i = 0; i < 1; i++) {
                p2();
            }
            let finalP2 = p2Round.reduce((sum, current) => sum + current, 0);
            document.getElementById('p2TotalScore').innerHTML = finalP2;
            if (finalP2 >= 100) {
                alert(`Player 2 wins!`);
            }
        };
        game2();
    });
    btn2H = document.getElementById('p2Hold');
    btn2H.addEventListener('click', function (event) {
        alert(`Player 2 holds! It's player 1's turn!`);
    });
}
//We are able to declare the winner, and stop when the die rolls to 1. The player can hold too!
//A fix that needs to be done: if a player rolls a 1, they needs to score 0. This happens with the total score, and not round score. 

//Playing with the refactor option here.