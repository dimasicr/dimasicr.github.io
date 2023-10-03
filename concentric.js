// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// const main_colour = "rgb(235, 210, 140)";
// const secondary_colour = "rgb(170, 130, 75)";
const main_colour = '#F7F0F5';
const secondary_colour =  '#333';


function midpoint(x1, x2){
  return (x1+x2) /2 ;
}

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



function drawFibonacci(x,y, r, fib_motive = 'Full'){
    let pad = 0.05 * r;
    let pad2 = 0.95 * r;
    let rpad = 0.9 * r;
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");


    let r2 = 5/8 * r;
    let x2 = r + r2;
    let y2 = r - r2;
    let pad_2 = 0.05 * r2;
    let pad2_2 = 0.05 * r2;
    let rpad_2 = 0.9 * r2;

    // Set the transform attribute of the group. Need to change to x and y coordinate we want to check
    group.setAttribute("transform", `translate(${x}, ${y})`);
    let klowongan_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let kawung_partA = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_partA_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_partA_2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_partA_3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_partA_4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let kawung_partA_5 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    let cecek_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let isen_1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_5 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_6 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_7 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_8 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_9 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_10 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_11 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let isen_12 = document.createElementNS("http://www.w3.org/2000/svg", "circle");



    if (selectPadding.value  === "padding") {
      kawung_partA.setAttribute("d", `M ${r * 0.05} ${-r * 0.05} A${r * 0.95} ${r * 0.95} 0 0 1 ${r} -${r} A${r * 0.95} ${r * 0.95} 0 0 1 ${r * 0.05} ${-r * 0.05}`);
      kawung_partA_1.setAttribute("d", `M ${r} -${r} A${r2} ${r2} 0 0 1 ${x2} -${y2} A${r2} ${r2} 0 0 1 ${r} -${r}`);
      kawung_partA_2.setAttribute("d", `M ${x2} -${y2} A${r * 0.9 * 3 /8} ${r * 0.9 *3 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 0.9 *3 / 8} A${r * 0.9 * 3 /8} ${r * 0.9 * 3 /8} 0 0 1 ${x2} -${y2}`);
      kawung_partA_3.setAttribute("d", `M ${x2 - r * 3 /8} ${-y2 + r * 0.9 * 3 / 8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 0.9 * 3 / 8}`);
      kawung_partA_4.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} `);
      kawung_partA_5.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8 + r / 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8 + r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} `);

      isen_1.setAttribute("cx", r * 1/7);
      isen_1.setAttribute("cy", -r / 7);
      isen_1.setAttribute("r", r / 15);
      isen_1.setAttribute("fill", secondary_colour);

      isen_2.setAttribute("cx", r * 6/7);
      isen_2.setAttribute("cy", -r * 6/ 7);
      isen_2.setAttribute("r", r / 15);
      isen_2.setAttribute("fill", secondary_colour);


      isen_3.setAttribute("cx", r + r * (1/7)  * (5/8));
      isen_3.setAttribute("cy", -r  + r *(5/8) / 7);
      isen_3.setAttribute("r", r * (5/8)/ 15);
      isen_3.setAttribute("fill", secondary_colour);


      isen_4.setAttribute("cx", r + r * (6/7)  * (5/8));
      isen_4.setAttribute("cy", -r  + r *(5/8) * 6 / 7);
      isen_4.setAttribute("r", r * (5/8)/ 15);
      isen_4.setAttribute("fill", secondary_colour);

      isen_5.setAttribute("cx", r + r * (5/8) - r * (3/8) * 1/ 7);
      isen_5.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 1/7);
      isen_5.setAttribute("r", r * (3/8)/ 15);
      isen_5.setAttribute("fill", secondary_colour);

      // isen_6.setAttribute("cx", r + r * (5/8) - r * (3/8) * 6/ 7);
      // isen_6.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 6/7);
      // isen_6.setAttribute("r", r * (3/8)/ 15);
      // isen_6.setAttribute("fill", secondary_colour);

      // isen_7.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 1/7);
      // isen_7.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 1/7);
      // isen_7.setAttribute("r", r * (2/8)/ 15);
      // isen_7.setAttribute("fill", secondary_colour);

      isen_8.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("r", r * (2/8)/ 15);
      isen_8.setAttribute("fill", secondary_colour);

      isen_9.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 1/7);
      isen_9.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 1/7);
      isen_9.setAttribute("r", r * (1/8)/ 15);
      isen_9.setAttribute("fill", secondary_colour);

      isen_10.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 6/7);
      isen_10.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 6/7);
      isen_10.setAttribute("r", r * (1/8)/ 15);
      isen_10.setAttribute("fill", secondary_colour);

      isen_11.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 1/7);
      isen_11.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 1/7);
      isen_11.setAttribute("r", r * (1/8)/ 15);
      isen_11.setAttribute("fill", secondary_colour);


      isen_12.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 6/7);
      isen_12.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 6/7);
      isen_12.setAttribute("r", r * (1/8)/ 15);
      isen_12.setAttribute("fill", secondary_colour);
    }
    else {
      kawung_partA.setAttribute("d", `M 0 0 A${r} ${r} 0 0 1 ${r} -${r} A${r} ${r} 0 0 1 0 0`);
      kawung_partA_1.setAttribute("d", `M ${r} -${r} A${r2} ${r2} 0 0 1 ${x2} -${y2} A${r2} ${r2} 0 0 1 ${r} -${r}`);
      kawung_partA_2.setAttribute("d", `M ${x2} -${y2} A${r * 3 /8} ${r * 3 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 3 / 8} A${r * 3 /8} ${r * 3 /8} 0 0 1 ${x2} -${y2}`);
      kawung_partA_3.setAttribute("d", `M ${x2 - r * 3 /8} ${-y2 + r * 3 / 8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 3 / 8}`);
      kawung_partA_4.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} `);
      kawung_partA_5.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8 + r / 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8 + r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} `);

      isen_1.setAttribute("cx", r * 1/7);
      isen_1.setAttribute("cy", -r / 7);
      isen_1.setAttribute("r", r / 15);
      isen_1.setAttribute("fill", secondary_colour);

      isen_2.setAttribute("cx", r * 6/7);
      isen_2.setAttribute("cy", -r * 6/ 7);
      isen_2.setAttribute("r", r / 15);
      isen_2.setAttribute("fill", secondary_colour);


      isen_3.setAttribute("cx", r + r * (1/7)  * (5/8));
      isen_3.setAttribute("cy", -r  + r *(5/8) / 7);
      isen_3.setAttribute("r", r * (5/8)/ 15);
      isen_3.setAttribute("fill", secondary_colour);


      isen_4.setAttribute("cx", r + r * (6/7)  * (5/8));
      isen_4.setAttribute("cy", -r  + r *(5/8) * 6 / 7);
      isen_4.setAttribute("r", r * (5/8)/ 15);
      isen_4.setAttribute("fill", secondary_colour);

      isen_5.setAttribute("cx", r + r * (5/8) - r * (3/8) * 1/ 7);
      isen_5.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 1/7);
      isen_5.setAttribute("r", r * (3/8)/ 15);
      isen_5.setAttribute("fill", secondary_colour);

      isen_6.setAttribute("cx", r + r * (5/8) - r * (3/8) * 6/ 7);
      isen_6.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 6/7);
      isen_6.setAttribute("r", r * (3/8)/ 15);
      isen_6.setAttribute("fill", secondary_colour);

      isen_7.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 1/7);
      isen_7.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 1/7);
      isen_7.setAttribute("r", r * (2/8)/ 15);
      isen_7.setAttribute("fill", secondary_colour);

      isen_8.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("r", r * (2/8)/ 15);
      isen_8.setAttribute("fill", secondary_colour);

      isen_9.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 1/7);
      isen_9.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 1/7);
      isen_9.setAttribute("r", r * (1/8)/ 15);
      isen_9.setAttribute("fill", secondary_colour);

      isen_10.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 6/7);
      isen_10.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 6/7);
      isen_10.setAttribute("r", r * (1/8)/ 15);
      isen_10.setAttribute("fill", secondary_colour);

      isen_11.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 1/7);
      isen_11.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 1/7);
      isen_11.setAttribute("r", r * (1/8)/ 15);
      isen_11.setAttribute("fill", secondary_colour);


      isen_12.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 6/7);
      isen_12.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 6/7);
      isen_12.setAttribute("r", r * (1/8)/ 15);
      isen_12.setAttribute("fill", secondary_colour);

    }

    kawung_partA.setAttribute("fill", main_colour);
    kawung_partA_1.setAttribute("fill", main_colour);
    kawung_partA_2.setAttribute("fill", main_colour);
    kawung_partA_3.setAttribute("fill", main_colour);
    kawung_partA_4.setAttribute("fill", main_colour);
    kawung_partA_5.setAttribute("fill", main_colour);
    // kawung_part2.setAttribute("fill", main_colour);
    // kawung_part3.setAttribute("fill", main_colour);
    // kawung_part4.setAttribute("fill", main_colour);



    svg.appendChild(group);
    group.appendChild(klowongan_kawung);
    group.appendChild(cecek_kawung);
    
    // group.appendChild(cecek_kawung);
    // group.appendChild(tanahan_kawung);
    // group.appendChild(tanahan_kawung2);
    klowongan_kawung.appendChild(kawung_partA);
    klowongan_kawung.appendChild(kawung_partA_1);
    klowongan_kawung.appendChild(kawung_partA_2);
    klowongan_kawung.appendChild(kawung_partA_3);
    klowongan_kawung.appendChild(kawung_partA_4);
    klowongan_kawung.appendChild(kawung_partA_5);


    cecek_kawung.appendChild(isen_1);
    cecek_kawung.appendChild(isen_2);
    cecek_kawung.appendChild(isen_3);
    cecek_kawung.appendChild(isen_4);
    cecek_kawung.appendChild(isen_5);
    cecek_kawung.appendChild(isen_6);
    cecek_kawung.appendChild(isen_7);
    cecek_kawung.appendChild(isen_8);
    cecek_kawung.appendChild(isen_9);
    cecek_kawung.appendChild(isen_10);
    cecek_kawung.appendChild(isen_11);
    cecek_kawung.appendChild(isen_12);

    let klowongan_kawung2 = klowongan_kawung.cloneNode(true);
    let cecek_kawung2 = cecek_kawung.cloneNode(true);
    group.appendChild(klowongan_kawung2);
    group.appendChild(cecek_kawung2);
    klowongan_kawung2.setAttribute("transform", "scale(1,-1)");
    cecek_kawung2.setAttribute("transform", "scale(1,-1)");


    let klowongan_kawung3 = klowongan_kawung.cloneNode(true);
    let cecek_kawung3 = cecek_kawung.cloneNode(true);
    group.appendChild(klowongan_kawung3);
    group.appendChild(cecek_kawung3);
    klowongan_kawung3.setAttribute("transform", "scale(-1,1)");
    cecek_kawung3.setAttribute("transform", "scale(-1,1)");


    let klowongan_kawung4 = klowongan_kawung.cloneNode(true);
    let cecek_kawung4 = cecek_kawung.cloneNode(true);
    group.appendChild(klowongan_kawung4);
    group.appendChild(cecek_kawung4);
    klowongan_kawung4.setAttribute("transform", "scale(-1,-1)");
    cecek_kawung4.setAttribute("transform", "scale(-1,-1)");

    if (fib_motive === 'Full') {
      let klowongan_kawung5 = klowongan_kawung.cloneNode(true);
      let cecek_kawung5 = cecek_kawung.cloneNode(true);
      group.appendChild(klowongan_kawung5);
      group.appendChild(cecek_kawung5);
      klowongan_kawung5.setAttribute("transform", "rotate(-90)");
      cecek_kawung5.setAttribute("transform", "rotate(-90)");

      let klowongan_kawung6 = klowongan_kawung.cloneNode(true);
      let cecek_kawung6 = cecek_kawung.cloneNode(true);
      group.appendChild(klowongan_kawung6);
      group.appendChild(cecek_kawung6);
      klowongan_kawung6.setAttribute("transform", "scale(-1,1) rotate(-90)");
      cecek_kawung6.setAttribute("transform", "scale(-1,1) rotate(-90)");

      let klowongan_kawung7 = klowongan_kawung.cloneNode(true);
      let cecek_kawung7 = cecek_kawung.cloneNode(true);
      group.appendChild(klowongan_kawung7);
      group.appendChild(cecek_kawung7);
      klowongan_kawung7.setAttribute("transform", "scale(-1,1) rotate(90)");
      cecek_kawung7.setAttribute("transform", "scale(-1,1) rotate(90)");

      let klowongan_kawung8 = klowongan_kawung.cloneNode(true);
      let cecek_kawung8 = cecek_kawung.cloneNode(true);
      group.appendChild(klowongan_kawung8);
      group.appendChild(cecek_kawung8);
      klowongan_kawung8.setAttribute("transform", "rotate(90)");
      cecek_kawung8.setAttribute("transform", "rotate(90)");
    }


}





