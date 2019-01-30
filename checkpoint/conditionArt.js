/* global draw ellipse rect p processing width mouseClicked height size background Processing strokeWeight  max min stroke fill mouseX mouseY*/
var sketch = function(processing) {
    with(processing) {
        size(509, 509);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var size = 100;
        var strokeR = 0;
        var strokeG = 0;
        var strokeB = 0;
        var colorR = 255;
        var colorG = 255;
        var colorB = 255;
        var strokeWeightValue = 5;

        draw = function() {

            fill(colorR, colorG, colorB);
            strokeWeight(strokeWeightValue);
            stroke(strokeR, strokeG, strokeB);
            ellipse(mouseX, mouseY, size, size);

        };


        window.addEventListener("keydown", function(space) {
            if (space.keyCode === 32) {
                background();
                size = 100;
            }
            if (space.keyCode === 90) {
                colorR = mouseX;
                colorG = mouseY;
                colorB = (mouseX + mouseY) / 4;
            }
            if (space.keyCode === 88) {
                strokeR = (mouseX + mouseY) / 4;
                strokeG = mouseX;
                strokeB = mouseY;
            }
            if (space.keyCode === 67) {
                strokeWeightValue = (mouseX + mouseY) / 50;
                size = (mouseX + mouseY) / 5;
            }
        });

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
