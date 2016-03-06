<!doctype html>
<html onload="run">

<head>
    <meta charset="utf-8" />
    <title>Type</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,300italic,400italic,600italic,700,700italic,800italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" href="css/solarized-light.css">
    <link rel="stylesheet" href="css/monokai-sublime.css">
    <script src="js/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script src="js/type.js"></script>

</head>

<body>
    <!--header-->
    <div class="header">
        <nav></nav>
        <a href="dashboard.php"><img src="img/logo-01.svg"></a>

        <img src="img/profile-01.svg">
        <a href="logout.php" class="logout">Log Out</a>
        <img src="img/hamburger-01.svg">
    </div>

    <div class="flexbox">

        <!--        left part-->

        <div class="left">
            <div class="leftBar">
                <h4 class = "syntax" data-id= "html">5
                    
                    <div class="html" >HTML5</div>
                </h4>
                <h4 class = "syntax" data-id= "css">3
                    <div class="css">css3</div>
                </h4>
                <h4 class = "syntax" data-id= "javascript">JS
                    <div class="js">JAVASCRIPT</div>
                </h4>
                <h4 class = "syntax" data-id= "php">PHP
                    <div class="PHP">PHP</div>
                </h4>
                <h4 class = "syntax" data-id= "sql">SQL
                    <div class="SQL">SQL</div>
                </h4>
            </div>

            <section class="exampleFrame">
                <code id="example" class="example">
                    <p>please choose one type to practice..</p>
                    <!--
                    &lt;div&gt;
                    <br /> &lt;section&gt;
                    <br /> &lt;/section&gt;
                    <br /> &lt;/div&gt;
                    
-->
                <!--     function myFunction() {
                    <br /> var x = document.getElementById("demo");
                    <br /> x.style.fontSize = "25px";
                    <br /> x.style.color = "red";
                    <br /> } -->
                </code>
                <div>asaasa</div>
                <div class="toggleBar ">
                    <div class="bar">
                        <div class="triangle_down"></div>
                    </div>
                    <div class="w3school">
                        <iframe src="http://www.w3schools.com/" frameborder="0"></iframe>
                    </div>

                </div>
            </section>
        </div>

        <!--        right part-->

        <div class="right">
            <div class="playMode">
                <div id="timeMode">Time Mode</div>
                <!--
                <div id="marathonMode">Marathon Mode</div>
                <div id="personal">Personal</div> <====die
-->
            </div>
            <!--            timemode-->
            <div class="setTime">
                <form>
                    <button id="goButton">Go</button>
                    <label>Minute(s)</label>
                    <input id="setTime" type="text" placeholder="Num..">
                </form>
            </div>
            <div id="sentCode" class="sentCode">
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>

                <div id="scoreBoard" class="scoreBoard">
                    <p>score!</p>
                    <button id="resetBtn">Reset</button>
                </div>
            </div>
            <div class="typeArea">

                <textarea id="textarea" placeholder="type the code here..." value="sss"></textarea>

            </div>
            <div class="info">
                <h6 style="font-weight:300">Ctl+Enter to send</h6>
                <h6>Counts: <span id="count"></span></h6>
                <h6>Typos: <span id="typo"></span></h6>
                <h6>Combo: <span id="combo"></span></h6>


            </div>


        </div>
    </div>


</body>


</html>