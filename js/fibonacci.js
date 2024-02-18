useTheme = 'oldJava';
// Get references to the select input and the element to display the selected option
const selectBox = document.getElementById('motives');
const selectPadding = document.getElementById('paddings');
const selectThemes = document.getElementById('themes');
const selectThreshold = document.getElementById('recursion_threshold');

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
        if (currentPattern === 'rect_diamond') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 
        else if (currentPattern === 'square') {
          currentPattern = 'rect_diamond';
          selectBox.value = 'rect_diamond';
        } 

    } else if (swipeLength < -swipeThreshold) {
        // Swipe left
        if (currentPattern === 'rect_diamond') {
          currentPattern = 'square';
          selectBox.value = 'square';
        } 
        else if (currentPattern === 'square') {
          currentPattern = 'rect_diamond';
          selectBox.value = 'rect_diamond';
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



function drawFibonacci(x,y, r, fib_motive = 'Full', mainColor=themes["oldJava"].mainColor, secondaryColor=themes["oldJava"].secondaryColor, strokeColor = themes["oldJava"].strokeColor){
    let pad = 0.05 * r;
    let pad2 = 0.95 * r;
    let rpad = 0.9 * r;
    let group = document.createElementNS(svgURI, "g");

    let r2 = 5/8 * r;
    let x2 = r + r2;
    let y2 = r - r2;
    let pad_2 = 0.05 * r2;
    let pad2_2 = 0.05 * r2;
    let rpad_2 = 0.9 * r2;



    // Set the transform attribute of the group. Need to change to x and y coordinate we want to check
    group.setAttribute("transform", `translate(${x}, ${y})`);
    let klowongan_kawung = document.createElementNS(svgURI, "g");
    let kawung_partA = document.createElementNS(svgURI, "path");
    let kawung_partA_1 = document.createElementNS(svgURI, "path");
    let kawung_partA_2 = document.createElementNS(svgURI, "path");
    let kawung_partA_3 = document.createElementNS(svgURI, "path");
    let kawung_partA_4 = document.createElementNS(svgURI, "path");
    let kawung_partA_5 = document.createElementNS(svgURI, "path");

    let cecek_kawung = document.createElementNS(svgURI, "g");
    let isen_1 = document.createElementNS(svgURI, "circle");
    let isen_2 = document.createElementNS(svgURI, "circle");
    let isen_3 = document.createElementNS(svgURI, "circle");
    let isen_4 = document.createElementNS(svgURI, "circle");
    let isen_5 = document.createElementNS(svgURI, "circle");
    let isen_6 = document.createElementNS(svgURI, "circle");
    let isen_7 = document.createElementNS(svgURI, "circle");
    let isen_8 = document.createElementNS(svgURI, "circle");
    let isen_9 = document.createElementNS(svgURI, "circle");
    let isen_10 = document.createElementNS(svgURI, "circle");
    let isen_11 = document.createElementNS(svgURI, "circle");
    let isen_12 = document.createElementNS(svgURI, "circle");



    if (selectPadding.value  === "true") {
      kawung_partA.setAttribute("d", `M ${r * 0.05} ${-r * 0.05} A${r * 0.95} ${r * 0.95} 0 0 1 ${r} -${r} A${r * 0.95} ${r * 0.95} 0 0 1 ${r * 0.05} ${-r * 0.05}`);
      kawung_partA_1.setAttribute("d", `M ${r} -${r} A${r2} ${r2} 0 0 1 ${x2} -${y2} A${r2} ${r2} 0 0 1 ${r} -${r}`);
      kawung_partA_2.setAttribute("d", `M ${x2} -${y2} A${r * 0.9 * 3 /8} ${r * 0.9 *3 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 0.9 *3 / 8} A${r * 0.9 * 3 /8} ${r * 0.9 * 3 /8} 0 0 1 ${x2} -${y2}`);
      kawung_partA_3.setAttribute("d", `M ${x2 - r * 3 /8} ${-y2 + r * 0.9 * 3 / 8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} A${r * 2 /8} ${r * 2 /8} 0 0 1 ${x2 - r * 3 /8} ${-y2 + r * 0.9 * 3 / 8}`);
      kawung_partA_4.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8} ${-y2 + r * 3 / 8 - r * 2 /8} `);
      kawung_partA_5.setAttribute("d", `M ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8}  A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8 + r / 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8 + r / 8} A${r * 1 /8} ${r * 1 /8} 0 0 1 ${x2 - r * 3 /8  - r * 2 /8 + r/ 8} ${-y2 + r * 3 / 8 - r * 2 /8 - r / 8} `);

      isen_1.setAttribute("cx", r * 1/7);
      isen_1.setAttribute("cy", -r / 7);
      isen_1.setAttribute("r", r / 15);
      isen_1.setAttribute("fill", secondaryColor);
      isen_2.setAttribute("cx", r * 6/7);
      isen_2.setAttribute("cy", -r * 6/ 7);
      isen_2.setAttribute("r", r / 15);
      isen_2.setAttribute("fill", secondaryColor);
      isen_3.setAttribute("cx", r + r * (1/7)  * (5/8));
      isen_3.setAttribute("cy", -r  + r *(5/8) / 7);
      isen_3.setAttribute("r", r * (5/8)/ 15);
      isen_3.setAttribute("fill", secondaryColor);
      isen_4.setAttribute("cx", r + r * (6/7)  * (5/8));
      isen_4.setAttribute("cy", -r  + r *(5/8) * 6 / 7);
      isen_4.setAttribute("r", r * (5/8)/ 15);
      isen_4.setAttribute("fill", secondaryColor);
      isen_5.setAttribute("cx", r + r * (5/8) - r * (3/8) * 1/ 7);
      isen_5.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 1/7);
      isen_5.setAttribute("r", r * (3/8)/ 15);
      isen_5.setAttribute("fill", secondaryColor);
      isen_8.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("r", r * (2/8)/ 15);
      isen_8.setAttribute("fill", secondaryColor);
      isen_9.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 1/7);
      isen_9.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 1/7);
      isen_9.setAttribute("r", r * (1/8)/ 15);
      isen_9.setAttribute("fill", secondaryColor);
      isen_10.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 6/7);
      isen_10.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 6/7);
      isen_10.setAttribute("r", r * (1/8)/ 15);
      isen_10.setAttribute("fill", secondaryColor);
      isen_11.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 1/7);
      isen_11.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 1/7);
      isen_11.setAttribute("r", r * (1/8)/ 15);
      isen_11.setAttribute("fill", secondaryColor);
      isen_12.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 6/7);
      isen_12.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 6/7);
      isen_12.setAttribute("r", r * (1/8)/ 15);
      isen_12.setAttribute("fill", secondaryColor);
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
      isen_1.setAttribute("fill", secondaryColor);
      isen_2.setAttribute("cx", r * 6/7);
      isen_2.setAttribute("cy", -r * 6/ 7);
      isen_2.setAttribute("r", r / 15);
      isen_2.setAttribute("fill", secondaryColor);
      isen_3.setAttribute("cx", r + r * (1/7)  * (5/8));
      isen_3.setAttribute("cy", -r  + r *(5/8) / 7);
      isen_3.setAttribute("r", r * (5/8)/ 15);
      isen_3.setAttribute("fill", secondaryColor);
      isen_4.setAttribute("cx", r + r * (6/7)  * (5/8));
      isen_4.setAttribute("cy", -r  + r *(5/8) * 6 / 7);
      isen_4.setAttribute("r", r * (5/8)/ 15);
      isen_4.setAttribute("fill", secondaryColor);
      isen_5.setAttribute("cx", r + r * (5/8) - r * (3/8) * 1/ 7);
      isen_5.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 1/7);
      isen_5.setAttribute("r", r * (3/8)/ 15);
      isen_5.setAttribute("fill", secondaryColor);
      isen_6.setAttribute("cx", r + r * (5/8) - r * (3/8) * 6/ 7);
      isen_6.setAttribute("cy", -r  + r *(5/8) + r * (3/8) * 6/7);
      isen_6.setAttribute("r", r * (3/8)/ 15);
      isen_6.setAttribute("fill", secondaryColor);
      isen_7.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 1/7);
      isen_7.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 1/7);
      isen_7.setAttribute("r", r * (2/8)/ 15);
      isen_7.setAttribute("fill", secondaryColor);
      isen_8.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) * 6/7);
      isen_8.setAttribute("r", r * (2/8)/ 15);
      isen_8.setAttribute("fill", secondaryColor);
      isen_9.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 1/7);
      isen_9.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 1/7);
      isen_9.setAttribute("r", r * (1/8)/ 15);
      isen_9.setAttribute("fill", secondaryColor);
      isen_10.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8) * 6/7);
      isen_10.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) * 6/7);
      isen_10.setAttribute("r", r * (1/8)/ 15);
      isen_10.setAttribute("fill", secondaryColor);
      isen_11.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 1/7);
      isen_11.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 1/7);
      isen_11.setAttribute("r", r * (1/8)/ 15);
      isen_11.setAttribute("fill", secondaryColor);
      isen_12.setAttribute("cx", r + r * (5/8) - r * (3/8) - r * (2/8) + r *(1/8)  + r*(1/8) * 6/7);
      isen_12.setAttribute("cy", -r  + r *(5/8) + r * (3/8) - r * (2/8) - r *(1/8) + r*(1/8) * 6/7);
      isen_12.setAttribute("r", r * (1/8)/ 15);
      isen_12.setAttribute("fill", secondaryColor);

    }

    kawung_partA.setAttribute("fill", mainColor);
    kawung_partA_1.setAttribute("fill", mainColor);
    kawung_partA_2.setAttribute("fill", mainColor);
    kawung_partA_3.setAttribute("fill", mainColor);
    kawung_partA_4.setAttribute("fill", mainColor);
    kawung_partA_5.setAttribute("fill", mainColor);
    kawung_partA.setAttribute("stroke", strokeColor);
    kawung_partA_1.setAttribute("stroke", strokeColor);
    kawung_partA_2.setAttribute("stroke", strokeColor);
    kawung_partA_3.setAttribute("stroke", strokeColor);
    kawung_partA_4.setAttribute("stroke", strokeColor);
    kawung_partA_5.setAttribute("stroke", strokeColor);
    kawung_partA.setAttribute("stroke-width", 0.5);
    kawung_partA_1.setAttribute("stroke-width", 0.5);
    kawung_partA_2.setAttribute("stroke-width", 0.5);
    kawung_partA_3.setAttribute("stroke-width", 0.5);
    kawung_partA_4.setAttribute("stroke-width", 0.5);
    kawung_partA_5.setAttribute("stroke-width", 0.5);

    svg.appendChild(group);
    group.appendChild(klowongan_kawung);
    group.appendChild(cecek_kawung);
    
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


function drawTanahanKawung(x, y, r, mainColor=themes["batavia"].mainColor, secondaryColor=themes["batavia"].secondaryColor, strokeColor=themes["batavia"].strokeColor , tanahan = 'rect_diamond') {
    let group = document.createElementNS(svgURI, "g");
    let tanahanKawung = document.createElementNS(svgURI, "g");
    let tanahanKawung2 = document.createElementNS(svgURI, "g");

    svg.appendChild(group);

    group.setAttribute("transform", `translate(${x}, ${y})`);
    group.appendChild(tanahanKawung);
    group.appendChild(tanahanKawung2);
    group.setAttribute("stroke", strokeColor);
    group.setAttribute("stroke-width", 0.2);
    tanahanKawung2.setAttribute("fill", mainColor);
    tanahanKawung.setAttribute("transform", "rotate(45)");
    tanahanKawung.setAttribute("fill", mainColor);
    for (let i = 0; i < 4; i++) {
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
        else if (tanahan === 'square'){
            drawPolygonalKawung(4,x, y, 0.35 * r , 0, mainColor, "none", 'none');
        }
    }
}




function redraw(){
  setup(400, 400 * 12 / 13, themes[selectThemes.value].secondaryColor);
    wanted_width = svg.getAttribute("width")/4;
    r = wanted_width * 8/ (13 * 2);
    for(let i=0; i <4; i++){
      for(let j=0; j<6; j++){
        if (selectThemes.value === 'tetradiac'){
          drawFibonacci(wanted_width * 13 / (13 * 2) + wanted_width * i, r + 2 * r * j, r , 'No', themes[selectThemes.value].mainColor[i%4], "#493118",themes[selectThemes.value].strokeColor);
        }
        else {
          drawFibonacci(wanted_width * 13 / (13 * 2) + wanted_width * i, r + 2 * r * j, r , 'No', themes[selectThemes.value].mainColor,themes[selectThemes.value].secondaryColor,themes[selectThemes.value].strokeColor);
        }
      }
    }

    for (let i=0; i < 7; i++){
      for (let j=0; j <4; j++){
        if (selectThemes.value === 'tetradiac') {
          drawTanahanKawung(0.5 * wanted_width + j * wanted_width, 0 + i *  0.615 * wanted_width, 0.28 * wanted_width, themes[selectThemes.value].mainColor[j%4], themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
          drawTanahanKawung(wanted_width + j * wanted_width, 0 + i * 0.615 * wanted_width, 0.17 * wanted_width, themes[selectThemes.value].mainColor[j%4], themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
          drawTanahanKawung(wanted_width + j * wanted_width, i * 0.615 * wanted_width + 0.31 * wanted_width, 0.1 * wanted_width, themes[selectThemes.value].mainColor[j%4], themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
        }
        else {
          drawTanahanKawung(0.5 * wanted_width + j * wanted_width, 0 + i *  0.615 * wanted_width, 0.28 * wanted_width, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
          drawTanahanKawung(wanted_width + j * wanted_width, 0 + i * 0.615 * wanted_width, 0.17 * wanted_width, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
          drawTanahanKawung(wanted_width + j * wanted_width, i * 0.615 * wanted_width + 0.31 * wanted_width, 0.1 * wanted_width, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor , selectBox.value);
        }
      }
    }

}




// Add an event listener to the select input
selectPadding.addEventListener('change', function() {
    redraw();
});


  // Add an event listener to the select input
selectBox.addEventListener('change', function() {
  redraw();
});


// Add an event listener to the select input
selectThemes.addEventListener('change', function() {
    redraw();
});


redraw();
