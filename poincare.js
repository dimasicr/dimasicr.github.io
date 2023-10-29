// https://codegolf.stackexchange.com/questions/55848/plot-a-hyperbolic-plane-tessellation

useTheme = 'oldJava';

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
  if (selectBox.value === 'hexagonFourVertices'){
    for(let i=0; i < hexagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
        }
    }
  }
  else if (selectBox.value === 'pentagonFourVertices') {
    for(let i=0; i < pentagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
        }
    }
  }
  else if (selectBox.value === 'squareFiveVertices') {
     for(let i=0; i < squareFiveVertices.length; i++){
       drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes[useTheme].mainColor, themes[useTheme].secondaryColor, '#4D0900');
     }
  }
}

redraw();

