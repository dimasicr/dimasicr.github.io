const svgURI = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(svgURI, "svg");
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Color Scheme Options
const themes = {
    "uluwatu": {
        mainColor: "rgb(235, 210, 140)",
        secondaryColor: "rgb(170, 130, 75)",
        strokeColor: "peru",
        strokeWidth: 0.5
    },
    "batavia": {
        mainColor: "#F7F0F5",
        secondaryColor: "#333",
        strokeColor: "none",
        strokeWidth: 0
    },
    "oldJava": {
        mainColor: "#e4d5b7",
        secondaryColor: "#493118",
        strokeColor: "brown",
        strokeWidth: 0.5
    }
    ,"rajaampat": {
        mainColor:   "#F7F0F5",
        secondaryColor: "#5d7591",
        strokeColor: "none",
        strokeWidth: 0.5
    }
};


// Helper Function to find the midpoint of two points
function midpoint(x1, x2) {
  return (x1 + x2) / 2;
}

// Function to calculate the angle of a point with respect to the center point
function getClockwiseAngle(p, center) {
    return (Math.atan2(p[1] - center[1], p[0] - center[0]) * 180 / Math.PI + 360) % 360;
}

// Function to get the center point
function getCenterPoint(points) {
    const xSum = points.reduce((acc, p) => acc + p[0], 0);
    const ySum = points.reduce((acc, p) => acc + p[1], 0);
    const totalPoints = points.length;
    return [xSum / totalPoints, ySum / totalPoints];
}

// Function to sort points clockwise
function sortPointsClockwise(points) {
    const center = getCenterPoint(points);
    points.sort((a, b) => getClockwiseAngle(a, center) - getClockwiseAngle(b, center));
    return points;
}

// Setup function
function setup(w, h, mainColor=themes["batavia"].secondaryColor){
    svg.innerHTML = '';
    if (screenWidth > w){
        svg.setAttribute("width", w);
        svg.setAttribute("height", h);
    }
    else{
        svg.setAttribute("width", screenWidth * (screenWidth/ w));
        svg.setAttribute("height", screenWidth * (screenWidth/w) * h/w);
    }
    bg_rect = document.createElementNS(svgURI, "rect");
    bg_rect.setAttribute("width", "100%");
    bg_rect.setAttribute("height", "100%");
    bg_rect.setAttribute("fill", mainColor);
    svg.appendChild(bg_rect);
}


// Function to draw an n-gonal Kawung centered on x,y, with radius r and rotated as rot_deg in degrees.
function drawPolygonalKawung(n, x, y, r, rot_deg=0, mainColor=themes["batavia"].mainColor, secondaryColor=themes["batavia"].secondaryColor, isen='cecek', padding = false) {
  let vertices = [];
  let deg = 2 * Math.PI / n;
  let group = document.createElementNS(svgURI, "g");
  group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
  group.setAttribute("stroke", secondaryColor);
  svg.appendChild(group);
  console.log(isen);

  if (padding) {
    r = 0.92 * r;
  }

  // Calculate vertices
  for (let i = 0; i < n; i++) {
    let vertexX = Math.cos(deg * (i + 1)) * r;
    let vertexY = Math.sin(deg * (i + 1)) * r;
    vertices.push([vertexX, vertexY]);
  }

  for (let j = 0; j < n; j++) {
    let new_x = midpoint(vertices[0][0], vertices[1][0]);
    let new_y = midpoint(vertices[0][1], vertices[1][1]);
    let ind = vertices.length - 1;
    let new_x2 = midpoint(vertices[0][0], vertices[ind][0]);
    let new_y2 = midpoint(vertices[0][1], vertices[ind][1]);

    // Main Motive
    let kawung_part = document.createElementNS(svgURI, "path");
    kawung_part.setAttribute('transform', `rotate(${j * 360 / n})`);
    kawung_part.setAttribute("d", `M0 0 Q${new_x2} ${new_y2} ${vertices[0][0]} ${vertices[0][1]} Q${new_x} ${new_y} ${0} ${0}Z`);
    kawung_part.setAttribute("fill", mainColor);

    // Secondary Motive
    if (isen ==='cecek'){
        isen_circle = document.createElementNS(svgURI, "circle");
        isen_circle.setAttribute("cx", vertices[j][0] * 0.8);
        isen_circle.setAttribute("cy", vertices[j][1] * 0.8);
        isen_circle.setAttribute("r", r / 17.5);
        isen_circle.setAttribute("fill", secondaryColor);
        group.appendChild(isen_circle);
    }

    group.appendChild(kawung_part);
  }
}



