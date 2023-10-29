// https://codegolf.stackexchange.com/questions/55848/plot-a-hyperbolic-plane-tessellation

const selectBox = document.getElementById('tesselation_type');
// Add an event listener to the select input

selectBox.addEventListener('change', function() {
  // Retrieve the selected value
  const selectedValue = selectBox.value;
  // Display the selected value
  redraw();
});

// const selectThemes = document.getElementById('themes');

// // Add an event listener to the select input
// selectThemes.addEventListener('change', function() {

// if (selectThemes.value === 'old_java'){
//   main_colour =  "#e4d5b7";
//   secondary_colour = "#493118";
//   stroke_colour = "brown";
//   stroke_width = 0.5;
// }
// else if (selectThemes.value === 'nusantara_blend'){
//   main_colour = '#F7F0F5';
//   secondary_colour =  '#333';
//   stroke_colour = "none";
//   stroke_width = 0;
// }
        
// // Display the selected value
//             redraw();
// });


// redraw();

function redraw(){
  setup(400, 400, themes["oldJava"].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  if (selectBox.value === 'hexagonFourVertices'){
    for(let i=0; i < hexagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX, 90 * j, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
        }
    }
  }
  else if (selectBox.value === 'pentagonFourVertices') {
    for(let i=0; i < pentagonFourVertices.length; i++){
        for (let j=0; j < 4; j++){
        drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
        }
    }
  }
  else if (selectBox.value === 'squareFiveVertices') {
     for(let i=0; i < squareFiveVertices.length; i++){
       drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
     }
  }
}

