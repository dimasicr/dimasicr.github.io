const selectBox = document.getElementById('motives');
const selectThemes = document.getElementById('themes');
const selectIsens = document.getElementById('Isens');
let touchStartX = 0;
let touchEndX = 0;
let currentPattern = selectBox.value;



function redraw(){
  setup(400, 400, themes[selectThemes.value].secondaryColor);
  cX = svg.getAttribute("width")/2;
  cY = svg.getAttribute("height")/2;
  w = svg.getAttribute("width") * 0.5 ;
  const wp = 0.14 * w;
const decagonHeight = Math.tan(72/360 * 2 * Math.PI) * 0.5 * wp;;
const pentagonHeight = Math.tan(54/360 * 2 * Math.PI) * 0.5 * wp;
const rDecagon = getRadius(wp,10);
const rPentagon = getRadius(wp, 5);
const rPentacle = getRadius(rPentagon, 10)
const dx1 = Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 1) * rPentagon  - Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 0) * rPentagon;
const dx2 = Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 2) * rPentagon  - Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 1) * rPentagon;
const dx3 = Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 3) * rPentagon  - Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 2) * rPentagon;
const dx4 = Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 4) * rPentagon  - Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 3) * rPentagon;
const dx5 = Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 5) * rPentagon  - Math.cos(54/360 * 2* Math.PI + 2* Math.PI /5 * 4) * rPentagon;
const dy1 = Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 1) * rPentagon  - Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 0) * rPentagon;
const dy2 = Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 2) * rPentagon  - Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 1) * rPentagon;
const dy3 = Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 3) * rPentagon  - Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 2) * rPentagon;
const dy4 = Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 4) * rPentagon  - Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 3) * rPentagon;
const dy5 = Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 5) * rPentagon  - Math.sin(54/360 * 2* Math.PI + 2* Math.PI /5 * 4) * rPentagon;
const pentacleDecagondist = rPentacle + pentagonHeight +  decagonHeight;
const decagonPentagondist = decagonHeight + pentagonHeight;
const dpfdx = cX - (cX - Math.abs(dx3) - 0.5 *wp);
const dpfdy = cY - (cY + (rPentacle + pentagonHeight +  3 * decagonHeight + Math.abs(dy2)));
const dpfdDeg = Math.atan(dpfdy/ dpfdx) + Math.PI/2;
const pentacleFusedDecagondist  = Math.sqrt(dpfdx**2 + dpfdy**2 );
const dpfdx2 = cX - (cX - Math.abs(dx3) - 0.5 *wp - wp - 2 * rDecagon);
const dpfdDeg2 = Math.atan(dpfdy/ dpfdx2) + Math.PI/2;
const pentacleDecagon2dist  = Math.sqrt(dpfdx2**2 + dpfdy**2 );
  
for(let k=0; k <5; k++){ // Five fold symmetry loop
  // Draw Decagon
  for (let i=0; i<10; i++){
    drawTumpal(cX + pentacleDecagondist * Math.sin(k*72/360 * 2 * Math.PI), cY + pentacleDecagondist * Math.cos(k*72/360 * 2 * Math.PI), selectIsens.value, wp, 72, 36*i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
    drawTumpalInner(cX + pentacleFusedDecagondist * Math.sin(dpfdDeg + k*72/360 * 2 * Math.PI), cY + pentacleFusedDecagondist * Math.cos(dpfdDeg + k*72/360 * 2 * Math.PI), selectIsens.value, wp, 72, 36*i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
    drawTumpalInner(cX - pentacleFusedDecagondist * Math.sin(dpfdDeg + k*72/360 * 2 * Math.PI), cY + pentacleFusedDecagondist * Math.cos(dpfdDeg + k*72/360 * 2 * Math.PI), selectIsens.value, wp, 72, 36*i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true);
    drawTumpal(cX + pentacleDecagon2dist * Math.sin(dpfdDeg2 +  k*72/360 * 2 * Math.PI), cY + pentacleDecagon2dist   * Math.cos(dpfdDeg2 + k*72/360 * 2 * Math.PI), selectIsens.value, wp, 72, 36*i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
  }
  // Draw Pentagram around the decagon
  for(let j=0; j<10;j++){
    for (let i=0; i<5; i++){
      drawTumpal(cX + pentacleDecagondist * Math.sin(k*72/360 * 2 * Math.PI) + decagonPentagondist * Math.sin(j*36/360 * 2 * Math.PI), cY + pentacleDecagondist * Math.cos(k*72/360 * 2 * Math.PI)  - decagonPentagondist * Math.cos(j*36/360 * 2 * Math.PI), selectIsens.value, wp, 54, 36*j+72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
      drawTumpal(cX + pentacleDecagon2dist * Math.sin(dpfdDeg2 +  k*72/360 * 2 * Math.PI) + decagonPentagondist * Math.sin(j*36/360 * 2 * Math.PI), cY + pentacleDecagon2dist   * Math.cos(dpfdDeg2 + k*72/360 * 2 * Math.PI) - decagonPentagondist * Math.cos(j*36/360 * 2 * Math.PI), selectIsens.value, wp, 54, 36*j+72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
    }
  }

    for(let j=0; j<10;j++){
      for (let i=0; i<5; i++){
        if ((j+k*2)%10 !== 7 & (j+k*2)%10 !== 8){
          drawTumpal(cX + pentacleFusedDecagondist * Math.sin(dpfdDeg + k*72/360 * 2 * Math.PI) + decagonPentagondist * Math.sin(j*36/360 * 2 * Math.PI), cY + pentacleFusedDecagondist * Math.cos(dpfdDeg + k*72/360 * 2 * Math.PI)  - decagonPentagondist * Math.cos(j*36/360 * 2 * Math.PI), selectIsens.value, wp, 54, 36*j+72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
        }
        if ( (j+10-k*2)%10 !== 2 & (j+10-k*2)%10 !== 3){
          drawTumpal(cX - pentacleFusedDecagondist * Math.sin(dpfdDeg + k*72/360 * 2 * Math.PI) + decagonPentagondist * Math.sin(j*36/360 * 2 * Math.PI), cY + pentacleFusedDecagondist * Math.cos(dpfdDeg + k*72/360 * 2 * Math.PI)  - decagonPentagondist * Math.cos(j*36/360 * 2 * Math.PI), selectIsens.value, wp, 54, 36*j+72 * i, themes[selectThemes.value].mainColor, themes[selectThemes.value].secondaryColor, themes[selectThemes.value].strokeColor, true, themes[selectThemes.value].tertiaryColor);
        }
      }
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
