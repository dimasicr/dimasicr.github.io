useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectPadding = document.getElementById('paddings');
const selectThemes = document.getElementById('themes');
const selectThreshold = document.getElementById('recursion_threshold');

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
        console.log("Swiped right!");
        if (currentPattern === 'symmetric') {
          currentPattern = 'triplet';
          selectBox.value = 'triplet';
        } 
        else if (currentPattern === 'triplet') {
          currentPattern = 'asymmetric';
          selectBox.value = 'asymmetric';
        } 
        else if (currentPattern === 'asymmetric') {
          currentPattern = 'symmetric';
          selectBox.value = 'symmetric';
        }

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        console.log("Swiped left!");
        if (currentPattern === 'symmetric') {
          currentPattern = 'asymmetric';
          selectBox.value = 'asymmetric';
        } 
        else if (currentPattern === 'asymmetric') {
          currentPattern = 'triplet';
          selectBox.value = 'triplet';
        } 
        else if (currentPattern === 'triplet') {
          currentPattern = 'symmetric';
          selectBox.value = 'symmetric';
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
  drawApollonianTumpal(cX ,cY, 0.93 * cY, selectBox.value, selectThemes.value,themes[selectThemes.value].mainColor,themes[selectThemes.value].secondaryColor,themes[selectThemes.value].strokeColor, 'cecek', 'rect_diamond', selectPadding.value !== 'false');
}



// Add an event listener to the select input
selectBox.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectPadding.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectThreshold.addEventListener('change', function() {
  redraw();
});


// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
  redraw();
});

redraw();
