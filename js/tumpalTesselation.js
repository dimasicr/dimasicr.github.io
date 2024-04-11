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
          currentPattern = 'octagon';
          selectBox.value = 'octagon';
        } 
        else if (currentPattern === 'octagon') {
          currentPattern = 'square';
          selectBox.value = 'square';
        }

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'square') {
          currentPattern = 'octagon';
          selectBox.value = 'octagon';
        } 
        else if (currentPattern === 'octagon') {
          currentPattern = 'triangle';
          selectBox.value = 'triangle';
        } 
        else if (currentPattern === 'triangle') {
          currentPattern = 'hexagon';
          selectBox.value = 'hexagon';
        } 
        else if (currentPattern === 'hexagon') {
          currentPattern = 'square';
          selectBox.value = 'square';
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
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
      }
    }
  }
else if (selectBox.value === 'triangle'){

    for (let i = 0; i <6; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  

        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
      }
    }

    for (let i = 0; i <4; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  

        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
      }
    }

  }  
  else if (selectBox.value === 'hexagon'){


    for (let i=-1; i<2; i++){
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
      drawTumpal(cX, cY + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    }

  for (let i=-1; i<3; i++){
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX + 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
  }

  for (let i=-1; i<3; i++){
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
    drawTumpal(cX - 0.75 * w, cY - 1 * 0.5 * Math.sqrt(3) * 0.5 * w + 2 * i * 0.5 * Math.sqrt(3) * 0.5 * w, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);
  }

  }

  else if (selectBox.value === 'octagon'){

    for (let i=-1; i <2; i++){
      for (let j = -1; j<2; j++){
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
      }
    }


    for (let i=0;i<4; i++){
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false); 
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
