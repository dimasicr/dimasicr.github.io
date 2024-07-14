// https://codegolf.stackexchange.com/questions/55848/plot-a-hyperbolic-plane-tessellation

const selectThemes = document.getElementById('themes');
const selectBox = document.getElementById('motives');

useTheme = selectThemes.value;

selectBox.addEventListener('change', function() {
  redraw();
});


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
  setup(400, 400, "none");
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  circle = document.createElementNS(svgURI, "circle");
  circle.setAttribute("cx", cX);
  circle.setAttribute("cy", cY);
  circle.setAttribute("r", svg.getAttribute("width")/2);
  circle.setAttribute("fill", themes[useTheme].secondaryColor);
  svg.appendChild(circle);
  
  if (selectBox.value === 'hexagonFourVertices'){
    for(let i=0; i < hexagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
          if (selectThemes.value === 'tetradiac'){
            drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor[i%4], themes[useTheme].secondaryColor, '#4D0900');
          }
          else {
            drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
            for (k=0; k < hexagonFourVertices[i].length; k++){
              if (k===0){
                sentence = `M ${hexagonFourVertices[i][k][0]} ${ hexagonFourVertices[i][k][1]}`;
              }
              else {
                sentence += `L ${ hexagonFourVertices[i][k][0]} ${hexagonFourVertices[i][k][1]}`;
              }
            }
              p = document.createElementNS(svgURI, "path");
              p.setAttribute("d", sentence);
              p.setAttribute("fill", "none");
              p.setAttribute("stroke", themes[useTheme].strokeColor);
              p.setAttribute('stroke-width', 0.05);
              p.setAttribute("transform", `translate(${cX} , ${cY}) rotate(${j * 90})`);
              svg.appendChild(p);       
          
          
          }
        }
    }
    p = document.createElementNS(svgURI, "path");
    p.setAttribute("d", sentence);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", themes[useTheme].strokeColor);
    p.setAttribute('stroke-width', 0.05);
    p.setAttribute("transform", `translate(${cX} , ${cY})`);
    svg.appendChild(p);
  }
  else if (selectBox.value === 'pentagonFourVertices') {
    for(let i=0; i < pentagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
          if (selectThemes.value === 'tetradiac'){
            drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor[j%2], themes[useTheme].secondaryColor, '#4D0900');
          }
          else {
            drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].isenColor, themes[useTheme].strokeColor);
            for (k=0; k < pentagonFourVertices[i].length; k++){
              if (k===0){
                sentence = `M ${pentagonFourVertices[i][k][0]} ${ pentagonFourVertices[i][k][1]}`;
              }
              else {
                sentence += `L ${ pentagonFourVertices[i][k][0]} ${pentagonFourVertices[i][k][1]}`;
              }
            }
              p = document.createElementNS(svgURI, "path");
              p.setAttribute("d", sentence);
              p.setAttribute("fill", "none");
              p.setAttribute("stroke", themes[useTheme].strokeColor);
              p.setAttribute('stroke-width', 0.05);
              p.setAttribute("transform", `translate(${cX} , ${cY}) rotate(${j * 90})`);
              svg.appendChild(p);
          }
        }
    }
    p = document.createElementNS(svgURI, "path");
    p.setAttribute("d", sentence);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", themes[useTheme].strokeColor);
    p.setAttribute('stroke-width', 0.1);
    p.setAttribute("transform", `translate(${cX} , ${cY})`);
    svg.appendChild(p);
  }
  else if (selectBox.value === 'squareFiveVertices') {
     for(let i=0; i < squareFiveVertices.length; i++){
       if (selectThemes.value === 'tetradiac'){
          drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor[i%4], themes[useTheme].isenColor, '#4D0900');
        }
        else {
          for (k=0; k < squareFiveVertices[i].length; k++){
              if (k===0){
                sentence = `M ${squareFiveVertices[i][k][0]} ${ squareFiveVertices[i][k][1]}`;
              }
              else {
                sentence += `L ${ squareFiveVertices[i][k][0]} ${squareFiveVertices[i][k][1]}`;
              }
            }
              p = document.createElementNS(svgURI, "path");
              p.setAttribute("d", sentence);
              p.setAttribute("fill", "none");
              p.setAttribute("stroke", themes[useTheme].strokeColor);
              p.setAttribute('stroke-width', 0.3);
              p.setAttribute("transform", `translate(${cX} , ${cY})`);
              svg.appendChild(p);
          drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor, themes[useTheme].isenColor, themes[useTheme].strokeColor);
        }
     }
  p = document.createElementNS(svgURI, "path");
  p.setAttribute("d", sentence);
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", themes[useTheme].tertiaryColor);
  p.setAttribute('stroke-width', 0.05);
  p.setAttribute("transform", `translate(${cX} , ${cY})`);
  svg.appendChild(p);
  }
   n = 100;
 r = cY;
 for (let i =0; i <n; i++){
  x1 = Math.cos(2 * Math.PI/n * i) * r;
  y1 = Math.sin(2 * Math.PI/n * i) * r;
  x2 = Math.cos(2 * Math.PI/n * (i+1)) * r;
  y2 = Math.sin(2 * Math.PI/n * (i+1)) * r;
  x3 = Math.cos(2 * Math.PI/n * (i+1)) * 0.97 * r;
  y3 = Math.sin(2 * Math.PI/n * (i+1)) * 0.97 * r;
  x4 = Math.cos(2 * Math.PI/n * i) * 0.97 * r;
  y4 = Math.sin(2 * Math.PI/n * i) * 0.97 * r;

  p = document.createElementNS(svgURI, "path");
  p.setAttribute("d", `M ${cX + x1} ${cY + y1} L${cX + x2} ${cY + y2}  ${cX + x3} ${cY + y3} ${cX + x4} ${cY + y4} Z`);
  p.setAttribute("fill", themes[useTheme].mainColor);
  p.setAttribute("stroke", themes[useTheme].secondaryColor);
  svg.appendChild(p);
}
}

redraw();