function reset(){
  svg.innerHTML = '';
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  if (screenWidth >=  400){
    svg.setAttribute("width", 400);
    svg.setAttribute("height", 400 * 12 / 13);
  }
  else {
    svg.setAttribute("width", screenWidth * (screenWidth/ 400));
    svg.setAttribute("height", screenWidth * (screenWidth/ 400) * 12 / 13);
  }
  bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bg_rect.setAttribute("width", "100%");
  bg_rect.setAttribute("height", "100%");
  bg_rect.setAttribute("fill", secondary_colour);
  svg.appendChild(bg_rect);
}


// function redraw(motive='single'){
//   reset();
//   if (motive === 'single'){
//     drawFibonacci(svg.getAttribute("width")/2, svg.getAttribute("height")/2,svg.getAttribute("width")/4, 'Full');
//   }
//   else {
//     wanted_width = svg.getAttribute("width")/4;
//     r = wanted_width * 8/ (13 * 2);
//     // r = svg.getAttribute("width") * 8/ (13 * 2 * 4);
//     for(let i=0; i <4; i++){
//       for(let j=0; j<6; j++){
//         drawFibonacci(wanted_width * 13 / (13 * 2) + wanted_width * i, r + 2 * r * j, r , 'No');
//       }
//     }

//   }
// }