/*
Function to draw Kawung, centered on x, y, with radius r. 
There is an option to add isen and tanahan. Change it to none to only show the main motive.
There is an option to make padding.
*/
function drawKawung(x, y, r, mainColor=themes["batavia"].mainColor, secondaryColor=themes["batavia"].secondaryColor, strokeColor=themes["batavia"].strokeColor , isen = 'cecek', tanahan = 'rect_diamond', padding = false) {
    let group = document.createElementNS(svgURI, "g");
    let klowonganKawung = document.createElementNS(svgURI, "g");
    let cecekKawung = document.createElementNS(svgURI, "g");
    let tanahanKawung = document.createElementNS(svgURI, "g");
    let tanahanKawung2 = document.createElementNS(svgURI, "g");
    svg.appendChild(group);
    group.setAttribute("transform", `translate(${x}, ${y})`);
    group.appendChild(klowonganKawung);
    group.appendChild(cecekKawung);
    group.appendChild(tanahanKawung);
    group.appendChild(tanahanKawung2);
    group.setAttribute("stroke", strokeColor);
    group.setAttribute("stroke-width", 0.5);
    tanahanKawung2.setAttribute("fill", mainColor);
    tanahanKawung.setAttribute("transform", "rotate(45)");
    tanahanKawung.setAttribute("fill", mainColor);
    for (let i = 0; i < 4; i++) {
        let kwg = document.createElementNS(svgURI, "path");
        if (padding) {
            kwg.setAttribute("d", `M ${0.05 * r} -${0.95 * r} A${0.9 * r} ${0.9 * r} 0 0 1 ${0.95 * r} -${0.05 * r} A${0.9 * r} ${0.9 * r} 0 0 1 ${0.05 * r} -${0.95 * r}`);
        } else {
            kwg.setAttribute("d", `M 0 -${r} A${r} ${r} 0 0 1 ${r} 0 A${r} ${r} 0 0 1 0 -${r}`);
        }
        kwg.setAttribute("transform", `rotate(${90 * i})`);
        kwg.setAttribute("fill", mainColor);
        klowonganKawung.appendChild(kwg);
        if (isen === 'cecek') {
            let isenElement = document.createElementNS(svgURI, "circle");
            isenElement.setAttribute("cx", -r * 6 / 7);
            isenElement.setAttribute("cy", -r / 7);
            isenElement.setAttribute("r", r / 15);
            isenElement.setAttribute("transform", `rotate(${90 * i})`);
            isenElement.setAttribute("fill", secondaryColor);
            cecekKawung.appendChild(isenElement);
            isenElement2 = isenElement.cloneNode(true);
            isenElement2.setAttribute("cx", -r / 7);
            isenElement2.setAttribute("cy", -r * 6 /7);
            cecekKawung.appendChild(isenElement2);
        }
        if (tanahan === 'rect_diamond') {
            let rect = document.createElementNS(svgURI, "rect");
            rect.setAttribute("x", -r * 22.5 / 70);
            rect.setAttribute("y", -r * 1.5 / 70);
            rect.setAttribute("width", r * 15 / 70);
            rect.setAttribute("height", r * 4 / 70);
            rect.setAttribute("transform", `rotate(${90 * i}) scale(1.1 1.1)`);
            tanahanKawung.appendChild(rect);
            let tnh = document.createElementNS(svgURI, "path");
            tnh.setAttribute("d", `M -${r * 30 / 70} 0 Q -${r * 20 / 70}  -${r * 6 / 70}  -${r * 10 / 70}  0 Q -${r * 20 / 70}  ${r * 6 / 70}  -${r * 30 / 70}  0`);
            tnh.setAttribute("transform", `rotate(${90 * i}) scale(1.1 1.1)`);
            tanahanKawung2.appendChild(tnh);
        }
        else if (tanahan === 'hexagonal'){
            drawPolygonalKawung(8,x, y, 0.35 * r , 0, mainColor, "none", 'none');
        }
    }
}



