window.addEventListener("load", function () {
    var relaxCanvas = document.querySelector("#relaxCanvas");
    relaxCanvas.style.background = "black";

    init();






})








//===================

var canvas, stage;
var ease;
var vx;
var vy;
var f;
var oldX;
var oldY;
var oldMidX;
var oldMidY;
var container;
var maxLines;
var currentPoint;
var currentLineThickness;
var lightness;

var oldXm;
var oldYm;
var oldMidXm;
var oldMidYm;
var vxm;
var vym;
var currentPointm;

function init() {
    canvas = document.getElementById("relaxCanvas");
    ease = 0.9;
    vx = vy = 0;
    f = 0.8;
    stage = new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    currentPoint = new createjs.Point(0, 0);
    container = new createjs.Container();
    container.alpha = 1;
    stage.addChild(container);
    container.compositeOperation = "source-over";

    container2 = new createjs.Container();
    container2.alpha = 1;
    stage.addChild(container2);
    container2.scaleX = 1;
    container2.compositeOperation = "destination-out";

    var text = new createjs.Text("Press A/S change the thickness", "16px Helveltica", "#9fffd3");
    container.addChild(text);



    oldX = stage.mouseX;
    oldY = stage.mouseY;
    oldMidX = stage.mouseX;
    oldMidY = stage.mouseY;

    oldXm = ((window.innerWidth / 2) - stage.mouseX) + (window.innerWidth / 2);
    oldYm = oldY;
    oldMidXm = ((window.innerWidth / 2) - stage.mouseX) + (window.innerWidth / 2);
    oldMidYm = oldMidY
    currentPointm = new createjs.Point(0, 0);


    //    maxLines = 10;
    currentLineThickness = 1;
    createjs.Ticker.setFPS(33);
    createjs.Ticker.addEventListener("tick", tick);



    document.addEventListener("keydown", handleKeydown);
}


function handleKeydown(event) {
    console.log(event.keyCode);
    if (event.keyCode == 83) {
        currentLineThickness += 0.4;
    }

    if (event.keyCode == 65) {
        currentLineThickness -= 0.4;
    }
}


function tick() {

    for (var i = 0; i < 1; i++) {

        vx += (stage.mouseX - currentPoint.x) * ease;
        vy += (stage.mouseY - currentPoint.y) * ease;
        vx *= f;
        vy *= f;
        currentPoint.x += vx;
        currentPoint.y += vy;

        var midPoint = new createjs.Point(oldX + currentPoint.x >> 1, oldY + currentPoint.y >> 1);
        var midPointm = new createjs.Point(oldXm + currentPoint.x >> 1, oldYm + currentPoint.y >> 1);
        var g = new createjs.Shape();

        var color = createjs.Graphics.getHSL((new Date().getTime() / 10) + (220 + (midPoint.x) / 90), 40, 66);


        gg = new createjs.Graphics().ss(currentLineThickness, "round", "round").s(color).moveTo(midPoint.x, midPoint.y).curveTo(oldX, oldY, oldMidX, oldMidY);
        container.addChild(new createjs.Shape(g).set({
            graphics: gg
        }));


    }


    oldX = currentPoint.x;
    oldY = currentPoint.y;
    oldMidX = midPoint.x;
    oldMidY = midPoint.y;

    stage.update();





}