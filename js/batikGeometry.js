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
        tertiaryColor:"#E5E4E2",
        strokeColor: "black",
        strokeWidth: 0
    },
    "oldJava": {
        mainColor: "#e4d5b7",
        secondaryColor: "#493118",
        tertiaryColor: "rgb(247,235,213)",
        strokeColor: "brown",
        strokeWidth: 0.5
    }
    ,"rajaampat": {
        mainColor:   "#F7F0F5",
        secondaryColor: "#5d7591",
        strokeColor: "none",
        strokeWidth: 0.5
    }
    ,"tetradiac": {
        mainColor:   ["#87895d", "#d19f5b", "#945f42", "#616f82"],
        secondaryColor: "#f1e4d8",
        isenColor: "#493118",
        strokeColor: "black",
        strokeWidth: 0.5
    }
    ,"pastel": {
        mainColor: "#b49084",
        secondaryColor: "#38445a",
        isenColor: "#e8eadd",
        strokeColor: "gold",
        strokeWidth: 0.5
    }
    ,"sketch": {
        mainColor: "none",
        secondaryColor: "none",
        isenColor: "none",
        strokeColor: "black",
        strokeWidth: 0.5
    }
    ,"goldenSunset": {
        mainColor: "rgb(214,164,85)",
        secondaryColor: "rgb(105,43,45)",
        tertiaryColor: "rgb(247,235,213)",
        isenColor: "white",
        strokeColor: "rgb(189,53,37)",
        strokeWidth: 0.1
    }   
    ,"green": {
        mainColor: "rgb(83,168,162)",
        secondaryColor: "rgb(0,77,90)",
        tertiaryColor: "rgb(255,253,241)",
        isenColor: "white",
        strokeColor: "rgb(238,134,154)",
        strokeWidth: 0.1
    }
    ,"megaMendung": {
        mainColor: "#6ca1d2",
        secondaryColor: "#02084b",
        tertiaryColor: "#6c9fd0",
        isenColor: "white",
        strokeColor: "white",
        strokeWidth: 0.5
    }
    ,"goldenRed": {
        mainColor: "#daaf71",
        secondaryColor: "#793f32",
        isenColor: "white",
        strokeColor: "#F2E4CF",
        strokeWidth: 0.5
    }
};


// Helper Function to find the midpoint of two points
function midpoint(x1, x2) {
  return (x1 + x2) / 2;
}

function getRadius(side_length, n){
  theta = (2* Math.PI) / n;
  a = (Math.cos(2 * theta) - Math.cos(theta))** 2;
  b = (Math.sin(2 * theta) - Math.sin(theta))** 2;
  return side_length / Math.sqrt(a + b);
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
    bg_rect.setAttribute("rx", 15);
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
    group.setAttribute("stroke-width", 0.2);
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
            if (padding){
                isenElement.setAttribute("r", r / 25);
            }
            else {
                isenElement.setAttribute("r", r / 15);
            }
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
  constructor(r, center, color) {
    this.r = r;
    this.b = 1 / this.r;

    this.center = center;
    this.bc = this.center.mul(this.b);

    this.alpha = 0;
    this.color= color;
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

function adjacentColor(col1, col2, col3) {
    const colorList = ["#d19f5b", "#945f42", "#616f82", "#87895d"];
    for (let i = 0; i < colorList.length; i++) {
        if (colorList[i] !== col1 && colorList[i] !== col2 && colorList[i] !== col3) {
            return colorList[i];
        }
    }
    return null; // Return null if no color is found
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

  col4 = adjacentColor(c1.color, c2.color, c3.color);

  return new Circle(r4, pos4, col4);
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

  col4 = adjacentColor(c1.color, c2.color, c3.color);
  return new Circle(1 / bend, center, col4);
}

const recurse = (c1, c2, c3, c4, depth = 0) => {
  let cn2 = flip(c2, c1, c3, c4);
  let cn3 = flip(c3, c1, c2, c4);
  let cn4 = flip(c4, c1, c2, c3);

  if (cn2.r > selectThreshold.value ) {
    addCircle(cn2);
    recurse(cn2, c1, c3, c4, depth + 1);
  }

  if (cn3.r > selectThreshold.value) {
    addCircle(cn3);
    recurse(cn3, c1, c2, c4, depth + 1);
  }

  if (cn4.r > selectThreshold.value) {
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


function drawApollonianKawung(x,y, r, motive='symmetric', theme='oldJava', mainColor = themes["oldJava"].mainColor, secondaryColor= themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, isen='cecek', tanahan='rect_diamond', padding=false ){
  circles = [];
  if (motive === 'symmetric'){
    c1r = -r;
    c1center = new Complex(x,y);
    c1 = new Circle(c1r, c1center, "#616f82");
    circles.push(c1);
    
    c2r = Math.abs(c1r/2);
    c2center = new Complex(x - c2r, y);
    c2 = new Circle(c2r, c2center, "#d19f5b");
    circles.push(c2);
    
    c3r = Math.abs(c1r/2);
    c3center = new Complex(x+ c3r, y);
    c3 = new Circle(c3r, c3center, "#87895d");
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
    });

  }

else if (motive === 'five'){
    c1r = -r;
    c1center = new Complex(x,y);
    c1 = new Circle(c1r, c1center, "#616f82");
    circles.push(c1);
    
    c2r = Math.abs(c1r / (Math.sqrt(2) + 1));
    c2center = new Complex(x - r + c2r, y);
    c2 = new Circle(c2r, c2center, "#d19f5b");
    circles.push(c2);
    
    c3r = Math.abs(c1r / (Math.sqrt(2) + 1));
    c3center = new Complex(x, y - r + c3r);
    c3 = new Circle(c3r, c3center, "#87895d");
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    newCircles = newCircles.filter(circle => (circle.center.re < x - 0.5 * r * (Math.sqrt(2)-1) && circle.center.im < y - 0.5 * r * (Math.sqrt(2)-1)));
    newCircles.push(c2);
    newCircles.push(c3);

    c4r = Math.abs(c1r / (Math.sqrt(2) + 1));
    c4center = new Complex(x + r - c3r, y );
    c4 = new Circle(c4r, c4center, "#87895d");

    circles = [];
    circles.push(c1);
    circles.push(c3);
    circles.push(c4);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles2 = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    newCircles2 = newCircles2.filter(circle => (circle.center.re > x + 0.5 * r * (Math.sqrt(2)-1) && circle.center.im < y - 0.5 * r * (Math.sqrt(2)-1)));
    newCircles2.push(c4);
    newCircles.push(...newCircles2);

    c5r = Math.abs(c1r / (Math.sqrt(2) + 1));
    c5center = new Complex(x, y + r - c5r );
    c5 = new Circle(c5r, c5center, "#87895d");

    circles = [];
    circles.push(c1);
    circles.push(c4);
    circles.push(c5);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles3 = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    newCircles3 = newCircles3.filter(circle => (circle.center.re > x + 0.5 * r * (Math.sqrt(2)-1) && circle.center.im > y + 0.5 * r * (Math.sqrt(2)-1)));
    newCircles3.push(c5);
    newCircles.push(...newCircles3);

    circles = [];
    circles.push(c1);
    circles.push(c5);
    circles.push(c2);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles4 = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    newCircles4 = newCircles4.filter(circle => (circle.center.re < x - 0.5 * r * (Math.sqrt(2)-1) && circle.center.im > y + 0.5 * r * (Math.sqrt(2)-1)));
    newCircles4.push(c5);
    newCircles.push(...newCircles4);

    c6r = Math.abs((c1r / (Math.sqrt(2) + 1)) * (Math.sqrt(2) - 1));
    c6center = new Complex(x, y);
    c6 = new Circle(c6r, c6center, "#87895d");

    newCircles.push(c6);

    circles = [c2, c3, c6];
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles5 = circles.filter(circle => (circle.r > 0 ));
    newCircles.push(...newCircles5);


    circles = [c3, c4, c6];
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles6 = circles.filter(circle => (circle.r > 0 ));
    newCircles.push(...newCircles6);

    circles = [c4, c5, c6];
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles7 = circles.filter(circle => (circle.r > 0 ));
    newCircles.push(...newCircles7);

    


    
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
    });


  }


      
 else if (motive === 'asymmetric'){
    c1r = -r;
    c1center = new Complex(x, y);
    let c1 = new Circle(c1r, c1center, "#616f82");
    
    let c2r = 0.63 * r;
    let c2center = new Complex(x, y + c1r + c2r);
    let c2 = new Circle(c2r, c2center, "#d19f5b");
    
    let c3r = Math.abs(c1.r) - c2.r;
    let c3x = c2.center.re;
    let c3y = c2.center.im + c2.r + c3r;
    let c3center = new Complex(c3x, c3y);
    let c3 = new Circle(c3r, c3center, "#87895d");
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
    });


  }

