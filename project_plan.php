<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Project Phase_1</title>
        <link rel="stylesheet" href="css/Project_Plan.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="container">
            <div id ="title">
                <h1><strong>Tetris Battle Royale</strong></h1>
            </div>
            <div id ="tableData">
                <table>
                    <tr>
                        <td>Names:</td>
                        <td>
                            <ul>
                                <li>Ayden Sykes</li>
                                <li>Frankie Lau</li>
                                <li>Malcolm Busari</li>
                                <li>Sarah Murad</li>
                                <li>Tanish Gupta</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Division of Labour:</td>
                        <td>
                            <ul>
                                <li>HTML + CSS : Malcom & Sarah </li>
                                <li>JavaScript: Ayden & Frankie </li>
                                <li>PHP: Tanish  </li>
                                <li>MySQL: Frankie </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Who and what is the app for: </td>
                        <td>The app is a tetris game where you are able to challenge your friends <br>
                            to a game of tetris and who ever has the highest score wins. A player is also able to play by themselves to set a highscore <br></td>
                    </tr>

                    <tr>
                        <td>What will be stored in the database: </td>
                        <td>
                            <ul>
                                <li>UserId</li>
                                <li>Password</li>
                                <li>Profile picture</li>
                                <li>High Score</li>
                                <li>Challenge Score</li>
                                <li>Friends</li>
                                <li>Average Length of Game</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>What will be implemented in PHP:</td>
                        <td>PHP will handle all client to server interaction, such as setting up a new account,<br> adding friends to your profile so that you can challenge them. PHP will also handle storing the user's high score, challenge score and average length of game</td>
                    </tr>
                    <tr>
                        <td>What functionality will be implemented in javascript:</td>
                        <td>Javascript will handle the tetris game on canvas, javascript will also handle registration and log-in for a user profile
                            <br> javascript will also handle the run time of the game</td>
                    </tr>
                </table>
            </div>

        </div>
    </body>
</html>
