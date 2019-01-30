// Creates variable for button
var jumper = document.getElementById("jumper");

// Sets the position of the button to make it absolute
jumper.style.position = "absolute";

// Sets the position of the button to a random place upon moving to it
jumper.addEventListener("mousemove", function(){
    jumper.style.top = Math.random() * 300 + "px";
    jumper.style.left = Math.random() * 300 + "px";
})