else if (motive === 'triplet'){
    //https://www.quora.com/If-three-tangent-circles-of-equal-radius-are-inscribed-in-a-circle-of-radius-3-what-are-their-radii-What-is-r-in-the-picture-and-how-do-you-calculate-it
    let c1r = -r;
    let c1center = new Complex(x,y);
    let c1 = new Circle(c1r, c1center, "#616f82");
    
    let c2r =  0.464 * Math.abs(c1r) ;
    let c2center = new Complex(x + c2r , y +  c2r * Math.sqrt(3) / 3);
    let c2 = new Circle(c2r, c2center, "#d19f5b");
    
    let c3r = c2r;
    let c3center = new Complex(x - c2r , y +  c2r * Math.sqrt(3) / 3);
    let c3 = new Circle(c3r, c3center, "#87895d");
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
    });



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

function drawApollonianTumpal(x,y, r, motive='symmetric', theme='oldJava', mainColor = themes["oldJava"].mainColor, secondaryColor= themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, isen='cecek', tanahan='rect_diamond', padding=false ){
  circles = [];
  if (motive === 'symmetric'){
    c1r = -r;
    c1center = new Complex(x,y);
    c1 = new Circle(c1r, c1center, "#616f82");
    circles.push(c1);
    
    c2r = Math.abs(c1r/2);
    c2center = new Complex(x - c2r, y);
    c2 = new Circle(c2r, c2center, "#d19f5b");
    circles.push(c2);
    
    c3r = Math.abs(c1r/2);
    c3center = new Complex(x+ c3r, y);
    c3 = new Circle(c3r, c3center, "#87895d");
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });

    
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
       s = getSideLength(12, e.r);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 0, mainColor, secondaryColor, strokeColor,   false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 30, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 60, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 90, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 120, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 150, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 180, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 210, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 240, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 270, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 300, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 330, mainColor, secondaryColor, strokeColor, false);
        }
        else {
       s = getSideLength(12, e.r);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 0, mainColor, secondaryColor, strokeColor,   false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 30, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 60, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 90, mainColor, secondaryColor, strokeColor,  false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 120, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 150, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 180, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 210, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 240, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 270, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 300, mainColor, secondaryColor, strokeColor, false);
       drawTumpal(e.center.re, e.center.im, 'tumpal', s, 75, 330, mainColor, secondaryColor, strokeColor, false);
            
        }
    });
    


  }
 else if (motive === 'asymmetric'){
    c1r = -r;
    c1center = new Complex(x, y);
    let c1 = new Circle(c1r, c1center, "#616f82");
    
    let c2r = 0.63 * r;
    let c2center = new Complex(x, y + c1r + c2r);
    let c2 = new Circle(c2r, c2center, "#d19f5b");
    
    let c3r = Math.abs(c1.r) - c2.r;
    let c3x = c2.center.re;
    let c3y = c2.center.im + c2.r + c3r;
    let c3center = new Complex(c3x, c3y);
    let c3 = new Circle(c3r, c3center, "#87895d");
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
    });


  }

