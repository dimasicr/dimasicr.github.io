useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectThemes = document.getElementById('themes');
const selectSharpness = document.getElementById('recursion_threshold');



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
        if (currentPattern === '3') {
          currentPattern = '3.5';
          selectBox.value = '3.5';
        } 
        else if (currentPattern === '3.5') {
          currentPattern = '4';
          selectBox.value = '4';
        } 
        else if (currentPattern === '4') {
          currentPattern = '2';
          selectBox.value = '2';
        } 
        else if (currentPattern === '2') {
          currentPattern = '2.5';
          selectBox.value = '2.5';
        }
        else if (currentPattern === '2.5') {
          currentPattern = '3';
          selectBox.value = '3';
        }

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === '4') {
          currentPattern = '3.5';
          selectBox.value = '3.5';
        } 
        else if (currentPattern === '3.5') {
          currentPattern = '3';
          selectBox.value = '3';
        } 
        else if (currentPattern === '3') {
          currentPattern = '2.5';
          selectBox.value = '2.5';
        } 
        else if (currentPattern === '2.5') {
          currentPattern = '2';
          selectBox.value = '2';
        } 
        else if (currentPattern === '2') {
          currentPattern = '4';
          selectBox.value = '4';
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
  h = svg.getAttribute("height");
  w = svg.getAttribute("width");
  container = document.createElementNS(svgURI, "g");
  container.setAttribute("transform", `translate(${w/2}, ${h/2})`);
  svg.appendChild(container);


  line = document.createElementNS(svgURI, "path");
  line.setAttribute("d", `M${0.2 * w} ${0}, L ${0.2 * w} ${h }`);
  line.setAttribute("stroke", themes[selectThemes.value].mainColor);
  line.setAttribute("fill", "none");
  // svg.appendChild(line);


  line = document.createElementNS(svgURI, "path");
  line.setAttribute("d", `M${0.8 * w} ${0}, L ${0.8 * w} ${h }`);
  line.setAttribute("stroke", themes[selectThemes.value].mainColor);
  line.setAttribute("fill", "none");
  // svg.appendChild(line);


  line = document.createElementNS(svgURI, "path");
  line.setAttribute("d", `M${0} ${0.2 * h}, L ${w} ${ 0.2 * h }`);
  line.setAttribute("stroke", themes[selectThemes.value].mainColor);
  line.setAttribute("fill", "none");
  // svg.appendChild(line);


  line = document.createElementNS(svgURI, "path");
  line.setAttribute("d", `M${0} ${0.8 * h}, L ${w} ${ 0.8 * h }`);
  line.setAttribute("stroke", themes[selectThemes.value].mainColor);
  line.setAttribute("fill", "none");
  // svg.appendChild(line);

  prgHeight = 0.15 * h;


  drawParang(-0.5 * w + 0.23 * w, -0.5 * h + 0.1 * h, 0.5 * w - 0.25 * w , -0.5 * h + 0.1 * h, prgHeight, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
  drawParang(-0.5 * w + 0.23 * w, 0.5 * h - 0.1 * h, 0.5 * w - 0.25 * w , 0.5 * h - 0.1 * h, prgHeight, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
  drawKawung(0.1 * w, 0.1 * w, 0.1 * w, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor ,'cecek', 'rect_diamond', false)
  drawKawung(0.9 * w, 0.1 * w, 0.1 * w, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor ,'cecek', 'rect_diamond', false)
  drawKawung(0.1 * w, 0.9 * w, 0.1 * w, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor ,'cecek', 'rect_diamond', false)
  drawKawung(0.9 * w, 0.9 * w, 0.1 * w, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor ,'cecek', 'rect_diamond', false)


  container2 = container.cloneNode(true);
  container2.setAttribute("transform", `translate(${w/2}, ${h/2}) rotate(${90})`);
  svg.appendChild(container2);


  drawFlower(0, 0,selectBox.value, 0.2 * w , selectSharpness.value, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);


}



// Add an event listener to the select input
selectBox.addEventListener('change', function() {
  redraw();
});




// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
  redraw();
});


selectSharpness.addEventListener('change', function() {
  redraw();
});

redraw();
