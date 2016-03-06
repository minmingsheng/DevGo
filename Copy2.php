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
    <title>Copy</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">




    <script src="js/copy2.js"></script>



</head>

<body>
    <!--    header-->
    <div class="header copy_header">
        <nav></nav>
        <a href="dashboard.php"><img src="img/logo-01.svg"></a>
        <img src="img/profile-01.svg">
        <a href="logout.php" class="logout">Log Out</a>
        <a href="Copy2.php" id="copy2T1"><img src="img/hamburger-01.svg">
            <div>Change copy mode</div>
        </a>

    </div>
    <!--left part-->
    <div class="website">
       <section>
            <form method="get" action="#">
                <input id="searchInput" name="wireframeAddress" type="text" placeholder="type your address">
                <input type="submit" id="search_web" class="search" value="Search">
                <input type="button" id="random" class="random" value="Random">
            </form>
            <!--=========================================================================================-->
            <?php
            
              if(!empty($_GET['wireframeAddress'])){
                        $wireframeAddress = $_GET['wireframeAddress'];
                        if (!filter_var($wireframeAddress, FILTER_VALIDATE_URL) === false) {
                        try{   
                           
//                        echo("$wireframeAddress is a valid URL");
                   
                        
                        
                                              
                           
                       $sql = "INSERT INTO `webAddress` (`wireframeAddress`) VALUES (:wireframeAddress)";
                       // create pdo conneciton
                       // INSERT CODE HERE
                       require("config.php");
                            
                       $stmt = $db->prepare($sql);
              
                       $stmt->bindParam(':wireframeAddress', $wireframeAddress);
             
              

                       $stmt->execute();
                       
//                       echo "Done!";
                           }catch(PDOException $e){
                                echo "Error: " . $e->getMessage();
                        }
                           
                           
                        }else {
                            echo("<p style='color:tomato; margin-top:0; margin-left:100px; font-size:11px;  text-align:left'>'$wireframeAddress' is not a valid URL</p");
                        } 
              }
            ?>
                <!--=========================================================================================-->
        </section>

        <!--============================================================================-->
        <?php
            
            try{   
                           
                        $sql = "SELECT `wireframeAddress` From `WebAddress` ";
                       // create pdo conneciton
                       // INSERT CODE HERE
                       require("config.php");
                            
                       $stmt = $db->query($sql);
                        $stmt->execute();
                       $webData = $stmt->fetchAll( PDO::FETCH_ASSOC );
//                        print_r($webData);
                
                        foreach($webData as $key=>$value){
                        
//                           echo $webData[$key]['wireframeAddress'];
                            ?>
            <article class="ValueFromDb_webaddress" style="display:none">
                <?php  echo $webData[$key]['wireframeAddress']; ?>
            </article>
            <?php
                        }
//                       echo "Done!";
                           }catch(PDOException $e){
                                echo "Error: " . $e->getMessage();
                        }

        ?>
                <!--================================================================================-->
                 <iframe src=<?php 
if(isset($wireframeAddress)){
            echo $wireframeAddress;
        }else{
            echo 'http://castirondesign.com/';
        }
                        ?> frameborder="0">
                </iframe>
    </div>

    <aside class="verticalBar"></aside>
    <!--right part-->
    <div class="wireframe_canvas">
        <!--
        <section class="drawTool">
        </section>
-->
        <div class="coder_flexContainer">
            <div class="htmlcssjs">

                <section>
                    <div class="code2Bar">


                        <p>HTML</p>
                        <div class="close"></div>

                    </div>
                    <textarea id="htmlInput2"></textarea>

                </section>
                <section>
                    <div class="code2Bar">
                        <p>CSS</p>
                        <div class="close"></div>

                    </div>
                    <textarea id="cssInput2"></textarea>

                </section>
                <section>
                    <div class="code2Bar">
                        <p>JAVASCRIPT</p>
                        <div class="close"></div>

                    </div>
                    <textarea id="jsInput2"></textarea>

                </section>

            </div>
            <div id="htmlcssjsResult" class="htmlcssjsResult">
                <section>
                    <div class="code2Bar">
                        <p>
                            <button id="resultBtn2">RESULT</button>
                        </p>

                        <!--                        <div class="close"></div>-->

                    </div>
                    <iframe id="resultFrame2" frameborder="0"></iframe>

                </section>
            </div>

        </div>



    </div>

</body>


</html>