function toggleNotbook() {
    var articleNote = document.getElementById("articleNote");
    var articleSection, takenote, fontNote, colorSection, colorSectionLayout, fontIframe, fontNoteSection;
    colorSection = document.querySelector(".colorSection");
    colorSectionLayout = document.querySelector(".colorSectionLayout");
    fontIframe = document.querySelector(".fontIframe");
    fontNoteSection = document.querySelector(".fontNoteSection");
    articleSection = document.querySelector(".articleSection");
    takenote = document.querySelector(".takenote");

    //    articleNote
    articleNote.addEventListener("click", function () {


        console.log(articleSection);

        console.log(takenote);

        articleSection.style.display = "block";
        takenote.style.display = "block";
        colorSection.style.display = "none";
        colorSectionLayout.style.display = "none";
        fontIframe.style.display = "none";
        fontNoteSection.style.display = "none";

    })
    var colorNote = document.getElementById("colorNote");

    //    colorNote
    colorNote.addEventListener("click", function () {
        articleSection.style.display = "none";
        takenote.style.display = "none";
        colorSection.style.display = "block";
        colorSectionLayout.style.display = "block";
        fontIframe.style.display = "none";
        fontNoteSection.style.display = "none";
    })
    var fontNote = document.getElementById("fontNote");

    //    colorNote  
    fontNote.addEventListener("click", function () {
        articleSection.style.display = "none";
        takenote.style.display = "none";
        fontIframe.style.display = "block";
        fontNoteSection.style.display = "block";
        colorSection.style.display = "none ";
        colorSectionLayout.style.display = "none ";

    })
}



function addColor() {
    var addicon = document.getElementById("addicon");
    var coloraddForm = document.getElementById("coloraddForm");
    var colorAddBtn = document.getElementById("colorAddBtn");
    addicon.addEventListener("click", function () {
        addicon.style.opacity=0.5;
        coloraddForm.style.display = "block";

    })
    colorAddBtn.addEventListener("click", function (ev) {
        ev.preventDefault();
        var codevalue = document.querySelector("#colorCode").value;
        coloraddForm.style.display = "none";
        
        var xhr = new XMLHttpRequest();
        var data = 'color='+codevalue;
        xhr.open("POST", "addColor.php");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
        xhr.onreadystatechange = function() {
            // if everything worked out, then..
            if( xhr.readyState == 4 && xhr.status == 200 ) {
                var colorDiv = document.querySelectorAll(".dragable");
                for (var i = 0; i < colorDiv.length; i++) {
                    colorDiv[i].remove();
                };
                loadColor();
            }
        }
    })
}

function drag() {

    var dragable = document.querySelectorAll('.dragable');
    var dropable = document.querySelectorAll('.dropable');
    var ccolor;

    for (var i = 0; i < dragable.length; i++) {

        dragable[i].addEventListener("dragstart", function (ev) {


            ccolor = ev.target.style.background;
        });


    }


    dropable[0].addEventListener("drop", function drop(ev) {
        ev.preventDefault();

        ev.target.style.background = ccolor;
    })

    dropable[0].addEventListener("dragover", function allowDrop(ev) {
        ev.preventDefault();
    })

    dropable[1].addEventListener("drop", function drop(ev) {
        ev.preventDefault();

        ev.target.style.background = ccolor;
    })

    dropable[1].addEventListener("dragover", function allowDrop(ev) {
        ev.preventDefault();
    })

    dropable[2].addEventListener("drop", function drop(ev) {
        ev.preventDefault();

        ev.target.style.background = ccolor;
    })

    dropable[2].addEventListener("dragover", function allowDrop(ev) {
        ev.preventDefault();
    })

    dropable[3].addEventListener("drop", function drop(ev) {
        ev.preventDefault();

        ev.target.style.background = ccolor;
    })

    dropable[3].addEventListener("dragover", function allowDrop(ev) {
        ev.preventDefault();
    })






} //end of drag



