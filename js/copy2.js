window.addEventListener("load", function () {

    var resultBtn2 = document.getElementById("resultBtn2");
    var resultFrame2 = document.getElementById("resultFrame2");
    var htmlInput2 = document.getElementById("htmlInput2");
    var cssInput2 = document.getElementById("cssInput2");
    var jsInput2 = document.getElementById("jsInput2");
    var htmlcssjsResult = document.getElementById("htmlcssjsResult");
            console.log(resultBtn2);
                console.log(resultFrame2);

                console.log(cssInput2);

                console.log(jsInput2);

                console.log(htmlcssjsResult);

    

    resultFrame2.style.height = htmlcssjsResult.offsetHeight+'px';
    resultFrame2.style.width = htmlcssjsResult.offsetWidth+'px';

     document.addEventListener("keydown",function(ev){
       if(ev.keyCode == 9){
        ev.preventDefault();
       }
    
    })

    resultBtn2.addEventListener("click", function () {
      
        var htmlCode = htmlInput2.value;
        var cssCode = cssInput2.value;
        var jsCode = jsInput2.value;

        console.log(htmlCode);
        //            resultFrame.innerHTML = "<html><body>"+htmlCode+"</body></html>"
        //        resultFrame.contentWindow.document = "<html><body>" + htmlCode + "</body></html>"
        //        resultFrame.contentWindow = "<html><style>"+cssCode+"</style><body>" + htmlCode +"<h1>jason</h1>"+ "</body></html>"
        resultFrame2.contentDocument.childNodes[0].innerHTML = "<html><style>" + cssCode + "</style><body>" + htmlCode + " <script type = 'text/javascript' lang='javascript'>" + jsCode + "</script></body></html>";
        resultFrame2.contentWindow.eval(jsCode);

        

    })
    getValueFromDb();
})


function getValueFromDb() {
    var iframe = document.querySelector("iframe");
    var randomBtn = document.getElementById("random");
    var webAddressArr = [];
    var ValueFromDb_webaddress; document.querySelectorAll('.ValueFromDb_webaddress');

    for (var i = 0; i < ValueFromDb_webaddress.length; i++) {
        //        console.log(ValueFromDb_webaddress[i].textContent);
        webAddressArr.push(ValueFromDb_webaddress[i].textContent);
    }
    //    console.log(webAddressArr);
    //    console.log(randomlyGetAdd);
    randomBtn.addEventListener("click", function () {
        var randomlyGetAdd = webAddressArr[Math.floor(Math.random() * (webAddressArr.length))];

        iframe.setAttribute("src", randomlyGetAdd);
        console.log(randomlyGetAdd);

    })
    
    
}