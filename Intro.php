<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title>DEVGO_Intro</title>
    <link rel="stylesheet" type="text/css" href="css/intro.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">

</head>

<body>
    <header>
        <img src="img/head_gredient-06.svg">
        <div id='logo' class='LOGO'><img src='img/logo-01.svg'></div>
    </header>
    <div class='jumbotron'>
        <img src='img/notebook.jpg'>
        <div class='middleOfJ'>
            <h1>You need more prectice</h1>
            <h3>Because you are <span>noob</span>!</h3>
            <p>Are you feel over frustrated when you start with learning Code?<br/> Do you still do not know how to do after watching bundle of tutorial.<br/> Always feel lost? <br />This is because you did not give you enoungh time<br /> to practice <b>on your own and with your own hand!</b></p>
        </div>
    </div>
    <div class="intro">
        <section id='feed'>
            <div>
                <article >
                    <h4>Copy copy</h4><img src="img/BW-01.svg">
                    <p>You can pick other website to micmic the layout and draw wireframe based on it.</p>
                </article>
            </div>
            <div>
                <article>
                    <h4>Type type</h4><img src="img/BW-02.svg">
                    <p>Feel your hand clumsy? You need muscle memory! Just keep typing.</p>
                </article>
            </div>
            <div>
                <article>
                    <h4>Relax relax</h4><img src="img/BW-03.svg">
                    <p>Do push yourself too much, high pressure may make you low</p>
                </article>
            </div>
            <div>
                <article>
                    <h4>Note book</h4><img src="img/BW-04.svg">
                    <p>UX/UI is the principle that drive you move further, as well as good color and awesome font!</p>
                </article>
            </div>
            <div>
                <article>
                    <h4>Free code</h4><img src="img/BW-05.svg">
                    <p>As long as you open the page, you start to play with your idea.</p>
                </article>
            </div>
            <div>
                <article>
                    <h4>Personal pannel</h4><img src="img/BW-06.svg">
                    <p>Manage yourself.</p>
                </article>
            </div>
        </section>
    </div>

    <div class="illustration">

        <img src='img/BW-ill-11.svg'>
    </div>
    <footer>
        <div class="middleFrame">
            <div>
                <section>
                    <h4>CONTACT ME</h4>
                    <div>
                        <p>All of them are created by another noob.</p>
                        <p>minming.ca@gmail.com</p>
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <h4>FOLLOW ME</h4>
                    <div>
                        <ul class='social'>

                            <li><i class="fa fa-google-plus fa-2x"></i></li>
                            <li><i class="fa fa-facebook-square fa-2x"></i></li>
                            <li><i class="fa fa-twitter fa-2x"></i></li>
                        </ul>
                    </div>
                </section>

            </div>
            <div>
                <section>
                    <h4 class='lasth4'>GET UPDATE OR MORE INFO</h4>
                    <div class="forForm">
                        <div class='form'>
                            <form>
                                <table>
                                    <td>
                                        <input type="email">
                                    </td>
                                    <td>
                                        <input type="submit">
                                    </td>
                                </table>
                            </form>
                        </div>
                    </div>
                </section>

            </div>

        </div>
        <div class="featureLogos"></div>
        <p class='f'>Copright&copy; 2015 Min.Design . Licence . Terms of Service . Privacy Policy . Powered by Jason</p>

    </footer>
    <script type="text/javascript">
        var logo = document.getElementById("logo");
         var feed = document.getElementById("feed");
        window.addEventListener("scroll", function () {
            if (document.body.scrollTop > 50) {

                logo.style.transform = "scale(0.6)";
                logo.style.top = "0%";

            } else {
                logo.style.transform = "scale(1)";
                logo.style.top = "50%";
            }
              if (document.body.scrollTop > 120) {
              
                feed.style.display="block";
              
              
              }else{
              
                  feed.style.display="none";
              
              }
           
        })
        

        
        
        
    </script>

</body>


</html>