function typeColorNote() {
    var notes
    var colorNoteIN = document.getElementById("colorNoteIN");
    colorNoteIN.addEventListener("keydown", function (ev) {
            note = document.createElement("div");
            note.style.margin = "10px";
            note.style.float = "left";

            var colorTag = document.getElementById("colorTag");
            colorNoteIN = document.getElementById("colorNoteIN");
            var colorNoteOp = colorNoteIN.value;
            console.log(colorNoteOp)
            if (ev.keyCode == 13) {
                ev.preventDefault();
                console.log(colorNoteOp);
                note.textContent = colorNoteOp;
                colorTag.appendChild(note);

                notes = document.querySelectorAll(".colorTag div");

                console.log(notes);
                colorNoteIN.value = "";
            }


        }) 
}



function fontnoteSubmit() {
    // document.getElementById("fakefontsubmit").addEventListener("click", function () {

        // document.getElementById("fontsubmit").submit();

    // })

}

function fontWeb() {
    var fontWebAddressFroIframe = document.querySelectorAll(".fontWebAddressFroIframe");
    for (var i = 0; i < fontWebAddressFroIframe.length; i++) {

        fontWebAddressFroIframe[i].addEventListener("click", function (ev) {
            console.log("jss");
            var webAddr = this.textContent;
            console.log(webAddr);
            var fontIframe = document.querySelector(".fontIframe");
            fontIframe.setAttribute("src", webAddr);

        })

    }



}
var id;
function chooseArticle(){

    var currentTitleIndex;
    var articleSelection = document.getElementById('articleSelection');
    var as = document.getElementById('as');
    var articalT = document.getElementById('articalT');
    var articleN = document.getElementById('articleN');
    var articleNoteN = document.getElementById('articleNoteN');
    var articlesTitles = document.querySelectorAll('.articlesTitles');
    var artnote = document.getElementById("artnote");

   console.log("articlesTitles: ",articlesTitles);
   articleSelection.addEventListener("click", function(ev){
        ev.preventDefault();
        currentTitleIndex= as.value;
        id = currentTitleIndex;
        console.log(currentTitleIndex);
        var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
              // document.getElementById("demo").innerHTML = xhttp.responseText;
              console.log(eval(xhttp.responseText)[currentTitleIndex].ArticleName);
              articleN.textContent=eval(xhttp.responseText)[currentTitleIndex].ArticleName;
              articleNoteN.textContent=eval(xhttp.responseText)[currentTitleIndex].ArticleName;
              articalT.innerHTML=eval(xhttp.responseText)[currentTitleIndex].Texts;
              artnote.innerHTML = eval(xhttp.responseText)[currentTitleIndex].Notes;
            }
          };
        xhttp.open("GET", "article.php", true);
        xhttp.send();
        console.log("id: ", id);
   })
    

   
}


function typeFontNote() {
    
    var articleNoteinp = document.getElementById("articleNoteinp");
    var artnote = document.getElementById("artnote");
    articleNoteinp.addEventListener("keydown", function (ev) {
        // if (ev.keyCode == 13) {
        //     var tagFrame = document.querySelector(".tagFrame");
        //     var artnote = document.createElement("div");
        //     artnote.setAttribute("class", "tag");
        //     artnote.textContent = articleNoteinp.value;
        //     tagFrame.appendChild(artnote);
        //     articleNoteinp.value = "";
        // }
        if (ev.keyCode == 13) {

            var nnnn = articleNoteinp.value;
            var ajax =  new XMLHttpRequest();
            ajax.onreadystatechange = function(){
                
                if(ajax.readyState == 4){
                    var tagFrame = document.querySelector(".tagFrame");
                    
                    // artnote.setAttribute("class", "tag");
                    artnote.innerHTML = ajax.responseText;
                    tagFrame.appendChild(artnote);
                    
                }
            }
            ajax.open("GET", "saveArticleNotes.php"+"?note=" + nnnn+"&id="+id, true);
            ajax.send(); 

            articleNoteinp.value = "";

        }
    })

}

