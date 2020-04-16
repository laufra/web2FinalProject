<?php
session_start();
require("connect.php");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Submission</title>
        <meta charset="UTF-8">
    </head>
    <body>
      <div>
        <?php
        $_SESSION["fname"] = $_POST["fName"];
        $_SESSION["lname"] = $_POST["lName"];
        $_SESSION["email"] = $_POST["email"];
        $_SESSION["uname"] = $_POST["uName"];
        $_SESSION["password"] = $_POST["password"];
        $fname =  $_SESSION["fname"];
        $lname = $_SESSION["lname"];
        $email = $_SESSION["email"];
        $uname = $_SESSION["uname"];
        $password = $_SESSION["password"];
        try {
            $dbConn = new PDO("mysql:host=$hostname;dbname=sykesay_tetrisUserData",$user, $passwd);
            } catch (PDOException $e) {
            echo 'Connection error: ' . $e->getMessage();
            }
            $command = "INSERT INTO UserStats (fName,lName,email,userName,password) VALUES(?,?,?,?,?);";
            $stmt = $dbConn->prepare($command);
            $userParams = array($fname,$lname,$email,$uname,$password);
            $stmt->execute($userParams);
         ?>
         <script type="text/javascript">location.href = 'index.php';</script>
      </div>
    </body>
</html>
