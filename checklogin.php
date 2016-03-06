<?php

$host="localhost"; 
$username=""; 
$password=""; 
$db_name="devgo";
$tbl_name="members"; 


$db = new PDO('mysql:host=localhost; dbname=devgo; charset=utf8', "root", "root");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


$myusername=strtolower($_POST['myusername']); 
$mypassword=$_POST['mypassword']; 



$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
$stmt = $db->query($sql);


$account=$stmt->fetchAll( PDO::FETCH_ASSOC );


if(!empty($account)){
	session_start();

	$_SESSION['myusername'] = $myusername;
	header("location:dashboard.php");

}else {
//echo "Wrong Username or Password";
?>


    <!doctype html>
    <html>

    <head>
        <title>jason</title>
    </head>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">



    <body>


        <div class="header">
            <nav></nav>
            <a href="#"><img src="img/logo-01.svg"></a>

            <img src="img/profile-01.svg">
            <img src="img/hamburger-01.svg">

        </div>
        <canvas id="loginCanvas"> </canvas>





        <div id="logoinContainer">
            <h2><?php echo "oops! Wrong Username or Password"?></h2>

            <form name="form1" method="post" action="checklogin.php">
                <p>Username </p>


                <input name="myusername" type="text" id="myusername">



                <p>Password </p>


                <input name="mypassword" type="password" id="mypassword">





                <input type="submit" name="Submit" value="Login">
            </form>

        </div>

        <?php
}

?>

    </body>




    </html>