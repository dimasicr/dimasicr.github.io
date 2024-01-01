// https://codegolf.stackexchange.com/questions/55848/plot-a-hyperbolic-plane-tessellation

useTheme = 'oldJava';

const selectBox = document.getElementById('motives');
selectBox.addEventListener('change', function() {
  redraw();
});

const selectThemes = document.getElementById('themes');
selectThemes.addEventListener('change', function() {
  useTheme = selectThemes.value;
  redraw();
});


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
        if (currentPattern === 'pentagonFourVertices') {
          currentPattern = 'squareFiveVertices';
          selectBox.value = 'squareFiveVertices';
        } 
        else if (currentPattern === 'squareFiveVertices') {
          currentPattern = 'hexagonFourVertices';
          selectBox.value = 'hexagonFourVertices';
        } 
        else if (currentPattern === 'hexagonFourVertices') {
          currentPattern = 'pentagonFourVertices';
          selectBox.value = 'pentagonFourVertices';
        } 

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'pentagonFourVertices') {
          currentPattern = 'hexagonFourVertices';
          selectBox.value = 'hexagonFourVertices';
        } 
        else if (currentPattern === 'squareFiveVertices') {
          currentPattern = 'pentagonFourVertices';
          selectBox.value = 'pentagonFourVertices';
        } 
        else if (currentPattern === 'hexagonFourVertices') {
          currentPattern = 'squareFiveVertices';
          selectBox.value = 'squareFiveVertices';
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
  setup(400, 400, themes[useTheme].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  if (selectBox.value === 'hexagonFourVertices'){
    for(let i=0; i < hexagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
          if (selectThemes.value === 'tetradiac'){
            drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor[i%4], themes[useTheme].secondaryColor, '#4D0900');
          }
          else {
            drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
          }
        }
    }
  }
  else if (selectBox.value === 'pentagonFourVertices') {
    for(let i=0; i < pentagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
          if (selectThemes.value === 'tetradiac'){
            drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor[j%2], themes[useTheme].secondaryColor, '#4D0900');
          }
          else {
            drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
          }


        }
    }
  }
  else if (selectBox.value === 'squareFiveVertices') {
     for(let i=0; i < squareFiveVertices.length; i++){
       if (selectThemes.value === 'tetradiac'){
          drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor[i%4], themes[useTheme].secondaryColor, '#4D0900');
        }
        else {
          drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
        }




     }
  }
}

redraw();
