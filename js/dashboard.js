function gettime() {
    var show_todayDate = document.getElementById("todayDate");
    console.log(show_todayDate);
    var todayDate = new Date();
    todayDate = (todayDate.toDateString()).slice(0, 11);
    show_todayDate.textContent = todayDate;

}


function showLiveTime() {

    var today, m, h, s;

    function time() {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
      
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        var greeting;
        //
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i
            };
            return i;
        }
        var time = h + ":" + m + ":" + s;
        var showTime = document.getElementById("showTime");
        showTime.textContent = time;
        




    }
    time();
    setInterval(time, 1000);



    greeting(h);

    function greeting(a) {

        var greet
        if (a>=5 && a <= 11) {
            greet = "Good Morning";
        } else if (a>12 && a< 20) {

            greet = "Good Afternoon";
        } else {
            greet = "Good Evening";

        }
        var greeting = document.getElementById("greeting");
        greeting.textContent = greet;

    }


} //end of showlivetime




function todoList() {
    var list = document.getElementById("list");
    var listValue;
    var todo = document.getElementById("todo");
    var contentTodo;
    document.addEventListener("keydown", enter);

    function enter(ev) {
        var key = ev.keyCode;
        var keyboard = String.fromCodePoint(key);
        console.log(keyboard);
        if (list.value == "") {
            return;
        } else {


            if (key == 13) {
                if (event.preventDefault) {
                    event.preventDefault()
                };
                //get value of input
                listValue = (list.value).toUpperCase();
                console.log(listValue);
                //reset input
                list.value = "";
                //create a new div into 'todo'div
                var contentTodo = document.createElement("div");
                //set new div content
                contentTodo.setAttribute("class", "margin");
                contentTodo.innerHTML = "<input type='checkbox'>";
                contentTodo.innerHTML += "<p>" + listValue + "</p>";
                //            document.querySelector(".margin p").style.margin = 0;
                todo.appendChild(contentTodo);
                var margin = document.querySelectorAll(".margin");
                if (margin.length > 4) {
                    contentTodo = null;
                }
            } //end of if


        }


    } // end of enterFunction
} //end of todolist


function logTime() {
    var total_log_time;
    var today_bar1, today_bar2, today_bar3, today_bar4, today_bar5;
    //    the place put mins for each part
    var todayP1;
    var todayP2;
    var todayP3;
    var todayP4;
    var todayP5;
    todayP1 = document.getElementById("todayP1");
    todayP2 = document.getElementById("todayP2");
    todayP3 = document.getElementById("todayP3");
    todayP4 = document.getElementById("todayP4");
    todayP5 = document.getElementById("todayP5");
    //real mins you use 
    var _todayP1R = 33; //<========================
    var _todayP2R = 44;
    var _todayP3R = 222;
    var _todayP4R = 111
    var _todayP5R = 12;
    var _total_log_timeR = _todayP1R + _todayP2R + _todayP3R + _todayP4R + _todayP5R;
    //get the tomato bar 's width
    var bar = document.querySelector(".bar");
    var barWidth = bar.offsetWidth;
    console.log("barWidth", barWidth);

    total_log_time = document.getElementById("total_log_time");
    today_bar1 = document.getElementById("today_bar1");
    today_bar2 = document.getElementById("today_bar2");
    today_bar3 = document.getElementById("today_bar3");
    today_bar4 = document.getElementById("today_bar4");
    today_bar5 = document.getElementById("today_bar5");
    if (_total_log_timeR >= 60) {
        if (_total_log_timeR / 60 == 1) {
            total_log_time.textContent = (Math.round(_total_log_timeR / 60)) + "Hour";
        } else if (_total_log_timeR % 60 != 0) {
            total_log_time.textContent = (Math.round(_total_log_timeR / 60)) + "Hour" + Math.round(_total_log_timeR % 60) + "mins";

        } else {
            total_log_time.textContent = (Math.round(_total_log_timeR / 60)) + "Hours";
        }
    } else {
        total_log_time.textContent = _total_log_timeR + "mins";

    }
    

        today_bar1.style.marginLeft = _todayP1R / (24 * 60) * barWidth + "px";
        today_bar2.style.marginLeft = _todayP2R / (24 * 60) * barWidth + "px";
        today_bar3.style.marginLeft = _todayP3R / (24 * 60) * barWidth + "px";
        today_bar4.style.marginLeft = _todayP4R / (24 * 60) * barWidth + "px";
        today_bar5.style.marginLeft = _todayP5R / (24 * 60) * barWidth + "px";



    function changeEachPartTime(realtime, timePLace) {


        if (realtime >= 60) {
            if (realtime / 60 == 1) {
                timePLace.textContent = (Math.round(realtime / 60)) + "Hour";
            } else if (realtime % 60 != 0) {
                timePLace.textContent = (Math.round(realtime / 60)) + "Hour" + Math.round(realtime % 60) + "mins";

            } else {
                timePLace.textContent = (Math.round(realtime / 60)) + "Hours";
            }
        } else {
            timePLace.textContent = realtime + "mins";

        }


    }




    document.addEventListener("scroll",function(){
        if(document.body.scrollTop>260){
            changeEachPartTime(_todayP1R, todayP1);
            changeEachPartTime(_todayP2R, todayP2);
            changeEachPartTime(_todayP3R, todayP3);
            changeEachPartTime(_todayP4R, todayP4);
            changeEachPartTime(_todayP5R, todayP5);
            today_bar1.style.animationPlayState="running";
            today_bar2.style.animationPlayState="running";
            today_bar3.style.animationPlayState="running";
            today_bar4.style.animationPlayState="running";
            today_bar5.style.animationPlayState="running";
        }
    })


}




//trigger funtion
window.addEventListener("load", main);

function main() {
    gettime();
    showLiveTime();
    todoList();
    // sccroll();
    logTime();
}