function redirect(){
    function set(){
        if(window.location.search!=""){
            window.location.href = 'http://localhost:8888/devgo/Notebook.php';
        };
        // console.log(window.location.search!="");
    }
    setInterval(set, 100);
}

function loadColor(){
    var color;
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'readcolor.php' );
    xhr.send();

    // set up a event listner to check for status changes
    xhr.onreadystatechange = function() {
        // if everything worked out, then..
        if( xhr.readyState == 4
            && xhr.status == 200 ) {

            // process the response
          (function(){
            var colors = JSON.parse(xhr.responseText).data
        
            for(var prop in colors){
                color = colors[prop].ColorCode;
                console.log(color);
                var el = document.createElement("div");
                el.setAttribute("class", "dragable");
                el.setAttribute("draggable", "true");
                el.setAttribute("style", "background:"+color);
                el.setAttribute("data-id", color);
                el.style.background = color;
                el.style.position = "relative";
                el.innerHTML = "<section style='color:gray; background:white;text-align:center; opacity:0.4'>"+color+"</section>"
                var x = document.createElement("div");
                x.style.width = "20px";
                x.style.height = "20px";
                x.style.background = "snow";
                x.style.transition = "all 1s ease";
                x.style.opacity = 0.5;
                x.textContent = "X"
                x.style.position ="absolute";
                x.style.textAlign ="center";
                x.style.bottom ="0";
                x.style.cursor ="pointer";
                x.style.right ="0";
                x.addEventListener("click",delcolor)
                el.appendChild(x);
                document.querySelector(".colorSection").appendChild(el);
            }
          })();

        }
    }

}


/*pravit function*/
function delcolor(){
          var that = this;
          console.log(this.parentElement.getAttribute("data-id"));
          var data = 'id='+this.parentElement.getAttribute("data-id");
          var xhr = new XMLHttpRequest();
          xhr.open( 'POST', 'deleteColor.php' );
          xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
          xhr.send( data );
          xhr.onreadystatechange = function() {
            // if everything worked out, then..
            if( xhr.readyState == 4
                && xhr.status == 200 ) {
                var status =  JSON.parse(xhr.responseText).message ;
                if(status == "success"){
                    that.parentElement.remove();
                }
            }
          }
}

