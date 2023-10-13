// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// const main_colour = "rgb(235, 210, 140)";
// const secondary_colour = "rgb(170, 130, 75)";
// Old Java
let main_colour =  "#e4d5b7";
let secondary_colour = "#493118";
let stroke_colour = "brown";
let stroke_width = 0.5;

svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
if (screenWidth >=  400){
  svg.setAttribute("width", 400);
  svg.setAttribute("height", 400);
}
else {
  svg.setAttribute("width", screenWidth * (screenWidth/ 400));
  svg.setAttribute("height", screenWidth * (screenWidth/ 400));
}
bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
bg_rect.setAttribute("width", "100%");
bg_rect.setAttribute("height", "100%");
bg_rect.setAttribute("fill", secondary_colour);
svg.appendChild(bg_rect);


function height(side_length){
  return side_length * Math.sqrt(3) * 0.5;
}

function draw_triangle(g, x, y, rot_deg, w, padding=false) {
  h = height(w);

  group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  group.setAttribute("fill", main_colour);

  tumpal_outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
  tumpal_outline.setAttribute("d", `M ${w/2} 0 L 0 ${-h} ${-w/2} 0 Z`);
  tumpal_outline.setAttribute("stroke", main_colour);
  tumpal_outline.setAttribute("fill", "none");

  if (selectPadding.value  !== "padding"){
  //Draw Tumpal
    tumpal_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tumpal_1.setAttribute("d", `M0 0 C${0.158*w} 0 ${0.158*w} ${-0.211*w} ${0.316*w} ${-0.211*w} A${0.105*w} ${0.105*w} 0 0 1 ${0.316*w} 0 A${0.052*w} ${0.052*w} 0 0 1 ${0.316*w} ${-0.105*w} C${0.211*w} ${-0.105 *w}  ${0.211*w} 0 ${0.105 *w}  0 Z`);
    tumpal_2 = tumpal_1.cloneNode(true);
    tumpal_2.setAttribute("transform", `scale(-1,1)`);
    tumpal_3 = tumpal_1.cloneNode(true);
    tumpal_3.setAttribute("transform", `rotate(-90)`);
    tumpal_4 = tumpal_1.cloneNode(true);
    tumpal_4.setAttribute("transform", `scale(-1,1) rotate(-90)`);
    tumpal_5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tumpal_5.setAttribute("d", `M ${0.079*w} ${-0.079*w} A${0.039*w} ${0.039*w} 0 0 0 0 ${-0.079*w} A${0.079*w} ${0.079*w} 0 0 0 ${0.158*w} ${-0.079*w} C${0.158*w} ${-0.261*w} 0 ${-0.261*w}  0 ${-0.444*w} L0 ${-0.395*w} C0 ${-0.246 * w} ${0.079*w} ${-0.246 * w}  ${0.079*w} ${-0.079*w}`);
    tumpal_5.setAttribute("transform", `translate(0, ${-0.422*w})`);
    tumpal_6 = tumpal_5.cloneNode(true);
    tumpal_6.setAttribute("transform", `scale(-1,1) translate(0, ${-0.422*w})`);
  }

  else {
    tumpal_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tumpal_1.setAttribute("d", `M ${0.013*w} ${-0.013*w} C${0.158*w} 0 ${0.158*w} ${-0.197*w} ${0.316*w} ${-0.197*w} A${0.092*w} ${0.092*w} 0 0 1 ${0.316*w} ${-0.013*w} A${0.046*w} ${0.046*w} 0 0 1 ${0.316*w} ${-0.105*w} C${0.211*w} ${-0.105*w}  ${0.211*w} ${-0.013*w} ${0.105*w}  ${-0.013*w} Z`);
    tumpal_2 = tumpal_1.cloneNode(true);
    tumpal_2.setAttribute("transform", `scale(-1,1)`);
    tumpal_3 = tumpal_1.cloneNode(true);
    tumpal_3.setAttribute("transform", `rotate(-90)`);
    tumpal_4 = tumpal_1.cloneNode(true);
    tumpal_4.setAttribute("transform", `scale(-1,1) rotate(-90)`);    

    // d="M 30 -30 A14 14 0 0 0 2 -30 A28 28 0 0 0 58 -30 C60 -99.2075 0 -99.2075  2 -166.415 L2 -150 C0 -93.20 30 -93.20  30 -30"
    tumpal_5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tumpal_5.setAttribute("d", `M ${0.079*w} ${-0.079*w} A${0.037*w} ${0.037*w} 0 0 0 ${0.005*w} ${-0.079*w} A${0.074*w} ${0.074*w} 0 0 0 ${0.153*w} ${-0.079*w} C${0.158*w} ${-0.261*w} 0 ${-0.261*w}  ${0.005*w} ${-0.439*w} L${0.005*w} ${-0.395*w} C0 ${-0.246*w} ${0.079*w} ${-0.246*w}  ${0.079*w} ${-0.079*w}`);
    tumpal_5.setAttribute("transform", `translate(0, ${-0.422*w})`);
    tumpal_6 = tumpal_5.cloneNode(true);
    tumpal_6.setAttribute("transform", `scale(-1,1) translate(0, ${-0.422*w})`);
  }

  // group.appendChild(tumpal_outline);
  group.appendChild(tumpal_1);
  group.appendChild(tumpal_2);
  group.appendChild(tumpal_3);
  group.appendChild(tumpal_4);
  group.appendChild(tumpal_5);
  group.appendChild(tumpal_6);
  g.appendChild(group);
}



