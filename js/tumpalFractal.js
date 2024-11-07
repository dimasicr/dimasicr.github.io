useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectThemes = document.getElementById('themes');
const selectIsens = document.getElementById('Isens');
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
       if (currentPattern === 'square') {
          currentPattern = 'hexagon';
          selectBox.value = 'hexagon';
        } 
        else if (currentPattern === 'hexagon') {
          currentPattern = 'triangle';
          selectBox.value = 'triangle';
        } 
        else if (currentPattern === 'triangle') {
          currentPattern = 'hexagon_triangle';
          selectBox.value = 'hexagon_triangle';
        } 
        else if (currentPattern === 'hexagon_triangle') {
          currentPattern = 'hexagon_square_triangle';
          selectBox.value = 'hexagon_square_triangle';
        }  
        else if (currentPattern === 'hexagon_square_triangle') {
          currentPattern = 'two_hexagons_two_triangles';
          selectBox.value = 'two_hexagons_two_triangles';
        }                         
        else if (currentPattern === 'two_hexagons_two_triangles') {
          currentPattern = 'dodecagon_triangle';
          selectBox.value = 'dodecagon_triangle';
        }                         
         else if (currentPattern === 'dodecagon_triangle') {
          currentPattern = 'dodecagon_hexagon_square';
          selectBox.value = 'dodecagon_hexagon_square';
        }                      
         else if (currentPattern === 'dodecagon_hexagon_square') {
          currentPattern = 'two_squares_three_triangles';
          selectBox.value = 'two_squares_three_triangles';
        }
         else if (currentPattern === 'two_squares_three_triangles') {
          currentPattern = 'two_squares_three_triangles_complex';
          selectBox.value = 'two_squares_three_triangles_complex';
        }                       
         else if (currentPattern === 'two_squares_three_triangles_complex') {
          currentPattern = 'octagon_square';
          selectBox.value = 'octagon_square';
        }                         
         else if (currentPattern === 'octagon_square') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'hexagon') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 
        else if (currentPattern === 'triangle') {
          currentPattern = 'hexagon';
          selectBox.value = 'hexagon';
        } 
        else if (currentPattern === 'hexagon_triangle') {
          currentPattern = 'triangle';
          selectBox.value = 'triangle';
        } 
        else if (currentPattern === 'hexagon_square_triangle') {
          currentPattern = 'hexagon_triangle';
          selectBox.value = 'hexagon_triangle';
        }  
        else if (currentPattern === 'two_hexagons_two_triangles') {
          currentPattern = 'hexagon_square_triangle';
          selectBox.value = 'hexagon_square_triangle';
        }                         
        else if (currentPattern === 'dodecagon_triangle') {
          currentPattern = 'two_hexagons_two_triangles';
          selectBox.value = 'two_hexagons_two_triangles';
        }                         
         else if (currentPattern === 'dodecagon_hexagon_square') {
          currentPattern = 'dodecagon_triangle';
          selectBox.value = 'dodecagon_triangle';
        }                      
         else if (currentPattern === 'two_squares_three_triangles') {
          currentPattern = 'dodecagon_hexagon_square';
          selectBox.value = 'dodecagon_hexagon_square';
        }
         else if (currentPattern === 'two_squares_three_triangles_complex') {
          currentPattern = 'two_squares_three_triangles';
          selectBox.value = 'two_squares_three_triangles';
        }                       
         else if (currentPattern === 'octagon_square') {
          currentPattern = 'two_squares_three_triangles_complex';
          selectBox.value = 'two_squares_three_triangles_complex';
        }                         
         else if (currentPattern === 'square') {
          currentPattern = 'octagon_square';
          selectBox.value = 'octagon_square';
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
  setup(400, 400, themes[selectThemes.value].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;


  w = svg.getAttribute("width") * 0.5 ;




  if (selectBox.value === 'square') {
    for (let i = 0; i <4; i++){
      for (let j =0; j<4; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * w * i, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false, themes[selectThemes.value].tertiaryColor); 
      }
    }
  }


  else if (selectBox.value === 'sierpinski_carpet'){
  function getRadius(side_length, n){
    theta = (2* Math.PI) / n;
    a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
    b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
    return side_length / Math.sqrt(a + b);
  }


    class SquareTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            if (this.motive === 'square'){
                for (let j=0; j<4; j++){
                  drawTumpal(this.cx, this.cy, selectIsens.value, this.l * 0.5, 45,  90 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }
            else if (this.motive === 'octagon'){
              const octagon_side_length = 0.5 * this.l / (1 + 2 * Math.cos(Math.PI/4)) ;
              const oct_h = Math.tan(3/8 * Math.PI) * 0.5 *  octagon_side_length;
              const sq_h = Math.tan(2/8 * Math.PI) * 0.5 *  octagon_side_length;
              const dist =  -oct_h - sq_h;


              for (let j=0; j<8; j++){
                  drawTumpal(this.cx, this.cy, selectIsens.value, octagon_side_length, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              }

              for (let j=0; j<8; j++){
                if (j%2 === 1) {
                drawTumpalOuter(this.cx + (oct_h + sq_h) * Math.sin(j * 2 * Math.PI / 8), this.cy + (oct_h + sq_h) * Math.cos(j * 2 * Math.PI / 8), selectIsens.value, octagon_side_length, 45, 180 - 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
              }



            }
            }
    }

      const os = 0.08 * w;
      const oct_h = Math.tan(3/8 * Math.PI) *  0.5 * os;
      const sq_h = Math.tan(2/8 * Math.PI) *  0.5 * os;
      const dist =  -oct_h - sq_h;
      const r_octagon = getRadius(os, 8);



      abc = new SquareTumpal(cX, cY, 3.2 *  w, 'square');
      // abc.draw(); 

      let objList = [];
      objList.push(abc);


      objList2 = [];
      for (let obj of objList){
        objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList2.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
        objList2.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
        objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
        objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
      }



      // for (let obj of objList2){
      //   obj.draw();
      // }

      objList3 = [];
      for (let obj of objList2){
        objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList3.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
        objList3.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
        objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
        objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
      }

      for (let obj of objList3){
        obj.draw();
      }

      objList4 = [];
      for (let obj of objList3){
        objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
        objList4.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
        objList4.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
        objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
        objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
        objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
      }

      // for (let obj of objList4){
      //   obj.draw();
      // }



      // bcd = new SquareTumpal(cX + 0.1 * w, cY, 0.2 * w, 'octagon');
      // bcd.draw();  


      function drawSquareOctagram(x,y,w){
        for (let j=0; j<8; j++){
          drawTumpal(x - 2 * oct_h, y - 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x + 2 * oct_h, y - 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x + 2 * oct_h, y + 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x - 2 * oct_h, y + 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);


          if (j %2 == 1){
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) - 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) - 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) + 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) - 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) + 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) + 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) - 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) + 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);



            drawTumpal(x, y - 2 * oct_h , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x, y + 2 * oct_h , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x - 2 * oct_h, y  , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x + 2 * oct_h, y  , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);

          }
        }
      }

      // drawSquareOctagram(cX,cY - 6 * oct_h,os);
      // drawSquareOctagram(cX,cY + 6 * oct_h,os);

      // drawSquareOctagram(cX - 6 * oct_h,cY,os);
      // drawSquareOctagram(cX - 6 * oct_h,cY - 6 * h,os);
      // drawSquareOctagram(cX - 6 * oct_h,cY + 6 * h,os);

      // drawSquareOctagram(cX + 6 * oct_h,cY,os);
      // drawSquareOctagram(cX + 6 * oct_h,cY - 6 * h,os);
      // drawSquareOctagram(cX + 6 * oct_h,cY + 6 * h,os);






  }


  else if (selectBox.value === 'koch_snowflake'){
const wp = 0.4 * w;

  function getheight(wp){
     return Math.sin(60 * 2 * Math.PI/ 360) * wp;
  }

  function getRadius(side_length, n){
    theta = (2* Math.PI) / n;
    a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
    b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
    return side_length / Math.sqrt(a + b);
  }

  function draw_polygon_flower(n, x,y, r, rot_deg, mainColor=themes["sketch"].mainColor, secondaryColor=themes["sketch"].secondaryColor, strokeColor=themes["sketch"].strokeColor){
  vertices = [];
  verticesSmall = [];
  let deg =  2 * Math.PI / n;
  group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  group.setAttribute("stroke", strokeColor);
  group.setAttribute("stroke-width", 0.5);
  svg.appendChild(group);

  borderSentence = '';
  borderSentenceSmall = '';


  // Input all 12 vertices
  for (let i = 0; i< n; i++){
      x = Math.cos(deg * (i+1) ) * r;
      y = Math.sin(deg * (i+1)) * r;
      vertices.push([x,y]);
      verticesSmall.push([x * 0.7, y * 0.7]);
      if (i == 0){
        borderSentence += `M ${x} ${y} `
        borderSentenceSmall += `M ${x * 0.7} ${y * 0.7} `;
      }
      else {
        borderSentence += `L ${x} ${y} `
        borderSentenceSmall += `L ${x * 0.7} ${y * 0.7} `
      }
    


  }

  borderSentence += 'Z';
  borderSentenceSmall += 'Z';
  border = document.createElementNS("http://www.w3.org/2000/svg", "path");
  border.setAttribute("d", borderSentence);
  border.setAttribute("fill", "none");
  border.setAttribute("stroke", strokeColor);
  // group.appendChild(border);

  borderSmall = document.createElementNS("http://www.w3.org/2000/svg", "path");
  borderSmall.setAttribute("d", borderSentenceSmall);
  borderSmall.setAttribute("fill", "none");
  borderSmall.setAttribute("stroke", strokeColor);
  // group.appendChild(borderSmall);


  for (let j = 0; j < n; j++) {
    new_x = midpoint(vertices[0][0],vertices[1][0]);
    new_y = midpoint(vertices[0][1], vertices[1][1]);
    ind = vertices.length - 1;
    new_x2 = midpoint(vertices[0][0],vertices[ind][0]);
    new_y2 = midpoint(vertices[0][1], vertices[ind][1]);

    cpx1 = new_x + 0.2 * (vertices[0][0] - new_x);
    cpy1 = new_y + 0.2 * (vertices[0][1] - new_y);

    cpx2 = vertices[0][0] * 0.75;
    cpy2 = vertices[0][1] * 0.75;

    cpx3 = new_x2 + 0.2 * (vertices[0][0] - new_x2);
    cpy3 = new_y2 + 0.2 * (vertices[0][1] - new_y2);

    // Quadratic Bezier Curve
    kawung_part = document.createElementNS("http://www.w3.org/2000/svg", "path");
    kawung_part.setAttribute('transform', `rotate(${ j * 360 / n})`)
    kawung_part.setAttribute("d", `M0 0 C${new_x} ${new_y} ${cpx2} ${cpy2} ${vertices[0][0]} ${vertices[0][1]} C${cpx2} ${cpy2} ${new_x2} ${new_y2} ${0} ${0}Z`);
    kawung_part.setAttribute("fill", mainColor);

    xc = (0 + new_x2 + vertices[0][0] + new_x) / 4;
    yc = (0 + new_y2 + vertices[0][1] + new_y) / 4;

    // Isen Circle
    isen_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_circle.setAttribute("cx", vertices[j][0] * 0.8);
    isen_circle.setAttribute("cy", vertices[j][1] * 0.8);
    isen_circle.setAttribute("r", r / 25);
    isen_circle.setAttribute("fill", secondaryColor);
    // group.appendChild(isen_circle);

        group.appendChild(kawung_part);


  }
}

 class TriangleTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            if (this.motive === 'triangle') {
                for (let j=0; j<3; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 30,  120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }
            else if (this.motive === 'triangle_downward') {
                for (let j=0; j<3; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 30,  180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }

            }
    }

   class TriangleKawung {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            if (this.motive === 'triangle') {
                draw_polygon_flower(3, this.cx, this.cy, getRadius(this.l, 3), 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor)
            }
            else if (this.motive === 'triangle_downward') {
                draw_polygon_flower(3, this.cx, this.cy, getRadius(this.l, 3), 180 + 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor);
            }

            }
    }

 class HexagonTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
                for (let j=0; j<6; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 60,  60 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }

            }
    }

 class HexagonKawung {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
              draw_polygon_flower(6, this.cx, this.cy, getRadius(this.l, 6), 0, themes[selectThemes.value].strokeColor, themes[selectThemes.value].secondaryColor, "white")
            }
    }

  class HexagonTriangleTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            for (let j=0; j<3; j++){
              drawTumpal(this.cx, this.cy + getheight(this.l) * 2/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx - this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx + this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx, this.cy - getheight(this.l) * 2/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx + this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx - this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);

            }

            }
    }

  class HexagonTriangleKawung {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
              draw_polygon_flower(3, this.cx, this.cy + getheight(this.l) * 2/3, getRadius(this.l, 3), 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")
              draw_polygon_flower(3, this.cx - this.l * 0.5, this.cy - getheight(this.l) * 1/3, getRadius(this.l, 3), 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")
              draw_polygon_flower(3, this.cx + this.l * 0.5, this.cy - getheight(this.l) * 1/3, getRadius(this.l, 3), 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")
              draw_polygon_flower(3, this.cx + this.l * 0.5, this.cy + getheight(this.l) * 1/3, getRadius(this.l, 3), 180 + 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")
              draw_polygon_flower(3, this.cx - this.l * 0.5, this.cy + getheight(this.l) * 1/3, getRadius(this.l, 3), 180 + 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")
              draw_polygon_flower(3, this.cx, this.cy - getheight(this.l) * 2/3, getRadius(this.l, 3), 180 + 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, "white")


              // drawTumpal(this.cx, this.cy + getheight(this.l) * 2/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              // drawTumpal(this.cx - this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              // drawTumpal(this.cx + this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              // drawTumpal(this.cx, this.cy - getheight(this.l) * 2/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              // drawTumpal(this.cx + this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              // drawTumpal(this.cx - this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);


            }
    }


      abc = new TriangleTumpal(cX, cY,  4 * wp, 'triangle');
      // abc = new TriangleKawung(cX, cY, 4 * wp, 'triangle');
      // abc.draw(); 


      // bcd = new HexagonTumpal(cX, cY + 4 *  getheight(200) / 3,   200, 'hexagon');
      // bcd.draw(); 



      let objList = [];
      objList.push(abc);
      // objList[0].draw();


      objList2 = [];
      for (let obj of objList){
        if (obj.motive === 'triangle'){
          objList2.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
          objList2.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList2.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList2.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        }
        else if (obj.motive === 'triangle_downward'){
          objList2.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
          objList2.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList2.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList2.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList2.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        }

        // if (obj.motive === 'triangle' || obj.motive === 'triangle_downward'){
        //   objList2.push(new HexagonKawung(obj.cx, obj.cy, obj.l /3, 'hexagon'));
        //   objList2.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList2.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList2.push(new TriangleKawung(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
        //   objList2.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList2.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList2.push(new TriangleKawung(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        // }
      }


      // for (let obj of objList2){
      //   obj.draw();
      // }

      objList3 = [];
      for (let obj of objList2){
        if (obj.motive === 'triangle' || obj.motive === 'triangle_downward'){
          objList3.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
          objList3.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList3.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList3.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        }
        else if (obj.motive === 'hexagon'){
          objList3.push(new HexagonTumpal(obj.cx - 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
          objList3.push(new HexagonTumpal(obj.cx + 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
          objList3.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList3.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList3.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList3.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList3.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList3.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList3.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList3.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
          objList3.push(new HexagonTriangleTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon_triangle'));
        }

        // if (obj.motive === 'triangle' || obj.motive === 'triangle_downward'){
        //   objList3.push(new HexagonKawung(obj.cx, obj.cy, obj.l /3, 'hexagon'));
        //   objList3.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList3.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList3.push(new TriangleKawung(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        // }
        // else if (obj.motive === 'hexagon'){
        //   objList3.push(new HexagonKawung(obj.cx - 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
        //   objList3.push(new HexagonKawung(obj.cx + 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
        //   objList3.push(new HexagonKawung(obj.cx +  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
        //   objList3.push(new HexagonKawung(obj.cx +  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
        //   objList3.push(new HexagonKawung(obj.cx -  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
        //   objList3.push(new HexagonKawung(obj.cx -  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
        //   objList3.push(new TriangleKawung(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
        //   objList3.push(new TriangleKawung(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList3.push(new TriangleKawung(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        //   objList3.push(new TriangleKawung(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        //   objList3.push(new HexagonTriangleKawung(obj.cx, obj.cy, obj.l /3, 'hexagon_triangle'));
        // }



      }

      for (let obj of objList3){
        obj.draw();
      }

      objList4 = [];
      for (let obj of objList3){
        if (obj.motive === 'triangle' || obj.motive === 'triangle_downward'){
          objList4.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));

          // objList4.push(new HexagonKawung(obj.cx, obj.cy, obj.l /3, 'hexagon'));
          // objList4.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          // objList4.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          // objList4.push(new TriangleKawung(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          // objList4.push(new TriangleKawung(obj.cx - obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          // objList4.push(new TriangleKawung(obj.cx + obj.l /3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          // objList4.push(new TriangleKawung(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        }
        else if (obj.motive === 'hexagon'){
          objList4.push(new HexagonTumpal(obj.cx - 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
          objList4.push(new HexagonTumpal(obj.cx + 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon'));
          objList4.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList4.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList4.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList4.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
          objList4.push(new HexagonTriangleTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon_triangle'));
        }
        else if (obj.motive === 'hexagon_triangle'){
          objList4.push(new HexagonTumpal(obj.cx - 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon_triangle'));
          objList4.push(new HexagonTumpal(obj.cx + 2 * obj.l/3, obj.cy, obj.l /3, 'hexagon_triangle'));
          objList4.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon_triangle'));
          objList4.push(new HexagonTumpal(obj.cx +  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon_triangle'));
          objList4.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon_triangle'));
          objList4.push(new HexagonTumpal(obj.cx -  obj.l/3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon_triangle'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
          objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
          objList4.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
          objList4.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon_triangle'));
        }



      }
      
      // for (let obj of objList4){
      //   obj.draw();
      // }


function drawTriangleUpward(x, y, w){
  for (let k=0; k<3; k++){
    // drawTumpal(x, y + getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x - 0.5 * w/3, y + getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x + 0.5 * w/3, y + getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    
    // drawTumpal(x - 0.5 * w/3, y - getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x + 0.5 * w/3, y - getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x, y - getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  
    drawTumpal(x, y - getheight(w/3) * 4 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x - w/3, y + getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x + w/3, y + getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  }

  for (let i=0; i<6; i++){
    drawTumpal(x, y, selectIsens.value, w/3, 60, i * 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  }
}


function drawTriangleDownward(x, y, w){
  for (let k=0; k<3; k++){
    // drawTumpal(x, y + getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x - 0.5 * w/3, y + getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x + 0.5 * w/3, y + getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    
    // drawTumpal(x - 0.5 * w/3, y - getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x + 0.5 * w/3, y - getheight(w/3) * 1 /3, selectIsens.value, w/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    // drawTumpal(x, y - getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  
    drawTumpal(x - w/3, y - getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x + w/3, y - getheight(w/3) * 2 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x, y + getheight(w/3) * 4 /3, selectIsens.value, w/3, 30, -60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  }
    for (let i=0; i<6; i++){
    drawTumpal(x, y, selectIsens.value, w/3, 60, i * 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  }
}

function drawHexagonTriangle(x,y, w){
  for (let k=0; k<3; k++){
    drawTumpal(x, y + getheight(w) * 2/3 , selectIsens.value, w, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x, y - getheight(w) * 2/3 , selectIsens.value, w, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x - w/2, y - getheight(w) * 1/3 , selectIsens.value, w, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x - w/2, y + getheight(w) * 1/3 , selectIsens.value, w, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x + w/2, y - getheight(w) * 1/3 , selectIsens.value, w, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
    drawTumpal(x + w/2, y + getheight(w) * 1/3 , selectIsens.value, w, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  }
}

// drawTriangleUpward(cX, cY + getheight(wp) * 2/3, wp);
// drawTriangleUpward(cX - 0.5 * wp, cY - getheight(wp) *1/3, wp);
// drawTriangleUpward(cX + 0.5 * wp, cY - getheight(wp) *1/3, wp);
// drawTriangleUpward(cX, cY - getheight(wp) * 4/3, wp);
// drawTriangleUpward(cX - wp, cY + getheight(wp) * 2/3, wp);
// drawTriangleUpward(cX + wp, cY + getheight(wp) * 2/3, wp);


// drawTriangleDownward(cX, cY - getheight(wp) * 2/3, wp);
// drawTriangleDownward(cX - 0.5 * wp, cY + getheight(wp) * 1/3, wp);
// drawTriangleDownward(cX + 0.5 * wp, cY + getheight(wp) * 1/3, wp);

// drawTriangleDownward(cX - wp, cY - getheight(wp) * 2/3, wp);
// drawTriangleDownward(cX + wp, cY - getheight(wp) * 2/3, wp);
// drawTriangleDownward(cX, cY + getheight(wp) * 4/3, wp);


  // for (let k=0; k<3; k++){
  //   drawTumpal(cX - wp, cY - getheight(wp) - getheight(wp/3) /3, selectIsens.value, wp/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp, cY - getheight(wp) - getheight(wp/3) /3, selectIsens.value, wp/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

  //   drawTumpal(cX - wp/3, cY + getheight(wp) + 5 *  getheight(wp/3) /3, selectIsens.value, wp/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp/3, cY + getheight(wp) + 5 *  getheight(wp/3) /3, selectIsens.value, wp/3, 30, k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

  //   drawTumpal(cX - wp/3, cY - getheight(wp) - 5 *  getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp/3, cY - getheight(wp) - 5 *  getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 +  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 


  //   drawTumpal(cX - wp, cY + getheight(wp) + getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp, cY + getheight(wp) + getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

  //   drawTumpal(cX - wp - wp/3, cY  + 4 * getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp + wp/3, cY  + 4 * getheight(wp/3) /3, selectIsens.value, wp/3, 30, 60 + k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

  //   drawTumpal(cX - wp - wp/3, cY  - 4 * getheight(wp/3) /3, selectIsens.value, wp/3, 30,  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
  //   drawTumpal(cX + wp + wp/3, cY  - 4 * getheight(wp/3) /3, selectIsens.value, wp/3, 30,  k * 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

  // }







 




}
  else if (selectBox.value === 'triangle'){

    for (let i = 0; i <6; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w * i, selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.5 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      }
    }

    for (let i = 0; i <4; i+=2){
      for (let j =-1; j<6; j++){
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 * w * i , selectIsens.value, w * 0.5, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  

        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(0.25 * w + 0.5 * w *j, 0.25 * w + 0.5 * 0.866 * w + 0.5 * 0.866 *  w * i - 0.33 * 0.866 * 0.5 * w, selectIsens.value, w * 0.5, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      }
    }

    // drawTumpal(200, 200, selectIsens.value, 100, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(200, 200, selectIsens.value, 100, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(200, 200, selectIsens.value, 100, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

    // drawTumpal(300, 200, selectIsens.value, 100, 30, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(300, 200, selectIsens.value, 100, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(300, 200, selectIsens.value, 100, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    // drawTumpal(250, 171.13, selectIsens.value, 100, 30, 420, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  }  
   else if (selectBox.value === 'penta_flake'){
  
  function getRadius(side_length, n){
    theta = (2* Math.PI) / n;
    a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
    b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
    return side_length / Math.sqrt(a + b);
  }
  function getSideLength(n, r){
    theta = (2* Math.PI) / n;
    x2 = Math.cos(2 * theta) * r;
    x1 = Math.cos(theta) * r;
    y2 = Math.sin(2 * theta) * r;
    y1 = Math.sin(theta) * r;
    return Math.sqrt((x2- x1) ** 2 + (y2 - y1) ** 2);
  }


    class PentagonTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
          this.pentagonHeight = Math.tan(54/360 * 2 * Math.PI) * 0.5 * l;
        }
        
          draw() {
            for(let i=0; i<5; i++){
              if (this.motive === 'pentagon'){
                drawTumpal(this.cx, this.cy, selectIsens.value, this.l, 54,  72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              }
              else if (this.motive === 'pentagon_downward'){
                drawTumpal(this.cx, this.cy, selectIsens.value, this.l, 54,  180 + 72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              }
            }
          }
  }

      abc = new PentagonTumpal(cX, cY, 1.1 *  w, 'pentagon');
      // abc.draw();

      let objList = [];
      objList.push(abc);


      objList2 = [];

      


      for (let obj of objList){
        let r = getRadius(obj.l * 2, 5);
        let r_small = r - Math.tan(54/360 * 2 * Math.PI) * obj.l;
        let new_l = getSideLength(5, r_small);
        let dist = Math.tan(54/360 * 2 * Math.PI) * new_l

        if (obj.motive === 'pentagon'){
          objList2.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon_downward'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy - dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy - dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy - dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy - dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy - dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon'));
        }
        else if (obj.motive === 'pentagon_downward'){
          objList2.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy + dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon_downward'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy + dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon_downward'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy + dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon_downward'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy + dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon_downward'));
          objList2.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy + dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon_downward'));
        }
      }



      // for (let obj of objList2){
      //   obj.draw();
      // }


      objList3 = [];

      for (let obj of objList2){
        let r = getRadius(obj.l * 2, 5);
        let r_small = r - Math.tan(54/360 * 2 * Math.PI) * obj.l;
        let new_l = getSideLength(5, r_small);
        let dist = Math.tan(54/360 * 2 * Math.PI) * new_l

        if (obj.motive === 'pentagon'){
          objList3.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon_downward'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy - dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy - dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy - dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy - dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy - dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon'));
        }
        else if (obj.motive === 'pentagon_downward'){
          objList3.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy + dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon_downward'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy + dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon_downward'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy + dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon_downward'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy + dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon_downward'));
          objList3.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy + dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon_downward'));
        }
      }



      for (let obj of objList3){
        obj.draw();
      }

      objList4 = [];

      for (let obj of objList3){
        let r = getRadius(obj.l * 2, 5);
        let r_small = r - Math.tan(54/360 * 2 * Math.PI) * obj.l;
        let new_l = getSideLength(5, r_small);
        let dist = Math.tan(54/360 * 2 * Math.PI) * new_l

        if (obj.motive === 'pentagon'){
          objList4.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon_downward'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy - dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy - dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy - dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy - dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy - dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon'));
        }
        else if (obj.motive === 'pentagon_downward'){
          objList4.push(new PentagonTumpal(obj.cx, obj.cy, new_l, 'pentagon'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 0), obj.cy + dist * Math.cos(2 * Math.PI/5 * 0), new_l, 'pentagon_downward'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 1), obj.cy + dist * Math.cos(2 * Math.PI/5 * 1), new_l, 'pentagon_downward'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 2), obj.cy + dist * Math.cos(2 * Math.PI/5 * 2), new_l, 'pentagon_downward'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 3), obj.cy + dist * Math.cos(2 * Math.PI/5 * 3), new_l, 'pentagon_downward'));
          objList4.push(new PentagonTumpal(obj.cx + dist * Math.sin(2 * Math.PI/5 * 4), obj.cy + dist * Math.cos(2 * Math.PI/5 * 4), new_l, 'pentagon_downward'));
        }
      }



      // for (let obj of objList4){
      //   obj.draw();
      // }


  }

else if (selectBox.value === 'hexagram_fractal'){


    const wp = 0.1 * w;

  function getheight(wp){
     return Math.sin(60 * 2 * Math.PI/ 360) * wp;
  }

  class TriangleTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            if (this.motive === 'triangle') {
                for (let j=0; j<3; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 30,  120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }
            else if (this.motive === 'triangle_downward') {
                for (let j=0; j<3; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 30,  180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }

            }
    }


 class HexagonTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
                for (let j=0; j<6; j++){
                  drawTumpal(this.cx, this.cy, 'tumpal', this.l, 60,  60 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }

            }
    }



  class HexagonTriangleTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            for (let j=0; j<3; j++){
              drawTumpal(this.cx, this.cy + getheight(this.l) * 2/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx - this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx + this.l * 0.5, this.cy - getheight(this.l) * 1/3, 'tumpal', this.l, 30,   120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx, this.cy - getheight(this.l) * 2/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx + this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              drawTumpal(this.cx - this.l * 0.5, this.cy + getheight(this.l) * 1/3, 'tumpal', this.l, 30,   180 + 120 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);

            }

            }
    }



abc = new HexagonTumpal(cX, cY,    w, 'square',0);
// abc.draw();



let objList = [];
objList.push(abc);


objList2 = [];
for (let obj of objList){
  objList2.push(new HexagonTumpal(obj.cx - 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
  objList2.push(new HexagonTumpal(obj.cx + 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
  objList2.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
  objList2.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
  objList2.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
  objList2.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
  objList2.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle'));
  objList2.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
  objList2.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
  objList2.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle_downward'));
  objList2.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
  objList2.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
}

// for (let obj of objList2){
//   obj.draw();
// }

objList3 = [];

for (let obj of objList2){
  if (obj.motive === 'hexagon'){
    objList3.push(new HexagonTumpal(obj.cx - 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
    objList3.push(new HexagonTumpal(obj.cx + 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
    objList3.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList3.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList3.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList3.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList3.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle'));
    objList3.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
    objList3.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
    objList3.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle_downward'));
    objList3.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
    objList3.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
  }
  else if (obj.motive === 'triangle'){
        objList3.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
        objList3.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        objList3.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        objList3.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
  }
  else if (obj.motive === 'triangle_downward'){
        objList3.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        objList3.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        objList3.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        objList3.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
  }

}

for (let obj of objList3){
  obj.draw();
}



objList4 = [];

for (let obj of objList3){
  if (obj.motive === 'hexagon'){
    objList4.push(new HexagonTumpal(obj.cx - 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
    objList4.push(new HexagonTumpal(obj.cx + 2 * obj.l  /3, obj.cy, obj.l /3, 'hexagon'));
    objList4.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList4.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy - 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList4.push(new HexagonTumpal(obj.cx - 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList4.push(new HexagonTumpal(obj.cx + 1 * obj.l  /3, obj.cy + 2 * getheight(obj.l/3), obj.l /3, 'hexagon'));
    objList4.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle'));
    objList4.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
    objList4.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy - getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle'));
    objList4.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 8 /3, obj.l /3, 'triangle_downward'));
    objList4.push(new TriangleTumpal(obj.cx - 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
    objList4.push(new TriangleTumpal(obj.cx + 2 * obj.l/3, obj.cy + getheight(obj.l/3) * 4 /3, obj.l /3, 'triangle_downward'));
  }
  else if (obj.motive === 'triangle'){
        objList4.push(new TriangleTumpal(obj.cx, obj.cy - getheight(obj.l/3) * 4/3, obj.l /3, 'triangle'));
        objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy + getheight(obj.l/3) * 2/3, obj.l /3, 'triangle'));
        objList4.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
  }
  else if (obj.motive === 'triangle_downward'){
        objList4.push(new TriangleTumpal(obj.cx, obj.cy + getheight(obj.l/3) * 4/3, obj.l /3, 'triangle_downward'));
        objList4.push(new TriangleTumpal(obj.cx - obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        objList4.push(new TriangleTumpal(obj.cx + obj.l/3, obj.cy - getheight(obj.l/3) * 2/3, obj.l /3, 'triangle_downward'));
        objList4.push(new HexagonTumpal(obj.cx, obj.cy, obj.l /3, 'hexagon'));
  }

}

// for (let obj of objList4){
//   obj.draw();
// }




//   const wp = 0.35 * w;

//   function getheight(wp){
//      return Math.sin(60 * 2 * Math.PI/ 360) * wp;
//   }

//   function drawTriangleUpward(x,y,w){
//     for(let i=0; i<6; i++){
//       // drawTumpal(x , y, selectIsens.value, w, 60,60 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       // drawTumpal(x , y + 2/3 * getheight(w), selectIsens.value, w, 30,120 * 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

//     }
//     for (let k=0; k<3; k++){
//        drawTumpal(x , y + 2/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x - 0.5 * w , y - 1/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x + 0.5 * w , y - 1/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

//        drawTumpal(x , y - 2/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x - 0.5 * w , y + 1/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x + 0.5 * w , y + 1/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 



//       drawTumpal(x , y - 4/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       drawTumpal(x - w , y + 2/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       drawTumpal(x + w , y + 2/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//     }
//   }

//   function drawTriangleDownward(x,y,w){
//     for(let i=0; i<6; i++){
//       // drawTumpal(x , y, selectIsens.value, w, 60,60 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//     }
//     for (let k=0; k<3; k++){
//       drawTumpal(x , y + 2/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x - 0.5 * w , y - 1/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x + 0.5 * w , y - 1/3 * getheight(w), selectIsens.value, w, 30,120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 

//        drawTumpal(x , y - 2/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x - 0.5 * w , y + 1/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//        drawTumpal(x + 0.5 * w , y + 1/3 * getheight(w), selectIsens.value, w, 30,60 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 


//       drawTumpal(x , y + 4/3 * getheight(w), selectIsens.value, w, 30, 180 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       drawTumpal(x - w , y - 2/3 * getheight(w), selectIsens.value, w, 30,180 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       drawTumpal(x + w , y - 2/3 * getheight(w), selectIsens.value, w, 30,180 + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//     }
//   }




//   function drawHollowHexagram(x, y, w){
//     const h = getheight(w);
//     for (let j=0; j<6; j++){
//       for(let i=0; i<6; i++){
//         drawTumpal(x + 2 * w * Math.cos(2 * Math.PI /6 * j), y + 2 * w * Math.sin(2 * Math.PI /6 * j), selectIsens.value, w, 60,60 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       }
//       for (let k=0; k<3; k++){
//           drawTumpal(x + 8/3 * h * Math.sin(2 * Math.PI /6 * j), y + 8/3 * h * Math.cos(2 * Math.PI /6 * j), selectIsens.value, w, 30,60* j + 120 * k, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true); 
//       }
//     } 
//   }



// drawHollowHexagram(cX - wp, cY - 2 * getheight(wp), wp/3);
// drawHollowHexagram(cX + wp, cY - 2 * getheight(wp), wp/3);
// drawHollowHexagram(cX - wp, cY + 2 * getheight(wp), wp/3);
// drawHollowHexagram(cX + wp, cY + 2 * getheight(wp), wp/3);
// drawHollowHexagram(cX - 2 * wp, cY, wp/3);
// drawHollowHexagram(cX + 2 * wp, cY, wp/3);

// drawTriangleUpward(cX,cY + 8 /3 * getheight(wp) ,wp/3);
// drawTriangleUpward(cX + 2 * wp,cY - 4 /3 * getheight(wp) ,wp/3);
// drawTriangleUpward(cX - 2 * wp,cY - 4 /3 * getheight(wp) ,wp/3);

// drawTriangleDownward(cX,cY - 8 /3 * getheight(wp),wp/3);
// drawTriangleDownward(cX + 2 * wp,cY + 4 /3 * getheight(wp) ,wp/3);
// drawTriangleDownward(cX - 2 * wp,cY + 4 /3 * getheight(wp) ,wp/3);









}


    

   else if (selectBox.value === 'hexagon_square_triangle'){

      spacing_Y = 2 * Math.abs(- 0.5 * w * 0.866 - 0.25 * w);


      for (let j=-1; j <2; j++){
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX, cY - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w), cY - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w), cY - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w), cY - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      }

      cX2 = cX -  Math.abs(0.5 * w + 0.5 * 0.5 * w + 0.866 * 0.5 * w);
      cY2 = cY - 0.5 * spacing_Y;  

      spacing_X = 2 * Math.abs(0.5 * w + 0.5 * 0.5 * w + 0.866 * 0.5 * w);


    for(let i=0; i < 2; i++){
      for (let j=-1; j <2; j++){
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.5 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + i * spacing_X, cY2 - 0.5 * w * 0.866 - 0.25 * w + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(5 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(5 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(7 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(7 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(9 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(9 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + Math.cos(11 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.25 * w) + i * spacing_X, cY2 - 1 * Math.sin(11 * Math.PI/6) *  (0.5 * w * 0.866 + 0.25 * w) + j * spacing_Y, selectIsens.value, w * 0.5, 45, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(12 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(12 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(14 * Math.PI/6) * -1 * (0.5 * w * 0.866 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(14 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(16 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(16 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(18 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(18 * Math.PI/6) *  (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30,90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX2 + Math.cos(20 * Math.PI/6) * -1 * (0.5 * w * 0.86 + 0.5 * 0.866 * 0.83 *  w) + i * spacing_X, cY2 - 1 * Math.sin(20 * Math.PI/6) *  (0.5 * w * 0.866 + 0.5 * 0.86 * 0.83 *  w) + j * spacing_Y, selectIsens.value, w * 0.5, 30, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      }
    } 

  }

   else if (selectBox.value === 'two_hexagons_two_triangles'){

      spacing_X = 0.7 * w;
      spacing_Y = 2 * 2 * Math.sqrt(3) * 0.5 * 0.35 *  w;

      for (let i = -1; i < 2; i++) {
        for (let j=-1; j <2; j++){
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + i * spacing_X, cY - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX - 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + 0.35 * w + i * spacing_X, cY +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
       }
      }

      cX2 = cX - 0.35 * w;
      cY2 = cY - 2 * Math.sqrt(3) * 0.5 * 0.35 *  w;

      

      for (let i = -1; i < 3; i++) {
        for (let j=0; j <2; j++){
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 2 * 0 * 0.5 * Math.sqrt(3) * 0.5 * w + j * spacing_Y, selectIsens.value, 0.35 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX2 + i * spacing_X, cY2 - 1 * Math.sqrt(3) * 0.5 * 0.35 *  w - 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + i * spacing_X, cY2 + 1 * Math.sqrt(3) * 0.5 * 0.35 *  w + 0.34 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y , selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 -  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 - 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
  
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX2 + 0.35 * w + i * spacing_X, cY2 +  0.67 * Math.sqrt(3) * 0.5 * 0.35 *  w + j * spacing_Y, selectIsens.value, w * 0.35, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        }
      }

  }


   else if (selectBox.value === 'dodecagon_triangle'){

     spacing_X = 2 * - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360);

     for (let i = -1; i < 2; i++) {
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,   false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX + spacing_X * i, cY, selectIsens.value, 0.3 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      dist = - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.34 * 0.86 * 0.3 * w;

      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX + spacing_X * i, cY + dist, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(5 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(7 * Math.PI/6), selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(9 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(11 * Math.PI/6), selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY + dist * Math.sin(13 * Math.PI/6), selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
    }


    cX2 = cX - 0.5 * spacing_X;
    cY2 = cY - Math.abs(0.5 * spacing_X) - 1.37 * 0.3 * w;

    spacing_Y = 2 * (Math.abs(0.5 * spacing_X) + 1.37 * 0.3 * w);

     for (let i = -1; i < 2; i++) {
      for (let j=0; j <2; j++){
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,   false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor,  false);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
        drawTumpal(cX2 + spacing_X * i, cY2 + spacing_Y * j, selectIsens.value, 0.3 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      dist = - 0.5 * 0.3 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.34 * 0.86 * 0.3 * w;

      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX2 + spacing_X * i, cY2 + dist + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(5 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(5 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(7 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(7 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 

      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(9 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(9 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(11 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(11 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      drawTumpal(cX2 + dist * Math.cos(13 * Math.PI/6) + spacing_X * i, cY2 + dist * Math.sin(13 * Math.PI/6) + spacing_Y * j, selectIsens.value, w * 0.3, 30,60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
      }
    }



  }

  else if (selectBox.value === 'dodecagon_hexagon_square'){

      spacing_X =  2 * (- 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -  0.25 * w;
      spacing_Y = 2 * (2 * ( 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) +  0.37 * 0.25 * w);

      for (let i=-4; i<3; i++){
        for (let j=0; j<2; j++){
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.866 * 0.25 * w;

          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist, selectIsens.value + j * spacing_Y, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);


          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) -  0.25 * w * 0.5;

          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        }
      }

      cX = cX - 0.5 * (2 * (- 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -  0.25 * w);
      cY = cY  - 2 * ( 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360)) -   0.37 * 0.25 * w;

      for (let i=-4; i<3; i++){
        for(let j=0; j<3; j++){
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + j * spacing_Y, selectIsens.value, 0.25 * w, 75, 330, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) - 0.866 * 0.25 * w;

          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + i * spacing_X, cY + dist + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(5 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(5 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);


          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(7 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(7 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(9 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(9 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(11 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(11 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(13 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(13 * Math.PI/6) + j * spacing_Y, selectIsens.value, 0.25 * w, 60, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          dist = - 0.5 * 0.25 * w * Math.tan(75 * 2 * Math.PI / 360) -  0.25 * w * 0.5;

          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(4 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(4 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(6 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(6 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(8 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(8 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 120, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 210, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(10 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(10 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 300, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(12 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(12 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, -30, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 60, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 150, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);
          drawTumpal(cX + dist * Math.cos(14 * Math.PI/6) + i * spacing_X, cY + dist * Math.sin(14 * Math.PI/6) + j * spacing_Y, selectIsens.value, w * 0.25, 45, 240, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);

        }
      }

  }

 else if (selectBox.value === 'checker_board'){
  function getRadius(side_length, n){
    theta = (2* Math.PI) / n;
    a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
    b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
    return side_length / Math.sqrt(a + b);
  }


    class SquareTumpal {
        constructor(cx, cy, l, motive) {
          this.cx = cx;
          this.cy = cy;
          this.l = l;
          this.motive = motive;
        }
          draw() {
            if (this.motive === 'square'){
                for (let j=0; j<4; j++){
                  drawTumpal(this.cx, this.cy, selectIsens.value, this.l * 0.5, 45,  90 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
            }
            else if (this.motive === 'octagon'){
              const octagon_side_length = 0.5 * this.l / (1 + 2 * Math.cos(Math.PI/4)) ;
              const oct_h = Math.tan(3/8 * Math.PI) * 0.5 *  octagon_side_length;
              const sq_h = Math.tan(2/8 * Math.PI) * 0.5 *  octagon_side_length;
              const dist =  -oct_h - sq_h;


              for (let j=0; j<8; j++){
                  drawTumpal(this.cx, this.cy, selectIsens.value, octagon_side_length, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
              }

              for (let j=0; j<8; j++){
                if (j%2 === 1) {
                drawTumpalOuter(this.cx + (oct_h + sq_h) * Math.sin(j * 2 * Math.PI / 8), this.cy + (oct_h + sq_h) * Math.cos(j * 2 * Math.PI / 8), selectIsens.value, octagon_side_length, 45, 180 - 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
                }
              }



            }
            }
    }

      const os = 0.08 * w;
      const oct_h = Math.tan(3/8 * Math.PI) *  0.5 * os;
      const sq_h = Math.tan(2/8 * Math.PI) *  0.5 * os;
      const dist =  -oct_h - sq_h;
      const r_octagon = getRadius(os, 8);



      abc = new SquareTumpal(cX, cY, 6 *  w, 'square');
      // abc.draw(); 

      let objList = [];
      objList.push(abc);


      objList2 = [];
      for (let obj of objList){
        if (obj.motive === 'square'){
          objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
          objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
          objList2.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
          objList2.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
          objList2.push(new SquareTumpal(obj.cx , obj.cy , obj.l /3, 'octagon'));
          objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
          objList2.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
          objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
          objList2.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
        }
      }



      // for (let obj of objList2){
      //   obj.draw();
      // }

      objList3 = [];
      for (let obj of objList2){
        if (obj.motive === 'square'){
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy , obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
        }
        else if (obj.motive === 'octagon'){
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
          objList3.push(new SquareTumpal(obj.cx, obj.cy , obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'square'));
          objList3.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'square'));
        }
      }

      for (let obj of objList3){
        obj.draw();
      }

      // objList4 = [];
      // for (let obj of objList3){
      //   objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy, obj.l /3, 'square'));
      //   objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy, obj.l /3, 'square'));
      //   objList4.push(new SquareTumpal(obj.cx, obj.cy - obj.l  /6, obj.l /3, 'square'));
      //   objList4.push(new SquareTumpal(obj.cx, obj.cy + obj.l  /6, obj.l /3, 'square'));
      //   objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
      //   objList4.push(new SquareTumpal(obj.cx + obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
      //   objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy - obj.l  /6, obj.l /3, 'octagon'));
      //   objList4.push(new SquareTumpal(obj.cx - obj.l  /6, obj.cy + obj.l  /6, obj.l /3, 'octagon'));
      // }

      // for (let obj of objList4){
      //   obj.draw();
      // }



      // bcd = new SquareTumpal(cX + 0.1 * w, cY, 0.2 * w, 'octagon');
      // bcd.draw();  


      function drawSquareOctagram(x,y,w){
        for (let j=0; j<8; j++){
          drawTumpal(x - 2 * oct_h, y - 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x + 2 * oct_h, y - 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x + 2 * oct_h, y + 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
          drawTumpal(x - 2 * oct_h, y + 2 * oct_h, selectIsens.value, w, 67.5, 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);


          if (j %2 == 1){
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) - 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) - 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) + 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) - 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) + 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) + 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpalOuter(x + dist * Math.sin(j * 2 * Math.PI/8) - 2 * oct_h, y + dist * Math.cos(j * 2 * Math.PI/8) + 2 * oct_h, selectIsens.value, os, 45, -45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);



            drawTumpal(x, y - 2 * oct_h , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x, y + 2 * oct_h , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x - 2 * oct_h, y  , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
            drawTumpal(x + 2 * oct_h, y  , selectIsens.value, os +  os / Math.cos(Math.PI/4), 45, 45 + 45 * j, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);

          }
        }
      }

      // drawSquareOctagram(cX,cY - 6 * oct_h,os);
      // drawSquareOctagram(cX,cY + 6 * oct_h,os);

      // drawSquareOctagram(cX - 6 * oct_h,cY,os);
      // drawSquareOctagram(cX - 6 * oct_h,cY - 6 * h,os);
      // drawSquareOctagram(cX - 6 * oct_h,cY + 6 * h,os);

      // drawSquareOctagram(cX + 6 * oct_h,cY,os);
      // drawSquareOctagram(cX + 6 * oct_h,cY - 6 * h,os);
      // drawSquareOctagram(cX + 6 * oct_h,cY + 6 * h,os);






  }

  else if (selectBox.value === 'octagon_square'){

    for (let i=-1; i <2; i++){
      for (let j = -1; j<2; j++){
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 0, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 90, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 180, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 270, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
        drawTumpal(cX +  j * 0.5 * w * Math.tan(3/8 * Math.PI), cY +  i * 0.5 * w * Math.tan(3/8 * Math.PI), selectIsens.value, 0.5 * w, 67.5, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
      }
    }


    for (let i=0;i<4; i++){
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 45, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 135, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 225, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor);  
      drawTumpal(cX +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.cos(Math.PI/4 + i * Math.PI/2), cY +  (0.25 * w * Math.tan(3/8 * Math.PI) + 0.25 * w * Math.tan(Math.PI/4)) * Math.sin (Math.PI/4 + i * Math.PI/2), selectIsens.value, w * 0.5, 45, 315, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, false,themes[selectThemes.value].tertiaryColor); 
    }
  }
}


// Add an event listener to the select input
selectBox.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectIsens.addEventListener('change', function() {
  redraw();
});

// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
  redraw();
});

redraw();
