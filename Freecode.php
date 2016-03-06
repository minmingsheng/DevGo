<?php
session_start();
if(!isset($_SESSION) || !isset($_SESSION['myusername'])){
    header("Location:index.php");
}
?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title>FreeCode</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,300italic,400italic,600italic,700,700italic,800italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">


    <script src="js/freecode.js"></script>

</head>

<body>
    <!--header-->
    <div class="header">
        <nav></nav>
        <a href="dashboard.php"><img src="img/logo-01.svg"></a>
        <img src="img/profile-01.svg">
        <img src="img/hamburger-01.svg">

    </div>
    <!--flex code-->
    <div class="flexboxContainer">
        <div class="codeflexbox">
            <div class="htmlContainer ff">
                <div class="codeBar">
                    <div class="close"></div>
                    <p>HTML</p>
                </div>
                <textarea id="htmlInput" value="<body></body>"></textarea>
            </div>
            <div class="cssContainer ff">
                <div class="codeBar">
                    <div class="close"></div>
                    <p>CSS</p>
                </div>
                <textarea id="cssInput"></textarea>
            </div>
            <div class="jsContainer ff">
                <div class="codeBar">
                    <div class="close"></div>
                    <p>JAVASCRIPT</p>
                </div>
                <textarea id="jsInput"></textarea>
            </div>
        </div>
        <div id="resultContainer" class="resultContainer ff">
            <div class="close"></div>

            <div id="codeBar" class="codeBar">
                <div class="close"></div>

                <p>
                    <button id="resultBtn">RESULT</button>
                </p>

            </div>
            <iframe id="resultFrame" frameborder="0">


            </iframe>
        </div>
    </div>


</body>


</html>