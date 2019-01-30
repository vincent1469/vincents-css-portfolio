// Creates variables for images
var helloThere = document.getElementById("helloThere");
var iHateYou = document.getElementById("iHateYou");
var display = document.getElementById("display");
var display2 = document.getElementById("display2");

// Listens for the image to be clicked on
helloThere.addEventListener("click", function(){
    
    // Captions "Hello There" when clicked on
    display2.innerHTML = "Hello There";
});

// Listens for the image to be clicked on
iHateYou.addEventListener("click", function(){
    
    // Captions "I Hate You" when clicked on
    display.innerHTML = "I Hate You";
});
