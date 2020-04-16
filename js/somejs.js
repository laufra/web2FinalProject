//***DISCLAIMER***
//This game was made from pieces of source code from meth meth methods video on JavaScript Tetris programming
//The core of the game has been heavily modified to fit my vision of what I want this game to become.
//I have beta builds of previous attempts for reference if need be.
//All code from Meth Meth Methods video has been renamed or cut from the final verison
//All code that doesnt exist from his gitHubs source code has been created from scratch.
//All art and sound is refrenced to the 1984 Nintendo entertainment systems game Tetris.
//All resources ie sound and art is meant to keep the spirit of the nes game not plagiarize.
//If anything is of concern in this game that could potentially break school code of conduct Contact me as this is not my intention

var song = new Audio("song1.ogg");
//the end all variable
var killSwitch="on";
//Statistics for the game possibly
var m37 = true;
var m39 = true;
var m40 = true;
var m81 = true;
var m87 = true;
var single = 0;
var double = 0;
var triple = 0;
var tetris = 0;
var tPieceS=0;
var jPieceS=0;
var sPieceS=0;
var zPieceS=0;
var lPieceS=0;
var oPieceS=0;
var lbarS=0;

function songChoose(number){
  song = new Audio("song"+number+".ogg");
}

function mainRunnerProgram(levelSpeed){
var beginSound = new Audio('menuSelect.mp3');
beginSound.play();
document.getElementById("menu").style.display = "none";
document.getElementById("canvas1").style.display = "block";
var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');
var linesCleared = 0;
var lines = 0;
var level = levelSpeed;
var stopTransSound=true;
var score = 0;
var highscore = 354660;
document.getElementById("highscore").innerHTML="Highscore: "+highscore;
var dropStart=-120;//counter for the drop speed with a 1 second grace period
var moveStart=0;//timer for the piece movement
var rotateStart=0;
var moveCap=6;//speed of piece movement
var dropCap=48;//60 frames a second cap (change this for speeds)
var seed = Math.floor(Math.random()*10000000);
var seedHolder = seed;
console.log(seedHolder);
var nextRandomPiece;
var firstPieceCheck = true;
var pieceMath;
var inputArray = [];

//quieting the song
song.volume=.5;
var notTetris = new Audio('singleClear.mp3');
var tetrisSound = new Audio('tetrisClear.mp3');
var moveSound = new Audio('pieceMoving.mp3');//a bit broken rn
var transitionSound = new Audio('transition.mp3');
var rotateSound = new Audio('rotation.mp3');
var dropSound = new Audio('dropSound.mp3');
song.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
song.play();

ctx.scale(36,36);//scaling the canvas up ny 36x36

function areaSweep() {//set the completed row to 0's
    outer: for (var y = playArea.length -1; y > 0; --y) {
        for (var x = 0; x < playArea[y].length; ++x) {
            if (playArea[y][x] === 0) {
                continue outer;
            }
        }

        var row = playArea.splice(y, 1)[0].fill(0);//move the rows down
        linesCleared++;//does lines for scoring
        lines++;//adds line based on completed lines
        console.log(lines);
        playArea.unshift(row);
        ++y;
    }
    if (linesCleared == 1){
      score += (40*level+40);
      notTetris.play();
      linesCleared=0;
      single++;
    }
    else if (linesCleared == 2){
      score += (100*level+100);
      notTetris.play();
      linesCleared=0;
      double++;
    }
    else if (linesCleared == 3){
      score += (300*level+300);
      notTetris.play();
      linesCleared=0;
      triple++;
    }
    else if (linesCleared == 4){
      score += (1200*level+1200);
      tetrisSound.play();
      linesCleared=0;
      tetris++;
    }//score based on cleared lines

    if(lines>=10&&level==0){level=1; transitionSound.play();}
    else if(lines>=20&&level==1){level=2; transitionSound.play();}
    else if(lines>=30&&level==2){level=3; transitionSound.play();}
    else if(lines>=40&&level==3){level=4; transitionSound.play();}
    else if(lines>=50&&level==4){level=5; transitionSound.play();}
    else if(lines>=60&&level==5){level=6; transitionSound.play();}
    else if(lines>=70&&level==6){level=7; transitionSound.play();}
    else if(lines>=80&&level==7){level=8; transitionSound.play();}
    else if(lines>=90&&level==8){level=9; transitionSound.play();}
    else if(lines>=100&&level==9){level=10; transitionSound.play();}
    else if(lines>=110&&level==10){level=11; transitionSound.play();}
    else if(lines>=120&&level==11){level=12; transitionSound.play();}
    else if(lines>=130&&level==12){level=13; transitionSound.play();}
    else if(lines>=140&&level==13){level=14; transitionSound.play();}
    else if(lines>=150&&level==14){level=15; transitionSound.play();}
    else if(lines>=160&&level==15){level=16; transitionSound.play();}
    else if(lines>=170&&level==16){level=17; transitionSound.play();}
    else if(lines>=180&&level==17){level=18; transitionSound.play();}
    else if(lines>=190&&level==18){level=19; transitionSound.play();}
    else if(lines>=200&&level==19){level=20; transitionSound.play();}
    else if(lines>=210&&level==20){level=21; transitionSound.play();}
    else if(lines>=220&&level==21){level=22; transitionSound.play();}
    else if(lines>=230&&level==22){level=23; transitionSound.play();}
    else if(lines>=240&&level==23){level=24; transitionSound.play();}
    else if(lines>=250&&level==24){level=25; transitionSound.play();}
    else if(lines>=260&&level==25){level=26; transitionSound.play();}
    else if(lines>=270&&level==26){level=27; transitionSound.play();}
    else if(lines>=280&&level==27){level=28; transitionSound.play();}
    else if(lines>=290&&stopTransSound==true){level=29; transitionSound.play();stopTransSound=false;}//level transitions

    if(score>999999)score==999999;
    var scoreTag = document.getElementById('score');
        scoreTag.innerHTML = 'Score: '+score;


    var scoreTag = document.getElementById('lines');
        scoreTag.innerHTML = 'Lines: '+lines;
}//end of areaSweep


function collision(playArea,player){//collision checks for pieces and walls
  const m = player.matrix;
  const o = player.pos;
  for(var y=0;y<m.length;++y){
    for(var x=0;x<m[y].length;++x){
      if(m[y][x] !==0 &&
        (playArea[y+o.y]//is here to collide on non existant rows
       &&playArea[y+o.y][x+o.x])!==0){//checks if real rows contain 1's in the play area
      return true;
      }
    }
  }
  return false;
}//end of collision

function placedPieces(width,height){//believe this is the array of holders for the pieces
    var matrix = [];
    while (height--) {
      matrix.push(new Array(width).fill(0));
    }
    return matrix;
}//end of placedPieces

function nextBox(width,height){//need more context
    var nBox = [];
    while (height--) {
      nBox.push(new Array(width).fill(0));
    }
    return nBox;
}//end of nextBox

function createPiece(type)//matrixs for the 7 pieces
{
    if (type === 'I') {
        return [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 0, 0],
            [3, 3, 3],
            [3, 0, 0],
        ];
    } else if (type === 'J') {
        return [
            [0, 0, 0],
            [2, 2, 2],
            [0, 0, 2],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [3, 3, 0],
            [0, 3, 3],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 2, 2],
            [2, 2, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    }
}//end of createPiece

function drawPiece(matrix,position){//creates the piece and adds the colors
  //if(killSwitch=="on"){
  var levelTag = document.getElementById('level');
  levelTag.innerHTML = 'Level: '+level;//set the levels for the on screen graphic

  matrix.forEach((row,y) =>{
      row.forEach((value,x) => {
        var usableLevel = level%10;
        if(value == 1) {
          ctx.drawImage(document.getElementById("tl"+usableLevel), x + position.x,y + position.y,1,1);
        }
        else if(value == 2) {
          ctx.drawImage(document.getElementById("js"+usableLevel), x + position.x,y + position.y,1,1);
        }
        else if(value == 3) {
          ctx.drawImage(document.getElementById("lz"+usableLevel), x + position.x,y + position.y,1,1);
        }
        else if(value == 4) {
          ctx.drawImage(document.getElementById("o"+usableLevel), x + position.x,y + position.y,1,1);
        }
      });
    });
  //}
}//end of drawPiece

function draw(){//creating the play field
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,c.width,c.height);
  drawPiece(playArea,{x:0,y:0});
  drawPiece(player.matrix,player.pos);
}//end of draw