// const selectPadding = document.getElementById('paddings');
// // Add an event listener to the select input
// selectPadding.addEventListener('change', function() {
//     redraw(selectBox.value);
// });


// const selectBox = document.getElementById('motives');
//   // Add an event listener to the select input
//   selectBox.addEventListener('change', function() {
//   // Retrieve the selected value
//   const selectedValue = selectBox.value;
          
//   // Display the selected value
//   redraw(selectedValue);
// });


// redraw('tesselation');


function drawKawung(Points){  
  xc = 0;
  yc = 0;
  for (let i=0; i < Points.length; i++){
    parts = Points[i].split("_");
    numbers = parts.map(part => parseFloat(part));
    xc += numbers[0];
    yc += numbers[1];
  }
  xc = xc / Points.length;
  yc = yc / Points.length;

  for (let i=0; i < Points.length ; i++){
  parts = Points[i].split("_");
  numbers = parts.map(part => parseFloat(part));
  parts0 = Points[0].split("_");
  numbers0 = parts0.map(part => parseFloat(part));

  if (i < Points.length -1) {
      parts2 = Points[i+1].split("_");
      numbers2 = parts2.map(part => parseFloat(part));
      new_x = midpoint(numbers[0],numbers2[0]);
      new_y = midpoint(numbers[1], numbers2[1]);
  }
  else {
      new_x = midpoint(numbers[0],numbers0[0]);
      new_y = midpoint(numbers[1], numbers0[1]);    
  }

  if (i === 0){
      partslast = Points[Points.length -1].split("_");
  numberslast = partslast.map(part => parseFloat(part));
    new_x2 = midpoint(numbers[0],numberslast[0]);
      new_y2 = midpoint(numbers[1], numberslast[1]);  
  }
  else {
      partsbefore = Points[i -1].split("_");
      numbersbefore = partsbefore.map(part => parseFloat(part));
      new_x2 = midpoint(numbers[0], numbersbefore[0]);
      new_y2 = midpoint(numbers[1], numbersbefore[1]);  
  }

    // Quadratic Bezier Curve
    kawung_part = document.createElementNS("http://www.w3.org/2000/svg", "path");
    kawung_part.setAttribute("d", `M ${xc.toFixed(1)} ${yc.toFixed(1)} Q${new_x.toFixed(1)} ${new_y.toFixed(1)} ${numbers[0].toFixed(1)} ${numbers[1].toFixed(1)} Q${new_x2.toFixed(1)} ${new_y2.toFixed(1)} ${xc.toFixed(1)} ${yc.toFixed(1)}`);
    kawung_part.setAttribute("stroke", secondary_colour);
    kawung_part.setAttribute("fill", main_colour);
    svg.appendChild(kawung_part);

    // Circle 
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xc + 0.85 * (numbers[0] - xc)); // x-coordinate of the center
    circle.setAttribute("cy", yc + 0.85 * (numbers[1] - yc)); // y-coordinate of the center
    circle.setAttribute("r", 0.05 * Math.sqrt(  (numbers[0] - xc) ** 2 + (numbers[1] - yc) ** 2));   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", secondary_colour); // fill color
    svg.appendChild(circle);

    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xc + 0.7 * (numbers[0] - xc)); // x-coordinate of the center
    circle.setAttribute("cy", yc + 0.7 * (numbers[1] - yc)); // y-coordinate of the center
    circle.setAttribute("r", 0.03 * Math.sqrt(  (numbers[0] - xc) ** 2 + (numbers[1] - yc) ** 2));   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", secondary_colour); // fill color
    svg.appendChild(circle);

  }
}



