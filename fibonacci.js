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



function drawFibonacci(x,y, r){
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



    if (checkbox.checked == true) {
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


    // klowongan_kawung.appendChild(kawung_part3);
    // klowongan_kawung.appendChild(kawung_part4);


}

// const drawKawung = (c) => {
//     let r = Math.abs(c.r);
//     let x = c.center.re;
//     let y = c.center.im;
//     let pad = 0.05 * r;
//     let pad2 = 0.95 * r;
//     let rpad = 0.9 * r;

// if (r < 130) {
//     // Create a group element
//     let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     // Set the transform attribute of the group. Need to change to x and y coordinate we want to check
//     group.setAttribute("transform", `translate(${x}, ${y})`);
    
    
//     let klowongan_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     let kawung_part1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     let kawung_part2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     let kawung_part3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     let kawung_part4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    
//     // Create Kawung Klowongan


//     // For stencil
//     if (checkbox.checked == true) {
//       kawung_part1.setAttribute("d", `M ${pad} -${pad2} A${rpad} ${rpad} 0 0 1 ${pad2} -${pad} A${rpad} ${rpad} 0 0 1 ${pad} -${pad2}`);
//       kawung_part2.setAttribute("d", `M ${pad} ${pad2} A${rpad} ${rpad} 0 0 1 ${pad2} ${pad} A${rpad} ${rpad} 0 0 1 ${pad} ${pad2}`);
//       kawung_part3.setAttribute("d", `M -${pad2} ${pad} A${rpad} ${rpad} 0 0 1 -${pad} ${pad2} A${rpad} ${rpad} 0 0 1 -${pad2} ${pad}`);
//       kawung_part4.setAttribute("d", `M -${pad2} -${pad} A${rpad} ${rpad} 0 0 1 -${pad} -${pad2} A${rpad} ${rpad} 0 0 1 -${r} -${pad}`);
//     }
//     else {
//       kawung_part1.setAttribute("d", `M 0 -${r} A${r} ${r} 0 0 1 ${r} 0 A${r} ${r} 0 0 1 0 -${r}`);
//       kawung_part2.setAttribute("d", `M 0 ${r} A${r} ${r} 0 0 1 ${r} 0 A${r} ${r} 0 0 1 0 ${r}`);
//       kawung_part3.setAttribute("d", `M -${r} 0 A${r} ${r} 0 0 1 0 ${r} A${r} ${r} 0 0 1 -${r} 0`);
//       kawung_part4.setAttribute("d", `M -${r} 0 A${r} ${r} 0 0 1 0 -${r} A${r} ${r} 0 0 1 -${r} 0`);
//     }



//     kawung_part1.setAttribute("fill", main_colour);
//     kawung_part2.setAttribute("fill", main_colour);
//     kawung_part3.setAttribute("fill", main_colour);
//     kawung_part4.setAttribute("fill", main_colour);
    
//     // Create Kawung Isen
//     let cecek_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     let isen_1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_1.setAttribute("cx", -r * 6/7);
//     isen_1.setAttribute("cy", -r / 7);
//     isen_1.setAttribute("r", r / 15);
//     isen_1.setAttribute("fill", secondary_colour);
    
    
//     let isen_2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_2.setAttribute("cx", -r /7);
//     isen_2.setAttribute("cy", -r * 6/ 7);
//     isen_2.setAttribute("r", r / 15);
//     isen_2.setAttribute("fill", secondary_colour);
    
    
//     let isen_3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_3.setAttribute("cx", -r * 6/7);
//     isen_3.setAttribute("cy", r / 7);
//     isen_3.setAttribute("r", r / 15);
//     isen_3.setAttribute("fill", secondary_colour);
    
    
//     let isen_4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_4.setAttribute("cx", r /7);
//     isen_4.setAttribute("cy", -r * 6/ 7);
//     isen_4.setAttribute("r", r / 15);
//     isen_4.setAttribute("fill", secondary_colour);
    
    
//     let isen_5 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_5.setAttribute("cx", r * 6 /7);
//     isen_5.setAttribute("cy", r / 7);
//     isen_5.setAttribute("r", r / 15);
//     isen_5.setAttribute("fill", secondary_colour);
    
    
//     let isen_6 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_6.setAttribute("cx", r  /7);
//     isen_6.setAttribute("cy", r * 6/ 7);
//     isen_6.setAttribute("r", r / 15);
//     isen_6.setAttribute("fill", secondary_colour);
    
    
//     let isen_7 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_7.setAttribute("cx", -r  /7);
//     isen_7.setAttribute("cy", r * 6/ 7);
//     isen_7.setAttribute("r", r / 15);
//     isen_7.setAttribute("fill", secondary_colour);
    
    
//     let isen_8 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     isen_8.setAttribute("cx", r * 6  /7);
//     isen_8.setAttribute("cy", -r / 7);
//     isen_8.setAttribute("r", r / 15);
//     isen_8.setAttribute("fill", secondary_colour);
    
    
//     // Create Kawung Isen
//     let tanahan_kawung = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     tanahan_kawung.setAttribute("transform", "rotate(45)");
//     tanahan_kawung.setAttribute("fill", main_colour);
    
//     let rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect1.setAttribute("x", - r  * 22.5 / 70);
//     rect1.setAttribute("y", - r * 1.5 /70);
//     rect1.setAttribute("width", r * 15/ 70);
//     rect1.setAttribute("height", r * 4/ 70);
    
    
//     let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect2.setAttribute("x", - r  * 22.5 / 70);
//     rect2.setAttribute("y", - r * 1.5 /70);
//     rect2.setAttribute("width", r * 15/ 70);
//     rect2.setAttribute("height", r * 4/ 70);
//     rect2.setAttribute("transform", "rotate(90)");
    
    
//     let rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect3.setAttribute("x", - r  * 22.5 / 70);
//     rect3.setAttribute("y", - r * 1.5 /70);
//     rect3.setAttribute("width", r * 15/ 70);
//     rect3.setAttribute("height", r * 4/ 70);
//     rect3.setAttribute("transform", "rotate(180)");
    
    
//     let rect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect4.setAttribute("x", - r  * 22.5 / 70);
//     rect4.setAttribute("y", - r * 1.5 /70);
//     rect4.setAttribute("width", r * 15/ 70);
//     rect4.setAttribute("height", r * 4/ 70);
//     rect4.setAttribute("transform", "rotate(270)");
    
    
    
    
//     let tanahan_kawung2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     tanahan_kawung2.setAttribute("fill", main_colour);
    
//     let tnh_1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     tnh_1.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
    
//     let tnh_2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     tnh_2.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
//     tnh_2.setAttribute("transform", "rotate(90)");
    
//     let tnh_3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     tnh_3.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
//     tnh_3.setAttribute("transform", "rotate(180)");
    
    
//     let tnh_4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     tnh_4.setAttribute("d", `M -${r*30/70} 0 Q -${r*20/70}  -${r*6/70}  -${r*10/70}  0 Q -${r*20/70}  ${r*6/70}  -${r*30/70}  0`);
//     tnh_4.setAttribute("transform", "rotate(270)");
    
    
//     // Add kawung circle to the SVG document
//     svg.appendChild(group);
//     group.appendChild(klowongan_kawung);
//     group.appendChild(cecek_kawung);
//     group.appendChild(tanahan_kawung);
//     group.appendChild(tanahan_kawung2);
//     klowongan_kawung.appendChild(kawung_part1);
//     klowongan_kawung.appendChild(kawung_part2);
//     klowongan_kawung.appendChild(kawung_part3);
//     klowongan_kawung.appendChild(kawung_part4);
//     cecek_kawung.appendChild(isen_1);
//     cecek_kawung.appendChild(isen_2);
//     cecek_kawung.appendChild(isen_3);
//     cecek_kawung.appendChild(isen_4);
//     cecek_kawung.appendChild(isen_5);
//     cecek_kawung.appendChild(isen_6);
//     cecek_kawung.appendChild(isen_7);
//     cecek_kawung.appendChild(isen_8);
//     tanahan_kawung.appendChild(rect1);
//     tanahan_kawung.appendChild(rect2);
//     tanahan_kawung.appendChild(rect3);
//     tanahan_kawung.appendChild(rect4);
//     tanahan_kawung2.appendChild(tnh_1);
//     tanahan_kawung2.appendChild(tnh_2);
//     tanahan_kawung2.appendChild(tnh_3);
//     tanahan_kawung2.appendChild(tnh_4);

// }

// }




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


function redraw(){
  reset();
  drawFibonacci(200,200,80);

  

}



const checkbox = document.getElementById("myCheckbox");





checkbox.addEventListener("click", function() {
    if (this.checked) {
      redraw();
    } else {
      redraw();
    }
  });





drawFibonacci(200,200, 80);

// circles = [];

// // Symmetric Set
// c1r = -160;
// c1center = new Complex(200,200);
// c1 = new Circle(c1r, c1center);
// circles.push(c1);


// c2r = Math.abs(c1r/2);
// c2center = new Complex(200 - c2r, 200);
// c2 = new Circle(c2r, c2center);
// circles.push(c2);

// c3r = Math.abs(c1r/2);
// c3center = new Complex(200 + c3r, 200);
// c3 = new Circle(c3r, c3center);
// circles.push(c3);
// drawGasket(circles[0], circles[1], circles[2]);
// circles.forEach(drawKawung);


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
