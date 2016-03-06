
function drawdraw() {
    var color;
    //====================================================
    var faCircle1 = document.getElementById("faCircle1");
    var faCircle2 = document.getElementById("faCircle2");
    var faCircle3 = document.getElementById("faCircle3");
    var faCircle4 = document.getElementById("faCircle4");
    var faCircle5 = document.getElementById("faCircle5");
    var colorpanel = document.getElementById("colorpanel");
    colorpanel.addEventListener("click", function () {

        color = colorpanel.value;

    })

    faCircle1.addEventListener("click", function () {
        color = 'black';
        if (faCircle1.style.border != "1px solid tomato" || faCircle1.style.border == undefined) {

            faCircle1.style.border = "1px solid tomato";
        } else {

            faCircle1.style.border = "";

        }

        faCircle2.style.border = "";
        faCircle3.style.border = "";
        faCircle4.style.border = "";
        faCircle5.style.border = "";

    })
    faCircle2.addEventListener("click", function () {
        color = '#212121';
        color = faCircle2.style.color;

        if (faCircle2.style.border != "1px solid tomato" || faCircle2.style.border == undefined) {

            faCircle2.style.border = "1px solid tomato";
        } else {

            faCircle2.style.border = "";

        }

        faCircle1.style.border = "";
        faCircle3.style.border = "";
        faCircle4.style.border = "";
        faCircle5.style.border = "";


    })
    faCircle3.addEventListener("click", function () {
        color = '#3c3c3c';
        color = faCircle3.style.color;

        if (faCircle3.style.border != "1px solid tomato" || faCircle3.style.border == undefined) {

            faCircle3.style.border = "1px solid tomato";
        } else {

            faCircle3.style.border = "";

        }

        faCircle2.style.border = "";
        faCircle1.style.border = "";
        faCircle4.style.border = "";
        faCircle5.style.border = "";


    })
    faCircle4.addEventListener("click", function () {
        color = '#5d5d5d';
        color = faCircle4.style.color;

        if (faCircle4.style.border != "1px solid tomato" || faCircle4.style.border == undefined) {

            faCircle4.style.border = "1px solid tomato";
        } else {

            faCircle4.style.border = "";

        }

        faCircle2.style.border = "";
        faCircle3.style.border = "";
        faCircle1.style.border = "";
        faCircle5.style.border = "";


    })
    faCircle5.addEventListener("click", function () {
        color = '#747474';
        color = faCircle5.style.color;

        if (faCircle5.style.border != "1px solid tomato" || faCircle5.style.border == undefined) {

            faCircle5.style.border = "1px solid tomato";
        } else {

            faCircle5.style.border = "";

        }

        faCircle2.style.border = "";
        faCircle3.style.border = "";
        faCircle4.style.border = "";
        faCircle1.style.border = "";


    })





    //====================================================

    var pencilB = true;
    var eraserB = true;
    var undoB = true;
    var brushB = true;

    var pencil = document.getElementById("pencil");
    var pencilColor = document.querySelector('.fa-pencil');

    var eraser = document.getElementById("eraser");
    var eraserColor = document.querySelector('.fa-eraser');

    var undo = document.getElementById("undo");
    var undoColor = document.querySelector('.fa-undo');

    var brush = document.getElementById("brush");
    var brushColor = document.querySelector('.fa-paint-brush');

    pencilColor.style.cursor = "pointer";

    pencil.addEventListener("click", function () {
        if (pencilB) {

            pencilB = false;
            eraserB = false; //<-
            undoB = false;
            brushB = false;
            console.log(pencilB);
            pencilColor.style.color = "#141b35";
        } else {

            pencilB = true;
            eraserB = false; //<-
            undoB = false;
            brushB = false;
            console.log(pencilB);
            pencilColor.style.color = "#516c97";


        }
        eraserColor.style.color = "#141b35";
        undoColor.style.color = "#141b35";
        brushColor.style.color = "#141b35";
    });

    //====================================================


    eraserColor.style.cursor = "pointer";

    eraser.addEventListener("click", function () {
            if (eraserB) {

                eraserB = false; //<-
                undoB = false;
                pencilB = false;
                brushB = false;
                console.log(eraserB);
                eraserColor.style.color = "#141b35";
            } else {

                eraserB = true; //<-
                undoB = false;
                pencilB = false;
                brushB = false;
                console.log(eraserB);
                eraserColor.style.color = "#516c97";


            }
            pencilColor.style.color = "#141b35";
            undoColor.style.color = "#141b35";
            brushColor.style.color = "#141b35";

        })
        //===========================================================


    undoColor.style.cursor = "pointer";

    undo.addEventListener("click", function () {
            if (undoB) {

                undoB = false; //<-
                pencilB = false;
                eraserB = false;
                brushB = false;
                console.log(undoB);
                undoColor.style.color = "#141b35";
            } else {

                undoB = true; //<-
                pencilB = false;
                eraserB = false;
                brushB = false;
                console.log(undoB);
                undoColor.style.color = "#516c97";



            }

            pencilColor.style.color = "#141b35";
            eraserColor.style.color = "#141b35";
            brushColor.style.color = "#141b35";


        })
        //=============================================================



    brushColor.style.cursor = "pointer";


    brush.addEventListener("click", function () {
            if (brushB) {

                brushB = false; //<-
                pencilB = false;
                eraserB = false;
                undoB = false;
                console.log(brushB);
                brushColor.style.color = "#141b35";
            } else {
                brushB = true; //<-
                pencilB = false;
                eraserB = false;
                undoB = false;
                console.log(brushB);
                brushColor.style.color = "#516c97";
            }

            pencilColor.style.color = "#141b35";
            eraserColor.style.color = "#141b35";
            undoColor.style.color = "#141b35";


        })
        //=============================================================






    //    ========================================//

    var c = createjs,
        stage, art;
    var x, y, listener, hue = 0;
    var canvasForWireframe = document.getElementById("canvasForWireframe");
    canvasForWireframe.setAttribute("width", document.getElementById("showweb").offsetWidth);
    canvasForWireframe.setAttribute("height", document.getElementById("showweb").offsetHeight);




    stage = new c.Stage("canvasForWireframe");




    createjs.Ticker.addEventListener("tick", stage);




    var cont = stage.addChild(new c.Container());
    art = new c.Shape();
    cont.cache(0, 0, 1000, 1000);
    cont.addChild(art);


    stage.on("stagemousedown", startDraw);

    function startDraw(evt) {
        listener = stage.on("stagemousemove", draw);
        stage.on("stagemouseup", endDraw);
        //        color = c.Graphics.getHSL(33, 0, 50);
        x = evt.stageX; // offset so we draw an initial dot
        y = evt.stageY;
        console.log(stage.mouseX);
        console.log(x);
        draw(evt); // draw the initial dot
    }

    function draw(evt) {
        console.log(color);
        console.log("in draw:", stage.mouseX);
        console.log("in draw:", x);;


        if (brushB) {
            art.graphics.ss(18, 0).s(color).mt(x, y).lt(evt.stageX, evt.stageY);
            art.alpha = 0.2;
            cont.updateCache("destination-over");
        } else {
            art.graphics.ss(1, 1).s(color).mt(x, y).lt(evt.stageX, evt.stageY);
            art.alpha = 1;

        }
        if (eraserB) {
            art.graphics.ss(10, 1).s(color).mt(x, y).lt(evt.stageX, evt.stageY);
            cont.updateCache("destination-out");

        } else {

            cont.updateCache("source-over");
        }

        art.graphics.clear();
        x = evt.stageX;
        y = evt.stageY;
        stage.update();
    }

    function endDraw(evt) {
        console.log("in endDraw:", stage.mouseX);
        console.log("in endDraw:", x);
        stage.off("stagemousemove", listener);
        evt.remove();
    }

}

