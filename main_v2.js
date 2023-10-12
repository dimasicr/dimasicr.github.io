// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Uluwatu Sunset
// let main_colour = "rgb(235, 210, 140)";
// let secondary_colour = "rgb(170, 130, 75)";
// let stroke_colour = "peru";
// let stroke_width = 0.5;

// Hitam Putih Nusantara
// let main_colour = '#F7F0F5';
// let secondary_colour =  '#333';
// let stroke_colour = "none";
// let stroke_width = 0;

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

  if (cn2.r > selectThreshold.value) {
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

// "Given any three mutually tangent circles, there are exactly two other
// circles which are mutually tangent to all three (forming what we called a “kissing set”)."
// https://mathlesstraveled.com/2016/05/04/apollonian-gaskets-and-descartes-theorem/
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


const drawKawung = (c) => {
    let r = Math.abs(c.r);
    let x = c.center.re;
    let y = c.center.im;
    let pad = 0.05 * r;
    let pad2 = 0.95 * r;
    let rpad = 0.9 * r;

if (r < 130) {
    // Create a group element
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // Set the transform attribute of the group. Need to change to x and y coordinate we want to check
    group.setAttribute("transform", `translate(${x}, ${y})`);
    
    
    let klowongan_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let kawung_part1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_part2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_part3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_part4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    
    // Create Kawung Klowongan


    // For stencil
    if (selectPadding.value  === "padding") {
      kawung_part1.setAttribute("d", `M ${pad} -${pad2} A${rpad} ${rpad} 0 0 1 ${pad2} -${pad} A${rpad} ${rpad} 0 0 1 ${pad} -${pad2}`);
      kawung_part2.setAttribute("d", `M ${pad} ${pad2} A${rpad} ${rpad} 0 0 1 ${pad2} ${pad} A${rpad} ${rpad} 0 0 1 ${pad} ${pad2}`);
      kawung_part3.setAttribute("d", `M -${pad2} ${pad} A${rpad} ${rpad} 0 0 1 -${pad} ${pad2} A${rpad} ${rpad} 0 0 1 -${pad2} ${pad}`);
      kawung_part4.setAttribute("d", `M -${pad2} -${pad} A${rpad} ${rpad} 0 0 1 -${pad} -${pad2} A${rpad} ${rpad} 0 0 1 -${r} -${pad}`);
    }
    else {
      kawung_part1.setAttribute("d", `M 0 -${r} A${r} ${r} 0 0 1 ${r} 0 A${r} ${r} 0 0 1 0 -${r}`);
      kawung_part2.setAttribute("d", `M 0 ${r} A${r} ${r} 0 0 1 ${r} 0 A${r} ${r} 0 0 1 0 ${r}`);
      kawung_part3.setAttribute("d", `M -${r} 0 A${r} ${r} 0 0 1 0 ${r} A${r} ${r} 0 0 1 -${r} 0`);
      kawung_part4.setAttribute("d", `M -${r} 0 A${r} ${r} 0 0 1 0 -${r} A${r} ${r} 0 0 1 -${r} 0`);
    }



    kawung_part1.setAttribute("fill", main_colour);
    kawung_part2.setAttribute("fill", main_colour);
    kawung_part3.setAttribute("fill", main_colour);
    kawung_part4.setAttribute("fill", main_colour);
    kawung_part1.setAttribute("stroke", stroke_colour);
    kawung_part2.setAttribute("stroke", stroke_colour);
    kawung_part3.setAttribute("stroke", stroke_colour);
    kawung_part4.setAttribute("stroke", stroke_colour);
    kawung_part1.setAttribute("stroke-width", stroke_width);
    kawung_part2.setAttribute("stroke-width", stroke_width);
    kawung_part3.setAttribute("stroke-width", stroke_width);
    kawung_part4.setAttribute("stroke-width", stroke_width);
    
    // Create Kawung Isen
    let cecek_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let isen_1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_1.setAttribute("cx", -r * 6/7);
    isen_1.setAttribute("cy", -r / 7);
    isen_1.setAttribute("r", r / 15);
    isen_1.setAttribute("fill", secondary_colour);
    
    
    let isen_2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_2.setAttribute("cx", -r /7);
    isen_2.setAttribute("cy", -r * 6/ 7);
    isen_2.setAttribute("r", r / 15);
    isen_2.setAttribute("fill", secondary_colour);
    
    
    let isen_3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_3.setAttribute("cx", -r * 6/7);
    isen_3.setAttribute("cy", r / 7);
    isen_3.setAttribute("r", r / 15);
    isen_3.setAttribute("fill", secondary_colour);
    
    
    let isen_4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_4.setAttribute("cx", r /7);
    isen_4.setAttribute("cy", -r * 6/ 7);
    isen_4.setAttribute("r", r / 15);
    isen_4.setAttribute("fill", secondary_colour);
    
    
    let isen_5 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_5.setAttribute("cx", r * 6 /7);
    isen_5.setAttribute("cy", r / 7);
    isen_5.setAttribute("r", r / 15);
    isen_5.setAttribute("fill", secondary_colour);
    
    
    let isen_6 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_6.setAttribute("cx", r  /7);
    isen_6.setAttribute("cy", r * 6/ 7);
    isen_6.setAttribute("r", r / 15);
    isen_6.setAttribute("fill", secondary_colour);
    
    
    let isen_7 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_7.setAttribute("cx", -r  /7);
    isen_7.setAttribute("cy", r * 6/ 7);
    isen_7.setAttribute("r", r / 15);
    isen_7.setAttribute("fill", secondary_colour);
    
    
    let isen_8 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    isen_8.setAttribute("cx", r * 6  /7);
    isen_8.setAttribute("cy", -r / 7);
    isen_8.setAttribute("r", r / 15);
    isen_8.setAttribute("fill", secondary_colour);
    
    
    // Create Kawung Isen
    let tanahan_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
    tanahan_kawung.setAttribute("transform", "rotate(45)");
    tanahan_kawung.setAttribute("fill", secondary_colour);
    
    let rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1.setAttribute("x", - r  * 22.5 / 70);
    rect1.setAttribute("y", - r * 1.5 /70);
    rect1.setAttribute("width", r * 15/ 70);
    rect1.setAttribute("height", r * 4/ 70);
    
    
    let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2.setAttribute("x", - r  * 22.5 / 70);
    rect2.setAttribute("y", - r * 1.5 /70);
    rect2.setAttribute("width", r * 15/ 70);
    rect2.setAttribute("height", r * 4/ 70);
    rect2.setAttribute("transform", "rotate(90)");
    
    
    let rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect3.setAttribute("x", - r  * 22.5 / 70);
    rect3.setAttribute("y", - r * 1.5 /70);
    rect3.setAttribute("width", r * 15/ 70);
    rect3.setAttribute("height", r * 4/ 70);
    rect3.setAttribute("transform", "rotate(180)");
    
    
    let rect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect4.setAttribute("x", - r  * 22.5 / 70);
    rect4.setAttribute("y", - r * 1.5 /70);
    rect4.setAttribute("width", r * 15/ 70);
    rect4.setAttribute("height", r * 4/ 70);
    rect4.setAttribute("transform", "rotate(270)");
    
    
    
    
    let tanahan_kawung2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    tanahan_kawung2.setAttribute("fill", secondary_colour);
    
    let tnh_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tnh_1.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
    
    let tnh_2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tnh_2.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
    tnh_2.setAttribute("transform", "rotate(90)");
    
    let tnh_3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tnh_3.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
    tnh_3.setAttribute("transform", "rotate(180)");
    
    
    let tnh_4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tnh_4.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
    tnh_4.setAttribute("transform", "rotate(270)");
    
    
    // Add kawung circle to the SVG document
    svg.appendChild(group);
    group.appendChild(klowongan_kawung);
    group.appendChild(cecek_kawung);
    group.appendChild(tanahan_kawung);
    group.appendChild(tanahan_kawung2);
    klowongan_kawung.appendChild(kawung_part1);
    klowongan_kawung.appendChild(kawung_part2);
    klowongan_kawung.appendChild(kawung_part3);
    klowongan_kawung.appendChild(kawung_part4);
    cecek_kawung.appendChild(isen_1);
    cecek_kawung.appendChild(isen_2);
    cecek_kawung.appendChild(isen_3);
    cecek_kawung.appendChild(isen_4);
    cecek_kawung.appendChild(isen_5);
    cecek_kawung.appendChild(isen_6);
    cecek_kawung.appendChild(isen_7);
    cecek_kawung.appendChild(isen_8);
    tanahan_kawung.appendChild(rect1);
    tanahan_kawung.appendChild(rect2);
    tanahan_kawung.appendChild(rect3);
    tanahan_kawung.appendChild(rect4);
    tanahan_kawung2.appendChild(tnh_1);
    tanahan_kawung2.appendChild(tnh_2);
    tanahan_kawung2.appendChild(tnh_3);
    tanahan_kawung2.appendChild(tnh_4);

}

}




function reset(){
  svg.innerHTML = '';
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
}


function redraw(selectedSet, padding){
  reset();
  circles = [];
  if (selectedSet === 'symmetric'){
    c1r = -1 * (160 * svg.getAttribute("width")/ 400);
    c1center = new Complex(svg.getAttribute("width")/2,svg.getAttribute("height")/2);
    c1 = new Circle(c1r, c1center);
    circles.push(c1);
    
    
    c2r = Math.abs(c1r/2);
    c2center = new Complex(svg.getAttribute("width")/2 - c2r, svg.getAttribute("height")/2);
    c2 = new Circle(c2r, c2center);
    circles.push(c2);
    
    c3r = Math.abs(c1r/2);
    c3center = new Complex(svg.getAttribute("width")/2 + c3r, svg.getAttribute("height")/2);
    c3 = new Circle(c3r, c3center);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(drawKawung);
  }
  else if (selectedSet === 'asymmetric'){
    c1r = -1 * (160 * svg.getAttribute("width")/ 400);
    c1center = new Complex(svg.getAttribute("width")/2,svg.getAttribute("height")/2);
    let c1 = new Circle(c1r, c1center);
    
    let c2r = 120 * svg.getAttribute("width")/ 400;
    let c2center = new Complex(svg.getAttribute("width")/2 + c1r + c2r, svg.getAttribute("height")/2);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = Math.abs(c1.r) - c2.r;
    let c3x = c2.center.re + c2.r + c3r;
    let c3y = c2.center.im;
    let c3center = new Complex(c3x, c3y);
    let c3 = new Circle(c3r, c3center);
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(drawKawung);
  }

  else if (selectedSet === 'triplet'){
    //https://www.quora.com/If-three-tangent-circles-of-equal-radius-are-inscribed-in-a-circle-of-radius-3-what-are-their-radii-What-is-r-in-the-picture-and-how-do-you-calculate-it
    let c1r = -1 * (160 * svg.getAttribute("width")/ 400);
    let c1center = new Complex(svg.getAttribute("width")/2,svg.getAttribute("height")/2);
    let c1 = new Circle(c1r, c1center);
    
    let c2r =  74.24 * svg.getAttribute("width")/ 400;
    let c2center = new Complex(svg.getAttribute("width")/2 + c2r, svg.getAttribute("height")/2 +  42.8624 * svg.getAttribute("width")/ 400);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = 74.24 * svg.getAttribute("width")/ 400;
    let c3center = new Complex(svg.getAttribute("width")/2 - (200-125.76) * svg.getAttribute("width")/ 400, svg.getAttribute("height")/2 +  42.8624 * svg.getAttribute("width")/ 400);
    let c3 = new Circle(c3r, c3center);
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    newCircles = circles.filter(function(element) {
      return element.r !==  c1r;
    });
    newCircles.forEach(drawKawung);
  }

  else if (selectedSet === 'nested'){
    let c1r = -1 * (160 * svg.getAttribute("width")/ 400);
    let c1center = new Complex(svg.getAttribute("width")/2,svg.getAttribute("height")/2);
    let c1 = new Circle(c1r, c1center);
    
    let c2r = 120 * svg.getAttribute("width")/ 400;
    let c2center = new Complex(svg.getAttribute("width")/2 + c1r + c2r, svg.getAttribute("height")/2);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = Math.abs(c1.r) - c2.r;
    let c3x = c2.center.re + c2.r + c3r;
    let c3y = c2.center.im;
    let c3center = new Complex(c3x, c3y);
    let c3 = new Circle(c3r, c3center);
    
    circles = [];
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !== c2r &&  element.r !== c1r ;
    });

    newCircles.forEach(drawKawung);

    // // 2nd iteration
    c4r = -c2r;
    c4center = c2center;
    c4 = new Circle(c4r, c4center);

    c5r = Math.abs(c4r) * 0.75;
    c5center = new Complex(svg.getAttribute("width")/2 + c1r + c5r, svg.getAttribute("height")/2);
    c5 = new Circle(c5r, c5center);

    c6r = Math.abs(c4.r) - c5.r;
    c6x = c5.center.re + c5.r + c6r;
    c6y = c5.center.im;
    c6center = new Complex(c6x, c6y);
    c6 = new Circle(c6r, c6center);

    circles = [];
    circles.push(c4);
    circles.push(c5);
    circles.push(c6);

    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = [];

    newCircles = circles.filter(function(element) {
      return element.r !== c4r && element.r !== c5r;
    });

    newCircles.forEach(drawKawung);


    // 3rd iteration
    c7r = -c5r;
    c7center = c5center;
    c7 = new Circle(c7r, c7center);

    c8r = Math.abs(c7.r) * 0.75;
    c8center = new Complex(svg.getAttribute("width")/2 + c1r + c8r, svg.getAttribute("height")/2);
    c8 = new Circle(c8r, c8center);

    c9r = Math.abs(c7.r) - c8.r;
    c9x = c8.center.re + c8.r + c9r;
    c9y = c8.center.im;
    c9center = new Complex(c9x, c9y);
    c9 = new Circle(c9r, c9center);

    circles = [];
    newCircles = [];
    circles.push(c7);
    circles.push(c8);
    circles.push(c9);

    drawGasket(circles[0], circles[1], circles[2]);

    newCircles = circles.filter(function(element) {
      return element.r !==  c7r ;
    });

    newCircles.forEach(drawKawung);



    // // 4th iteration
    // c1r = (-1 * 120 * 0.75 * 0.75);
    // c1center = new Complex(200-160 + (120 * 0.75 * 0.75), 200);
    // c1 = new Circle(c1r, c1center);

    // c2r = (120 * 0.75 * 0.75 * 0.75);
    // c2center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75), 200);
    // c2 = new Circle(c2r, c2center);

    // c3r = Math.abs(c1.r) - c2.r;
    // c3x = c2.center.re + c2.r + c3r;
    // c3y = c2.center.im;
    // c3center = new Complex(c3x, c3y);
    // c3 = new Circle(c3r, c3center);

    // circles = [];
    // newCircles = [];
    // circles.push(c1);
    // circles.push(c2);
    // circles.push(c3);

    // drawGasket(circles[0], circles[1], circles[2]);

    // newCircles = circles.filter(function(element) {
    //   return element.r !==  -1 * (120 * 0.75 * 0.75)  && element.r !==  (120 * 0.75 * 0.75 * 0.75);
    // });

    // newCircles.forEach(drawKawung, padding);


    // // 5th iteration
    // c1r = (-1 * 120 * 0.75 * 0.75 * 0.75);
    // c1center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75), 200);
    // c1 = new Circle(c1r, c1center);

    // c2r = (120 * 0.75 * 0.75 * 0.75 * 0.75);
    // c2center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c2 = new Circle(c2r, c2center);

    // c3r = Math.abs(c1.r) - c2.r;
    // c3x = c2.center.re + c2.r + c3r;
    // c3y = c2.center.im;
    // c3center = new Complex(c3x, c3y);
    // c3 = new Circle(c3r, c3center);

    // circles = [];
    // newCircles = [];
    // circles.push(c1);
    // circles.push(c2);
    // circles.push(c3);

    // drawGasket(circles[0], circles[1], circles[2]);

    // newCircles = circles.filter(function(element) {
    //   return element.r !==  -1 * (120 * 0.75 * 0.75 * 0.75)  && element.r !==  (120 * 0.75 * 0.75 * 0.75 * 0.75);
    // });
    // newCircles.forEach(drawKawung, padding);


    // // 6th iteration
    // c1r = (-1 * 120 * 0.75 * 0.75 * 0.75 * 0.75);
    // c1center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c1 = new Circle(c1r, c1center);

    // c2r = (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // c2center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c2 = new Circle(c2r, c2center);

    // c3r = Math.abs(c1.r) - c2.r;
    // c3x = c2.center.re + c2.r + c3r;
    // c3y = c2.center.im;
    // c3center = new Complex(c3x, c3y);
    // c3 = new Circle(c3r, c3center);

    // circles = [];
    // newCircles = [];
    // circles.push(c1);
    // circles.push(c2);
    // circles.push(c3);

    // drawGasket(circles[0], circles[1], circles[2]);

    // newCircles = circles.filter(function(element) {
    //   return element.r !==  -1 * (120 * 0.75 * 0.75 * 0.75 * 0.75)  && element.r !==  (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // });
    // newCircles.forEach(drawKawung, padding);


    // // 7th iteration
    // c1r = (-1 * 120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // c1center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c1 = new Circle(c1r, c1center);

    // c2r = (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // c2center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c2 = new Circle(c2r, c2center);

    // c3r = Math.abs(c1.r) - c2.r;
    // c3x = c2.center.re + c2.r + c3r;
    // c3y = c2.center.im;
    // c3center = new Complex(c3x, c3y);
    // c3 = new Circle(c3r, c3center);

    // circles = [];
    // newCircles = [];
    // circles.push(c1);
    // circles.push(c2);
    // circles.push(c3);

    // drawGasket(circles[0], circles[1], circles[2]);

    // newCircles = circles.filter(function(element) {
    //   return element.r !==  -1 * (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75)  && element.r !==  (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // });
    // newCircles.forEach(drawKawung, padding);


    // // 8th iteration
    // c1r = (-1 * 120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // c1center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c1 = new Circle(c1r, c1center);

    // c2r = (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75);
    // c2center = new Complex(200-160 + (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75), 200);
    // c2 = new Circle(c2r, c2center);

    // c3r = Math.abs(c1.r) - c2.r;
    // c3x = c2.center.re + c2.r + c3r;
    // c3y = c2.center.im;
    // c3center = new Complex(c3x, c3y);
    // c3 = new Circle(c3r, c3center);

    // circles = [];
    // newCircles = [];
    // circles.push(c1);
    // circles.push(c2);
    // circles.push(c3);

    // drawGasket(circles[0], circles[1], circles[2]);

    // newCircles = circles.filter(function(element) {
    //   return element.r !==  -1 * (120 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75) ;
    // });
    // newCircles.forEach(drawKawung, padding);




  }

  

}



