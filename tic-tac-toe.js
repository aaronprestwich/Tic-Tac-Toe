let turnTitle = $('#whose-turn');
let resetBtn = $('.btn');
let tiles = $('.board-tile');
let board = $('.board-grid');
let gameWinner = $('#winner-div');
let winnerAlert = $('.alert');
let xTurn= true;
let gameOver = false;

// Tile click function set an x or an o
let tileClick = tiles.click(function(){
    
    let classList = this.classList;
    if(gameOver === false){

        if(classList.contains('x') || classList.contains('o')){
            return;
        }
        if(xTurn){
            // selectedCell.classList.add('x');
            turnTitle.text("It is O's turn");
            classList.add('x');
            checkWinner();
            xTurn = !xTurn;
        }
        else{
            turnTitle.text("It is X's turn");
            classList.add('o');
            checkWinner();
            xTurn = !xTurn;
        }
    } 
});

function checkWinner(){
    let winner = '';
    // Grab inputs from tiles
    let topLeft = tiles[0].classList[3];
    let topCenter = tiles[1].classList[3];
    let topRight = tiles[2].classList[3];
    let middleLeft = tiles[3].classList[3];
    let middleCenter = tiles[4].classList[3];
    let middleRight = tiles[5].classList[3];
    let bottomLeft = tiles[6].classList[3];
    let bottomCenter = tiles[7].classList[3];
    let bottomRight = tiles[8].classList[3];
    
    // Set Win conditions as arrays
    let top = [topLeft, topCenter, topRight];
    let center = [middleLeft, middleCenter, middleRight];
    let bottom = [bottomLeft, bottomCenter, bottomRight];
    let left =[topLeft, middleLeft, bottomLeft];
    let middle = [topCenter, middleCenter, bottomCenter];
    let right = [topRight, middleRight, bottomRight];
    let leftDiagonal = [topLeft, middleCenter, bottomRight];
    let rightDiagonal =[topRight, middleCenter, bottomLeft];
    let WinX = ['x','x','x'];
    let WinO = ['o','o','o'];

    // Compare arrays.  JSON.strigify() allows two arrays to be compared by converting them into JSON strings.
    if (JSON.stringify(WinX) == JSON.stringify(top) || JSON.stringify(WinO) == JSON.stringify(top) ){
        winner = topLeft.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(center) || JSON.stringify(WinO) == JSON.stringify(center)){
        winner = middleLeft.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(bottom) || JSON.stringify(WinO) == JSON.stringify(bottom)){
        winner = bottomLeft.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(left) || JSON.stringify(WinO) == JSON.stringify(left)){
        winner = topLeft.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(middle) || JSON.stringify(WinO) == JSON.stringify(middle)){
        winner = topCenter.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(right) || JSON.stringify(WinO) == JSON.stringify(right)){
        winner = topRight.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(leftDiagonal) || JSON.stringify(WinO) == JSON.stringify(leftDiagonal)){
        winner = topLeft.toUpperCase();
        
        annoucer(winner);
    }
    else if(JSON.stringify(WinX) == JSON.stringify(rightDiagonal) || JSON.stringify(WinO) == JSON.stringify(rightDiagonal)){
        winner = topRight.toUpperCase();
        
        annoucer(winner);
    }
    else if(topLeft && topCenter && topRight && middleLeft && middleCenter && middleRight && bottomLeft && bottomCenter && bottomRight){
        winner = null;
        
        annoucer(winner);
    }
}

// Annouce winner
function annoucer(winner){
    if(winner!=null){
        turnTitle.empty();
        winnerAlert.append(`<div class ="alert alert-primary" role="alert"> ${winner} WINS!</div>`)
    }
    else{
        turnTitle.empty();
        winnerAlert.append(`<div class ="alert alert-primary" role="alert"> It is a TIE!</div>`)
    }
    gameWinner.append(`<h4>Press Reset to play again</h4>`);
    gameOver = true;
    return gameOver;
}
// Reset Button click
resetBtn.click(function(){
    window.location.reload();
});


