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


function get_equation(x1, y1, x2, y2){
  // return equation: y = mx + c;
  m = (y2 - y1) / (x2 - x1);
  c = y1 - m * x1;
  return {
    "m": m,
    "c": c
  }
}

function get_constant(x,y, m){
  return (y - m * x);
}

function get_midpoint(x1, y1, x2, y2){
  return {
    "x": (x1 + x2)/2, 
    "y": (y1 + y2)/2
  }
}

function get_distance(x1, y1, x2, y2){
  return Math.sqrt((x2- x1) ** 2  + (y2 - y1) ** 2); }

function get_root(a, b, c){
  return  {
    "x1": (-b + Math.sqrt(b**2 - 4 * a * c))/ (2 *a),
    "x2": (-b - Math.sqrt(b**2 - 4 * a * c))/ (2 *a)
  }
}


function getSideLength(n, r){
  theta = (2* Math.PI) / n;
  x2 = Math.cos(2 * theta) * r;
  x1 = Math.cos(theta) * r;
  y2 = Math.sin(2 * theta) * r;
  y1 = Math.sin(theta) * r;
  return Math.sqrt((x2- x1) ** 2 + (y2 - y1) ** 2);
}

function getRadius(side_length, n){
  theta = (2* Math.PI) / n;
  a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
  b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
  return side_length / Math.sqrt(a + b);
}


function midpoint(x1, x2){
  return (x1+x2) /2 ;
}


