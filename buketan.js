// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");
container = document.createElementNS("http://www.w3.org/2000/svg", "g");
svg.appendChild(container);
let main_colour = "none"
let secondary_colour = "#a6896b";


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


// function draw_polygon(n, x,y, r, rot_deg){

function draw_flower_polygon(n, x, y, r, rot_deg = 0){
  // Create group and set center of the group and initial rotation degree
  let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  group.setAttribute("fill", `none`);
  container.appendChild(group);

  // Parameters of the flower
  A = 250;  // Parameter of how the big the flower is
  b = 0.3; // Paramter of how wavy the flower petal is
  c = 48; // Parameter of inner radius of the circle
  degree = Math.PI / n; // Degree where it will achieve it peak value 
  r_flower =  A * Math.pow(Math.abs(Math.sin(degree * n/2)), b) - 0.4 * A * Math.pow(Math.abs(Math.sin(degree * n)), b) + c; // r of parametric flower 
  k = r / r_flower; // scaling factor to make sure the radius will be as big as inputted r 

  // OPTIONAL -- Draw Outline of outer circle 
  // outline_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  // outline_circle.setAttribute("cx", 0); // x-coordinate of the center
  // outline_circle.setAttribute("cy", 0); // y-coordinate of the center
  // outline_circle.setAttribute("r", k * r_flower);   // radius
  // outline_circle.setAttribute('stroke', secondary_colour);
  // outline_circle.setAttribute("fill", "none"); // fill color
  // group.appendChild(outline_circle);


  // OPTIONAL -- Draw Outline of polygon
  for(let i = 1; i <= n; i++){
    deg = 0.5 *  2 * Math.PI / n +  i * 2 * Math.PI / n;
    r = k * (A * Math.pow(Math.abs(Math.sin(deg * n/2)), b) - 0.4 * A * Math.pow(Math.abs(Math.sin(deg * n)), b) + c);
    xp = Math.cos(deg) * r;
    yp = Math.sin(deg) * r;
    if (i === 1){
      sentence = `M ${xp} ${yp}`;
    }
    else {
      sentence += `L ${xp} ${yp}`;
    }
  }
  sentence += 'Z';
  outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
  outline.setAttribute("d", sentence);
  outline.setAttribute("stroke", secondary_colour);
  group.appendChild(outline);

  // TODO

  // Draw Outline of the Flowers
  step_degree = degree / 200;

  for(let deg=0; deg <= 2 * Math.PI; deg += step_degree){
    r = k * (A * Math.pow(Math.abs(Math.sin(deg * n/2)), b) - 0.4 * A * Math.pow(Math.abs(Math.sin(deg * n)), b) + c);
    xp = Math.cos(deg) * r;
    yp = Math.sin(deg) * r;
    // Write SVG Command to draw the flowers 
    if (deg === 0){
      sentence = `M ${xp} ${yp}`;
    }
    else {
      sentence += `L${xp} ${yp}`;
    }
  }
  sentence += 'Z';
  flower = document.createElementNS("http://www.w3.org/2000/svg", "path");
  flower.setAttribute("d", sentence);
  flower.setAttribute("stroke", secondary_colour);
  flower.setAttribute("fill", main_colour);
  group.appendChild(flower);


  // Draw Isen Isen of the Flowers
  for(let i=0; i <=n; i++){
    let deg = i * 2 * Math.PI / n + 1 * Math.PI / n;
    r = k * (A * Math.pow(Math.abs(Math.sin(deg * n/2)), b) - 0.4 * A * Math.pow(Math.abs(Math.sin(deg * n)), b) + c);
    xp = Math.cos(deg) * r;
    yp = Math.sin(deg) * r;
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 0.6 * xp); // x-coordinate of the center
    circle.setAttribute("cy", 0.6 * yp); // y-coordinate of the center
    circle.setAttribute("r", k * A / 30);   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", "none"); // fill color
    group.appendChild(circle);
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 0.5 * xp); // x-coordinate of the center
    circle.setAttribute("cy", 0.5 * yp); // y-coordinate of the center
    circle.setAttribute("r", k * A / 40);   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", "none"); // fill color
    group.appendChild(circle);
  }
}