function drawLeafKawung(x, y, r, rot_deg =0, mainColor=themes["batavia"].mainColor, secondaryColor=themes["batavia"].secondaryColor, strokeColor=themes["batavia"].strokeColor , isen = 'cecek', padding = false, container= svg) {
    let group = document.createElementNS(svgURI, "g");
    let klowonganKawung = document.createElementNS(svgURI, "g");
    let cecekKawung = document.createElementNS(svgURI, "g");
    container.appendChild(group);
    group.setAttribute("transform", `translate(${x}, ${y}) rotate(${rot_deg})`);
    group.appendChild(klowonganKawung);
    group.appendChild(cecekKawung);
    group.setAttribute("stroke", strokeColor);
    group.setAttribute("stroke-width", 0.5);
    
    let kwg = document.createElementNS(svgURI, "path");
    if (padding) {
        kwg.setAttribute("d", `M ${-0.45 * r} ${0.45 * r} A${0.9 * r} ${0.9 * r} 0 0 1 ${0.45 * r} ${-0.45 * r} A${0.9 * r} ${0.9 *r} 0 0 1 ${-0.45 * r} ${0.45 * r}`);
    } 
    else {
        kwg.setAttribute("d", `M ${-0.5 * r} ${0.5 * r} A${r} ${r} 0 0 1 ${0.5 * r} ${-0.5 * r} A${r} ${r} 0 0 1 ${-0.5 * r} ${0.5 * r}`);
    }

    kwg.setAttribute("fill", mainColor);
    klowonganKawung.appendChild(kwg);
    if (isen === 'cecek') {
        let isenElement = document.createElementNS(svgURI, "circle");
        isenElement.setAttribute("cx", r * 6 / 7 - 0.5 * r);
        isenElement.setAttribute("cy", - r * 6/ 7  + 0.5 * r);
        isenElement.setAttribute("r", r / 15);
        isenElement.setAttribute("fill", secondaryColor);
        cecekKawung.appendChild(isenElement);
        isenElement2 = isenElement.cloneNode(true);
        isenElement2.setAttribute("cx", r / 7 - 0.5 * r);
        isenElement2.setAttribute("cy", -r /7 + 0.5 * r);
        cecekKawung.appendChild(isenElement2);
    }
}


function drawFibonacciKawung(x,y, r, mainColor = themes["batavia"].mainColor, secondaryColor = themes["batavia"].secondaryColor, strokeColor = themes["batavia"].strokeColor, isen='cecek', padding = false){
    let container = document.createElementNS(svgURI, "g");
    container.setAttribute("transform", `translate(${x}, ${y})`);
    svg.appendChild(container);

    r2 = 0.6 * r;
    r3 = 0.4 * r;
    r4 = 0.2 * r;
    r5 = 0.2 * r;
    drawLeafKawung(0.5*r,- 0.5 *r, r, 0, mainColor, secondaryColor, strokeColor, 'cecek', padding, container);
    drawLeafKawung(r +  r2 * 0.5,-r +  r2 * 0.5, r2, 90, mainColor, secondaryColor, strokeColor, 'cecek', padding, container);
    drawLeafKawung(r +  r2 - 0.5 * r3 ,-r +  r2 + 0.5 * r3, r3, 0, mainColor, secondaryColor, strokeColor, 'cecek', padding, container);
    drawLeafKawung(r +  r2 - r3 - 0.5 * r4 ,-r +  r2 + r3 - 0.5 * r4, r4, 90, mainColor, secondaryColor, strokeColor, 'cecek', padding, container);
    drawLeafKawung(r +  r2 - r3 - 0.5 * r4 ,-r +  r2 + r3 -  r4 - 0.5 * r5, r5, 0, mainColor, secondaryColor, strokeColor, 'cecek', padding, container);

    container2 = container.cloneNode(true);
    container2.setAttribute("transform", `translate(${x}, ${y}) scale(1 -1)`);
    svg.appendChild(container2);

    container3 = container.cloneNode(true);
    container3.setAttribute("transform", `translate(${x}, ${y}) scale(-1 1)`);
    svg.appendChild(container3);


    container4 = container.cloneNode(true);
    container4.setAttribute("transform", `translate(${x}, ${y}) scale(-1 -1)`);
    svg.appendChild(container4);


}

class Circle {
  constructor(r, center) {
    this.r = r;
    this.b = 1 / this.r;

    this.center = center;
    this.bc = this.center.mul(this.b);

    this.alpha = 0;
  }
}

const solveEquation = (k1, k2, k3) => {
  // "When trying to find the radius of a fourth circle tangent to three given kissing circles, the equation is best rewritten as:"
  // https://en.wikipedia.org/wiki/Descartes%27_theorem
  // return k1 + k2 + k3 + (2 * Math.sqrt(k1 * k2 + k2 * k3 + k1 * k3))
  let s = k1.add(k2).add(k3);

  let k12 = k1.mul(k2);
  let k13 = k1.mul(k3);
  let k23 = k2.mul(k3);
  let ksum = k12.add(k13).add(k23);

  return ksum.sqrt().mul(2).add(s);
}