window.addEventListener("load", function () {


    //    setsize
    var website = document.querySelector(".website");
    var wireframe_canvas = document.querySelector(".wireframe_canvas");
    var iframe = document.querySelector("iframe");
    
//    wireframe_canvas.style.height = window.innerHeight + "px";
    console.log(website.style.height);
    console.log(window.innerHeight);
    var canvasForWireframe = document.getElementById("canvasForWireframe");
//    canvasForWireframe.setAttribute("width", iframe.offsetWidth);
//    canvasForWireframe.setAttribute("height", iframe.offsetHeight);
    wireframe_canvas.style.height = iframe.offsetHeight + "px";
    website.style.height = iframe.offsetHeight + 20 + "px";

    drawdraw(); //draw 

    //hoverbar
    var album = document.querySelectorAll(".album");
    var album0 = album[0];
    var album1 = album[1];

    var downWireframe = document.getElementById("downWireframe");
    var triangle_down = document.getElementById("triangle_down");
    var triangle_up = document.getElementById("triangle_up");
    var upWireframes = document.getElementById("upWireframes");
    //    console.log(otherWireFrame);
    upWireframes.addEventListener("click", function () {
        if (upWireframes.offsetHeight > 340) {

            album0.style.height = 0 + "px";
            triangle_up.style.transform = "rotate(135deg)";
            triangle_up.style.marginTop = "-2px";
        } else {
            album0.style.height = 345 + "px";
            triangle_up.style.transform = "rotate(-45deg)";
            triangle_up.style.marginTop = "2px";

        }
    })


    downWireframe.addEventListener("click", function () {
        if (downWireframe.offsetHeight > 340) {
            album[1].style.height = 0 + "px";
            triangle_down.style.transform = "rotate(-45deg)";
            triangle_down.style.marginTop = "2px";


        } else {
            album[1].style.height = 345 + "px";
            triangle_down.style.transform = "rotate(135deg)";
            triangle_down.style.marginTop = "-3px";

        }
    })




})