else if (motive === 'triplet'){
    //https://www.quora.com/If-three-tangent-circles-of-equal-radius-are-inscribed-in-a-circle-of-radius-3-what-are-their-radii-What-is-r-in-the-picture-and-how-do-you-calculate-it
    let c1r = -r;
    let c1center = new Complex(x,y);
    let c1 = new Circle(c1r, c1center, "#616f82");
    
    let c2r =  0.464 * Math.abs(c1r) ;
    let c2center = new Complex(x + c2r , y +  c2r * Math.sqrt(3) / 3);
    let c2 = new Circle(c2r, c2center, "#d19f5b");
    
    let c3r = c2r;
    let c3center = new Complex(x - c2r , y +  c2r * Math.sqrt(3) / 3);
    let c3 = new Circle(c3r, c3center, "#87895d");
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(function(e) {
        if (theme === 'tetradiac') {
            drawKawung(e.center.re, e.center.im, e.r, e.color, "#493118", strokeColor , isen, tanahan, padding);
        }
        else {
            drawKawung(e.center.re, e.center.im, e.r, mainColor, secondaryColor, strokeColor , isen, tanahan, padding);
        }
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


function drawFlower(x, y, n, A, b = 0.3,  mainColor=themes["batavia"].mainColor, secondaryColor=themes["batavia"].secondaryColor, strokeColor=themes["batavia"].strokeColor , use_isen = true) {
  group = document.createElementNS(svgURI, "g");
  group.setAttribute("transform", `translate(${x}, ${y})`);
  group.setAttribute("fill", mainColor);
  group.setAttribute("stroke", secondaryColor);
  container.appendChild(group);


  let flower = document.createElementNS(svgURI, "path");
  sentence = '';

  maxR = 0;
  maxTheta = -1000;


  for(let theta = 0; theta <= 360; theta++){
      let r = A * Math.pow(Math.abs(Math.sin(  (n*theta) * (2 * Math.PI) / 360 )), b)  - 0.25 * A * Math.pow(Math.abs(Math.sin( (2*n*theta) * (2 * Math.PI) / 360    )), b) + 0.3 * A;
      if (Math.abs(r) > Math.abs(maxR) ){
        maxR = r;
        maxTheta = theta;
      }


      let x = r * Math.cos( theta * (2 * Math.PI) / 360);
      let y = r * Math.sin( theta * (2 * Math.PI) / 360);

      if (theta === 0){
        sentence += `M ${x} ${y} `
      }
      else {
        sentence += `L ${x} ${y}`
      }
  }


  flower.setAttribute("d", sentence);
  flower.setAttribute("stroke", secondaryColor);
  flower.setAttribute("fill", mainColor);
  flower.setAttribute("stroke-width", 2);
  group.appendChild(flower);

  



  if (use_isen){


     for (let i = 0; i < 2 * n ; i++){
        let deg = i * 2 * Math.PI / (2 * n) + Math.PI / (2 * n);


        isen_group = document.createElementNS(svgURI, "g");
        if (2* n === 3){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)  + 30  })`);
        }
        else if (2* n === 4){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)  + 90  })`);
        }
        else if (2* n === 5){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)  + 54  })`);
        }
        else if (2* n === 6){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)  + 30  })`);
        }
        else if (2* n === 7){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)  + 15  })`);
        }
        else if (2* n === 8){
            isen_group.setAttribute("transform", `rotate(${ deg * 360 / (2 * Math.PI)    })`);
        }
        group.appendChild(isen_group);

        line = document.createElementNS(svgURI, "path");
        line.setAttribute("d", `M${-0.025 * A} ${0}, Q ${-0.025 * A} ${0.65 * A }, ${-0.1 * A} ${0.65 * A } `);
        line.setAttribute("stroke", secondaryColor);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke-width", 1.5);
        isen_group.appendChild(line);

        line = document.createElementNS(svgURI, "path");
        line.setAttribute("d", `M${0.025 * A} ${0}, Q ${0.025 * A} ${0.65 * A }, ${0.1 * A} ${0.65 * A } `);
        line.setAttribute("stroke", secondaryColor);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke-width", 1.5);
        isen_group.appendChild(line);

        line = document.createElementNS(svgURI, "path");
        line.setAttribute("d", `M${-0.05 * A} ${0}, Q ${-0.1 * A} ${0.55 * A }, ${-0.15 * A} ${0.55 * A } `);
        line.setAttribute("stroke", secondaryColor);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke-width", 1.5);
        isen_group.appendChild(line);

        line = document.createElementNS(svgURI, "path");
        line.setAttribute("d", `M${0.05 * A } ${0}, Q ${0.1 * A} ${0.45 * A }, ${0.15 * A} ${0.55 * A } `);
        line.setAttribute("stroke", secondaryColor);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke-width", 1.5);
        isen_group.appendChild(line);

        circle = document.createElementNS(svgURI, "circle");
        circle.setAttribute("cx", 0);
        circle.setAttribute("cy", 0.2 * A);
        circle.setAttribute("r", 0.12 * A);
        circle.setAttribute("fill", secondaryColor);
        circle.setAttribute("stroke", mainColor);
        isen_group.appendChild(circle);


        circle = document.createElementNS(svgURI, "circle");
        circle.setAttribute("cx", 0.9 * A * Math.cos(deg));
        circle.setAttribute("cy", 0.9 * A * Math.sin(deg));
        circle.setAttribute("r", 0.05 * A);
        circle.setAttribute("fill", secondaryColor);
        circle.setAttribute("stroke", "none");
        group.appendChild(circle);





        deg = i * 2 * Math.PI / (2 * n) - Math.PI / (3 * n)

        circle = document.createElementNS(svgURI, "circle");
        circle.setAttribute("cx", 0.8 * A * Math.cos(deg));
        circle.setAttribute("cy", 0.8 * A * Math.sin(deg));
        circle.setAttribute("r", 0.05 * A);
        circle.setAttribute("fill", secondaryColor);
        circle.setAttribute("stroke", "none");
        group.appendChild(circle);




        deg = i * 2 * Math.PI / (2 * n) + Math.PI / (3 * n)

        circle = document.createElementNS(svgURI, "circle");
        circle.setAttribute("cx", 0.8 * A * Math.cos(deg));
        circle.setAttribute("cy", 0.8 * A * Math.sin(deg));
        circle.setAttribute("r", 0.05 * A);
        circle.setAttribute("fill", secondaryColor);
        circle.setAttribute("stroke", "none");
        group.appendChild(circle);


    }

    circle = document.createElementNS(svgURI, "circle");
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", 0);
    circle.setAttribute("r", 0.16 * A);
    circle.setAttribute("fill", secondaryColor);
    circle.setAttribute("stroke-width", 1.5);
    circle.setAttribute("stroke", mainColor);
    group.appendChild(circle);


  }
}

function drawTumpal(x, y, isen='tumpal', s = 200, trig_degree = 45, rotDeg= 0, mainColor=themes["oldJava"].mainColor, secondaryColor=themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, use_outline=false, tertiaryColor = themes["goldenSunset"].tertiaryColor){  
    let container = document.createElementNS(svgURI, "g");
    container.setAttribute("transform", `translate(${x}, ${y}) rotate(${rotDeg})`);
    container.setAttribute("stroke-width", 0.1);
    svg.appendChild(container);

    h = Math.tan(trig_degree/360 * 2 * Math.PI) * (0.5 * s);
    let outline = document.createElementNS(svgURI, "path");
    outline_sentence = `M0 0  ${0.5 * s} ${h}  ${-0.5 * s} ${h} Z`;
    outline.setAttribute("d", outline_sentence);
    outline.setAttribute("fill", "none");
    outline.setAttribute("stroke", strokeColor);
    if (use_outline){
        container.appendChild(outline);
    }

    if (trig_degree === 30) {
        R = s /15;
    }
    else {
        R = s / 10;
    }

    Xc = 0.5 * s - R / Math.tan(0.5 * trig_degree/360 * 2 * Math.PI)
    
    tpl_pth = `M0 ${h}  C ${Xc * 0.5} ${h}  ${Xc * 0.5} ${h - 2*R} ${Xc} ${h - 2* R} A${R} ${R} 0 0 1 ${Xc} ${h} A ${0.5 * R} ${0.5* R} 0 0 1 ${Xc} ${h - R} C${Xc - R} ${h - R} ${Xc - R} ${h}  ${Xc - 2 * R} ${h} Z`;
    tpl = document.createElementNS(svgURI, "path");
    tpl.setAttribute("d", tpl_pth);
    tpl.setAttribute("fill", mainColor);
    tpl.setAttribute("stroke", strokeColor);
    container.appendChild(tpl);


    tpl2 = tpl.cloneNode(true);
    tpl2.setAttribute("transform", "scale(-1 1)");
    container.appendChild(tpl2);


    tpl3 = tpl.cloneNode(true);
    tpl3.setAttribute("transform", `rotate(90 0 ${h}) scale(-1 1)`);
    tpl4 = tpl.cloneNode(true);
    tpl4.setAttribute("transform", `rotate(-90 0 ${h})`);

    tpl3.setAttribute("fill", tertiaryColor);
    tpl4.setAttribute("fill", tertiaryColor);

    if (mainColor === "#b49084") {
        tpl3.setAttribute("fill", "#e8eadd");
        tpl4.setAttribute("fill", "#e8eadd");
    }


    if (isen === 'tumpal'){
        if (trig_degree === 60) {
            R_new = 2 * R;
        }
        else if (trig_degree === 45) {
            R_new = R;
        }
        else if (trig_degree === 67.5) {
            R_new = 2.5 * R;
        }
        else if (trig_degree === 75) {
            R_new = 2.5 * R;
        }

        else if (trig_degree === 54) {
            R_new = 1.5  * R;
        }

        else if (trig_degree === 72) {
            R_new = 2.5  * R;
        }

        if (trig_degree !== 30){
            container.appendChild(tpl3);
            container.appendChild(tpl4);
            tpl5 = tpl.cloneNode(true);
            tpl5.setAttribute("d", `M 0 0 C 0 ${ 0.5 * (h - Xc - R - 0.4 * R_new) } ${0.4 * R_new}  ${ 0.5 * (h - Xc - R - 0.4 * R_new) } ${0.4 * R_new} ${h - Xc - R - 0.4 * R_new} A${0.2 * R_new} ${0.2 * R_new} 0 0 0 ${0} ${h - Xc - R - 0.4 * R_new} A${0.4 * R_new} ${0.4 * R_new} 0 0 0 ${0.8 * R_new} ${ h - Xc - R - 0.4 * R_new} C${0.8 * R_new} ${0.5 * (h - Xc - R - 0.4 * R_new) } ${0} ${0.5 * (h - Xc - R - 0.4 * R_new)} 0 0`);
            container.appendChild(tpl5);
            tpl6 = tpl5.cloneNode(true);
            tpl6.setAttribute("transform", `scale(-1, 1)`);
            container.appendChild(tpl6);
        }
        else {
            tpl3 = tpl.cloneNode(true);
            tpl3.setAttribute("d", `M ${0} ${h} C ${0} ${h- 0.3 * (2 * R + s/30)} ${s/30} ${h- 0.3 * (2 * R + s/30)}  ${s/30} ${h-2 * R + s/30} A ${s/60} ${s/60} 0 0 1 ${0} ${h-2 * R + s /30} A${s/30} ${s/30} 0 0 1 ${2 * s/30} ${h-2 * R + s /30} C${2 * s/30} ${h- 0.3 * (2 * R + s/30)} ${0} ${h- 0.3 * (2 * R + s/30)} ${0} ${h} `);
            

            tpl4 = tpl3.cloneNode(true);
            tpl4.setAttribute("transform", `scale(-1, 1)`);

            tpl3.setAttribute("fill", tertiaryColor);
            tpl4.setAttribute("fill", tertiaryColor);

            if (mainColor === "#b49084") {
                tpl3.setAttribute("fill", "#e8eadd");
                tpl4.setAttribute("fill", "#e8eadd");
            }
            
            container.appendChild(tpl3);
            container.appendChild(tpl4);  



            tpl5 = tpl.cloneNode(true);
            tpl5.setAttribute("d", `M ${0} ${0} C ${0} ${0.5 *  (h-2 * R - s /30) }  ${s/30}  ${0.5 *  (h-2 * R - s /30) }  ${s/30}  ${h-2 * R - s /30} A${s / 60} ${s / 60} 0 0 0 ${0} ${h-2 * R - s /30} A${s / 30} ${s / 30} 0 0 0 ${2 * s / 30} ${h-2 * R - s /30} C ${2 * s / 30} ${ 0.5 *  (h-2 * R - s /30) } ${0} ${ 0.5 *  (h-2 * R - s /30) }   ${0} ${0}`);
            container.appendChild(tpl5);

            tpl6 = tpl5.cloneNode(true);
            tpl6.setAttribute("transform", `scale(-1, 1)`);
            container.appendChild(tpl6);  
        }

    }

    else if (isen === 'kawung'){
        tpl5 = tpl.cloneNode(true);
        tpl5.setAttribute("d", `M0 0 Q${0} ${h - Xc - R}, ${( h - Xc - R) / h * 0.5 * s} ${h - Xc - R}`);
        container.appendChild(tpl5);
        tpl6 = tpl5.cloneNode(true);
        tpl6.setAttribute("transform", `scale(-1, 1)`);
        container.appendChild(tpl6);
    }
}

function drawParang(xStart,yStart, xEnd, yEnd,h, rotDeg =0, mainColor = themes["batavia"].mainColor, secondaryColor = themes["batavia"].secondaryColor, strokeColor = themes["batavia"].strokeColor, useContainer = false){
    /*
    Function to draw parang.
    Parang is bounded by rectangle, with (x,y) as the left most coordinate at:
    x = xStart - 0.5 r and y = yStart -  -0.63*h
    and it has width equal to xEnd - xStart + r and height equal to  1.26 h
    */


    r = 0.24 * h;
    degree = Math.atan((yEnd - yStart)/ (xEnd - xStart));
    num = Math.floor( (xEnd - xStart) / (r*Math.cos(degree)));

    group = document.createElementNS(svgURI, "g");
    group.setAttribute("transform", `translate(${xStart}, ${yStart}) rotate(${(degree)*360/ (2 * Math.PI) +rotDeg})`);
    group.setAttribute("stroke", strokeColor);
    group.setAttribute("fill", mainColor)
    group.setAttribute("stroke-width", 1);

    if (useContainer){
        container.appendChild(group);
    }
    else {
        svg.appendChild(group);
    }
    



    topLine = document.createElementNS(svgURI, "path");
    topLine.setAttribute("d", 
    `M ${- 0.5 * r} ${-0.63*h},
     L ${xEnd - xStart + 1 * r} ${-0.63*h}
    `);
    topLine.setAttribute("stroke", "white");
    group.appendChild(topLine);

    botLine = topLine.cloneNode(true);
    botLine.setAttribute("d", 
    `M ${- 0.5 * r} ${0.63*h},
     L ${xEnd - xStart + 1 * r} ${0.63*h}
    `);
    group.appendChild(botLine);

    for (let i=0; i<num; i++){
        if (i%2 == 1){
            let prg = document.createElementNS(svgURI, "path");
            prg.setAttribute("d", 
                `M ${- 0.5 * r + i*r} ${0.5*h},
                 C ${- 0.5 * r + i*r} ${0.65*h}, ${0.5 * r + i*r - 0.2 *r} ${0.65*h}, ${0.5 * r + i*r} ${0.5*h},
                 C ${0.5 * r + i*r - 0.3 * r} ${0.4*h}, ${- 0.5 * r  + 3*r + i* r} ${- 0.5*h}, ${- 0.5 * r  + 3*r + i* r} ${- 0.5 * r  + 3*r + i* r,  - 0.5*h},
                 C ${- 0.5 * r  + 3*r + i* r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + i* r + 0.2 * r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + i* r} ${- 0.5*h},
                 C ${- 0.5 * r  + 2*r + i* r + 0.3 * r} ${- 0.5*h}, ${- 0.5 * r + i*r} ${0.5*h}, ${- 0.5 * r + i*r} ${0.5*h}
                `);
            group.appendChild(prg);
        }
        else {
            let cBottom = document.createElementNS(svgURI, "path");
            cBottom.setAttribute("d", 
                `M ${- 0.5 * r + i*r} ${0.5*h},
                 C ${- 0.5 * r + i*r} ${0.65*h}, ${0.5 * r + i*r - 0.2 *r} ${0.65*h}, ${0.5 * r + i*r} ${0.5*h},
                 C ${0.5 * r + i*r} ${0.5*h}, ${0.5 * r + i*r} ${0.35*h}, ${- 0.5 * r + i*r} ${0.5*h},
                `);
            group.appendChild(cBottom);

            let cTop = document.createElementNS(svgURI, "path");
            cTop.setAttribute("d", 
                `M ${- 0.5 * r  + 3*r + i* r} ${- 0.5*h},
                 C ${- 0.5 * r  + 3*r + i* r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + i* r + 0.2 * r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + i* r} ${- 0.5*h},
                 C ${- 0.5 * r  + 2*r + i* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + i* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + i* r} ${- 0.5*h},
                `);
            group.appendChild(cTop);

            let prg2 = document.createElementNS(svgURI, "path");
            prg2.setAttribute("d", 
                `M ${0.5 * r + i*r} ${0.5*h},
                 C ${- 0.5 * r + i*r + 0.6*r} ${0.5*h - (h/(2*r)) * 0.6 * r}, ${- 0.5 * r + i*r + 1*r} ${0.5*h - (h/(2*r)) * 1 * r}, ${- 0.5 * r + i*r + 1*r} ${0.5*h - (h/(2*r)) * 1 * r},
                 L ${- 0.5 * r  + 2*r + i* r} ${- 0.5*h},
                 C ${- 0.5 * r + i*r + 2.4*r} ${0.5*h - (h/(2*r)) * 1.4 * r}, ${- 0.5 * r + i*r + 2*r} ${0.5*h - (h/(2*r)) * 1 * r}, ${- 0.5 * r + i*r + 2*r} ${0.5*h - (h/(2*r)) * 1 * r},
                 L ${0.5 * r + i*r} ${0.5*h}
                `);
            group.appendChild(prg2);
        }

        mlinjon = document.createElementNS(svgURI, "path");
        mlinjon.setAttribute("d", `
            M ${i*r} ${0.7*h},
            L ${ i*r + 0.5 * r} ${0.65*h},
            L ${ i*r + r} ${0.7*h},
            L ${ i*r + 0.5 * r} ${0.75*h},
            Z
            `)
        mlinjon.setAttribute("stroke-width", 0.5);
        group.appendChild(mlinjon);

        mlinjon2 = document.createElementNS(svgURI, "path");
        mlinjon2.setAttribute("d", `
            M ${i*r + 0.2 * r} ${0.7*h},
            L ${ i*r + 0.5 * r} ${0.67*h},
            L ${ i*r + 0.8 * r} ${0.7*h},
            L ${ i*r + 0.5 * r} ${0.73*h},
            Z
            `)
        mlinjon2.setAttribute("stroke-width", 0.75);
        group.appendChild(mlinjon2);


        mlinjon = mlinjon.cloneNode(true);
        mlinjon.setAttribute("d", `
            M ${i*r} ${-0.7*h},
            L ${ i*r + 0.5 * r} ${-0.65*h},
            L ${ i*r + r} ${-0.7*h},
            L ${ i*r + 0.5 * r} ${-0.75*h},
            Z
            `)
        group.appendChild(mlinjon);

        mlinjon2 = mlinjon2.cloneNode(true);
        mlinjon2.setAttribute("d", `
            M ${i*r + 0.2 * r} ${-0.7*h},
            L ${ i*r + 0.5 * r} ${-0.67*h},
            L ${ i*r + 0.8 * r} ${-0.7*h},
            L ${ i*r + 0.5 * r} ${-0.73*h},
            Z
            `)
        group.appendChild(mlinjon2);

    }





    mlinjon = document.createElementNS(svgURI, "path");
    mlinjon.setAttribute("d", `
            M ${num*r} ${0.7*h},
            L ${num*r + 0.5 * r} ${0.65*h},
            L ${num*r + r} ${0.7*h},
            L ${num*r + 0.5 * r} ${0.75*h},
            Z
            `)
    mlinjon.setAttribute("stroke-width", 0.5);
    group.appendChild(mlinjon);

    mlinjon2 = document.createElementNS(svgURI, "path");
    mlinjon2.setAttribute("d", `
            M ${ num*r + 0.2 * r} ${0.7*h},
            L ${ num*r + 0.5 * r} ${0.67*h},
            L ${ num*r + 0.8 * r} ${0.7*h},
            L ${ num*r + 0.5 * r} ${0.73*h},
            Z
            `)
    mlinjon2.setAttribute("stroke-width", 0.75);
    group.appendChild(mlinjon2);


    mlinjon = document.createElementNS(svgURI, "path");
    mlinjon.setAttribute("d", `
            M ${num*r} ${-0.7*h},
            L ${num*r + 0.5 * r} ${-0.65*h},
            L ${num*r + r} ${-0.7*h},
            L ${num*r + 0.5 * r} ${-0.75*h},
            Z
            `)
    mlinjon.setAttribute("stroke-width", 0.5);
    group.appendChild(mlinjon);

    mlinjon2 = document.createElementNS(svgURI, "path");
    mlinjon2.setAttribute("d", `
            M ${ num*r + 0.2 * r} ${-0.7*h},
            L ${ num*r + 0.5 * r} ${-0.67*h},
            L ${ num*r + 0.8 * r} ${-0.7*h},
            L ${ num*r + 0.5 * r} ${-0.73*h},
            Z
            `)
    mlinjon2.setAttribute("stroke-width", 0.75);
    group.appendChild(mlinjon2);

    cTop = document.createElementNS(svgURI, "path");
    cTop.setAttribute("d", 
    `M ${- 0.5 * r  + 3*r + -1* r} ${- 0.5*h},
     C ${- 0.5 * r  + 3*r + -1* r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + -1* r + 0.2 * r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + -1* r} ${- 0.5*h},
     C ${- 0.5 * r  + 2*r + -1* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + -1* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + -1* r} ${- 0.5*h},
    `);
    group.appendChild(cTop);

    cTop = document.createElementNS(svgURI, "path");
    cTop.setAttribute("d", 
        `M ${- 0.5 * r  + 3*r + -2* r} ${- 0.5*h},
         C ${- 0.5 * r  + 3*r + -2* r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + -2* r + 0.2 * r} ${- 0.65*h}, ${- 0.5 * r  + 2*r + -2* r} ${- 0.5*h},
         C ${- 0.5 * r  + 2*r + -2* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + -2* r} ${- 0.4*h}, ${- 0.5 * r  + 3*r + -2* r} ${- 0.5*h},
        `);
    group.appendChild(cTop);


    cBottom = document.createElementNS(svgURI, "path");
    cBottom.setAttribute("d", 
        `M ${- 0.5 * r + (num)*r} ${0.5*h},
         C ${- 0.5 * r + (num)*r} ${0.65*h}, ${0.5 * r + (num)*r - 0.2 *r} ${0.65*h}, ${0.5 * r + (num)*r} ${0.5*h},
         C ${0.5 * r + (num)*r} ${0.5*h}, ${0.5 * r + (num)*r} ${0.35*h}, ${- 0.5 * r + (num)*r} ${0.5*h},
        `);
    group.appendChild(cBottom);

    cBottom = document.createElementNS(svgURI, "path");
    cBottom.setAttribute("d", 
        `M ${- 0.5 * r + (num+1)*r} ${0.5*h},
         C ${- 0.5 * r + (num+1)*r} ${0.65*h}, ${0.5 * r + (num+1)*r - 0.2 *r} ${0.65*h}, ${0.5 * r + (num+1)*r} ${0.5*h},
         C ${0.5 * r + (num+1)*r} ${0.5*h}, ${0.5 * r + (num+1)*r} ${0.35*h}, ${- 0.5 * r + (num+1)*r} ${0.5*h},
        `);
    cBottom.setAttribute("fill", mainColor);
    cBottom.setAttribute("stroke", strokeColor);
    group.appendChild(cBottom);




    leftBorder = document.createElementNS(svgURI, "path");
    leftBorder.setAttribute("d", 
    `M ${- 1.5 *  r  + 3*r + -2* r} ${- 0.42*h},
     L ${- 1.5 *  r  + 3*r + -2* r} ${0.2*h},
     Q ${- 1.5 *  r  + 3*r + -2* r} ${0.42*h}, ${- 0.5 *  r  + 2.7 *r + -2* r} ${0.42*h},
     L ${- 0.5 *  r  + 2.7 *r + -2* r} ${-0.2*h}
     Q ${- 0.5 *  r  + 2.7 *r + -2* r} ${- 0.42*h}, ${- 1.5 *  r  + 3*r + -2* r} ${- 0.42*h}
     Z

    `);
    group.appendChild(leftBorder);


    let rightBorder = document.createElementNS(svgURI, "path");
    rightBorder.setAttribute("d", 
        `M ${0.5 * r + num*r} ${0.5*h},
         C ${- 0.5 * r + num*r + 0.6*r} ${0.5*h - (h/(2*r)) * 0.6 * r}, ${- 0.5 * r + num*r + 1*r} ${0.5*h - (h/(2*r)) * 1 * r}, ${- 0.5 * r + num*r + 1*r} ${0.5*h - (h/(2*r)) * 1 * r},
         L ${- 0.5 * r  + 2*r + num* r} ${- 0.5*h},
         C ${- 0.5 * r + num*r + 2*r} ${0.5*h - (h/(2*r)) * 1.4 * r}, ${- 0.5 * r + num*r + 2*r} ${0.5*h - (h/(2*r)) * 1 * r}, ${- 0.5 * r + num*r + 2*r} ${0.5*h - (h/(2*r)) * 1 * r},
         L ${0.5 * r + num*r} ${0.5*h}
        `);
    group.appendChild(rightBorder);


    centerLine = document.createElementNS(svgURI, "path");
    centerLine.setAttribute("d", 
    `M ${-0.5 * r} ${0},
     L ${xEnd - xStart + r} ${yEnd - yStart}
    `);
    centerLine.setAttribute("stroke", "white");
    // group.appendChild(centerLine);


}

function drawTumpalInner(x, y, isen='tumpal', s = 200, trig_degree = 45, rotDeg= 0, mainColor=themes["oldJava"].mainColor, secondaryColor=themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor, use_outline=false){  
    let container = document.createElementNS(svgURI, "g");
    container.setAttribute("transform", `translate(${x}, ${y}) rotate(${rotDeg})`);
    container.setAttribute("stroke-width", 0.25);
    svg.appendChild(container);

    h = Math.tan(trig_degree/360 * 2 * Math.PI) * (0.5 * s);
    let outline = document.createElementNS(svgURI, "path");
    outline_sentence = `M0 0  ${0.5 * s} ${h}  ${-0.5 * s} ${h} Z`;
    outline.setAttribute("d", outline_sentence);
    outline.setAttribute("fill", "none");
    outline.setAttribute("stroke", strokeColor);
    if (use_outline){
        container.appendChild(outline);
    }

    if (trig_degree === 30) {
        R = s /15;
    }
    else {
        R = s / 10;
    }

    Xc = 0.5 * s - R / Math.tan(0.5 * trig_degree/360 * 2 * Math.PI)
    
    tpl_pth = `M0 ${h}  C ${Xc * 0.5} ${h}  ${Xc * 0.5} ${h - 2*R} ${Xc} ${h - 2* R} A${R} ${R} 0 0 1 ${Xc} ${h} A ${0.5 * R} ${0.5* R} 0 0 1 ${Xc} ${h - R} C${Xc - R} ${h - R} ${Xc - R} ${h}  ${Xc - 2 * R} ${h} Z`;
    tpl = document.createElementNS(svgURI, "path");
    tpl.setAttribute("d", tpl_pth);
    tpl.setAttribute("fill", mainColor);
    tpl.setAttribute("stroke", strokeColor);
    // container.appendChild(tpl);


    tpl2 = tpl.cloneNode(false);
    tpl2.setAttribute("transform", "scale(-1 1)");
    // container.appendChild(tpl2);


    tpl3 = tpl.cloneNode(false);
    tpl3.setAttribute("transform", `rotate(90 0 ${h}) scale(-1 1)`);
    tpl4 = tpl.cloneNode(false);
    tpl4.setAttribute("transform", `rotate(-90 0 ${h})`);

    if (mainColor === "#b49084") {
        tpl3.setAttribute("fill", "#e8eadd");
        tpl4.setAttribute("fill", "#e8eadd");
    }
    




    if (isen === 'tumpal'){
        if (trig_degree === 60) {
            R_new = 2 * R;
        }
        else if (trig_degree === 45) {
            R_new = R;
        }
        else if (trig_degree === 67.5) {
            R_new = 2.5 * R;
        }
        else if (trig_degree === 75) {
            R_new = 2.5 * R;
        }

        else if (trig_degree === 54) {
            R_new = 1.5  * R;
        }

        else if (trig_degree === 72) {
            R_new = 2.5  * R;
        }
        

        // else if (trig_degree === 30) {
        //     R_new = 1 * R;
        // }

        if (trig_degree !== 30){
            // container.appendChild(tpl3);
            // container.appendChild(tpl4);
            tpl5 = tpl.cloneNode(false);
            tpl5.setAttribute("d", `M 0 0 C 0 ${ 0.5 * (h - Xc - R - 0.4 * R_new) } ${0.4 * R_new}  ${ 0.5 * (h - Xc - R - 0.4 * R_new) } ${0.4 * R_new} ${h - Xc - R - 0.4 * R_new} A${0.2 * R_new} ${0.2 * R_new} 0 0 0 ${0} ${h - Xc - R - 0.4 * R_new} A${0.4 * R_new} ${0.4 * R_new} 0 0 0 ${0.8 * R_new} ${ h - Xc - R - 0.4 * R_new} C${0.8 * R_new} ${0.5 * (h - Xc - R - 0.4 * R_new) } ${0} ${0.5 * (h - Xc - R - 0.4 * R_new)} 0 0`);
            container.appendChild(tpl5);
            tpl6 = tpl5.cloneNode(false);
            tpl6.setAttribute("transform", `scale(-1, 1)`);
            container.appendChild(tpl6);
        }
        else {
            tpl3 = tpl.cloneNode(false);
            tpl3.setAttribute("d", `M ${0} ${h} C ${0} ${h- 0.3 * (2 * R + s/30)} ${s/30} ${h- 0.3 * (2 * R + s/30)}  ${s/30} ${h-2 * R + s/30} A ${s/60} ${s/60} 0 0 1 ${0} ${h-2 * R + s /30} A${s/30} ${s/30} 0 0 1 ${2 * s/30} ${h-2 * R + s /30} C${2 * s/30} ${h- 0.3 * (2 * R + s/30)} ${0} ${h- 0.3 * (2 * R + s/30)} ${0} ${h} `);
            

            tpl4 = tpl3.cloneNode(false);
            tpl4.setAttribute("transform", `scale(-1, 1)`);

            if (mainColor === "#b49084") {
                tpl3.setAttribute("fill", "#e8eadd");
                tpl4.setAttribute("fill", "#e8eadd");
            }
            
            // container.appendChild(tpl3);
            // container.appendChild(tpl4);  



            tpl5 = tpl.cloneNode(false);
            tpl5.setAttribute("d", `M ${0} ${0} C ${0} ${0.5 *  (h-2 * R - s /30) }  ${s/30}  ${0.5 *  (h-2 * R - s /30) }  ${s/30}  ${h-2 * R - s /30} A${s / 60} ${s / 60} 0 0 0 ${0} ${h-2 * R - s /30} A${s / 30} ${s / 30} 0 0 0 ${2 * s / 30} ${h-2 * R - s /30} C ${2 * s / 30} ${ 0.5 *  (h-2 * R - s /30) } ${0} ${ 0.5 *  (h-2 * R - s /30) }   ${0} ${0}`);
            container.appendChild(tpl5);

            tpl6 = tpl5.cloneNode(false);
            tpl6.setAttribute("transform", `scale(-1, 1)`);
            container.appendChild(tpl6);  
        }

    }

    else if (isen === 'kawung'){
        tpl5 = tpl.cloneNode(false);
        tpl5.setAttribute("d", `M0 0 Q${0} ${h - Xc - R}, ${( h - Xc - R) / h * 0.5 * s} ${h - Xc - R}`);
        container.appendChild(tpl5);
        tpl6 = tpl5.cloneNode(false);
        tpl6.setAttribute("transform", `scale(-1, 1)`);
        container.appendChild(tpl6);
    }
}


 