const getAdjacent = (c1, c2, c3) => {
  // get the bend (curvature) fo the 4th circle:
  // https://mathlesstraveled.com/2016/05/04/apollonian-gaskets-and-descartes-theorem/
  // bend4 = b1 + b2 + b3 + (2 * Math.sqrt(b1 * b2 + b2 * b3 + b1 * b3));
  let b1 = new Complex(c1.b);
  let b2 = new Complex(c2.b);
  let b3 = new Complex(c3.b);
  let b4 = solveEquation(b1, b2, b3);
  let r4 = Math.abs(1 / b4.re);

  // get the position of the forth circle
  // https://mathlesstraveled.com/2016/06/10/apollonian-gaskets-and-descartes-theorem-ii/
  // http://arxiv.org/pdf/math/0101066v1.pdf
  let pos4 = solveEquation(c1.bc, c2.bc, c3.bc).div(b4);

  return new Circle(r4, pos4);
}

const flip = (c4, c1, c2, c3) => {
  // "So if we already have one value for b_4, we can just subtract it from double the sum of
  // the other three bends to find the second value of b_4."
  // https://mathlesstraveled.com/2016/05/04/apollonian-gaskets-and-descartes-theorem/
  let bend = 2 * (c1.b + c2.b + c3.b) - c4.b;

  // "For each operation we compute the same formula twice, once for the bends and once
  // for the bend-center products. To recover the center of a circle, just divide the
  // bend-center product by the bend. And voila!"
  // https://mathlesstraveled.com/2016/06/10/apollonian-gaskets-and-descartes-theorem-ii/
  let center = c1.bc.add(c2.bc).add(c3.bc).mul(2).sub(c4.bc).div(bend);

  return new Circle(1 / bend, center);
}

const recurse = (c1, c2, c3, c4, depth = 0) => {
  let cn2 = flip(c2, c1, c3, c4);
  let cn3 = flip(c3, c1, c2, c4);
  let cn4 = flip(c4, c1, c2, c3);

  if (cn2.r > 5) {
    addCircle(cn2);
    recurse(cn2, c1, c3, c4, depth + 1);
  }

  if (cn3.r > 5) {
    addCircle(cn3);
    recurse(cn3, c1, c2, c4, depth + 1);
  }

  if (cn4.r > 5) {
    addCircle(cn4);
    recurse(cn4, c1, c2, c3, depth + 1);
  }
}

const drawGasket = (c1, c2, c3) => {
  let c4 = getAdjacent(c1, c2, c3);
  let c5 = flip(c1, c2, c3, c4)

  addCircle(c1);
  addCircle(c2);
  addCircle(c3);
  addCircle(c4);
  addCircle(c5);

  recurse(c1, c2, c3, c4);
  recurse(c5, c2, c3, c4);
}

const addCircle = (circle) => {
  circles.push(circle);

};


function drawApollonianKawung(x,y, r, motive='symmetric' ,mainColor = themes["oldJava"].mainColor, secondaryColor= themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, isen='cecek', tanahan='rect_diamond', padding=false ){
  circles = [];
  if (motive === 'symmetric'){
    c1r = -r;
    c1center = new Complex(x,y);
    c1 = new Circle(c1r, c1center);
    circles.push(c1);
    
    c2r = Math.abs(c1r/2);
    c2center = new Complex(x - c2r, y);
    c2 = new Circle(c2r, c2center);
    circles.push(c2);
    
    c3r = Math.abs(c1r/2);
    c3center = new Complex(x+ c3r, y);
    c3 = new Circle(c3r, c3center);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
    });
  }
 else if (motive === 'asymmetric'){
    c1r = -r;
    c1center = new Complex(x, y);
    let c1 = new Circle(c1r, c1center);
    
    let c2r = 0.63 * r;
    let c2center = new Complex(x, y + c1r + c2r);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = Math.abs(c1.r) - c2.r;
    let c3x = c2.center.re;
    let c3y = c2.center.im + c2.r + c3r;
    let c3center = new Complex(c3x, c3y);
    let c3 = new Circle(c3r, c3center);
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
    });
  }

else if (motive === 'triplet'){
    //https://www.quora.com/If-three-tangent-circles-of-equal-radius-are-inscribed-in-a-circle-of-radius-3-what-are-their-radii-What-is-r-in-the-picture-and-how-do-you-calculate-it
    let c1r = -r;
    let c1center = new Complex(x,y);
    let c1 = new Circle(c1r, c1center);
    
    let c2r =  0.464 * Math.abs(c1r) ;
    let c2center = new Complex(x + c2r , y +  c2r * Math.sqrt(3) / 3);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = c2r;
    let c3center = new Complex(x - c2r , y +  c2r * Math.sqrt(3) / 3);
    let c3 = new Circle(c3r, c3center);
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
    });
  }
}