// g = document.createElementNS("http://www.w3.org/2000/svg", "g");
// g.setAttribute("transform", `translate(${200}, ${200 + height(150)}) rotate(${0})`)
// draw_triangle(g,0, 0, 0, 150, false);
// container.appendChild(g);


cX = 200;
cY = 200;
l = 200;


function reset(){
  svg.innerHTML = '';
  let bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bg_rect.setAttribute("width", "100%");
  bg_rect.setAttribute("height", "100%");
  bg_rect.setAttribute("fill", secondary_colour);
  svg.appendChild(bg_rect);
  group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(container);
}


function redraw(motive = 'tesselation'){
  reset();


  w = svg.getAttribute("width")/4;
  h = height(w);
  cx = svg.getAttribute("width")/2;
  cy = svg.getAttribute("height")/2;

  if (motive === 'tesselation'){
    for (let i=0; i<6; i++){
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx}, ${cy - h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx}, ${cy - h - 2 *h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx}, ${cy - h + 2 *h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
  
      // Right
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx + 1.5 * w}, ${cy - h + 1 *h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx + 1.5 * w}, ${cy - h + 1 *h - 2 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx + 1.5 * w}, ${cy - h + 1 *h - 4 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx + 1.5 * w}, ${cy - h + 1 *h + 2 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      // Left
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx - 1.5 * w}, ${cy - h + 1 *h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx - 1.5 * w}, ${cy - h + 1 *h - 2 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx - 1.5 * w}, ${cy - h + 1 *h - 4 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx - 1.5 * w}, ${cy - h + 1 *h + 2 * h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);
  
    }
  }

  else {
    for (let i=0; i<6; i++){
      g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${cx}, ${cy - h}) rotate(${i*60} 0 ${h}) scale(1,-1)`);
      draw_triangle(g,  0, 0, 0, w, padding=false);
      container.appendChild(g);  
    }

    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${cx}, ${cy - h - 2 * h}) rotate(${180} 0 ${h}) scale(1,-1)`);
    draw_triangle(g,  0, 0, 0, w, padding=false);
    container.appendChild(g);  

    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${cx - 1.5 * w}, ${cy - h - 2 * h  + 1 * h + 2 * h}) rotate(${60} 0 ${h}) scale(1,-1)`);
    draw_triangle(g,  0, 0, 0, w, padding=false);
    container.appendChild(g);  

    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${cx + 1.5 * w}, ${cy - h - 2 * h  + 1 * h + 2 * h}) rotate(${300} 0 ${h}) scale(1,-1)`);
    draw_triangle(g,  0, 0, 0, w, padding=false);
    container.appendChild(g);  




  }



}


const selectPadding = document.getElementById('paddings');
// Add an event listener to the select input
selectPadding.addEventListener('change', function() {
    redraw(selectBox.value);
});


const selectBox = document.getElementById('motives');
  // Add an event listener to the select input
  selectBox.addEventListener('change', function() {
  // Retrieve the selected value
  const selectedValue = selectBox.value;
          
  // Display the selected value
  redraw(selectedValue);
});

const selectThemes = document.getElementById('themes');

// Add an event listener to the select input
selectThemes.addEventListener('change', function() {

if (selectThemes.value === 'old_java'){
  main_colour =  "#e4d5b7";
  secondary_colour = "#493118";
  stroke_colour = "brown";
  stroke_width = 0.5;
}
else if (selectThemes.value === 'nusantara_blend'){
  main_colour = '#F7F0F5';
  secondary_colour =  '#333';
  stroke_colour = "none";
  stroke_width = 0;
}
        
// Display the selected value
            redraw(selectBox.value);
});


  redraw();


