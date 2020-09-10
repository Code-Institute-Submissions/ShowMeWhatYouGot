/*---------------------------------------------------3X3 Grid*/

function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
  console.log(cell1);
  console.log(cell2);
  console.log(checkWin());
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=3;column++) { //For each column in this row
  
    var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
     
    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  } 
} 
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9-3x3") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9-3x3") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9-3x3") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9-3x3") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9-3x3") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}

function checkWin() {
    var row1 = document.getElementById("row1");
    for(var i=0; i<row1.children.length;i++) {
        var n = i+1;
        console.log(row1.children);
        if(row1.children[i].className!="tile"+n.toString()+"-3x3") {
            console.log(1);
            return false;
        }
    }
    var row2 = document.getElementById ("row2");
    for(var i=0; i<row2.children.length;i++) {
        var n = i+4;
        if(row2.children[i].className!="tile"+n.toString()+"-3x3") {
           console.log(2);
            return false;
        }
    }
    var row3 = document.getElementById ("row3");
    for(var i=0; i<row3.children.length;i++) {
        var n = i+7;
        if(row3.children[i].className!="tile"+n.toString()+"-3x3") {
            console.log(3);
            return false;
        }
    }
    return true;
}