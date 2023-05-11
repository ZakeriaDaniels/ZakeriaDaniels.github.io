"use strict"
$(function() {


    const myButton = document.getElementById("light");

    myButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "white";
    });
    const myButton2 = document.getElementById("dark");
    myButton2.addEventListener("click", function() {
        document.body.style.backgroundColor = "black";
    });

});

