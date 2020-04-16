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
        $_SESSION["uname"] = $_POST["uName"];
        $_SESSION["password"] = $_POST["password"];
        $uname = $_SESSION["uname"];
        $password = $_SESSION["password"];
        try {
            $dbConn = new PDO("mysql:host=$hostname;dbname=sykesay_tetrisUserData",$user, $passwd);
            } catch (PDOException $e) {
            echo 'Connection error: ' . $e->getMessage();
            }
            $command = "SELECT * FROM UserStats";
            $stmt = $dbConn->query($command);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
              while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                if($uname==$row["userName"]&&$password==$row["password"]){
                  $_SESSION["uname"] = $row["userName"];
                  $_SESSION["password"] = $row["password"];
                }
              }
            } else {
              echo "0 results";
            }
         ?>
         <script type="text/javascript">location.href = 'index.php';</script>
      </div>
    </body>
</html>
