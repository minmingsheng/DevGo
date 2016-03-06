window.addEventListener("load", function () {

    var resultBtn = document.getElementById("resultBtn");
    var resultFrame = document.getElementById("resultFrame");
    var htmlInput = document.getElementById("htmlInput");
    var cssInput = document.getElementById("cssInput");
    var jsInput = document.getElementById("jsInput");
    var resultContainer = document.getElementById("resultContainer");

    resultFrame.style.height = resultContainer.offsetHeight+'px';
    resultFrame.style.width = resultContainer.offsetWidth+'px';

     document.addEventListener("keydown",function(ev){
       if(ev.keyCode == 9){
        ev.preventDefault();
       }
    
    })

    resultBtn.addEventListener("click", function () {
        var htmlCode = htmlInput.value;
        var cssCode = cssInput.value;
        var jsCode = jsInput.value;

        console.log(jsCode);

        resultFrame.contentDocument.childNodes[0].innerHTML = "<html><style>" + cssCode + "</style><body>" + htmlCode + " <script type = 'text/javascript' lang='javascript'>" + jsCode + "</script></body></html>";
        resultFrame.contentWindow.eval(jsCode);



    })
})