// let main_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// main_circle.setAttribute("cx", svg.getAttribute("width")/2);
// main_circle.setAttribute("cy", svg.getAttribute("height")/2,);
// main_circle.setAttribute("r", svg.getAttribute("width")/2);
// main_circle.setAttribute("stroke", main_colour);
// main_circle.setAttribute("fill", secondary_colour);
// svg.appendChild(main_circle);




// main_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// main_circle.setAttribute("cx", svg.getAttribute("width")/2);
// main_circle.setAttribute("cy", svg.getAttribute("height")/2);
// main_circle.setAttribute("r", svg.getAttribute("width")* 4/(2*5));
// main_circle.setAttribute("stroke", main_colour);
// main_circle.setAttribute("fill", secondary_colour);

// svg.appendChild(main_circle);


// main_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// main_circle.setAttribute("cx", svg.getAttribute("width")/2);
// main_circle.setAttribute("cy", svg.getAttribute("height")/2);
// main_circle.setAttribute("r", svg.getAttribute("width")* 3/(2*5));
// main_circle.setAttribute("stroke", main_colour);
// main_circle.setAttribute("fill", secondary_colour);

// svg.appendChild(main_circle);


// main_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// main_circle.setAttribute("cx", svg.getAttribute("width")/2);
// main_circle.setAttribute("cy", svg.getAttribute("height")/2);
// main_circle.setAttribute("r", svg.getAttribute("width")* 2/(2*5));
// main_circle.setAttribute("stroke", main_colour);
// main_circle.setAttribute("fill", secondary_colour);