let btns = document.querySelectorAll('.btn');
// const checkbox = document.getElementById("myCheckbox");


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



// checkbox.addEventListener("click", function() {
//     if (this.checked) {
//       redraw(selectBox.value);
//     } else {
//       console.log("Checkbox is unchecked");
//       redraw(selectBox.value);
//     }
//   });

// slider.addEventListener('input', function() {
//       redraw(selectBox.value);
//   });


// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');

// Add an event listener to the select input
selectBox.addEventListener('change', function() {
// Retrieve the selected value
const selectedValue = selectBox.value;
        
// Display the selected value
            redraw(selectedValue);
});


const selectPadding = document.getElementById('paddings');

// Add an event listener to the select input
selectPadding.addEventListener('change', function() {

        
// Display the selected value
            redraw(selectBox.value);
});


const selectThreshold = document.getElementById('recursion_threshold');

// Add an event listener to the select input
selectThreshold.addEventListener('change', function() {

        
// Display the selected value
            redraw(selectBox.value);
});


const selectThemes = document.getElementById('themes');

// Add an event listener to the select input
selectThemes.addEventListener('change', function() {

if (selectThemes.value === 'old_java){
  main_colour =  "#e4d5b7";
  secondary_colour = "#493118";
  stroke_colour = "brown";
  stroke_width = 0.5;
}
        
// Display the selected value
            redraw(selectBox.value);
});

circles = [];

// Symmetric Set
c1r = -1 * (160 * svg.getAttribute("width")/ 400);
c1center = new Complex(svg.getAttribute("width")/2,svg.getAttribute("height")/2);
c1 = new Circle(c1r, c1center);
circles.push(c1);


c2r = Math.abs(c1r/2);
c2center = new Complex(svg.getAttribute("width")/2 - c2r, svg.getAttribute("height")/2);
c2 = new Circle(c2r, c2center);
circles.push(c2);

c3r = Math.abs(c1r/2);
c3center = new Complex(svg.getAttribute("width")/2 + c3r, svg.getAttribute("height")/2);
c3 = new Circle(c3r, c3center);
circles.push(c3);
drawGasket(circles[0], circles[1], circles[2]);
newCircles = circles.filter(function(element) {
  return element.r !==  c1r;
});
newCircles.forEach(drawKawung);


