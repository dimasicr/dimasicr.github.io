// THE CODE STARTS HERE
var maxdepth = 4;
var sqrt3 = Math.sqrt(3);
let circles = [];
let rafId = null;
let selectedSet = 'symmetric';

class Circle {
  constructor(r, center) {
    this.r = r;
    this.b = 1 / this.r;

    this.center = center;
    this.bc = this.center.mul(this.b);

    this.alpha = 0;
  }
}


// functions returning a set of three kissing circles
// If a circle has other circles in it, it has a negative curvature
const symmetricSet = () => {
  let c1r = -MID;
  let c1center = new Complex(MID, MID);
  let c1 = new Circle(c1r, c1center);

  let c2r = 100;
  let c2center = new Complex(c2r, MID);
  let c2 = new Circle(c2r, c2center);

  let c3r = Math.abs(c1.r) - c2.r;
  let c3x = c2.center.re + c2.r + c3r;
  let c3y = c2.center.im;
  let c3center = new Complex(c3x, c3y);
  let c3 = new Circle(c3r, c3center);

  return [[c1, c2, c3]];
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




const clear = () => {
  ctx.clearRect(0, 0, DIM, DIM);
}

const update = () => {
  clear();

  circles.forEach(drawCircle);

}






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
    if (checkbox.checked == true) {
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
    tanahan_kawung.setAttribute("fill", main_colour);
    
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
    tanahan_kawung2.setAttribute("fill", main_colour);
    
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
  svg.setAttribute("width", "400");
  svg.setAttribute("height", "400");
  let main_colour = "rgb(235, 210, 140)";
  let secondary_colour = "rgb(170, 130, 75)";
  let bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bg_rect.setAttribute("width", "100%");
  bg_rect.setAttribute("height", "100%");
  bg_rect.setAttribute("fill", secondary_colour);
  svg.appendChild(bg_rect);
}


function redraw(selectedSet, padding){
  reset();
  circles = [];
  if (selectedSet === 'symmetric'){
    c1r = -160;
    c1center = new Complex(200,200);
    c1 = new Circle(c1r, c1center);
    circles.push(c1);
    
    
    c2r = Math.abs(c1r/2);
    c2center = new Complex(200 - c2r, 200);
    c2 = new Circle(c2r, c2center);
    circles.push(c2);
    
    c3r = Math.abs(c1r/2);
    c3center = new Complex(200 + c3r, 200);
    c3 = new Circle(c3r, c3center);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    circles.forEach(drawKawung, padding);
  }
  else if (selectedSet === 'asymmetric'){
    let c1r = -160;
    let c1center = new Complex(200, 200);
    let c1 = new Circle(c1r, c1center);
    
    let c2r = 120;
    let c2center = new Complex(160, 200);
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
    circles.forEach(drawKawung, padding)
  }

  else if (selectedSet === 'triplet'){
    //https://www.quora.com/If-three-tangent-circles-of-equal-radius-are-inscribed-in-a-circle-of-radius-3-what-are-their-radii-What-is-r-in-the-picture-and-how-do-you-calculate-it
    let c1r = -160;
    let c1center = new Complex(200, 200);
    let c1 = new Circle(c1r, c1center);
    
    let c2r = 74.24;
    let c2center = new Complex(274.24, 242.86248398);
    let c2 = new Circle(c2r, c2center);
    
    let c3r = 74.24;
    let c3center = new Complex(125.76, 242.86248398);
    let c3 = new Circle(c3r, c3center);
    
    circles.push(c1);
    circles.push(c2);
    circles.push(c3);
    drawGasket(circles[0], circles[1], circles[2]);
    circles.forEach(drawKawung, padding)
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
      console.log("Checkbox is unchecked");
      redraw(document.querySelector('.btn.is-selected').getAttribute('data-set'));
    }
  });





circles = [];

// Symmetric Set
c1r = -160;
c1center = new Complex(200,200);
c1 = new Circle(c1r, c1center);
circles.push(c1);


c2r = Math.abs(c1r/2);
c2center = new Complex(200 - c2r, 200);
c2 = new Circle(c2r, c2center);
circles.push(c2);

c3r = Math.abs(c1r/2);
c3center = new Complex(200 + c3r, 200);
c3 = new Circle(c3r, c3center);
circles.push(c3);
drawGasket(circles[0], circles[1], circles[2]);
circles.forEach(drawKawung);


// Assymetric Set





// Convert the SVG document to a string
// let svgString = new XMLSerializer().serializeToString(svg);

// // Create a Blob with the SVG string
// let blob = new Blob([svgString], { type: "image/svg+xml" });

// // Create a link element
// let link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "example_10_june.svg";

// // Programmatically click the link to trigger the download
// link.click();