function draw_polygon(n, x,y, r, rot_deg){
  vertices = [];
  let deg =  2 * Math.PI / n;
  group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  container.appendChild(group);


  // Input all 12 vertices
  for (let i = 0; i< n; i++){
    if (checkbox.checked === false) {
      x = Math.cos(deg * (i+1) ) * r;
      y = Math.sin(deg * (i+1)) * r;
      vertices.push([x,y]);
    }

    else if (checkbox.checked === true) {
      x = Math.cos(deg * (i+1) ) * 0.92 * r;
      y = Math.sin(deg * (i+1)) * 0.92   * r;
      vertices.push([x,y]);
    }

  }


  for (let j = 0; j < n; j++) {
    new_x = midpoint(vertices[0][0],vertices[1][0]);
    new_y = midpoint(vertices[0][1], vertices[1][1]);
    ind = vertices.length - 1;
    new_x2 = midpoint(vertices[0][0],vertices[ind][0]);
    new_y2 = midpoint(vertices[0][1], vertices[ind][1]);

    // Quadratic Bezier Curve
    kawung_part = document.createElementNS("http://www.w3.org/2000/svg", "path");
    kawung_part.setAttribute('transform', `rotate(${ j * 360 / n})`)
    kawung_part.setAttribute("d", `M0 0 Q${new_x2} ${new_y2} ${vertices[0][0]} ${vertices[0][1]} Q${new_x} ${new_y} ${0} ${0}Z`);
    kawung_part.setAttribute("fill", main_colour);
    // kawung_part.setAttribute("stroke", 'black');

    // Isen Circle
    isen_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_circle.setAttribute("cx", vertices[j][0] * 0.75);
    isen_circle.setAttribute("cy", vertices[j][1] * 0.75);
    isen_circle.setAttribute("r", r / 20);
    isen_circle.setAttribute("fill", secondary_colour);

    group.appendChild(kawung_part);
    group.appendChild(isen_circle);



    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.quadraticCurveTo(new_x2, new_y2 , vertices[0][0], vertices[0][1]);
    // ctx.quadraticCurveTo(new_x, new_y , 0, 0);
    // ctx.stroke();
    // ctx.fill();

  // ctx.fillStyle = "#dac292";

  // ctx.beginPath();
  // ctx.moveTo(Math.cos(deg) * 0.3 * r,Math.sin(deg) * 0.3 * r);
  // ctx.lineTo(Math.cos(deg) * 0.6 * r,Math.sin(deg) * 0.6 * r);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.arc(Math.cos(deg) * 0.8 * r,Math.sin(deg) * 0.8 * r, 0.04 * r, 0, 2 * Math.PI);
  // ctx.stroke();
  // ctx.fill();


  // ctx.beginPath();
  // ctx.arc(Math.cos(deg) * 0.7 * r,Math.sin(deg) * 0.7 * r, 0.03 * r, 0, 2 * Math.PI);
  // ctx.stroke();
  // ctx.fill();





  // ctx.rotate(2 * Math.PI / n);
  }
}



  function preset_dodecagon_hexagon_square(x,y,r) {
  theta = 2 * Math.PI / 12;
  distance = Math.cos(Math.PI/12) * r;
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`)
  // Dodecagon
  draw_polygon(12, 0, 0, r, 15);
  // Hexagon
  dodecagon_side_length = getSideLength(12, r);
  r_hexagon   = getRadius(dodecagon_side_length, 6);
  distance2 = distance + Math.sin(2 * Math.PI / 6) * r_hexagon;
  draw_polygon(6, 0, - distance2, r_hexagon, 0 );
  draw_polygon(6, distance2 * Math.cos(Math.PI /6 - Math.PI / 3), distance2 * Math.sin(Math.PI /6 - Math.PI / 3), r_hexagon, 0 );
  draw_polygon(6, distance2 * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 3 * Math.PI / 3), r_hexagon, 0 );
  draw_polygon(6, distance2 * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 4 * Math.PI / 3), r_hexagon, 0 );
  draw_polygon(6, distance2 * Math.cos(Math.PI /6 - 5 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 5 * Math.PI / 3), r_hexagon, 0 );
  draw_polygon(6, distance2 * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 6 * Math.PI / 3), r_hexagon, 0 );

  // Square
  r_square   = getRadius(dodecagon_side_length, 4);
  distance3 = distance + Math.cos(2 * Math.PI / 8) * r_square;
  draw_polygon(4, - distance3, 0, r_square, 45 );
  draw_polygon(4, distance3 * Math.cos(Math.PI /3 - 3 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 3 * Math.PI / 3), r_square, 15 );
  draw_polygon(4, distance3 * Math.cos(Math.PI /3 - 5 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 5 * Math.PI / 3), r_square, -15);
  draw_polygon(4, distance3 * Math.cos(Math.PI /3 - 6 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 6 * Math.PI / 3), r_square, 15 );
  draw_polygon(4, distance3 * Math.cos(Math.PI /3 - 7 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 7 * Math.PI / 3), r_square, 45 );
  draw_polygon(4, distance3 * Math.cos(Math.PI /3 - 8 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 8 * Math.PI / 3), r_square, 75 );

}


function preset_octagon_square(x,y, r){
  theta = 2 * Math.PI / 8;
  distance = Math.sin(Math.PI/8 + Math.PI/4) * r;
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`)

  draw_polygon(8, 0, 0, r, 22.5);
  draw_polygon(8, 2 * distance, 0, r, 22.5 );
  draw_polygon(8, - 2 * distance, 0, r, 22.5 );
  draw_polygon(8, 0,  - 2 * distance, r, 22.5 );
  draw_polygon(8, 0,  2 * distance, r, 22.5 );

  octagon_side_length = getSideLength(8, r);
  r_square = getRadius(octagon_side_length, 4);
  distance2 = r_square * Math.sin(Math.PI/4) + distance;
  draw_polygon(4, distance2 * Math.cos(Math.PI/4), distance2 * Math.sin(Math.PI/4), r_square, 0 );
  draw_polygon(4, distance2 * Math.cos(Math.PI/4 * 3), distance2 * Math.sin(Math.PI/4 * 3), r_square, 0)  ;
  draw_polygon(4, distance2 * Math.cos(Math.PI/4 * 5), distance2 * Math.sin(Math.PI/4 * 5), r_square, 0)  ;
  draw_polygon(4, distance2 * Math.cos(Math.PI/4 * 7), distance2 * Math.sin(Math.PI/4 * 7), r_square, 0)  ;
}


