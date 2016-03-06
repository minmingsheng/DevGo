<!doctype html>
<html>

<head>
    <title>jason</title>
</head>
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/normalize.css">
<script src="js/zim_1.4.4.js"></script>
<script src="js/createjs-2015.05.21.min.js"></script>


<body>
    <div class='random'>
        <p>1</p>
        <p>0</p>
        <p>1</p>
        <p>o</p>
        <p>0</p>
        <p> </p>
        <p>1</p>
        <p>s</p>
        <p> </p>
        <p>a</p>
        <p> </p>
        <p>H</p>
        <p>T</p>
        <p>M</p>
        <p>L</p>
        <p> </p>
        <p>b</p>
        <p>o</p>
        <p>y</p>

        <p>&#43;</p>
        <p>&#61;</p>
        <p>&#123;</p>
        <p>&#91;</p>
        <p>&#126;</p>
        <p>y</p>
        <p>b</p>
        <p>o</p>
        <p>y</p>
        <p>b</p>
        <p>o</p>
        <p>y</p>

        <p>&#41;</p>
        <p> </p>
        <p>#</p>
        <p>o</p>
        <p>&lt</p>

    </div>
    <div class="header">
        <nav></nav>
        <a href="#"><img src="img/logo-01.svg"></a>


    </div>
    <canvas id="loginCanvas"> </canvas>





    <div id="logoinContainer">
        <h2>Login</h2>

        <form name="form1" method="post" action="checklogin.php">
            <p>Username </p>


            <input name="myusername" type="text" id="myusername">



            <p>Password </p>


            <input name="mypassword" type="password" id="mypassword">





            <input type="submit" name="Submit" value="Login">
        </form>

    </div>


    <script>
    </script>

</body>

<script>
    var ps = document.querySelectorAll(".random p");

    window.addEventListener("mousemove", function (ev) {


        for (var i = 0; i < ps.length; i++) {
            ps[i].style.left = (Math.random() * window.innerWidth - ev.clientX) + ev.clientX + "px";
            ps[i].style.top = (Math.random() * window.innerHeight - ev.clientY) + ev.clientX + "px";
            ps[i].style.fontSize = (Math.random() * 16) + ev.clientX / 1000 + "px";
            ps[i].style.opacity = "0.7";
            


        }









    })



    //    setInterval(run, 1000);
</script>


</html>