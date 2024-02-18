
let touchStartX = 0;
let touchEndX = 0;

// Function to handle swipe
function handleSwipe() {
    const swipeThreshold = 50; // Adjust this value as needed

    // Calculate the distance of swipe
    const swipeLength = touchEndX - touchStartX;

    if (swipeLength > swipeThreshold) {
        // Swipe right
        if (selectBox.value === 'dodecagon_hexagon_square' &&  selectMotive.value === 'single') {
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'dodecagon_hexagon_square' && selectMotive.value === 'tesselation') {
          selectBox.value = 'octagon_square';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'octagon_square' && selectMotive.value === 'single') {
          selectBox.value = 'octagon_square';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'octagon_square' && selectMotive.value === 'tesselation') {
          selectBox.value = 'dodecagon_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'dodecagon_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'dodecagon_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'dodecagon_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_triangle_complex';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_triangle_complex' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_triangle_complex';
          selectMotive.value = 'tesselation';
          console.log("chiho")
        } 
        else if (selectBox.value === 'hexagon_triangle_complex' && selectMotive.value === 'tesselation') {
          selectBox.value = 'square_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'square_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'square_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'square_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'square_triangle_complex';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'square_triangle_complex' && selectMotive.value === 'single') {
          selectBox.value = 'square_triangle_complex';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'square_triangle_complex' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_square_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_square_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_square_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'hexagon_square_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'hexagon_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'dodecagon_hexagon_square';
          selectMotive.value = 'single';
        } 

    } else if (swipeLength < -swipeThreshold) {
        if (selectBox.value === 'dodecagon_hexagon_square' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'hexagon_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_square_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'hexagon_square_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_square_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_square_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'square_triangle_complex';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'square_triangle_complex' && selectMotive.value === 'tesselation') {
          selectBox.value = 'square_triangle_complex';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'square_triangle_complex' && selectMotive.value === 'single') {
          selectBox.value = 'square_triangle';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'square_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'square_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'square_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'hexagon_triangle_complex';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'hexagon_triangle_complex' && selectMotive.value === 'tesselation') {
          selectBox.value = 'hexagon_triangle_complex';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'hexagon_triangle_complex' && selectMotive.value === 'single') {
          selectBox.value = 'dodecagon_triangle';
          selectMotive.value = 'tesselation';
        }
        else if (selectBox.value === 'dodecagon_triangle' && selectMotive.value === 'tesselation') {
          selectBox.value = 'dodecagon_triangle';
          selectMotive.value = 'single';
        } 
        else if (selectBox.value === 'dodecagon_triangle' && selectMotive.value === 'single') {
          selectBox.value = 'octagon_square';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'octagon_square' && selectMotive.value === 'tesselation') {
          selectBox.value = 'octagon_square';
          selectMotive.value = 'single';
        }
        else if (selectBox.value === 'octagon_square' && selectMotive.value === 'single') {
          selectBox.value = 'dodecagon_hexagon_square';
          selectMotive.value = 'tesselation';
        } 
        else if (selectBox.value === 'dodecagon_hexagon_square' && selectMotive.value === 'tesselation') {
          selectBox.value = 'dodecagon_hexagon_square';
          selectMotive.value = 'single';
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
  group.setAttribute("stroke", strokeColor);
  group.setAttribute("stroke-width", 0.5);
  container.appendChild(group);


  // Input all 12 vertices
  for (let i = 0; i< n; i++){
    if (selectPadding.value !== 'padding') {
      x = Math.cos(deg * (i+1) ) * r;
      y = Math.sin(deg * (i+1)) * r;
      vertices.push([x,y]);
    }

    else if (selectPadding.value === 'padding') {
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
    kawung_part.setAttribute("fill", mainColor);
    // kawung_part.setAttribute("stroke", 'black');

    // Isen Circle
    isen_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_circle.setAttribute("cx", vertices[j][0] * 0.8);
    isen_circle.setAttribute("cy", vertices[j][1] * 0.8);
    isen_circle.setAttribute("r", r / 17.5);
    isen_circle.setAttribute("fill", secondaryColor);
    group.appendChild(kawung_part);
    group.appendChild(isen_circle);


    // isen_circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // isen_circle2.setAttribute("cx", vertices[j][0] * 0.65);
    // isen_circle2.setAttribute("cy", vertices[j][1] * 0.65);
    // isen_circle2.setAttribute("r", r / 30);
    // isen_circle2.setAttribute("fill", secondaryColor);
    // group.appendChild(isen_circle2);


  }
}



function preset_dodecagon_hexagon_square(x,y,r) {
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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


function dodecagon_triangle_unit(x,y, r){
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  theta = 2 * Math.PI / 12;
  distance = Math.cos(Math.PI/12) * r;
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);

  draw_polygon(12, 0, 0, r, 15);

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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");

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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
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


function preset_hexagonal_triangle_unit(x, y, r){
  container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(container);
  container.setAttribute("transform", `translate(${x}, ${y})`);
  draw_polygon(6, 0, 0, r, 0 );

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


function redraw(selectedSet){
  setup(400, 400, themes[selectThemes.value].secondaryColor);
  cx = svg.getAttribute("width")/2;
  cy = svg.getAttribute("height")/2;

  mainColor = themes[selectThemes.value].mainColor;
  secondaryColor = themes[selectThemes.value].secondaryColor;
  strokeColor = themes[selectThemes.value].strokeColor;




  if (selectBox.value === 'dodecagon_hexagon_square'){
    if (selectMotive.value === 'single'){
      preset_dodecagon_hexagon_square(cx,cy,80 * svg.getAttribute("width") / 400);
    }
    else{
      r =  80 * svg.getAttribute("width") / 400;
      distance = Math.cos(Math.PI/12) * r;
      dodecagon_side_length = getSideLength(12, r);
      r_hexagon   = getRadius(dodecagon_side_length, 6);
      distance2 = distance + Math.sin(2 * Math.PI / 6) * r_hexagon;
      // Square
      r_square   = getRadius(dodecagon_side_length, 4);
      distance3 = distance + Math.cos(2 * Math.PI / 8) * r_square;


      preset_dodecagon_hexagon_square(cx,cy, r);
      preset_dodecagon_hexagon_square(cx + distance3 * 2,cy, r);
      preset_dodecagon_hexagon_square(cx - distance3 * 2,cy, r);


      preset_dodecagon_hexagon_square(cx - distance3 * 1,cy - distance2  - Math.sin(2 * Math.PI / 6) * r_hexagon  - Math.cos(2 * Math.PI / 8) * r_square, r);
      preset_dodecagon_hexagon_square(cx - distance3 * 1 + distance3 * 2,cy - distance2  - Math.sin(2 * Math.PI / 6) * r_hexagon  - Math.cos(2 * Math.PI / 8) * r_square, r);


      preset_dodecagon_hexagon_square(cx - distance3 * 1,cy + distance2  + Math.sin(2 * Math.PI / 6) * r_hexagon  + Math.cos(2 * Math.PI / 8) * r_square, r);
      preset_dodecagon_hexagon_square(cx - distance3 * 1 + distance3 * 2,cy + distance2  + Math.sin(2 * Math.PI / 6) * r_hexagon  + Math.cos(2 * Math.PI / 8) * r_square, r);

      // preset_dodecagon_hexagon_square(cx,cy, r);
    }
    
  }
  else if (selectBox.value === 'octagon_square'){
    if (selectMotive.value === 'single'){
      preset_octagon_square(cx, cy, 55 * svg.getAttribute("width") / 400);
    }
    else {
      r = 55 * svg.getAttribute("width") / 400;
      distance = Math.sin(Math.PI/8 + Math.PI/4) * r;

      preset_octagon_square(cx - 4 * distance, cy, r);
      preset_octagon_square(cx - 2 * distance, cy, r);
      preset_octagon_square(cx, cy, r);
      preset_octagon_square(cx + 2 * distance, cy, r);
      preset_octagon_square(cx + 4 * distance, cy, r);

      preset_octagon_square(cx - 4 * distance, cy - 2 * distance, r);
      preset_octagon_square(cx - 2 * distance, cy - 2 * distance, r);
      preset_octagon_square(cx, cy - 2 * distance, r);
      preset_octagon_square(cx + 2 * distance, cy - 2 * distance, r);
      preset_octagon_square(cx + 4 * distance, cy - 2 * distance, r);

      preset_octagon_square(cx - 4 * distance, cy + 2 * distance, r);
      preset_octagon_square(cx - 2 * distance, cy + 2 * distance, r);
      preset_octagon_square(cx, cy + 2 * distance, r);
      preset_octagon_square(cx + 2 * distance, cy + 2 * distance, r);
      preset_octagon_square(cx + 4 * distance, cy + 2 * distance, r);

    }
  }
  else if (selectBox.value === 'dodecagon_triangle'){
    if (selectMotive.value === 'single'){
      dodecagon_triangle_unit(cx,cy,55 * svg.getAttribute("width") / 400);
    }
    else {
    // preset_dodecagon_triangle(cx,cy,55 * svg.getAttribute("width") / 400);
    r = 55 * svg.getAttribute("width") / 400;
    distance = Math.cos(Math.PI/12) * r;
    dodecagon_side_length = getSideLength(12, r);
    r_triangle   = getRadius(dodecagon_side_length, 3);
    distance2 = r_triangle   * Math.sin(30 * 2 * Math.PI/360) + distance;

    dodecagon_triangle_unit(cx - 4 * distance,cy, r);
    dodecagon_triangle_unit(cx - 2 * distance,cy, r);
    dodecagon_triangle_unit(cx,cy, r);
    dodecagon_triangle_unit(cx + 2 * distance,cy, r);
    dodecagon_triangle_unit(cx + 4 * distance,cy, r);

    dodecagon_triangle_unit(cx + 4 * distance,cy + 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx + 2 * distance,cy + 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx,cy + 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx - 2 * distance,cy + 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx - 4 * distance,cy + 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);

    dodecagon_triangle_unit(cx + 4 * distance,cy - 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx + 2 * distance,cy - 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx,cy - 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx - 2 * distance,cy - 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);
    dodecagon_triangle_unit(cx - 4 * distance,cy - 2 * (distance + Math.sin(45 * 2 * Math.PI / 360) * r), r);



    dodecagon_triangle_unit(cx - distance, cy - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance - 2 * distance, cy - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance + 2  * distance, cy - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance + 4  * distance, cy - distance - Math.sin(45 * 2 * Math.PI / 360) * r, r );


    dodecagon_triangle_unit(cx - distance, cy + distance + Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance - 2 * distance, cy + distance + Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance + 2  * distance, cy + distance + Math.sin(45 * 2 * Math.PI / 360) * r, r );
    dodecagon_triangle_unit(cx - distance + 4  * distance, cy + distance + Math.sin(45 * 2 * Math.PI / 360) * r, r );
    }

  }
  else if (selectBox.value === 'hexagon_triangle_complex'){
    r = 65 * svg.getAttribute("width") / 400;

    if (selectMotive.value === 'single'){
      preset_hexagonal_multiple_triangle(cx,cy, r);
    }
    else {
      hexagonal_side_length = getSideLength(6, r);
      r_triangle = getRadius(hexagonal_side_length, 3);
      distance = Math.abs(Math.sin(2 * Math.PI / 6) * r) + Math.abs(Math.sin(30 *  2 * Math.PI / 360) * r_triangle);
      preset_hexagonal_multiple_triangle(cx,cy, r);

      triangle_side_length = getSideLength(3, r_triangle);
      h = triangle_side_length * Math.sqrt(3) * 0.5;
      preset_hexagonal_multiple_triangle(cx + 2.5 * triangle_side_length, cy + h, r);
      preset_hexagonal_multiple_triangle(cx - 2.5 * triangle_side_length, cy + h, r);

      preset_hexagonal_multiple_triangle(cx - 0.5 * triangle_side_length,cy - 3 *h, r);
      preset_hexagonal_multiple_triangle(cx - 2.5 * triangle_side_length - 0.5 * triangle_side_length, cy + h - 3 * h, r);
      preset_hexagonal_multiple_triangle(cx + 2.5 * triangle_side_length - 0.5 * triangle_side_length, cy + h - 3 * h, r);

      preset_hexagonal_multiple_triangle(cx + 0.5 * triangle_side_length,cy + 3 * h, r);
      preset_hexagonal_multiple_triangle(cx - 2.5 * triangle_side_length + 0.5 * triangle_side_length, cy + h + 3 *h , r);
      preset_hexagonal_multiple_triangle(cx + 2.5 * triangle_side_length + 0.5 * triangle_side_length, cy + h + 3 * h, r);

    }

  }
  else if (selectBox.value === 'square_triangle'){
    r = 60 * svg.getAttribute("width") / 400;
    if (selectMotive.value === 'single'){
      preset_square_triangle(cx,cy, r);
    }
    else {
      square_side_length = getSideLength(4, r);
      r_triangle   = getRadius(square_side_length, 3);
      distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
      h = square_side_length * Math.sqrt(3) * 0.5


      preset_square_triangle(cx,cy, r);
      preset_square_triangle(cx - square_side_length,cy, r);
      preset_square_triangle(cx - 2 * square_side_length,cy, r);
      preset_square_triangle(cx + square_side_length,cy, r);
      preset_square_triangle(cx + 2 * square_side_length,cy, r);

      preset_square_triangle(cx - 0.5 * square_side_length,cy - h - square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length - square_side_length,cy - h - square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length + square_side_length,cy - h - square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length + 2 * square_side_length,cy - h - square_side_length, r);

      preset_square_triangle(cx - 0.5 * square_side_length,cy + h + square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length - square_side_length,cy + h + square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length + square_side_length,cy + h + square_side_length, r);
      preset_square_triangle(cx - 0.5 * square_side_length + 2 * square_side_length,cy + h + square_side_length, r);

    }
  }
  else if (selectBox.value === 'square_triangle_complex'){
    r = 60 * svg.getAttribute("width") / 400;
    if (selectMotive.value === 'single'){
      preset_square_triangle_complex(cx,cy, r);
    }
    else {
        square_side_length = getSideLength(4, r);
        r_triangle   = getRadius(square_side_length, 3);
        distance =  Math.sin(Math.PI/4) * r + Math.sin(Math.PI /6) * r_triangle;
        h = square_side_length * Math.sqrt(3) * 0.5;
        preset_square_triangle_complex(cx,cy, r);
        preset_square_triangle_complex(cx + square_side_length + h,cy + 0.5 * square_side_length, r);
        preset_square_triangle_complex(cx - square_side_length - h,cy - 0.5 * square_side_length, r);

        preset_square_triangle_complex(cx +  0.5 * square_side_length,cy - square_side_length - h, r);
        preset_square_triangle_complex(cx +  0.5 * square_side_length + square_side_length + h,cy - square_side_length - h + 0.5 * square_side_length, r);
        preset_square_triangle_complex(cx +  0.5 * square_side_length - square_side_length - h,cy - square_side_length - h - 0.5 * square_side_length, r);


        preset_square_triangle_complex(cx -  0.5 * square_side_length,cy + square_side_length + h, r);
        preset_square_triangle_complex(cx -  0.5 * square_side_length + square_side_length + h,cy + square_side_length + h + 0.5 * square_side_length, r);
        preset_square_triangle_complex(cx -  0.5 * square_side_length - square_side_length - h,cy + square_side_length + h - 0.5 * square_side_length, r);

    }
  }
  else if (selectBox.value === 'hexagon_square_triangle'){
    r = 65 * svg.getAttribute("width") / 400;
    if (selectMotive.value === 'single'){
      preset_hexagon_square_triangle(cx,cy, r);
    }
    else {  
      hexagon_side_length = getSideLength(6, r);
      r_square   = getRadius(hexagon_side_length, 4);
      distance =  Math.cos(Math.PI/6) * r + Math.cos(Math.PI /4) * r_square ;
      square_side_length = getSideLength(4, r_square);
      r_triangle     = getRadius(square_side_length, 3);


      h = square_side_length * Math.sqrt(3) * 0.5 ;



      preset_hexagon_square_triangle(cx,cy, r);
      preset_hexagon_square_triangle(cx + 2 * distance,cy, r);
      preset_hexagon_square_triangle(cx - 2 * distance,cy, r);

      preset_hexagon_square_triangle(cx - distance,cy - 0.5 * square_side_length - h - r , r);
      preset_hexagon_square_triangle(cx - distance + 2 * distance,cy - 0.5 * square_side_length - h - r , r);

      preset_hexagon_square_triangle(cx - distance,cy + 0.5 * square_side_length + h + r , r);
      preset_hexagon_square_triangle(cx - distance + 2 * distance,cy + 0.5 * square_side_length + h + r , r);


    }
  }
  else if (selectBox.value === 'hexagon_triangle'){
    r = 50 * svg.getAttribute("width") / 400; 
    if (selectMotive.value === 'single'){
      preset_hexagonal_triangle(cx,cy, r);
    }
    else {
      preset_hexagonal_triangle_unit(cx, cy, r);
      preset_hexagonal_triangle_unit(cx - 2 * r, cy, r);
      preset_hexagonal_triangle_unit(cx - 4 * r, cy, r);
      preset_hexagonal_triangle_unit(cx + 2 * r, cy, r);
      preset_hexagonal_triangle_unit(cx + 4 * r, cy, r);



      hexagonal_side_length = getSideLength(6, r);
      r_triangle = getRadius(hexagonal_side_length, 3);
      distance = Math.abs(Math.sin(2 * Math.PI / 6) * r) + Math.abs(Math.sin(30 *  2 * Math.PI / 360) * r_triangle);

      h = hexagonal_side_length * Math.sqrt(3) * 0.5 + Math.abs(Math.sin(2 * Math.PI / 6) * r) ;

      preset_hexagonal_triangle_unit(cx -r , cy - h, r);
      preset_hexagonal_triangle_unit(cx -r - 2 * r, cy - h, r);
      preset_hexagonal_triangle_unit(cx -r + 2 * r, cy - h, r);
      preset_hexagonal_triangle_unit(cx -r + 4 * r, cy - h, r);

      preset_hexagonal_triangle_unit(cx -r , cy + h, r);
      preset_hexagonal_triangle_unit(cx -r - 2 * r, cy + h, r);
      preset_hexagonal_triangle_unit(cx -r + 2 * r, cy + h, r);
      preset_hexagonal_triangle_unit(cx -r + 4 * r, cy + h, r);


      preset_hexagonal_triangle_unit(cx, cy + 2 * h, r);
      preset_hexagonal_triangle_unit(cx - 2 * r, cy + 2 * h, r);
      preset_hexagonal_triangle_unit(cx - 4 * r, cy + 2 * h, r);
      preset_hexagonal_triangle_unit(cx + 2 * r, cy + 2 * h, r);
      preset_hexagonal_triangle_unit(cx + 4 * r, cy + 2 * h, r);

      preset_hexagonal_triangle_unit(cx, cy - 2 * h, r);
      preset_hexagonal_triangle_unit(cx - 2 * r, cy - 2 * h, r);
      preset_hexagonal_triangle_unit(cx - 4 * r, cy - 2 * h, r);
      preset_hexagonal_triangle_unit(cx + 2 * r, cy - 2 * h, r);
      preset_hexagonal_triangle_unit(cx + 4 * r, cy - 2 * h, r);
    }
  }

}


const selectPadding = document.getElementById('paddings');
// Add an event listener to the select input
selectPadding.addEventListener('change', function() {
    redraw();
});


const selectBox = document.getElementById('tesselation_type');
  selectBox.addEventListener('change', function() {
  redraw();
});


const selectMotive = document.getElementById('motives');
  // Add an event listener to the select input
  selectMotive.addEventListener('change', function() {
  redraw();
});

const selectThemes = document.getElementById('themes');

// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
    redraw();
});

redraw();
