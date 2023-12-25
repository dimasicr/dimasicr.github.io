useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectThemes = document.getElementById('themes');
const selectSharpness = document.getElementById('recursion_threshold');






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


  // for (let i = -2; i <3; i++){
  //   for (let j = -2; j<3; j++){
  //     drawKawung(0 + i * 3 * w/7, 0 + j * 3 * w/7, w/14, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor ,'cecek', 'rect_diamond', false);
  //     drawFlower(1.5 * w/7 + i * 3 * w/ 7 , -1.5 * w/7 + j * 3 * w/ 7,3.5, 0.1 * w , themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
  //   }
  // }



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