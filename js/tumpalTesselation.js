useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectThemes = document.getElementById('themes');
const selectIsens = document.getElementById('Isens');
let touchStartX = 0;
let touchEndX = 0;
let currentPattern = selectBox.value;

// Function to handle swipe
function handleSwipe() {
    const swipeThreshold = 50; // Adjust this value as needed

    // Calculate the distance of swipe
    const swipeLength = touchEndX - touchStartX;

    if (swipeLength > swipeThreshold) {
        // Swipe right
       if (currentPattern === 'square') {
          currentPattern = 'hexagon';
          selectBox.value = 'hexagon';
        } 
        else if (currentPattern === 'hexagon') {
          currentPattern = 'triangle';
          selectBox.value = 'triangle';
        } 
        else if (currentPattern === 'triangle') {
          currentPattern = 'hexagon_triangle';
          selectBox.value = 'hexagon_triangle';
        } 
        else if (currentPattern === 'hexagon_triangle') {
          currentPattern = 'hexagon_square_triangle';
          selectBox.value = 'hexagon_square_triangle';
        }  
        else if (currentPattern === 'hexagon_square_triangle') {
          currentPattern = 'two_hexagons_two_triangles';
          selectBox.value = 'two_hexagons_two_triangles';
        }                         
        else if (currentPattern === 'two_hexagons_two_triangles') {
          currentPattern = 'dodecagon_triangle';
          selectBox.value = 'dodecagon_triangle';
        }                         
         else if (currentPattern === 'dodecagon_triangle') {
          currentPattern = 'dodecagon_hexagon_square';
          selectBox.value = 'dodecagon_hexagon_square';
        }                      
         else if (currentPattern === 'dodecagon_hexagon_square') {
          currentPattern = 'two_squares_three_triangles';
          selectBox.value = 'two_squares_three_triangles';
        }
         else if (currentPattern === 'two_squares_three_triangles') {
          currentPattern = 'two_squares_three_triangles_complex';
          selectBox.value = 'two_squares_three_triangles_complex';
        }                       
         else if (currentPattern === 'two_squares_three_triangles_complex') {
          currentPattern = 'octagon_square';
          selectBox.value = 'octagon_square';
        }                         
         else if (currentPattern === 'octagon_square') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'hexagon') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 
        else if (currentPattern === 'triangle') {
          currentPattern = 'hexagon';
          selectBox.value = 'hexagon';
        } 
        else if (currentPattern === 'hexagon_triangle') {
          currentPattern = 'triangle';
          selectBox.value = 'triangle';
        } 
        else if (currentPattern === 'hexagon_square_triangle') {
          currentPattern = 'hexagon_triangle';
          selectBox.value = 'hexagon_triangle';
        }  
        else if (currentPattern === 'two_hexagons_two_triangles') {
          currentPattern = 'hexagon_square_triangle';
          selectBox.value = 'hexagon_square_triangle';
        }                         
        else if (currentPattern === 'dodecagon_triangle') {
          currentPattern = 'two_hexagons_two_triangles';
          selectBox.value = 'two_hexagons_two_triangles';
        }                         
         else if (currentPattern === 'dodecagon_hexagon_square') {
          currentPattern = 'dodecagon_triangle';
          selectBox.value = 'dodecagon_triangle';
        }                      
         else if (currentPattern === 'two_squares_three_triangles') {
          currentPattern = 'dodecagon_hexagon_square';
          selectBox.value = 'dodecagon_hexagon_square';
        }
         else if (currentPattern === 'two_squares_three_triangles_complex') {
          currentPattern = 'two_squares_three_triangles';
          selectBox.value = 'two_squares_three_triangles';
        }                       
         else if (currentPattern === 'octagon_square') {
          currentPattern = 'two_squares_three_triangles_complex';
          selectBox.value = 'two_squares_three_triangles_complex';
        }                         
         else if (currentPattern === 'square') {
          currentPattern = 'octagon_square';
          selectBox.value = 'octagon_square';
        }  
    }
    redraw();
}

svg.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

svg.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Mouse events (for desktop)
svg.addEventListener("mousedown", (event) => {
    touchStartX = event.clientX;
});

svg.addEventListener("mouseup", (event) => {
    touchEndX = event.clientX;
    handleSwipe();
});


