/*---------------------------------------------------4X4 Grid*/

function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
    if(checkWin()) {
        $('#win-modal').modal('show');
        audio.gameMusic.pause();
        audio.rickAudio.play();
    }
}

function shuffle() {
//Use nested loops to access each cell of the 4x4 grid
for (var row = 1; row <= 4; row++) { //For each row of the 4x4 grid
   for (var column = 1; column <= 4; column++) { //For each column in this row
  
    var row3 = Math.floor(Math.random() * 4 + 1); //Pick a random row from 1 to 4
    var column3 = Math.floor(Math.random() * 4 + 1); //Pick a random column from 1 to 4
     
    swapTiles("cell" + row + column,"cell" + row3 + column3); //Swap the look & feel of both cells
  } 
} 
}

function clickTile(row,column) {
  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;
  if (tile!="tile16-4x4") { 
       //Checking if white tile on the right
       if (column < 4) {
         if ( document.getElementById("cell" + row + (column + 1)).className == "tile16-4x4") {
           swapTiles("cell" + row + column,"cell" + row + (column + 1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column > 1) {
         if ( document.getElementById("cell" + row + (column - 1)).className == "tile16-4x4") {
           swapTiles("cell" + row + column,"cell" + row + (column - 1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell" + (row - 1) + column).className == "tile16-4x4") {
           swapTiles("cell" + row + column,"cell" + (row - 1) + column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<4) {
         if ( document.getElementById("cell" + (row + 1) + column).className == "tile16-4x4") {
           swapTiles("cell" + row + column,"cell" + (row + 1) + column);
           return;
         }
       } 
  }
  
}

//Completing the puzzle
function checkWin() {
    //Checks if all tiles are aligned in row 1
    var row1 = document.getElementById("row1");
    for(var i = 0; i < row1.children.length; i++) {
        var n = i + 1;
        if(row1.children[i].className != "tile" + n.toString() + "-4x4") {
            return false;
        }
    }
    //Checks if all tiles are aligned in row 2
    var row2 = document.getElementById ("row2");
    for(var i = 0; i < row2.children.length; i++) {
        var n = i + 5;
        if(row2.children[i].className != "tile" + n.toString() + "-4x4") {
            return false;
        }
    }
    //Checks if all tiles are aligned in row 3
    var row3 = document.getElementById ("row3");
    for(var i = 0; i < row3.children.length; i++) {
        var n = i + 9;
        if(row3.children[i].className != "tile" + n.toString() + "-4x4") {
            return false;
        }
    }
    //Checks if all tiles are aligned in row 4
    var row3 = document.getElementById ("row4");
    for(var i = 0; i<row4.children.length; i++) {
        var n = i + 13;
        if(row3.children[i].className != "tile" + n.toString() + "-4x4") {
            return false;
        }
    }
    return true;
}