// svg.appendChild(main_circle);


// main_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// main_circle.setAttribute("cx", svg.getAttribute("width")/2);
// main_circle.setAttribute("cy", svg.getAttribute("height")/2);
// main_circle.setAttribute("r", svg.getAttribute("width")* 1/(2*5));
// main_circle.setAttribute("stroke", main_colour);
// main_circle.setAttribute("fill", secondary_colour);

// svg.appendChild(main_circle);

r = svg.getAttribute("width")/10;
degree = 2 * Math.PI/24;

xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;



for (let i=0; i <24; i+= 2) {
xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;

x1 = xc + Math.cos(0 + i * degree) * 4 * r;
y1 = yc + Math.sin(0 + i * degree) * 4 * r;

x2 = xc + Math.cos(0 + i * degree) * 5 * r;
y2 = yc + Math.sin(0 + i * degree) * 5 * r;

x3 = xc + Math.cos(degree + i * degree) * 5 * r;
y3 = yc + Math.sin(degree + i * degree) * 5 * r;

x4 = xc + Math.cos(degree + i * degree) * 4 * r;
y4 = yc + Math.sin(degree + i * degree) * 4 * r;


drawKawung([
  String(x1) +  '_' + String(y1),
  String(x2) +  '_' + String(y2),
  String(x3) +  '_' + String(y3),
  String(x4) +  '_' + String(y4)
  ]);

}


