"use strict"
$(function() {


    const myButton = document.getElementById("toggle");

    myButton.addEventListener("click", function() {
        document.body.style.backgroundColor = "black";
    });

    myButton.addEventListener("dblclick", function() {
        document.body.style.backgroundColor = "white";
    });

});