function preset_dodecagon_triangle(x,y, r){
  theta = 2 * Math.PI / 12;
  distance = Math.cos(Math.PI/12) * r;
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_polygon(12, 0, 0, r, 15);
  draw_polygon(12, - 2 * distance , 0, r, 15);
  draw_polygon(12, 2 * distance, 0, r, 15 );
  draw_polygon(12, - distance,  - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r, 15 );
  draw_polygon(12, - distance,   distance + Math.sin(45 * 2 * Math.PI / 360) * r, r, 15 );
  draw_polygon(12,  distance,  - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r, 15 );
  draw_polygon(12,  distance,   distance + Math.sin(45 * 2 * Math.PI / 360) * r, r, 15 );

  dodecagon_side_length = getSideLength(12, r);
  r_triangle   = getRadius(dodecagon_side_length, 3);
  distance2 = r_triangle   * Math.sin(30 * 2 * Math.PI/360) + distance;
  draw_polygon(3, 0, distance2, r_triangle, - 30 );
  draw_polygon(3, distance2 * Math.cos(Math.PI /6), distance2 * Math.sin(Math.PI /6), r_triangle, 30 );
  draw_polygon(3, distance2 * Math.cos(Math.PI /6 - Math.PI / 3), distance2 * Math.sin(Math.PI /6 - Math.PI/3), r_triangle, -30 );
  draw_polygon(3, distance2 * Math.cos(Math.PI /6 - 2 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 2 *Math.PI/3), r_triangle, 30 );
  draw_polygon(3, distance2 * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 3 *Math.PI/3), r_triangle, - 30 );
  draw_polygon(3, distance2 * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 4 *Math.PI/3), r_triangle,  30 );

}


function preset_hexagonal_multiple_triangle(x,y,r) {
  theta = 2 * Math.PI / 6;
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);
  // Hexagonal
  draw_polygon(6, 0, 0, r, 0);
  // Triangle
  hexagon_side_length = getSideLength(6, r);
  r_triangle   = getRadius(hexagon_side_length, 3);
  distance = Math.sin(2 * Math.PI / 6) * r + Math.sin(30 * 2 * Math.PI / 360) * r_triangle;
  draw_polygon(3, 0, - distance, r_triangle, 30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 3 * Math.PI / 3), r_triangle, -30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 4 * Math.PI / 3), r_triangle, 30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 5 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 5 * Math.PI / 3), r_triangle, 90 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 6 * Math.PI / 3), r_triangle, 150);
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3), r_triangle, 210);

  //
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance, r_triangle, 30);
  draw_polygon(3, 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance - r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -30 );
  draw_polygon(3, - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance - r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), - distance, r_triangle, 30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance, r_triangle, - 30 );
  draw_polygon(3, 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance +  r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance, r_triangle, -30 );
  draw_polygon(3, - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance +  r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 30 );

  //
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 30 );
  draw_polygon(3, - (distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3)), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 30 );
  draw_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - (distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360)), r_triangle, - 30 );
  draw_polygon(3, - (distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3)), - (distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360)), r_triangle, - 30 );

}


