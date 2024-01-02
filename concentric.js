
const selectBox = document.getElementById('tesselation_type');
selectBox.addEventListener('change', function() {
  redraw();
});

const selectThemes = document.getElementById('themes');
selectThemes.addEventListener('change', function() {
  useTheme = selectThemes.value;
  redraw();
});


const selectThreshold = document.getElementById('recursion_threshold');
selectThreshold.addEventListener('change', function() {
  redraw();
});

useTheme = selectThemes.value

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
        if (currentPattern === 'sq_pentagonFourVertices') {
          currentPattern = 'sq_squareFiveVertices';
          selectBox.value = 'sq_squareFiveVertices';
        } 
        else if (currentPattern === 'sq_squareFiveVertices') {
          currentPattern = 'sq_pentagonFourVertices';
          selectBox.value = 'sq_pentagonFourVertices';
        } 

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'sq_pentagonFourVertices') {
          currentPattern = 'sq_squareFiveVertices';
          selectBox.value = 'sq_squareFiveVertices';
        } 
        else if (currentPattern === 'sq_squareFiveVertices') {
          currentPattern = 'sq_pentagonFourVertices';
          selectBox.value = 'sq_pentagonFourVertices';
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
  if (selectBox.value === 'sq_pentagonFourVertices'){
    for(let i=0; i < selectThreshold.value; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(sq_pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
        }
    }
  }
  else if (selectBox.value === 'sq_squareFiveVertices') {
    for(let i=0; i < selectThreshold.value; i++){
        drawArbitraryKawung(sq_squareFiveVertices[i], cX, cY, cX,0, themes["batavia"].mainColor, themes["batavia"].secondaryColor, 'black');
    }
  }
}

redraw();
