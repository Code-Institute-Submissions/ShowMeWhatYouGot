//--------------------------------------------------In-game audio
//In-game music to autoplay on load.
window.onload = function() {
    document.getElementById("game-music").play();
    audio.gameMusic.loop = true;
    audio.gameMusic.volume = 0.4;
};

var gameVolumeSlider = document.querySelector('#game-volume-slider');
    gameVolumeSlider.addEventListener('input', () => {
    audio.gameMusic.volume = gameVolumeSlider.valueAsNumber / 100;
});

function gameMusicOnOff() {
    if (audio.isMusicMuted === true) {
        console.log("button on")
        audio.isMusicMuted = false;
        audio.musicBtn.innerHTML = "On";
        audio.gameMusic.play();
    } else if (audio.isMusicMuted === false) {
        console.log("button off")
        audio.isMusicMuted = true;
        audio.musicBtn.innerHTML = "Off";
        audio.gameMusic.pause();
    }    
};

var effectsVolumeSlider = document.querySelector('#effects-volume-slider');
    effectsVolumeSlider.addEventListener('input', () => {
    audio.menuAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.bonusWinAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.shuffleAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.meeseeksAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.inGameAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.rickAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.swipeAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
});


//Global variable
var isShuffled = false;

/*Disable this variable if you are having trouble completing the game.
This will allow you to move the tiles before shuffle and complete the
puzzle in 2 clicks*/


//Swpping the tiles
function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
    if (checkWin()) {
        $('#win-modal').modal('show');
        audio.gameMusic.pause();
        audio.rickAudio.play();
    }
};

//Shuffling the puzzle
function shuffle() {
    isShuffled = true;
//Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row ++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row
  
            var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3
     
            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        } 
    } 
};

function clickTile(row, column) {
    if (isShuffled == true) {
        var cell = document.getElementById("cell" + row + column);
        var tile = cell.className;
        if (tile != "tile9-3x3") { 
        //Checking if white tile on the right
            if (column < 3) {
                if (document.getElementById("cell" + row + (column + 1)).className == "tile9-3x3") {
                    swapTiles("cell" + row + column, "cell" + row + (column + 1));
                    return;
                }
            }
        //Checking if white tile on the left
            if (column > 1) {
                if (document.getElementById("cell" + row + (column - 1)).className == "tile9-3x3") {
                    swapTiles("cell" + row + column, "cell" + row + (column - 1));
                    return;
                }
            }
        //Checking if white tile is above
            if (row > 1) {
                if (document.getElementById("cell" + (row - 1) + column).className == "tile9-3x3") {
                    swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                    return;
                }
            }
        //Checking if white tile is below
            if (row < 4) {
                if (document.getElementById("cell" + (row + 1) + column).className == "tile9-3x3") {
                    swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                    return;
                }
            }
        }
    } else {
        return; 
    }
  
};

//Completing the puzzle
function checkWin() {
    //Checks if all tiles are aligned in row 1
    var row1 = document.getElementById("row1");
        for (var i = 0; i < row1.children.length; i++) {
            var n = i + 1;
            if (row1.children[i].className != "tile" + n.toString() + "-3x3") {
                return false;
            }
        }
    //Checks if all tiles are aligned in row 2
    var row2 = document.getElementById ("row2");
        for (var i = 0; i < row2.children.length; i++) {
            var n = i + 4;
            if (row2.children[i].className != "tile" + n.toString() + "-3x3") {
                return false;
            }
        }
    //Checks if all tiles are aligned in row 3
    var row3 = document.getElementById ("row3");
        for (var i = 0; i < row3.children.length; i++) {
            var n = i + 7;
            if (row3.children[i].className !="tile" + n.toString() + "-3x3") {
                return false;
            }
        }
    return true;
};