function redraw(){
  setup(400, 400, themes[selectThemes.value].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;


  w = svg.getAttribute("width") * 0.5 ;




  if (selectBox.value === 'square') {
    for (let i = 0; i <4; i++){
      for (let j =0; j<4; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
      }
    }
  }


  else if (selectBox.value === 'two_squares_three_triangles') {

    spacing_Y = 2 * (0.5 * w + 0.866 * 0.5 * w);

    for (let i = 0; i <2; i++){
      for (let j =-1; j<4; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + i * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + i * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + i * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + i * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 

        drawTumpal(0.25 * w + 0.5 * w *j,  0.5 * w + 0.334 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j,  0.5 * w + 0.334 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j,  0.5 * w + 0.334 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);

        drawTumpal(0.5 * w + 0.5 * w *j,  0.5 * w + 0.667 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.5 * w + 0.5 * w *j,  0.5 * w + 0.667 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
        drawTumpal(0.5 * w + 0.5 * w *j,  0.5 * w + 0.667 * 0.5 * 0.866 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);

      }
    }

      for (let j =-1; j<4; j++){
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.25 * w, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.25 * w, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.25 * w, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.25 * w, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 

        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.334 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.334 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.25 * w + 0.5 * w *j, 0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.334 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);

        drawTumpal(0.25 * w + 0.5 * w + 0.5 * w *j,  0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.667 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w + 0.5 * w *j,  0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.667 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
        drawTumpal(0.25 * w + 0.5 * w + 0.5 * w *j,  0.5 * w + 0.866 * 0.5 * w +  0.5 * w + 0.667 * 0.5 * 0.866 * w, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);

      }

  }


    else if (selectBox.value === 'two_squares_three_triangles_complex') {

      spacing_X = 0.5 * w + 0.866 * 0.5 * w;
      spacing_Y = 0.5 * 0.5 * w;

      for(let i = -1; i <2; i++) {
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
  
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);

          x1 = cX + 0.5 * w; 
          y1 = cY - 0.5 * 0.5* w - 0.866 * 0.5 * w;
          x2 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y2 = cY;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y1 = cY + 0.5 * w;
          x2 = cX;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY;
          x2 = cX - 0.5 * w;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY - 0.5 * w;
          x2 = cX;
          y2 = cY - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
      }


      cX = cX + 0.5 * 0.5 * w;
      cY = cY - 0.5 * w - 0.866 * 0.5 * w;


      for(let i = -1; i <2; i++) {
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
  
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          x1 = cX + 0.5 * w; 
          y1 = cY - 0.5 * 0.5* w - 0.866 * 0.5 * w;
          x2 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y2 = cY;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y1 = cY + 0.5 * w;
          x2 = cX;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY;
          x2 = cX - 0.5 * w;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY - 0.5 * w;
          x2 = cX;
          y2 = cY - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }

      cX = cX - 2* (0.5 * 0.5 * w);
      cY = cY +  2 * (0.5 * w + 0.866 * 0.5 * w);


      for(let i = -1; i <2; i++) {
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.5 * 0.5 * w + i * spacing_X, cY -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * 0.5 * w + i * spacing_X, cY +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y, selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX +  0.5 * 0.5 * w + 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY + 0.5 * 0.5 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.334 * 0.866 * 0.5 * w + i * spacing_X, cY + i * spacing_Y , selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX -  0.5 * 0.5 * w - 0.667 * 0.866 * 0.5 * w + i * spacing_X, cY - 0.5 * 0.5 * w + i * spacing_Y , selectIsens.value, w * 0.5, 30, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          x1 = cX + 0.5 * w; 
          y1 = cY - 0.5 * 0.5* w - 0.866 * 0.5 * w;
          x2 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y2 = cY;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y , selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          y1 = cY + 0.5 * w;
          x2 = cX;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY;
          x2 = cX - 0.5 * w;
          y2 = cY + 0.5 * 0.5 * w + 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
  
          x1 = cX - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          y1 = cY - 0.5 * w;
          x2 = cX;
          y2 = cY - 0.5 * 0.5 * w - 0.866 * 0.5 * w;
          mX = 0.5 * (x1 + x2);
          mY = 0.5 * (y1 + y2);
  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(mX + i * spacing_X, mY + i * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }



  }
  else if (selectBox.value === 'triangle'){

    for (let i = 0; i <6; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      }
    }

    for (let i = 0; i <4; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      }
    }

    // drawTumpal(200, 200, selectIsens.value, 100, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(200, 200, selectIsens.value, 100, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(200, 200, selectIsens.value, 100, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

    // drawTumpal(300, 200, selectIsens.value, 100, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(300, 200, selectIsens.value, 100, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(300, 200, selectIsens.value, 100, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  }  
  else if (selectBox.value === 'hexagon'){


    for (let i=-1; i<2; i++){
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    }

  for (let i=-1; i<3; i++){
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  }

  for (let i=-1; i<3; i++){
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  }

  }


    else if (selectBox.value === 'hexagon_triangle'){




      spacing_X = 0.5 * 0.5 * w;
      spacing_Y = 3 * 0.866 * 0.5 * w;

      for (let i = -1; i < 2; i++){
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX + 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

          drawTumpal(cX + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX - 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.75 * w + i * spacing_X, cY - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX - 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX + 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.75 * w + i * spacing_X, cY + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.5 * w + i * spacing_X, cY +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX - 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX + 0.25 * w + i * spacing_X, cY + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }


         cX2 = cX + 2.5 * 0.5 * w;
         cY2 = cY + 0.866 * 0.5 * w;


      for (let i = -1; i < 2; i++){
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

          drawTumpal(cX2 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX2 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX2 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX2 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX2 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY2 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.75 * w + i * spacing_X, cY2 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.5 * w + i * spacing_X, cY2 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 - 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX2 + 0.25 * w + i * spacing_X, cY2 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }


    cX3 = cX - 2.5 * 0.5 * w;
    cY3 = cY - 0.866 * 0.5 * w;

for (let i = -1; i < 2; i++){
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + i * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w - 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

          drawTumpal(cX3 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX3 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(2 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
    
          drawTumpal(cX3 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(3 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX3 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(4 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX3 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + Math.sin(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_X, cY3 - Math.cos(5 * Math.PI/3) * 0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 - 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    
          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.75 * w + i * spacing_X, cY3 + 0.5 * 0.33 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.5 * w + i * spacing_X, cY3 +  0.67 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 - 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    
          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
          drawTumpal(cX3 + 0.25 * w + i * spacing_X, cY3 + 0.84 * 0.86 * w + i * spacing_Y, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }
 

  }

   else if (selectBox.value === 'hexagon_square_triangle'){

      spacing_Y = 2 * Math.abs(- 0.5 * w * 0.866 - 0.25 * w);


      for (let j=-1; j <2; j++){
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      }

      cX2 = cX -  Math.abs(0.5 * w + 0.5 * 0.5 * w + 0.866 * 0.5 * w);
      cY2 = cY - 0.5 * spacing_Y;  

      spacing_X = 2 * Math.abs(0.5 * w + 0.5 * 0.5 * w + 0.866 * 0.5 * w);


    for(let i=0; i < 2; i++){
      for (let j=-1; j <2; j++){
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      }
    } 

  }

   else if (selectBox.value === 'two_hexagons_two_triangles'){

      spacing_X = 0.7 * w;
      spacing_Y = 2 * 2 * Math.sqrt(3) * 0.5 * 0.35 *  w;

      for (let i = -1; i < 2; i++) {
        for (let j=-1; j <2; j++){
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
       }
      }

      cX2 = cX - 0.35 * w;
      cY2 = cY - 2 * Math.sqrt(3) * 0.5 * 0.35 *  w;

      

      for (let i = -1; i < 3; i++) {
        for (let j=0; j <2; j++){
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        }
      }

  }


   else if (selectBox.value === 'dodecagon_triangle'){

     spacing_X = 2 * - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360);

     for (let i = -1; i < 2; i++) {
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,   false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      dist = - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.34 * 0.86 * 0.3 * w;

      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    }


    cX2 = cX - 0.5 * spacing_X;
    cY2 = cY - Math.abs(0.5 * spacing_X) - 1.37 * 0.3 * w;

    spacing_Y = 2 * (Math.abs(0.5 * spacing_X) + 1.37 * 0.3 * w);

     for (let i = -1; i < 2; i++) {
      for (let j=0; j <2; j++){
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,   false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      dist = - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.34 * 0.86 * 0.3 * w;

      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      }
    }



  }

  else if (selectBox.value === 'dodecagon_hexagon_square'){

      spacing_X =  2 * (- 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -  0.25 * w;
      spacing_Y = 2 * (2 * ( 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) +  0.37 * 0.25 * w);

      for (let i=-4; i<3; i++){
        for (let j=0; j<2; j++){
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.866 * 0.25 * w;

          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);


          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) -  0.25 * w * 0.5;

          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        }
      }

      cX = cX - 0.5 * (2 * (- 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -  0.25 * w);
      cY = cY  - 2 * ( 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -   0.37 * 0.25 * w;

      for (let i=-4; i<3; i++){
        for(let j=0; j<3; j++){
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.866 * 0.25 * w;

          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);


          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) -  0.25 * w * 0.5;

          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        }
      }

  }

  else if (selectBox.value === 'octagon_square'){

    for (let i=-1; i <2; i++){
      for (let j = -1; j<2; j++){
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }
    }


    for (let i=0;i<4; i++){
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    }
  }
}


// Add an event listener to the select input
selectBox.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectIsens.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
  redraw();
});

redraw();