function combine(playArea,player){//combine / merge the fallen piece into the background matrix
  player.matrix.forEach((row,y) =>{
    row.forEach((value,x)=>{
      if(value !==0){
      playArea[y+player.pos.y][x+player.pos.x]=value;
      }
    });
  });
}//end of combine

function rotate(matrix, dir) {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}//end of rotate

function pieceDrop(){//move the piece down
  player.pos.y++;
  if(collision(playArea,player)){
    dropSound.currentTime = 0;
    dropSound.play();
    player.pos.y--;
    combine(playArea,player);
    playerReset();
    areaSweep();
    //score!!!!!!!!!
  }
  dropStart=0;
}//end of pieceDrop

function pieceMove(dir){//movement of the left and right of the piece
  player.pos.x+=dir;
  //moveSound.play(); //needs fixing
  if(collision(playArea,player)){
    player.pos.x-=dir;
  }
}//end of pieceMove

function playerReset() {
    var pieces = 'TJLOSZI';//random string of pieces
    if(firstPieceCheck==true){//first piece creation
      pieceMath = (seed++^2)%7;
      firstPieceCheck=false;
    }
    nextRandomPiece = pieceMath;//object for a piece
    //kickstarts the dropSpeed of the game
    if(level == 1) dropCap = 43;
    else if (level == 2) dropCap = 38;
    else if (level == 3) dropCap = 33;
    else if (level == 4) dropCap = 28;
    else if (level == 5) dropCap = 23;
    else if (level == 6) dropCap = 18;
    else if (level == 7) dropCap = 13;
    else if (level == 8) dropCap = 8;
    else if (level == 9) dropCap = 6;
    else if (level >= 10&& level <= 12) dropCap = 5;
    else if (level >= 13&& level <= 15) dropCap = 4;
    else if (level >= 16&& level <= 18) dropCap = 3;
    else if (level >= 19&& level <= 28) dropCap = 2;
    else if (level >= 29) dropCap = 1;
    if(killSwitch=="on"){
    player.matrix = createPiece(pieces[nextRandomPiece]);//seeded randomness for fighting others scores with their same piece set
    if(pieceMath==0){
      tPieceS++;
    document.getElementById('tPieceStat').innerHTML = " "+tPieceS;}
    else if(pieceMath==1){
      jPieceS++;
    document.getElementById('jPieceStat').innerHTML = " "+jPieceS;}
    else if(pieceMath==4){
      sPieceS++;
    document.getElementById('sPieceStat').innerHTML = " "+sPieceS;}
    else if(pieceMath==5){
      zPieceS++;
    document.getElementById('zPieceStat').innerHTML = " "+zPieceS;}
    else if(pieceMath==3){
      oPieceS++;
    document.getElementById('oPieceStat').innerHTML = " "+oPieceS;}
    else if(pieceMath==2){
      lPieceS++;
    document.getElementById('lPieceStat').innerHTML = " "+lPieceS;}
    else if(pieceMath==6){
      lbarS++;
    document.getElementById('lbarStat').innerHTML = " "+lbarS;}

    pieceMath = (seed++^2)%7;//new piece

    if(pieceMath==0){
      document.getElementById('nextBoxImage').src='images/nextT.png'}
    else if(pieceMath==1){
      document.getElementById('nextBoxImage').src='images/nextJ.png'}
    else if(pieceMath==4){
      document.getElementById('nextBoxImage').src='images/nextS.png'}
    else if(pieceMath==5){
      document.getElementById('nextBoxImage').src='images/nextZ.png'}
    else if(pieceMath==3){
      document.getElementById('nextBoxImage').src='images/nextO.png'}
    else if(pieceMath==2){
      document.getElementById('nextBoxImage').src='images/nextL.png'}
    else if(pieceMath==6){
      document.getElementById('nextBoxImage').src='images/nextlbar.png'}
    console.log(pieces[pieceMath]);}
    //something about placing the pieceMath onto the nBox array
    player.pos.y = 0;
    player.pos.x = (playArea[0].length / 2 | 0) -
                   ((player.matrix[0].length / 2 | 0));//place the piece on the play field
    if (collision(playArea, player)) {
      playArea.forEach(row => row.fill(0));
      killSwitch="off";
      end();
      //top out here
    }
}//end of playerReset