function preset_square_triangle(x,y,r){

  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_polygon(4, 0, 0, r, 45);
  draw_polygon(4, 2 * Math.cos(Math.PI/4) * r, 0, r, 45);
  draw_polygon(4, - 2 * Math.cos(Math.PI/4) * r, 0, r, 45);


  // Triangle
  square_side_length = getSideLength(4, r);
  r_triangle   = getRadius(square_side_length, 3);
  distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
  draw_polygon(3, 0, - distance, r_triangle, 30 );
  draw_polygon(3, - 2 * Math.cos(Math.PI/4) * r, - distance, r_triangle, 30);
  draw_polygon(3, 2 * Math.cos(Math.PI/4) * r, - distance, r_triangle, 30);
  draw_polygon(3, 1 * Math.cos(Math.PI/4) * r, - distance - Math.sin(Math.PI/6) *r_triangle, r_triangle, - 30 );
  draw_polygon(3, - 1 * Math.cos(Math.PI/4) * r, - distance - Math.sin(Math.PI/6) *r_triangle, r_triangle, - 30 );



  draw_polygon(3, 0,  distance, r_triangle, - 30 );
  draw_polygon(3, - 2 * Math.cos(Math.PI/4) * r,  distance, r_triangle, - 30 );
  draw_polygon(3, 2 * Math.cos(Math.PI/4) * r,  distance, r_triangle, - 30 );

  draw_polygon(3, - 1 * Math.cos(Math.PI/4) * r, distance + Math.sin(Math.PI/6) *r_triangle, r_triangle, 30 );
  draw_polygon(3,  Math.cos(Math.PI/4) * r, distance + Math.sin(Math.PI/6) *r_triangle, r_triangle, 30 );


}


function preset_square_triangle_complex(x,y,r){
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_polygon(4, 0, 0, r, 45 );


  // Triangle
  square_side_length = getSideLength(4, r);
  r_triangle   = getRadius(square_side_length, 3);
  distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
  draw_polygon(3, 0, - distance, r_triangle, 30 );
  draw_polygon(3, distance, 0, r_triangle, 120 );
  draw_polygon(3, - distance, 0, r_triangle, -60 );
  draw_polygon(3, 0, distance, r_triangle, -30 );

  draw_polygon(4, - Math.cos(15 * 2 *Math.PI/360 ) * r, - Math.sin(Math.PI/4) * r  - Math.sin(75*2 * Math.PI/360) * r , r, - 15 );
  draw_polygon(4,  Math.sin(Math.PI/4) * r  + Math.sin(75*2 * Math.PI/360) * r, - Math.cos(15  * 2 *Math.PI/360 ) * r  , r, - 15 );
  draw_polygon(4,   Math.cos(15  * 2 *Math.PI/360 ) * r  , Math.sin(Math.PI/4) * r  + Math.sin(75*2 * Math.PI/360) * r, r, - 15 );
  draw_polygon(4,  -Math.sin(Math.PI/4) * r  - Math.sin(75*2 * Math.PI/360) * r,  Math.cos(15  * 2 *Math.PI/360 ) * r  , r, - 15 );


  draw_polygon(3, Math.cos(Math.PI/4) * r, - (Math.sin(Math.PI/4) * r +  r_triangle), r_triangle, -30 );
  draw_polygon(3, (Math.sin(Math.PI/4) * r +  r_triangle), Math.cos(Math.PI/4) * r, r_triangle, 60 );
  draw_polygon(3, -(Math.sin(Math.PI/4) * r +  r_triangle), - Math.cos(Math.PI/4) * r, r_triangle, 0 );
  draw_polygon(3, - Math.cos(Math.PI/4) * r, (Math.sin(Math.PI/4) * r +  r_triangle),  r_triangle, 30 );


}


