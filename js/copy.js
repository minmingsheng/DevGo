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
    
    
}