function drawArbitraryKawung(Points, x, y, r =200, rotDeg= 0, mainColor=themes["oldJava"].mainColor, secondaryColor=themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, use_outline=false){  
    let container = document.createElementNS(svgURI, "g");
    container.setAttribute("transform", `translate(${x}, ${y}) rotate(${rotDeg}) scale(${r/200} , ${r/200})`);
    svg.appendChild(container);
    let outline = document.createElementNS(svgURI, "path");
    outline_sentence = `M ${Points[0][0]}, ${Points[0][1]} `;


    // Get center
    xc = 0;
    yc = 0;
    for (let i=0; i < Points.length; i++){
      xc += Points[i][0];
      yc += Points[i][1];
      if (i>0){
        outline_sentence += `L${Points[i][0]}, ${Points[i][1]} `;
      }
    }

    outline_sentence += 'Z';
    outline.setAttribute("d", outline_sentence);
    outline.setAttribute("fill", "none");
    outline.setAttribute("stroke",mainColor);
    outline.setAttribute("stroke-width", 0.25);
    if (use_outline){
        container.appendChild(outline);
    }

    xc = xc / Points.length;
    yc = yc / Points.length;



    // Points = sortPointsClockwise(Points);

    for (let i=0; i < Points.length ; i++){
        if (i < Points.length -1) {
            new_x = midpoint(Points[i][0],Points[i+1][0]);
            new_y = midpoint(Points[i][1],Points[i+1][1]);
        }
        else {
            new_x = midpoint(Points[i][0],Points[0][0]);
            new_y = midpoint(Points[i][1],Points[0][1]);    
        }
    
        if (i === 0){
            new_x2 = midpoint(Points[i][0],Points[Points.length -1][0]);
            new_y2 = midpoint(Points[i][1],Points[Points.length -1][1]);  
        }
        else {
            new_x2 = midpoint(Points[i][0], Points[i-1][0]);
            new_y2 = midpoint(Points[i][1], Points[i-1][1]);  
        }

        // Quadratic Bezier Curve
        kawung_part = document.createElementNS(svgURI, "path");
        kawung_part.setAttribute("d", `M ${xc} ${yc} Q${new_x} ${new_y} ${Points[i][0]} ${Points[i][1]} Q${new_x2} ${new_y2} ${xc} ${yc}`);
        kawung_part.setAttribute("stroke", strokeColor);
        kawung_part.setAttribute("fill", mainColor);
        kawung_part.setAttribute("stroke-width", 0.25);
        container.appendChild(kawung_part);
    
        circle = document.createElementNS(svgURI, "circle");
        circle.setAttribute("cx", xc + 0.80 * (Points[i][0] - xc)); // x-coordinate of the center
        circle.setAttribute("cy", yc + 0.80 * (Points[i][1] - yc)); // y-coordinate of the center
        circle.setAttribute("r", 0.04 * Math.sqrt(  (Points[i][0] - xc) ** 2 + (Points[i][1] - yc) ** 2));   // radius
        // circle.setAttribute('stroke', secondary_colour);
        circle.setAttribute("fill", secondaryColor); // fill color
        container.appendChild(circle);
    }
}




// document.addEventListener("DOMContentLoaded", function(event) {
//     setup(400, 400, themes["oldJava"].secondaryColor);
//     cX = svg.getAttribute("width")/2;
//     cY = svg.getAttribute("height")/2;


    // for(let i=0; i < squareFiveVertices.length; i++){
        // drawArbitraryKawung(squareFiveVertices[i], cX, cY, cX,0, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
        // for (let j=0; j < 4; j++){
            // drawArbitraryKawung(pentagonFourVertices[i], cX, cY, cX, 90 * j, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
            // drawArbitraryKawung(hexagonFourVertices[i], cX, cY, cX,90 * j, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, '#4D0900');
        // }
    // }


    // cX = svg.getAttribute("width")/2;
    // cY = svg.getAttribute("height")/2;
    // rFib = svg.getAttribute("width") / 9.6;

    // for(let i=0; i<3; i++){
    //     for(let j=0; j<5; j++){
    //         drawFibonacciKawung(1.6 * rFib + i * 2 * rFib * 1.6, rFib + j * 2 * rFib, rFib, themes["oldJava"].mainColor, themes["oldJava"].secondaryColor, themes["oldJava"].strokeColor, 'cecek', false);
    //     }
    // }



    // Apollonian Kawung
    // drawApollonianKawung(cX ,cY, 0.93 * cY, 'triplet',themes["oldJava"].mainColor,themes["oldJava"].secondaryColor,themes["oldJava"].strokeColor, 'cecek', 'rect_diamond', false);


// });



 