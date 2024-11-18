
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
  let container = document.createElementNS(svgURI, "g");
  container.setAttribute("transform", `translate(${cX}, ${cY})`);




  if (selectBox.value === 'sq_pentagonFourVertices'){
    for(let i=0; i < selectThreshold.value; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(sq_pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
        }
    }
  }
  else if (selectBox.value === 'sq_squareFiveVertices') {
    for(let i=0; i < selectThreshold.value; i++){
        drawArbitraryKawung(sq_squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
    }
  }

  border = document.createElementNS(svgURI, "path");
  border.setAttribute("d", `M ${-0.5 * svg.getAttribute("width")} ${-0.4 * svg.getAttribute("height") } L${-0.5 * svg.getAttribute("width")} ${-0.5 * svg.getAttribute("height")} L${-0.4 * svg.getAttribute("width")} ${-0.5 * svg.getAttribute("height")}  Z     `);
  border.setAttribute("fill", themes[useTheme].secondaryColor);

  border_stripe = document.createElementNS(svgURI, "path");
  border_stripe.setAttribute("d", `M ${-0.5 * svg.getAttribute("width")} ${-0.42 * svg.getAttribute("height") }  L${-0.42 * svg.getAttribute("width")} ${-0.5 * svg.getAttribute("height")} L${-0.45 * svg.getAttribute("width")} ${-0.5 * svg.getAttribute("height")}  L${-0.5 * svg.getAttribute("width")} ${-0.45 * svg.getAttribute("height")}   Z     `);
  border_stripe.setAttribute("fill", themes[useTheme].mainColor);

  svg.appendChild(container);
  // container.appendChild(border);
  // container.appendChild(border_stripe);

  for (let i= 0; i< 10; i++){
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", -0.5 * svg.getAttribute("width") + i * svg.getAttribute("width") / 10);       // X position
    rect.setAttribute("y", -0.5 * svg.getAttribute("height"));       // Y position
    rect.setAttribute("width", svg.getAttribute("width") / 10);  // Width of the rectangle
    rect.setAttribute("height", svg.getAttribute("width") / 40); // Height of the rectangle
    rect.setAttribute("fill", themes[useTheme].mainColor); // Fill color
    rect.setAttribute("stroke", themes[useTheme].strokeColor); // Border color
    rect.setAttribute("stroke-width", 2); // Border thickness
    container.appendChild(rect);

  }

  container2 = container.cloneNode(true);
  container2.setAttribute("transform", `translate(${cX}, ${cY}) rotate(90)`)
  svg.appendChild(container2);

  container3 = container.cloneNode(true);
  container3.setAttribute("transform", `translate(${cX}, ${cY}) rotate(180)`)
  svg.appendChild(container3);

  container4 = container.cloneNode(true);
  container4.setAttribute("transform", `translate(${cX}, ${cY}) rotate(270)`)
  svg.appendChild(container4);

}

redraw();
