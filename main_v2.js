useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectPadding = document.getElementById('paddings');
const selectThemes = document.getElementById('themes');
const selectThreshold = document.getElementById('recursion_threshold');


function redraw(){
  setup(400, 400, themes[selectThemes.value].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  drawApollonianKawung(cX ,cY, 0.93 * cY, selectBox.value, selectThemes.value,themes[selectThemes.value].mainColor,themes[selectThemes.value].secondaryColor,themes[selectThemes.value].strokeColor, 'cecek', 'rect_diamond', selectPadding.value !== 'false');
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


