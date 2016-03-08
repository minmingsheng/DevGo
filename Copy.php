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
        <script src="js/createjs-2015.05.21.min.js"></script>
        <script src="js/zim_1.4.4.js"></script>
        <script src="js/copy.js"></script>
        <script src="js/canvas.js"></script>



    </head>

    <body>
        <div class="insertPic"></div>
        <!--    header-->
        <div class="header copy_header">
            <nav></nav>
            <a href="dashboard.php"><img src="img/logo-01.svg"></a>
            <img src="img/profile-01.svg">
            <a href="logout.php" class="logout">Log Out</a>
            <a href="Copy2.php" id="copy1T2"><img src="img/hamburger-01.svg">
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
                       $db = new PDO('mysql:host=localhost; dbname=devgo; charset=utf8', "root", "root");
                       $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                       $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
                            
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
                       $db = new PDO('mysql:host=localhost; dbname=devgo; charset=utf8', "root", "root");
                       $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                       $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
                            
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
                    <iframe id="showweb" src=<?php if(isset($wireframeAddress)){ echo $wireframeAddress; }else{ echo 'http://castirondesign.com/'; } ?> frameborder="0">
                    </iframe>

        </div>
        <!--right part-->
        <div class="wireframe_canvas">
            <section class="drawTool">

                <div id="pencil"><i class="fa fa-pencil"></i></div>
                <div id="eraser"><i class="fa fa-eraser"></i></div>
                <div id="undo"><i class="fa fa-undo"></i></div>
                <div id="brush"><i class="fa fa-paint-brush"></i></div>
                <div class="faCircle"><i id="faCircle1" class="fa fa-circle"></i></div>
                <div class="faCircle"><i id="faCircle2" class="fa fa-circle"></i></div>
                <div class="faCircle"><i id="faCircle3" class="fa fa-circle"></i></div>
                <div class="faCircle"><i id="faCircle4" class="fa fa-circle"></i></div>
                <div class="faCircle"><i id="faCircle5" class="fa fa-circle"></i></div>
                <div>
                    <input id='colorpanel' type="color">
                </div>

                <div><i class="fa fa-cog"></i></div>

            </section>
            <div id="upWireframes">
                <section class="album" id="albumG">
                    <div>


                        <form method='POST' enctype='multipart/form-data' action='savePicture.php'>
                            <label for="pic">Choose a file</label>
                            <input type='file' name='picture' id='pic' />
                            <input type='submit' id="uploadG" value='Upload' />

                        </form>
                        <!--================================================================================-->

    
                            <!--================================================================================-->
                    </div>
                    <div id="tttt"></div>
                    <div></div>
                    <div></div>
        
                </section>

                <section class="otherWireFrame" id = "otherWireFrameA">
                    <div id="triangle_up" class="triangle"></div>
                </section>
            </div>
            <div class="overflow">
                <canvas id="canvasForWireframe"></canvas>
                <button class="saveCanvas">save</button>
            </div>
            <div id="downWireframe" class=downWireframe>
                <section class="otherWireFrame" id = "otherWireFrameB">
                    <div id="triangle_down" class="triangle down"></div>
                </section>
                <section class="album" id = "albumL" >
                    <div>
                        <form method='POST' enctype='multipart/form-data' action='#'>
                            <label for="pic">Choose a file</label>
                            <input type='file' name='picture' id='pic' />
                            <input type='submit' id="uploadL" value='Upload' />
                        </form>

                    </div>
                    <div id="ttttt"></div>
                    <div></div>
                    <div></div>

                </section>
            </div>
        </div>

    </body>


    </html>