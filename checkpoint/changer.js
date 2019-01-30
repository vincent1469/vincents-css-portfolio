// Creates variables for button
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

// Creates Event Listener for the button
colorChangeButton.addEventListener("click", function(){
    
    // Changes background color upon click
    document.body.style.backgroundColor = newBGColor.value;
});


