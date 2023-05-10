"use strict"
$(function() {


    const myButton = document.getElementById("toggle");
    myButton.addEventListener("click", function() {
        const currentColor = document.body.style.backgroundColor;
        if (currentColor === "white") {
            document.body.style.backgroundColor = "black";
        } else {
            document.body.style.backgroundColor = "white";
        }

    })
});