for (let i=1; i <24; i += 2) {
xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;

x1 = xc + Math.cos(0 + i * degree) * 3 * r;
y1 = yc + Math.sin(0 + i * degree) * 3 * r;

x2 = xc + Math.cos(0 + i * degree) * 4 * r;
y2 = yc + Math.sin(0 + i * degree) * 4 * r;

x3 = xc + Math.cos(degree + i * degree) * 4 * r;
y3 = yc + Math.sin(degree + i * degree) * 4 * r;

x4 = xc + Math.cos(degree + i * degree) * 3 * r;
y4 = yc + Math.sin(degree + i * degree) * 3 * r;


drawKawung([
  String(x1) +  '_' + String(y1),
  String(x2) +  '_' + String(y2),
  String(x3) +  '_' + String(y3),
  String(x4) +  '_' + String(y4)
  ]);

}


for (let i=0; i <24; i += 2) {
xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;

x1 = xc + Math.cos(0 + i * degree) * 2 * r;
y1 = yc + Math.sin(0 + i * degree) * 2 * r;

x2 = xc + Math.cos(0 + i * degree) * 3 * r;
y2 = yc + Math.sin(0 + i * degree) * 3 * r;

x3 = xc + Math.cos(degree + i * degree) * 3 * r;
y3 = yc + Math.sin(degree + i * degree) * 3 * r;

x4 = xc + Math.cos(degree + i * degree) * 2 * r;
y4 = yc + Math.sin(degree + i * degree) * 2 * r;


drawKawung([
  String(x1) +  '_' + String(y1),
  String(x2) +  '_' + String(y2),
  String(x3) +  '_' + String(y3),
  String(x4) +  '_' + String(y4)
  ]);

}

for (let i=1; i <24; i+=2) {
xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;

x1 = xc + Math.cos(0 + i * degree) * 1 * r;
y1 = yc + Math.sin(0 + i * degree) * 1 * r;

x2 = xc + Math.cos(0 + i * degree) * 2 * r;
y2 = yc + Math.sin(0 + i * degree) * 2 * r;

x3 = xc + Math.cos(degree + i * degree) * 2 * r;
y3 = yc + Math.sin(degree + i * degree) * 2 * r;

x4 = xc + Math.cos(degree + i * degree) * 1 * r;
y4 = yc + Math.sin(degree + i * degree) * 1 * r;


drawKawung([
  String(x1) +  '_' + String(y1),
  String(x2) +  '_' + String(y2),
  String(x3) +  '_' + String(y3),
  String(x4) +  '_' + String(y4)
  ]);

}


for (let i=0; i <24; i+=2) {
xc = svg.getAttribute("width")/2;
yc = svg.getAttribute("height")/2;

x1 = xc + Math.cos(0 + i * degree) * 0 * r;
y1 = yc + Math.sin(0 + i * degree) * 0 * r;

x2 = xc + Math.cos(0 + i * degree) * 1 * r;
y2 = yc + Math.sin(0 + i * degree) * 1 * r;

x3 = xc + Math.cos(degree + i * degree) * 1 * r;
y3 = yc + Math.sin(degree + i * degree) * 1 * r;

x4 = xc + Math.cos(degree + i * degree) * 0 * r;
y4 = yc + Math.sin(degree + i * degree) * 0 * r;


drawKawung([
  String(x1) +  '_' + String(y1),
  String(x2) +  '_' + String(y2),
  String(x3) +  '_' + String(y3),
  String(x4) +  '_' + String(y4)
  ]);

}






// x1 = xc + Math.cos(degree + degree) * 4 * r;
// y1 = yc + Math.sin(degree + degree) * 4 * r;

// x2 = xc + Math.cos(degree + degree) * 5 * r;
// y2 = yc + Math.sin(degree + degree) * 5 * r;

// x3 = xc + Math.cos(2 * degree + degree) * 5 * r;
// y3 = yc + Math.sin(2 * degree + degree) * 5 * r;

// x4 = xc + Math.cos(2 * degree + degree) * 4 * r;
// y4 = yc + Math.sin(2 * degree + degree) * 4 * r;

// console.log(x1);
  
// drawKawung([
//   String(x1) +  '_' + String(y1),
//   String(x2) +  '_' + String(y2),
//   String(x3) +  '_' + String(y3),
//   String(x4) +  '_' + String(y4)
//   ]);

