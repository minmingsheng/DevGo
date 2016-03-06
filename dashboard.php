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
        <title>Control Panel</title>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,300italic,400italic,600italic,700,700italic,800italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/normalize.css">


        <script src="js/dashboard.js"></script>


    </head>

    <body>


        <!--header-->
        <div class="header">
            <nav></nav>
            <a href="dashboard.php"><img src="img/logo-01.svg"></a>

            <img src="img/hamburger-01.svg">
            <img src="img/profile-01.svg">
            <a href="logout.php" class="logout">Log Out</a>
        </div>

        <!--jumbotron-->
        <div class="jumbotron">

            <section>

                <h1 id="greeting">Good morning</h1>
                <h1 class="userName"><?php echo strtoupper($_SESSION['myusername'])?></h1>
                <h3>What is your goal today?</h3>
                <form action="todolist.php" method="get">
                    <input id="list" type="text" name="goal">
                </form>
                <!--   todolist-->
                <div id="todo" class="todo">

                </div>
                <div class="calendar"><span id="todayDate">Sat Dec 5</span>
                    <hr/><span id="showTime">10:28:32</span></div>
            </section>

        </div>


        <!--======================================================-->
        <?php
   require "todolist.php"

?>
            <!--======================================================-->
            <div class="p_wraper">
                <div class="control_head">
                    <h1><span id="total_log_time">0 hour</span> Logged today...</h1>
                    <section class="time">

                        <div class="progress"><img src="img/BW-01.svg">
                            <div class="bar">
                                <div id="today_bar1" class="today_bar">
                                    <div class="today_log_part_time">
                                        <div class="line"></div>
                                        <p id="todayP1">0 mins</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress"><img src="img/BW-02.svg">
                            <div class="bar">
                                <div id="today_bar2" class="today_bar">
                                    <div class="today_log_part_time">
                                        <div class="line"></div>
                                        <p id="todayP2">0 mins</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress"><img src="img/BW-03.svg">
                            <div class="bar">
                                <div id="today_bar3" class="today_bar">
                                    <div class="today_log_part_time">
                                        <div class="line"></div>
                                        <p id="todayP3">0 mins</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress"><img src="img/BW-04.svg">
                            <div class="bar">
                                <div id="today_bar4" class="today_bar">
                                    <div class="today_log_part_time">
                                        <div class="line"></div>
                                        <p id="todayP4">0 mins</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress"><img src="img/BW-05.svg">
                            <div class="bar">
                                <div id="today_bar5" class="today_bar">
                                    <div class="today_log_part_time">
                                        <div class="line"></div>
                                        <p id="todayP5">0 mins</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                <!--  five part  box-->
                <div class="copy">
                    <a href="Copy.php">
                        <div class="frontInfo"><img class="logobtn" src="img/copy-01.svg"></div>
                        <div class="behindInfo">
                            <p>Copy Copy</p>
                        </div>
                    </a>
                </div>
                <div class="type">
                    <a href="type.php">
                        <div class="frontInfo"><img class="logobtn" src="img/type-02.svg"></div>
                        <div class="behindInfo">
                            <p>Type Type</p>
                        </div>
                    </a>
                </div>
                <div class="relax">
                    <a href="relax.html">
                        <div class="frontInfo"><img class="logobtn" src="img/relax-03.svg"></div>
                        <div class="behindInfo">
                            <p>Relax Relax</p>
                        </div>
                    </a>
                </div>
                <div class="note">
                    <a href="Notebook.php">
                        <div class="frontInfo"><img class="logobtn" src="img/note-2-04.svg"></div>
                        <div class="behindInfo">
                            <p>Note Note</p>
                        </div>
                    </a>
                </div>
                <div class="code">
                    <a href="Freecode.php">
                        <div class="frontInfo"><img class="logobtn" src="img/code-05.svg"></div>
                        <div class="behindInfo">
                            <p>Code Code</p>
                        </div>
                    </a>
                </div>


            </div>
            <div class="footer">
                <p>minming.ca@gmail.com</p>
                <ul>

                    <li><img src="img/linkedin.svg" width="14px"></li>
                    <li><img src="img/twitter.svg"></li>
                    <li><img src="img/logotype3.svg"></li>
                </ul>
                <p>Copright&copy; 2015 Min.Design . Licence . Terms of Service . Privacy Policy . Powered by Jason</p>
            </div>
    </body>


    </html>