function preset_hexagon_square_triangle(x,y,r){
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);
  draw_polygon(6, 0, 0, r, 30);


  // Square
  hexagon_side_length = getSideLength(6, r);
  r_square   = getRadius(hexagon_side_length, 4);
  distance =  Math.cos(Math.PI/6) * r + Math.cos(Math.PI /4) * r_square ;
  draw_polygon(4, distance, 0, r_square, 45);
  draw_polygon(4, Math.cos(Math.PI /3) * distance , Math.sin(Math.PI/3) * distance , r_square, 15);
  draw_polygon(4, Math.cos(Math.PI /3 * 2) * distance , Math.sin(Math.PI/3 * 2) * distance , r_square, 75  );
  draw_polygon(4, Math.cos(Math.PI /3 * 3) * distance , Math.sin(Math.PI/3 * 3) * distance , r_square, 135 );
  draw_polygon(4, Math.cos(Math.PI /3 * 4) * distance , Math.sin(Math.PI/3 * 4) * distance , r_square, 195 );
  draw_polygon(4, Math.cos(Math.PI /3 * 5) * distance , Math.sin(Math.PI/3 * 5) * distance , r_square, 255 );

  // Triangle
  square_side_length = getSideLength(4, r_square);
  r_triangle     = getRadius(square_side_length, 3);
  draw_polygon(3, distance, -(Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 30   );
  draw_polygon(3, distance, (Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, -30   );
  draw_polygon(3, - distance, -(Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 30 );
  draw_polygon(3, - distance, (Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, -30 );
  draw_polygon(3, 0,  r + r_triangle, r_triangle,     30 );
  draw_polygon(3, 0, - (r + r_triangle), r_triangle, -30 );

}



function preset_hexagonal_triangle(x, y, r){
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);
  draw_polygon(6, - 2 * r, 0, r, 0);
  draw_polygon(6, 0, 0, r, 0 );
  draw_polygon(6, 2 * r, 0, r, 0 );

  theta = 360 / 6 * 2 * Math.PI / 360;
  x = 2 * Math.cos(theta) * r; 
  y = 2 * Math.sin(theta) * r;

  draw_polygon(6, - x, - y, r, 0);
  draw_polygon(6, - x + 2 * r, - y, r, 0);

  draw_polygon(6, - x, y, r, 0 );
  draw_polygon(6, - x + 2 * r, y, r, 0);

  // calculate r for triangle 
  hexagonal_side_length = getSideLength(6, r);
  r_triangle = getRadius(hexagonal_side_length, 3);
  distance = Math.abs(Math.sin(2 * Math.PI / 6) * r) + Math.abs(Math.sin(30 *  2 * Math.PI / 360) * r_triangle);
  draw_polygon(3, 0, - distance, r_triangle, 30);
  draw_polygon(3, distance * Math.cos(Math.PI/ 3 - Math.PI /2), distance * Math.sin(Math.PI /3 - Math.PI/2), r_triangle, - 30 );
  draw_polygon(3, distance * Math.cos(2 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(2 * Math.PI /3 - Math.PI/2), r_triangle, 30 );
  draw_polygon(3, 0, distance, r_triangle, -30 );
  draw_polygon(3, distance * Math.cos(4 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(4 * Math.PI /3 - Math.PI/2), r_triangle, 30);
  draw_polygon(3, distance * Math.cos(5 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(5 * Math.PI /3 - Math.PI/2), r_triangle, - 30);
}


function reset(){
  svg.innerHTML = '';
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(container);
}


function redraw(selectedSet){
  reset();
  if (selectedSet === 'DHS'){
    preset_dodecagon_hexagon_square(200,200,80);
  }
  else if (selectedSet === 'OS'){
    preset_octagon_square(200, 200, 55);
  }

  else if (selectedSet === 'DT'){
    preset_dodecagon_triangle(200,200,55)
  }

  else if (selectedSet === 'HMT'){
    preset_hexagonal_multiple_triangle(200,200,65)
  }

  else if (selectedSet === 'ST'){
    preset_square_triangle(200,200, 60);
  }

  else if (selectedSet === 'STC'){
    preset_square_triangle_complex(200,200,60);
  }
  else if (selectedSet === 'HST'){
    preset_hexagon_square_triangle(200,200,65);
  }
  else if (selectedSet === 'HT'){
    preset_hexagonal_triangle(200,200,50);
  }

}



let btns = document.querySelectorAll('.btn');
const checkbox = document.getElementById("myCheckbox");


const onSetBtnClick = (e) => {
  document.querySelector('.btn.is-selected').classList.remove('is-selected');

  let btn =  e.target;

  btn.classList.add('is-selected');
  selectedSet = btn.getAttribute('data-set');

  redraw(selectedSet);

  


}


for (let btn of btns) {
  btn.addEventListener('click', onSetBtnClick);
}




checkbox.addEventListener("click", function() {
    if (this.checked) {
      redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));
    } else {
      redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));
    }
  });


redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));



