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
        
        coloraddForm.style.display = "none";
        // coloraddForm.submit();
        // ev.preventDefault();

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



//run after load
window.addEventListener("load", function () {

    toggleNotbook();
    addColor();
    drag();
    typeColorNote();
    
    fontnoteSubmit();
    fontWeb();

    chooseArticle();
    typeFontNote();
    redirect();
    loadColor();


    // test if query string colorCode is set
    // location..indexOf("colorCode") > -1
    // set hash = something
    // if so then
    // exectue click on the second button
    // document.querySelector("#colorNote").click()
    // reset hash to blank

    // check if colour was posted

    //    if( colourSaved ) {
    console.log("COLOR:", window.colourSaved);
    //    }



    //    showArticless();
})