function preset_hexagonal_multiple_triangle(x,y,r) {
  theta = 2 * Math.PI / 6;
  container.setAttribute("transform", `translate(${x}, ${y})`);
  // Hexagonal
  draw_flower_polygon(6, 0, 0, r, 30);
  // Triangle
  hexagon_side_length = getSideLength(6, r);
  r_triangle   = getRadius(hexagon_side_length, 3);
  distance = Math.sin(2 * Math.PI / 6) * r + Math.sin(30 * 2 * Math.PI / 360) * r_triangle;
  draw_flower_polygon(3, 0, - distance, r_triangle, -30 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 3 * Math.PI / 3), r_triangle, 30 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 4 * Math.PI / 3), r_triangle, 90 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 5 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 5 * Math.PI / 3), r_triangle, 150 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 6 * Math.PI / 3), r_triangle, 210);
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3), r_triangle, 270);

  //
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance, r_triangle, -30);
  draw_flower_polygon(3, 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance - r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -90 );
  draw_flower_polygon(3, - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - distance - r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -90 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), - distance, r_triangle, -30 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance, r_triangle, - 90 );
  draw_flower_polygon(3, 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance +  r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -30 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance, r_triangle, -90 );
  draw_flower_polygon(3, - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance +  r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, -30 );

  //
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 90 );
  draw_flower_polygon(3, - (distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3)), distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360), r_triangle, 90 );
  draw_flower_polygon(3, distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3), - (distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360)), r_triangle, 30 );
  draw_flower_polygon(3, - (distance * Math.cos(Math.PI /6 - 7 * Math.PI / 3) - 0.5 * distance * Math.cos(Math.PI /6 - 3 * Math.PI / 3)), - (distance * Math.sin(Math.PI /6 - 7 * Math.PI / 3) + r_triangle * Math.sin(30 * 2 * Math.PI /360)), r_triangle, 30 );

}


