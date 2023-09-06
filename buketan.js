// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");
// let main_colour = "#6a5339";
let main_colour = "none"
let secondary_colour = "#a6896b";

let lightblue = "#6ca1d2";
let midblue = "#5b90c5"
let darkblue = "#02084b";


function drawFlower(x,y, A = 250, n = 7, b = 0.3, c = 30) {
  // Create group and set center of the group
  let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", `translate(${x}, ${y})`);
  group.setAttribute("fill", `none`);

  // Draw Flower
  flower = document.createElementNS("http://www.w3.org/2000/svg", "path");

  for(let i=0; i <=1000; i++){
    let degree = i * 2 * Math.PI / 1000;
    r = A * Math.pow(Math.abs(Math.sin(degree * n/2)), b) - 0.4 * A * Math.pow(Math.abs(Math.sin(degree * n)), b) + c 
    xp = Math.cos(degree) * r;
    yp = Math.sin(degree) * r;
    if (i === 0) {
       sentence = `M ${xp} ${yp}`;
    } 
    else {
      sentence += `L${xp} ${yp}`;
    }
  }
    sentence += 'Z';
    flower.setAttribute("d", sentence);
    flower.setAttribute("stroke", secondary_colour);
    flower.setAttribute("fill", main_colour);
    svg.appendChild(group);
    group.appendChild(flower);

  // Draw isen 

  for(let i=0; i <=n; i ++){
    let degree = i * 2 * Math.PI / n + 1 * Math.PI / n;
    r =  0.6 * (A * Math.pow(Math.abs(Math.sin(degree * n/2)), b) -  0.4 * A * Math.pow(Math.abs(Math.sin(degree * n)), b)) +  c 
    xp = Math.cos(degree) * r;
    yp = Math.sin(degree) * r;

    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xp); // x-coordinate of the center
    circle.setAttribute("cy", yp); // y-coordinate of the center
    circle.setAttribute("r", A/30);   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", "none"); // fill color
    group.appendChild(circle);

    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 0.85 * xp); // x-coordinate of the center
    circle.setAttribute("cy", 0.85 * yp); // y-coordinate of the center
    circle.setAttribute("r", A/40);   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", "none"); // fill color
    group.appendChild(circle);


  }



}




function reset(){
  svg.innerHTML = '';
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "400");
  svg.setAttribute("height", "400");
  let main_colour = "rgb(235, 210, 140)";
  let secondary_colour = "rgb(170, 130, 75)";
}


function redraw(petal){
  reset();
  drawFlower(200, 200, 150,petal); 

}



const slider = document.getElementById("slider");

// Update the displayed value when the slider changes
    slider.addEventListener("input", function() {
      redraw(slider.value); 
});


drawFlower(200, 200, 150, 6); 