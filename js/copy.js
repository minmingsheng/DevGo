//run after load
window.addEventListener("load", function () {
    //search website  
    var iframe = document.querySelector("iframe");
    var searchInput = document.getElementById("searchInput");
    var search_webBtn = document.getElementById("search_web");

    var webaddress;


    getValueFromDb()
})

function getValueFromDb() {
    var iframe = document.querySelector("iframe");
    var randomBtn = document.getElementById("random");
    var webAddressArr = [];
    var ValueFromDb_webaddress = document.querySelectorAll('.ValueFromDb_webaddress');

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
    loadImgL();
    loadImgG();   
    saveCanvas();
}
function loadImgG(){
    var albumG = document.getElementById("albumG");
    var tttt = document.getElementById("tttt");
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'loadImgG.php' );
    xhr.send();
    xhr.onreadystatechange = function() {
        // if everything worked out, then..
        if( xhr.readyState == 4 && xhr.status == 200 ) {
            var data = JSON.parse(xhr.responseText).data;
            console.log(JSON.parse(xhr.responseText).data); 
            var picccs = document.querySelectorAll(".piccc");
            for (var i = 0; i < picccs.length; i++) {
                picccs[i].remove();
            };
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                img.setAttribute("src", 'data:image/jpg;base64, '+data[i].image)
                img.setAttribute("data-img", data[i].name)
                img.style.width = "100%";
                div.style.overflow = "auto";
                div.setAttribute("class", "piccc");
                div.style.transition = "all 1s ease";
                var div2 = document.createElement("div");
                div2.style.width = "10px";
                div2.style.height = "10px";
                div2.style.position = "absolute";
                div2.style.background = "snow";
                div2.style.right = 0;
                div2.style.top = "-20px";
                div2.style.lineHeight = "10px";
                div2.style.color = "#516c97";
                div2.style.cursor = "pointer";
                div2.textContent = "x";
                div2.addEventListener("click", function(e){
                    e.stopPropagation();
                    console.log(this.parentElement);
                    var img = this.parentElement.querySelector("img");
                    var data = img.getAttribute("data-img");
                    console.log(data);
                    var  data = "name="+data;
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "delpicG.php");
                    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                    xhr.send(data);
                    xhr.onreadystatechange = function() {
                        // if everything worked out, then..
                        if( xhr.readyState == 4 && xhr.status == 200 ) {
                            console.log(xhr.responseText);
                            loadImgG();
                        }
                    }
                },true)
                // dix2.textContent = "X";
                div.appendChild(div2);
                div.appendChild(img);
                div.addEventListener("click", picOnclick);
                albumG.insertBefore(div, tttt);
            };
          
        }
    }

}

function picOnclick(){
    var div;
        var imgAttr = this.querySelector("img").getAttribute("src");
        var img = document.createElement("img");
        img.setAttribute("src", imgAttr);
        img.style.width = "100%";
        div = document.createElement("div");
        div.setAttribute("class", "temp");
        div.style.position = "absolute";
        div.style.width = "50vw";
        div.style.height = "100%";
        div.style.overflow = "auto";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.bottom = "0";
        div.style.left = "0";
        div.style.right = "0";
        div.style.background="black";
        div.style.border="3px solid black";
        div.style.zIndex="10000";
        div.style.margin = "auto";
        div.style.diplay = "flex";
        div.style.animation = "showup 400ms ease";
        div.addEventListener("click", function(){
            this.remove();
        })
        div.appendChild(img);
        document.body.appendChild(div);
}

function saveCanvas(){
    var saveCanvas = document.querySelector('.saveCanvas');
    var canvaseValue = document.getElementById('canvasForWireframe');
    saveCanvas.addEventListener('click', function(){
        var data  = "img="+canvaseValue.toDataURL();
        console.log(canvaseValue.toDataURL());
        var xhr  = new XMLHttpRequest();
        xhr.open("POST", "saveCavas.php");
        xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhr.send(data);
        xhr.onreadystatechange = function() {
            if( xhr.readyState == 4 && xhr.status == 200 ) {
                console.log( JSON.parse(xhr.responseText) );
            }
        }

    })
}


function loadImgL(){
    var albumL = document.getElementById("albumL");
    var ttttt = document.getElementById("ttttt");
    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', 'loadCavas.php' );
    xhr.send();
    xhr.onreadystatechange = function() {
        // if everything worked out, then..
        if( xhr.readyState == 4 && xhr.status == 200 ) {
            var datas = JSON.parse(xhr.responseText).data;
            for (var i = 0; i < datas.length; i++) {
                var imgSrc = datas[i].image;
                var id = datas[i].id;
                // console.log(id);
                console.log(imgSrc);
                var img = document.createElement("img");
                img.setAttribute("src", imgSrc);
                img.style.width = "100%";
                var div = document.createElement('div');
                div.appendChild(img);
                albumL.insertBefore(div, ttttt)
            };
          
        }
    }

}








