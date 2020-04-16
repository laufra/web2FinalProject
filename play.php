<?php
session_start();
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Play</title>
</head>
<body>
  <?php
  $str = $_SESSION["highscore"];
   ?>
    <link rel="stylesheet" href="css/Tetris.css">
    <script type="text/javascript" src="js/somejs.js"></script>
    <div id="imagesNaN">
      <!-- Level 0-->
      <img id="js0" src="images/js0.png">
      <img id="lz0" src="images/lz0.png">
      <img id="o0" src="images/o0.png">
      <img id="tl0" src="images/tl0.png">
      <!-- Level 1-->
      <img id="js1" src="images/js1.png">
      <img id="lz1" src="images/lz1.png">
      <img id="o1" src="images/o1.png">
      <img id="tl1" src="images/tl1.png">
      <!-- Level 2-->
      <img id="js2" src="images/js2.png">
      <img id="lz2" src="images/lz2.png">
      <img id="o2" src="images/o2.png">
      <img id="tl2" src="images/tl2.png">
      <!-- Level 3-->
      <img id="js3" src="images/js0.png">
      <img id="lz3" src="images/js1.png">
      <img id="o3" src="images/o0.png">
      <img id="tl3" src="images/tl0.png">
      <!-- Level 4-->
      <img id="js4" src="images/js4.png">
      <img id="lz4" src="images/lz4.png">
      <img id="o4" src="images/o4.png">
      <img id="tl4" src="images/tl4.png">
      <!-- Level 5-->
      <img id="js5" src="images/lz4.png">
      <img id="lz5" src="images/lz5.png">
      <img id="o5" src="images/o5.png">
      <img id="tl5" src="images/tl5.png">
      <!-- Level 6-->
      <img id="js6" src="images/js6.png">
      <img id="lz6" src="images/lz6.png">
      <img id="o6" src="images/o6.png">
      <img id="tl6" src="images/tl6.png">
      <!-- Level 7-->
      <img id="js7" src="images/js7.png">
      <img id="lz7" src="images/lz7.png">
      <img id="o7" src="images/o7.png">
      <img id="tl7" src="images/tl7.png">
      <!-- Level 8-->
      <img id="js8" src="images/js0.png">
      <img id="lz8" src="images/js6.png">
      <img id="o8" src="images/o0.png">
      <img id="tl8" src="images/tl0.png">
      <!-- Level 9-->
      <img id="js9" src="images/js6.png">
      <img id="lz9" src="images/lz9.png">
      <img id="o9" src="images/o6.png">
      <img id="tl9" src="images/tl6.png">
    </div>
    <div id="everythingContainer">
    <div id="menu">
      <table id = musicSel table border=1>
        <tr>
          <td id="SongA" onclick="songChoose(1)"> Song A </td>
          <td id="SongB" onclick="songChoose(2)"> Song B </td>
          <td id="SongC" onclick="songChoose(3)"> Song C </td>
        </tr>
      </table>
      <table id = levelSel table border=1>
        <tr>
          <td id="setLvl0" onclick="mainRunnerProgram(0)"> 0 </td>
          <td id="setLvl1" onclick="mainRunnerProgram(1)"> 1 </td>
          <td id="setLvl2" onclick="mainRunnerProgram(2)"> 2 </td>
          <td id="setLvl3" onclick="mainRunnerProgram(3)"> 3 </td>
          <td id="setLvl4" onclick="mainRunnerProgram(4)"> 4 </td>
        </tr>
        <tr>
          <td id="setLvl5" onclick="mainRunnerProgram(5)"> 5 </td>
          <td id="setLvl6" onclick="mainRunnerProgram(6)"> 6 </td>
          <td id="setLvl7" onclick="mainRunnerProgram(7)"> 7 </td>
          <td id="setLvl8" onclick="mainRunnerProgram(8)"> 8 </td>
          <td id="setLvl9" onclick="mainRunnerProgram(9)"> 9 </td>
        </tr>
      </table>
    </div>
    <canvas id="theBox" width="144" height="144"></canvas>
    <script src="somejs.js"></script>

    <p id="statsTitle"> Stats </p>
    <p id="level"> Level: 0</p>
    <p id="lines"> Lines: 0</p>
    <table id = "stats" cellspacing=0px>
      <tr>
        <td id="statSpacer"></td>
      </tr>
      <tr>
        <td><img src="images/tPiece.png"></td>
        <td id="tPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/jPiece.png"></td>
        <td id="jPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/zPiece.png"></td>
        <td id="zPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/oPiece.png"></td>
        <td id="oPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/sPiece.png"></td>
        <td id="sPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/lPiece.png"></td>
        <td id="lPieceStat"> 0</td>
      </tr>
      <tr>
        <td><img src="images/Lbar.png"></td>
        <td id="lbarStat"> 0</td>
      </tr>
    </table>
    <canvas id="canvas1"  width="360" height="720"></canvas>
    <div id="end">
      <img id="endScreen" src="images/gameOver.png">
    </div>
    <p id="highscore"><?echo "HighScore: ".$str;?></p>
    <p id="score"> Score: 0</p>
    <div id = "nextPiece">
      <img id = "nextBoxImage" src="images/nextBoxBegin.png">
    </div>
    <p id="nextPieceTitle"> Next: </p>
    <a href="index.php"><button id="quitBtn" class="buttons">Quit</button></a>

  </div>
</body>
</html>
