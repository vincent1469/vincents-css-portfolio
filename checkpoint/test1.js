/* global draw ellipse rect random p processing triangle width mouseClicked height size background Processing strokeWeight  max min stroke fill mouseX mouseY*/
var sketch = function(processing) {
    with(processing) {
        size(100, 100);
        background(0);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var x;
        var y;
        var starR = 255;
        var starG = 255
        var starB = 255

        window.addEventListener("keydown", function(space) {
            if (space.keyCode === 32) {
                if (starR === 255, starG === 255, starB === 255) {
                    starR = 154;
                    starG = 154;
                    starB = 154;
                }
                else {
                    starR = 255;
                    starG = 255;
                    starB = 255;
                }
            }
        });


        draw = function() {

            fill(starR, starG, starB);
            strokeWeight(2);
            stroke(starR, starG, starB);
            strokeWeight(2);
            triangle(68, 75, 30, 47.5, 44, 10);
            triangle(35.5, 32, 20, 75, 77.5, 32);
            triangle(52.5, 32, 68, 75, 10.5, 32);

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
