<?php
session_start();
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Tetris Battle Royale</title>
        <script type="text/javascript" src="js/showhide.js"></script>
    </head>
    <body>
        <link rel="stylesheet" href="css/Tetris.css">
        <img id = "logo" src="https://www.logolynx.com/images/logolynx/54/54baeecb11082b72c81bfd77bb8e6eff.png">
        <table id = "buttonGroup" cellpadding=5px>
            <button class = "buttons" id="button1" onclick="openLogIn();"> Log In </button>
            <button class = "buttons" id="button2" onclick="openSignUp();"> Sign Up </button>
            <div id="signUpContainer">
                <form name="signupForm" method="post" action="signUp.php">
                    <table id="signUpTable" class="text" cellpadding=4px>
                        <td id = "spacer"></td>
                        <tr>
                            <td>First Name:</td>
                        </tr>
                        <tr>
                            <td><input type="text" name="fName" required></td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                        </tr>
                        <tr>
                            <td><input type="text" name="lName" required></td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                        </tr>
                        <tr>
                            <td><input type="text" name="uName"required></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                        </tr>
                        <tr>
                            <td><input type="password" name="password" required></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                        </tr>
                        <tr>
                            <td><input type="email" name="email" required></td>
                        </tr>
                    </table>
                    <br>
                    <table id="signUpButtons" class="navigationButtons">
                        <tr>
                            <td> <button class="buttons" onclick="closeSignUp();">Cancel</button> </td>
                            <td> <input class="buttons" type="submit"></td>
                        </tr>
                    </table>
                </form>
            </div>

            <form name="loginForm" method="post" action="logIn.php">
                <table id="logInTable" class="text" cellpadding=4px>
                    <td id = "spacer"></td>
                    <tr>
                        <td>Username:</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="uName" required></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                    </tr>
                    <tr>
                        <td><input type="password" name="password" required></td>
                    </tr>
                </table>
                <table id="logInButtons" class="navigationButtons">
                    <tr>
                        <td> <button class="buttons" id="logIn" onclick="closeLogIn();">Cancel</button></td>
                        <td> <input class= "buttons" id="logIn" type="submit"></td>
                    </tr>
                </table>
            </form>
            
            <a href="play.php" <button class="buttons">Play</button></a>
            <a href="instructions.php" <button class="buttons">Instructions</button></a>
            
    </body>
</html>