function loadFont(){


        var xhr = new XMLHttpRequest();
        xhr.open( 'GET', 'readFont.php' );
        xhr.send();

        // set up a event listner to check for status changes
        xhr.onreadystatechange = function() {
            // if everything worked out, then..
            if( xhr.readyState == 4
                && xhr.status == 200 ) {
                var data = JSON.parse(xhr.responseText).data;
                // process the response
                console.log(data);
                var nos = document.querySelectorAll(".fontnoootes");
                for (var i = 0; i < nos.length; i++) {
                    nos[i].remove();
                };
                for (var i = 0; i < data.length; i++) {
                    var FontName = data[i].FontName;
                    var Notes = data[i].Notes;
                    var WebAddress = data[i].WebAddress;
                    // console.log("FontName: ",FontName); 
                    // console.log("Notes: ",Notes); 
                    // console.log("WebAddress: ",WebAddress); 
                    var el = document.createElement("div");
                    el.setAttribute("class", "fontnoootes");
                    el.setAttribute("data-FontName", FontName);
                    el.style.marginLeft=0;
                    el.style.position="relative";
                    el.style.marginTop="10px";
                    el.style.padding="10px";
                    el.innerHTML = "<div><section style = 'margin-left:0'><h4>Font Name<h6>"+FontName+"</h6></h4></section><section><h4>Web address</h4><h6 class='fontWebAddressFroIframe'>"+WebAddress+"</h6></section><section><h4>Notes</h4><h6>"+Notes+"</h6></section></div>";
                    var x = document.createElement("section");
                    x.setAttribute("class", "fontX");
                    x.textContent = "x";
                    x.style.position = "absolute";
                    x.style.textAlign = "center";
                    x.style.width = "15px";
                    x.style.height = "15px";
                    x.style.lineHeight = "15px";
                    x.style.border = "1px dotted black";
                    x.style.top = "10px";
                    x.style.right = "10px";
                    x.style.opacity = "0.6";
                    x.style.cursor = "pointer";
                    el.appendChild(x);
                    document.querySelector(".fontNoteSection").appendChild(el);
                };

            }
        }
        
}
function delFont(){

    var fontXs = document.querySelectorAll(".fontX");
    console.log(fontXs[0]);
    for (var i = 0; i < fontXs.length; i++) {
        fontXs[i].addEventListener("click", function(){
            var that = this;
            // var enquire = confirm("Are you sure?");
            var enquire = true;
            if(enquire == true){
                var query = "id="+that.parentElement.getAttribute("data-FontName");
                console.log(query);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "delFont.php");
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.send(query);
                xhr.onreadystatechange = function() {
                    if( xhr.readyState == 4 && xhr.status == 200 ) {
                        console.log( JSON.parse(xhr.responseText));
                    }
                }
                that.parentElement.remove();
            }else{
                return
            }

        })
    };

}
function saveFont(){
    var FontName = document.getElementById('FontName');
    var WebAddress = document.getElementById('WebAddress');
    var FontNotes = document.getElementById('FontNotes');
    
    var fontsubmit = document.getElementById("fontsubmit");
    fontsubmit.addEventListener("click", function(e){
        e.preventDefault();
        FontNamev = FontName.value;
        WebAddressv = WebAddress.value;
        FontNotesv = FontNotes.value;   
        // console.log(FontName);
        // console.log(WebAddress);
        // console.log(FontNotes);
        var data = "FontName="+FontNamev;
        data += "&WebAddress="+WebAddressv;
        data += "&FontNotes="+FontNotesv;
        var xhr = new XMLHttpRequest;
        xhr.open("POST", "saveFont.php");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status ==200){
                console.log(JSON.parse( xhr.responseText ));
                loadFont();
                (function(){
                    var log = document.createElement('div');
                    log.style.width= "300px";
                    log.style.height= "200px";
                    log.style.position= "absolute";
                    log.style.background= "rgba(81, 108, 151, 0.5)";
                    log.style.border= "1px solid #ff6347";
                    log.style.top= "0";
                    log.style.bottom= "0";
                    log.style.left= "0";
                    log.style.right= "0";
                    log.style.color= "#e4e1ce";
                    log.style.opacity= "#e4e1ce";
                    log.style.lineHeight= "200px";
                    log.style.margin= "auto";
                    log.style.textAlign= "center";
                    log.style.boxShadow= "1px 1px 11px rbga(0,0,0,0.5)";
                    log.style.animation= "showup 1s 1 ease";
                    log.textContent = "Success";
                    document.body.appendChild(log);
                    document.addEventListener("click", function(e){
                        log.remove();
                    })


                })()

            }
        }
        FontName.value = '';
        WebAddress.value = '';
         FontNotes.value = '';
    })

}
window.addEventListener("load", function () {

    loadColor();
    toggleNotbook();
    addColor();
    drag();
    typeColorNote();
    
    fontnoteSubmit();
    fontWeb();

    chooseArticle();
    typeFontNote();
    redirect();
    loadFont();
    saveFont();
    // delFont();
    setTimeout(delFont, 2000);

    // test if query string colorCode is set
    // location..indexOf("colorCode") > -1
    // set hash = something
    // if so then
    // exectue click on the second button
    // document.querySelector("#colorNote").click()
    // reset hash to blank

    // check if colour was posted

    //    if( colourSaved ) {
    // console.log("COLOR:", window.colourSaved);
    //    }



    //    showArticless();
})