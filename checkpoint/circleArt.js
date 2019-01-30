/* global draw ellipse rect p processing triangle width height size background Processing strokeWeight stroke fill*/
var sketch = function(processing) {
    with(processing) {

        // Dimensions of the project //
        size(450, 325);
        background(0, 20, 80);
        
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤° //

        // Variables that determine star color //
        var starR = 255;
        var starG = 255;
        var starB = 255;

        // Variable that determines stripe color (same value for each RGB number) //
        var stripe = 255;
        
        // Starting position for the first stripe //
        var xPos = 0;
        var yPos = 12.5;
        
        // Starting position for the eighth stripe //
        var xPos2 = 0;
        var yPos2 = 187.5;
        
        // Starting position for the rectangle divider between the stars and stripes //
        var xPos3 = 150;
        var yPos3 = 162.5;
        
        // Function that enables the color switching of stars upon pressing the spacebar //
        window.addEventListener("keydown", function(space) {
            
            // The spacebar's keycode is 32. //
            if (space.keyCode === 32) {
                
                // If the star is white, change it to silver. //
                if (starR === 255) {
                    starR = 154;
                    starG = 154;
                    starB = 154;
                }

                // If the star is silver, change it to white. //
                else {
                    starR = 255;
                    starG = 255;
                    starB = 255;
                }
            }
        });

        draw = function() {

            // Loop for the first seven stripes //
            for (var j = 0; j < 7; j++) {
                
                // The thickness of the stripes' borders is always 5. //
                strokeWeight(5);
                
                // The border for the stripe is the same color as the stripe itself, which is red or white depending on the stripe number. //
                stroke(255, (stripe * ((j + 2) % 2)), (stripe * ((j + 2) % 2)));
                fill(255, (stripe * ((j + 2) % 2)), (stripe * ((j + 2) % 2)));
                
                // The stripes' y position is added by 25 each time within the loop so that there are multiple stripes. //
                ellipse(xPos + 155, (yPos + (25 * j)), 20, 20);
                
                // Code that makes the x position constantly add by 0.5 pixels //
                xPos = xPos + 0.5;
            }
            
            // Loop for the first six stripes //
            for (var h = 0; h < 6; h++) {
                
                // The thickness of the stripes' borders is always 5. //
                strokeWeight(5);
                
                // The border for the stripe is the same color as the stripe itself, which is red or white depending on the stripe number. //
                stroke(255, (stripe * ((h + 3) % 2)), (stripe * ((h + 3) % 2)));
                fill(255, (stripe * ((h + 3) % 2)), (stripe * ((h + 3) % 2)));
                
                // The stripes' y position is added by 25 each time within the loop so that there are multiple stripes. //
                ellipse(xPos2, (yPos2 + (25 * h)), 20, 20);
                
                // Code that makes the x position constantly add by 0.5 pixels //
                xPos2 = xPos2 + 0.5;
            }

            // Rectangle that divides the stars and stripes //
            stroke(0, 20, 80);
            fill(0, 20, 80);
            rect(xPos3 - 20, yPos3, 40, 20);
            yPos3 = yPos3 - 2;

            // Array that has the x positions of the stars in the odd numbered rows //
            var x1 = [13.5, 9, 10.75, 9.6875, 7.75, 14.9375, 11.8125, 13.75, 6.5625];

            // Loop for the odd numbered rows of stars (there are six) //
            for (var i = 0; i < 6; i++) {
                
                // The star should be all white or all silver, depending on the variable's value. //
                fill(starR, starG, starB);
                strokeWeight(2);
                stroke(starR, starG, starB);
                
                // Loop for the columns within the odd numbered rows (there are five) //
                for (var g = 0; g < 5; g++) {
                    triangle(x1[0] + (30 * i), 20.875 + (35 * g), x1[1] + (30 * i), 17.4375 + (35 * g), x1[2] + (30 * i), 12.25 + (35 * g));
                    triangle(x1[3] + (30 * i), 15.5 + (35 * g), x1[4] + (30 * i), 20.875 + (35 * g), x1[5] + (30 * i), 15.5 + (35 * g));
                    triangle(x1[6] + (30 * i), 15.5 + (35 * g), x1[7] + (30 * i), 20.875 + (35 * g), x1[8] + (30 * i), 15.5 + (35 * g));
                }
            }

            // Array that has the x positions of the stars in the even numbered rows //
            var x2 = [28.5, 24, 25.75, 24.6875, 22.75, 29.9375, 26.8125, 28.75, 21.5625];

            // Loop for the even numbered rows of stars (there are five) //
            for (var i = 0; i < 5; i++) {

                // The star should be all white or all silver, depending on the variable's value. //
                fill(starR, starG, starB);
                strokeWeight(2);
                stroke(starR, starG, starB);
                
                // Loop for the columns within the even numbered rows (there are four) //
                for (var g = 0; g < 4; g++) {
                    triangle(x2[0] + (30 * i), 38.375 + (35 * g), x2[1] + (30 * i), 34.9375 + (35 * g), x2[2] + (30 * i), 30.25 + (35 * g));
                    triangle(x2[3] + (30 * i), 33 + (35 * g), x2[4] + (30 * i), 38.375 + (35 * g), x2[5] + (30 * i), 33 + (35 * g));
                    triangle(x2[6] + (30 * i), 33 + (35 * g), x2[7] + (30 * i), 38.375 + (35 * g), x2[8] + (30 * i), 33 + (35 * g));
                }
            }

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
