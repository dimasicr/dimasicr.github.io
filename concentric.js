useTheme = 'batavia';

const selectBox = document.getElementById('tesselation_type');
selectBox.addEventListener('change', function() {
  redraw();
});

const selectThemes = document.getElementById('themes');
selectThemes.addEventListener('change', function() {
  useTheme = selectThemes.value;
  redraw();
});



function redraw(){
  setup(400, 400, themes[useTheme].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  if (selectBox.value === 'sq_pentagonFourVertices'){
    for(let i=0; i < sq_pentagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(sq_pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
        }
    }
  }
  else if (selectBox.value === 'sq_squareFiveVertices') {
    for(let i=0; i < sq_squareFiveVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(sq_squareFiveVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, themes[useTheme].strokeColor);
        }
    }
  }
}

redraw();
