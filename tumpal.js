// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");
let main_colour = "rgb(235, 210, 140)";
let secondary_colour = "rgb(170, 130, 75)";
let bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
bg_rect.setAttribute("width", "100%");
bg_rect.setAttribute("height", "100%");
bg_rect.setAttribute("fill", secondary_colour);
svg.appendChild(bg_rect);
let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
let container = document.createElementNS("http://www.w3.org/2000/svg", "g");
svg.appendChild(container);


function height(side_length){
  return side_length * Math.sqrt(3) * 0.5;
}

function draw_triangle(g, x, y, rot_deg, w, padding=false) {
  h = height(w);

  group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  group.setAttribute("fill", main_colour);

  // tumpal_outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // tumpal_outline.setAttribute("d", `M ${w/2} 0 L 0 ${-h} ${-w/2} 0 Z`);
  // tumpal_outline.setAttribute("stroke", main_colour);
  // tumpal_outline.setAttribute("fill", "none");

  if (padding === false){
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


function redraw(cX = 200, cY = 200, l = 200, padding = false){
  reset();
  main_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  main_g.setAttribute("transform", `translate(${cX}, ${cY})`);
  
  g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("transform", `translate(${0}, ${height(l/2)}) rotate(${0} 0 ${0}) scale(1 -1)`);
  draw_triangle(g,0, 0, 0, l/2, padding);
  main_g.appendChild(g);
  
  g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("transform", `translate(${0}, ${height(l/2)}) rotate(${60} 0 ${height(l/2)}) scale(1 -1)`);
  draw_triangle(g,0, 0, 0, l/2, padding);
  main_g.appendChild(g);
  
  g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("transform", `translate(${0}, ${height(l/2)}) rotate(${-60} 0 ${height(l/2)}) scale(1 -1)`);
  draw_triangle(g,0, 0, 0, l/2, padding);
  main_g.appendChild(g);
  
  g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("transform", `translate(${0}, ${height(l/2)}) rotate(${0} 0 ${0}) scale(1 1)`);
  draw_triangle(g,0, 0, 0, l/2, padding);
  main_g.appendChild(g);
  
  
  main_g2 = main_g.cloneNode(true);
  main_g2.setAttribute("transform", `translate(${cX}, ${cY}) rotate(60)`);
  main_g3 = main_g.cloneNode(true);
  main_g3.setAttribute("transform", `translate(${cX}, ${cY}) rotate(120)`);
  main_g4 = main_g.cloneNode(true);
  main_g4.setAttribute("transform", `translate(${cX}, ${cY}) rotate(180)`);
  main_g5 = main_g.cloneNode(true);
  main_g5.setAttribute("transform", `translate(${cX}, ${cY}) rotate(240)`);
  main_g6 = main_g.cloneNode(true);
  main_g6.setAttribute("transform", `translate(${cX}, ${cY}) rotate(300)`);
  
  container.appendChild(main_g);
  container.appendChild(main_g2);
  container.appendChild(main_g3);
  container.appendChild(main_g4);
  container.appendChild(main_g5);
  container.appendChild(main_g6);
}






const checkbox = document.getElementById("myCheckbox");





checkbox.addEventListener("click", function() {
    if (this.checked) {
      redraw(200,200,200, true);
    } else {
      redraw(200,200,200, false);
    }
  });


redraw(200,200,200, false);