function playerRotate(dir) {
  rotateSound.pause();
  rotateSound.currentTime = 0;
  rotateSound.play();
    var pos = player.pos.x;
    var offset = 1;
    rotate(player.matrix, dir);//rotate the piece
    while (collision(playArea, player)) {//if the rotation happens along the wall do not rotate into the wall
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}//end of playerRotate

function update(){
  dropStart++;
  moveStart++;
  rotateStart++;
  if(inputArray[inputArray.length-1]===37&&moveStart>moveCap){
    pieceMove(-1);
    moveStart=0;
  }
  else if(inputArray[inputArray.length-1]===39&&moveStart>moveCap){
    pieceMove(1);
    moveStart=0;
  }
  else if(inputArray[inputArray.length-1]===40&&moveStart>moveCap){
    pieceDrop();
    moveStart=0;
  }
  else if(inputArray[inputArray.length-1]===81){
    playerRotate(-1);
    inputArray.splice(inputArray.indexOf(81),1);
  }
  else if(inputArray[inputArray.length-1]===87){
    playerRotate(1);
    inputArray.splice(inputArray.indexOf(87),1);
  }
  if(dropStart>dropCap){
    pieceDrop();
  }
  draw();
  requestAnimationFrame(update);//animates
}//end of update
document.addEventListener("keydown",event =>{//there needs to be a fix here for smoother movement
  if(event.keyCode===37&&m37==true){
    inputArray.push(37);
    m37=false;
  }
  else if(event.keyCode===39&&m39==true){
    inputArray.push(39);
    m39=false;
  }
  else if(event.keyCode===40&&m40==true){
    inputArray.push(40);
    m40=false;
  }
  else if (event.keyCode===81&&m81==true){
    inputArray.push(81);
    m81=false;
  }
  else if (event.keyCode===87&&m87==true){
    inputArray.push(87);
    m87=false;
  }
});//contains all events for the keyEvents
document.addEventListener("keyup",event =>{//there needs to be a fix here for smoother movement
  if(event.keyCode===37&&m37!=true){
    inputArray.splice(inputArray.indexOf(37),1);
    m37=true;
  }
  else if(event.keyCode===39&&m39!=true){
    inputArray.splice(inputArray.indexOf(39),1);
    m39=true;
  }
  else if(event.keyCode===40&&m40!=true){
    inputArray.splice(inputArray.indexOf(40),1);
    m40=true;
  }
  else if (event.keyCode===81&&m81!=true){
    //inputArray.splice(inputArray.indexOf(81),1);
    m81=true;
  }
  else if (event.keyCode===87&&m87!=true){
    //inputArray.splice(inputArray.indexOf(87),1);
    m87=true;
  }
});//contains all events for the keyEvents
var playArea = placedPieces(10, 20);//size of the play area
console.log(inputArray);
var player = {
    pos: {x: 0, y: 0},
    matrix: null,
};//creates the player variable
  playerReset();//call playerReset
  update();//call update

}

function end(){
  var topOut = new Audio('topOut.mp3');
  if(killSwitch=="off"){
    song.pause();
    topOut.play();
    location.replace("EndScreen.php");
  }
}