function preset_hexagon_square_triangle(x,y,r){
  container.setAttribute("transform", `translate(${x}, ${y})`);
  draw_flower_polygon(6, 0, 0, r, 0);


  // Square
  hexagon_side_length = getSideLength(6, r);
  r_square   = getRadius(hexagon_side_length, 4);
  distance =  Math.cos(Math.PI/6) * r + Math.cos(Math.PI /4) * r_square ;
  draw_flower_polygon(4, distance, 0, r_square, 0);
  draw_flower_polygon(4, Math.cos(Math.PI /3) * distance , Math.sin(Math.PI/3) * distance , r_square, -30);
  draw_flower_polygon(4, Math.cos(Math.PI /3 * 2) * distance , Math.sin(Math.PI/3 * 2) * distance , r_square, 30  );
  draw_flower_polygon(4, Math.cos(Math.PI /3 * 3) * distance , Math.sin(Math.PI/3 * 3) * distance , r_square, 90 );
  draw_flower_polygon(4, Math.cos(Math.PI /3 * 4) * distance , Math.sin(Math.PI/3 * 4) * distance , r_square, 150 );
  draw_flower_polygon(4, Math.cos(Math.PI /3 * 5) * distance , Math.sin(Math.PI/3 * 5) * distance , r_square, 210 );

  // Triangle
  square_side_length = getSideLength(4, r_square);
  r_triangle     = getRadius(square_side_length, 3);
  draw_flower_polygon(3, distance, -(Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 90   );
  draw_flower_polygon(3, distance, (Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 30   );
  draw_flower_polygon(3, - distance, -(Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 90 );
  draw_flower_polygon(3, - distance, (Math.sin(Math.PI/4) * r_square + Math.sin(Math.PI/6) * r_triangle), r_triangle, 30 );
  draw_flower_polygon(3, 0,  r + r_triangle, r_triangle,     90 );
  draw_flower_polygon(3, 0, - (r + r_triangle), r_triangle, 30 );

}

function preset_dodecagon_hexagon_square(x,y,r) {
  theta = 2 * Math.PI / 12;
  distance = Math.cos(Math.PI/12) * r;
  container.setAttribute("transform", `translate(${x}, ${y})`)
  // Dodecagon
  draw_flower_polygon(12, 0, 0, r, 0 );
  // Hexagon
  dodecagon_side_length = getSideLength(12, r);
  r_hexagon   = getRadius(dodecagon_side_length, 6);
  distance2 = distance + Math.sin(2 * Math.PI / 6) * r_hexagon;
  draw_flower_polygon(6, 0, - distance2, r_hexagon, 30 );
  draw_flower_polygon(6, distance2 * Math.cos(Math.PI /6 - Math.PI / 3), distance2 * Math.sin(Math.PI /6 - Math.PI / 3), r_hexagon, 30 );
  draw_flower_polygon(6, distance2 * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 3 * Math.PI / 3), r_hexagon, 30 );
  draw_flower_polygon(6, distance2 * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 4 * Math.PI / 3), r_hexagon, 30 );
  draw_flower_polygon(6, distance2 * Math.cos(Math.PI /6 - 5 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 5 * Math.PI / 3), r_hexagon, 30 );
  draw_flower_polygon(6, distance2 * Math.cos(Math.PI /6 - 6 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 6 * Math.PI / 3), r_hexagon, 30 );

  // Square
  r_square   = getRadius(dodecagon_side_length, 4);
  distance3 = distance + Math.cos(2 * Math.PI / 8) * r_square;
  draw_flower_polygon(4, - distance3, 0, r_square, 0 );
  draw_flower_polygon(4, distance3 * Math.cos(Math.PI /3 - 3 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 3 * Math.PI / 3), r_square, 60 );
  draw_flower_polygon(4, distance3 * Math.cos(Math.PI /3 - 5 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 5 * Math.PI / 3), r_square, 30);
  draw_flower_polygon(4, distance3 * Math.cos(Math.PI /3 - 6 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 6 * Math.PI / 3), r_square, 60 );
  draw_flower_polygon(4, distance3 * Math.cos(Math.PI /3 - 7 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 7 * Math.PI / 3), r_square, 0 );
  draw_flower_polygon(4, distance3 * Math.cos(Math.PI /3 - 8 * Math.PI / 3), distance3 * Math.sin(Math.PI /3 - 8 * Math.PI / 3), r_square, 30 );

}

function preset_octagon_square(x,y, r){
  theta = 2 * Math.PI / 8;
  distance = Math.sin(Math.PI/8 + Math.PI/4) * r;
  container.setAttribute("transform", `translate(${x}, ${y})`)

  draw_flower_polygon(8, 0, 0, r, 0);
  draw_flower_polygon(8, 2 * distance, 0, r, 0 );
  draw_flower_polygon(8, - 2 * distance, 0, r, 0);
  draw_flower_polygon(8, 0,  - 2 * distance, r, 0 );
  draw_flower_polygon(8, 0,  2 * distance, r, 0 );

  octagon_side_length = getSideLength(8, r);
  r_square = getRadius(octagon_side_length, 4);
  distance2 = r_square * Math.sin(Math.PI/4) + distance;
  draw_flower_polygon(4, distance2 * Math.cos(Math.PI/4), distance2 * Math.sin(Math.PI/4), r_square, 45 );
  draw_flower_polygon(4, distance2 * Math.cos(Math.PI/4 * 3), distance2 * Math.sin(Math.PI/4 * 3), r_square, 45)  ;
  draw_flower_polygon(4, distance2 * Math.cos(Math.PI/4 * 5), distance2 * Math.sin(Math.PI/4 * 5), r_square, 45)  ;
  draw_flower_polygon(4, distance2 * Math.cos(Math.PI/4 * 7), distance2 * Math.sin(Math.PI/4 * 7), r_square, 45)  ;
}


function preset_square_triangle_complex(x,y,r){
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_flower_polygon(4, 0, 0, r, 0 );


  // Triangle
  square_side_length = getSideLength(4, r);
  r_triangle   = getRadius(square_side_length, 3);
  distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
  draw_flower_polygon(3, 0, - distance, r_triangle, 90 );
  draw_flower_polygon(3, distance, 0, r_triangle, 180 );
  draw_flower_polygon(3, - distance, 0, r_triangle, 0 );
  draw_flower_polygon(3, 0, distance, r_triangle, 30 );

  draw_flower_polygon(4, - Math.cos(15 * 2 *Math.PI/360 ) * r, - Math.sin(Math.PI/4) * r  - Math.sin(75*2 * Math.PI/360) * r , r, 30 );
  draw_flower_polygon(4,  Math.sin(Math.PI/4) * r  + Math.sin(75*2 * Math.PI/360) * r, - Math.cos(15  * 2 *Math.PI/360 ) * r  , r, 30 );
  draw_flower_polygon(4,   Math.cos(15  * 2 *Math.PI/360 ) * r  , Math.sin(Math.PI/4) * r  + Math.sin(75*2 * Math.PI/360) * r, r, 30);
  draw_flower_polygon(4,  -Math.sin(Math.PI/4) * r  - Math.sin(75*2 * Math.PI/360) * r,  Math.cos(15  * 2 *Math.PI/360 ) * r  , r, 30 );


  draw_flower_polygon(3, Math.cos(Math.PI/4) * r, - (Math.sin(Math.PI/4) * r +  r_triangle), r_triangle, 30 );
  draw_flower_polygon(3, (Math.sin(Math.PI/4) * r +  r_triangle), Math.cos(Math.PI/4) * r, r_triangle, 120 );
  draw_flower_polygon(3, -(Math.sin(Math.PI/4) * r +  r_triangle), - Math.cos(Math.PI/4) * r, r_triangle, 60 );
  draw_flower_polygon(3, - Math.cos(Math.PI/4) * r, (Math.sin(Math.PI/4) * r +  r_triangle),  r_triangle, 90 );

}

function preset_square_triangle(x,y,r){

  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_flower_polygon(4, 0, 0, r, 0);
  draw_flower_polygon(4, 2 * Math.cos(Math.PI/4) * r, 0, r, 0);
  draw_flower_polygon(4, - 2 * Math.cos(Math.PI/4) * r, 0, r, 0);


  // Triangle
  square_side_length = getSideLength(4, r);
  r_triangle   = getRadius(square_side_length, 3);
  distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
  draw_flower_polygon(3, 0, - distance, r_triangle, 90 );
  draw_flower_polygon(3, - 2 * Math.cos(Math.PI/4) * r, - distance, r_triangle, 90);
  draw_flower_polygon(3, 2 * Math.cos(Math.PI/4) * r, - distance, r_triangle, 90);
  draw_flower_polygon(3, 1 * Math.cos(Math.PI/4) * r, - distance - Math.sin(Math.PI/6) *r_triangle, r_triangle, 30 );
  draw_flower_polygon(3, - 1 * Math.cos(Math.PI/4) * r, - distance - Math.sin(Math.PI/6) *r_triangle, r_triangle, 30 );


  draw_flower_polygon(3, 0,  distance, r_triangle, 30 );
  draw_flower_polygon(3, - 2 * Math.cos(Math.PI/4) * r,  distance, r_triangle, 30 );
  draw_flower_polygon(3, 2 * Math.cos(Math.PI/4) * r,  distance, r_triangle, 30 );
  draw_flower_polygon(3, - 1 * Math.cos(Math.PI/4) * r, distance + Math.sin(Math.PI/6) *r_triangle, r_triangle, 90 );
  draw_flower_polygon(3,  Math.cos(Math.PI/4) * r, distance + Math.sin(Math.PI/6) *r_triangle, r_triangle, 90 );

}


function preset_hexagonal_triangle(x, y, r){
  container.setAttribute("transform", `translate(${x}, ${y})`);
  draw_flower_polygon(6, - 2 * r, 0, r, 30);
  draw_flower_polygon(6, 0, 0, r, 30 );
  draw_flower_polygon(6, 2 * r, 0, r, 30 );

  theta = 360 / 6 * 2 * Math.PI / 360;
  x = 2 * Math.cos(theta) * r; 
  y = 2 * Math.sin(theta) * r;

  draw_flower_polygon(6, - x, - y, r, 30);
  draw_flower_polygon(6, - x + 2 * r, - y, r, 30);
  draw_flower_polygon(6, - x, y, r, 30 );
  draw_flower_polygon(6, - x + 2 * r, y, r, 30);

  // calculate r for triangle 
  hexagonal_side_length = getSideLength(6, r);
  r_triangle = getRadius(hexagonal_side_length, 3);
  distance = Math.abs(Math.sin(2 * Math.PI / 6) * r) + Math.abs(Math.sin(30 *  2 * Math.PI / 360) * r_triangle);
  draw_flower_polygon(3, 0, - distance, r_triangle, 90);
  draw_flower_polygon(3, distance * Math.cos(Math.PI/ 3 - Math.PI /2), distance * Math.sin(Math.PI /3 - Math.PI/2), r_triangle, 30 );
  draw_flower_polygon(3, distance * Math.cos(2 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(2 * Math.PI /3 - Math.PI/2), r_triangle, 90 );
  draw_flower_polygon(3, 0, distance, r_triangle, 30 );
  draw_flower_polygon(3, distance * Math.cos(4 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(4 * Math.PI /3 - Math.PI/2), r_triangle, 90);
  draw_flower_polygon(3, distance * Math.cos(5 * Math.PI/ 3 - Math.PI /2), distance * Math.sin(5 * Math.PI /3 - Math.PI/2), r_triangle,  30);
}



function preset_dodecagon_triangle(x,y, r){
  theta = 2 * Math.PI / 12;
  distance = Math.cos(Math.PI/12) * r;
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_flower_polygon(12, 0, 0, r, 0);
  draw_flower_polygon(12, - 2 * distance , 0, r, 0);
  draw_flower_polygon(12, 2 * distance, 0, r, 0 );
  draw_flower_polygon(12, - distance,  - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r, 0 );
  draw_flower_polygon(12, - distance,   distance + Math.sin(45 * 2 * Math.PI / 360) * r, r, 0 );
  draw_flower_polygon(12,  distance,  - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r, 0 );
  draw_flower_polygon(12,  distance,   distance + Math.sin(45 * 2 * Math.PI / 360) * r, r, 0 );

  dodecagon_side_length = getSideLength(12, r);
  r_triangle   = getRadius(dodecagon_side_length, 3);
  distance2 = r_triangle   * Math.sin(30 * 2 * Math.PI/360) + distance;
  draw_flower_polygon(3, 0, distance2, r_triangle, 30 );
  draw_flower_polygon(3, distance2 * Math.cos(Math.PI /6), distance2 * Math.sin(Math.PI /6), r_triangle, 90 );
  draw_flower_polygon(3, distance2 * Math.cos(Math.PI /6 - Math.PI / 3), distance2 * Math.sin(Math.PI /6 - Math.PI/3), r_triangle, 30 );
  draw_flower_polygon(3, distance2 * Math.cos(Math.PI /6 - 2 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 2 *Math.PI/3), r_triangle, 90 );
  draw_flower_polygon(3, distance2 * Math.cos(Math.PI /6 - 3 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 3 *Math.PI/3), r_triangle,  30 );
  draw_flower_polygon(3, distance2 * Math.cos(Math.PI /6 - 4 * Math.PI / 3), distance2 * Math.sin(Math.PI /6 - 4 *Math.PI/3), r_triangle,  90 );

}

function reset(){
  svg.innerHTML = '';
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "400");
  svg.setAttribute("height", "400");
  let main_colour = "rgb(235, 210, 140)";
  let secondary_colour = "rgb(170, 130, 75)";
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(container);
}


function redraw(selectedSet){
  reset();
  // draw_flower_polygon(petal, 200, 200, 100, 0);
  if (selectedSet === 'DHS'){
    preset_dodecagon_hexagon_square(200,200,90);
  }
  else if (selectedSet === 'OS'){
    preset_octagon_square(200, 200, 70);
  }

  else if (selectedSet === 'DT'){
    preset_dodecagon_triangle(200,200,65)
  }

  else if (selectedSet === 'HMT'){
    preset_hexagonal_multiple_triangle(200,200,80)
  }

  else if (selectedSet === 'ST'){
    preset_square_triangle(200,200, 80);
  }

  else if (selectedSet === 'STC'){
    preset_square_triangle_complex(200,200,75);
  }
  else if (selectedSet === 'HST'){
    preset_hexagon_square_triangle(200,200,80);
  }
  else if (selectedSet === 'HT'){
    preset_hexagonal_triangle(200,200,65);
  }
}


let btns = document.querySelectorAll('.btn');


const onSetBtnClick = (e) => {
  document.querySelector('.btn.is-selected').classList.remove('is-selected');

  let btn =  e.target;

  btn.classList.add('is-selected');
  selectedSet = btn.getAttribute('data-set');
  redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));

}

for (let btn of btns) {
  btn.addEventListener('click', onSetBtnClick);
}




// const slider = document.getElementById("slider");

// // Update the displayed value when the slider changes
//     slider.addEventListener("input", function() {
//       redraw(slider.value); 
// });


// draw_flower_polygon(4, 200, 200, 100,0);
// preset_hexagonal_multiple_triangle(200,200,75);
// preset_hexagon_square_triangle(200,200,75);
// preset_dodecagon_hexagon_square(200,200,75);
// preset_octagon_square(200,200, 75);
// preset_square_triangle_complex(200,200,75);
// preset_square_triangle(200,200,75);
// preset_hexagonal_triangle(200, 200, 70);
redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));


