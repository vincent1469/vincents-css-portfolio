/* global draw ellipse rect random p processing width mouseClicked height size background Processing strokeWeight  max min stroke fill mouseX mouseY*/
var sketch = function(processing) {
    with(processing) {
        size(500, 500);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var x;
        var y;

        draw = function() {

            for (x = 0; x < width; x++) {
                for (y = 0; y < height; y++) {
                    strokeWeight(5);
                    stroke((x + y) / 2, (x + y) / 2, (x + y) / 2);
                    fill(0, 0, 0);
                    ellipse(x, y, 25, 25);
                }
            }

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
