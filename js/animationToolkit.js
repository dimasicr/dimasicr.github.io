const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let step = 0;

if (screenWidth > 400){
  canvas.width = 400;
  canvas.height = 400;
}
else {
  canvas.width = screenWidth * screenWidth / canvas.width;
  canvas.height = canvas.width;
}

function create_path(x1, y1, x2, y2, x3, y3, x4, y4){
  // P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
  path = [];
  t = 0;
  for(i=0; i <= 40; i++) {  
    x =  Math.pow((1-t), 3) * x1 + 3 * Math.pow((1 - t), 2) * t * x2 + 3 * (1 - t) * Math.pow(t,2)* x3 + Math.pow(t, 3) * x4;
    y =  Math.pow((1-t), 3) * y1 + 3 * Math.pow((1 - t), 2) * t * y2 + 3 * (1 - t) * Math.pow(t,2)* y3 + Math.pow(t, 3) * y4;
    t += 0.025;
    path.push([x, y]);
  }
  return path;
}
    
function animateLine(x1, y1, x2, y2, step, run= false){
  if(step > 20){
    step = 20;
  }
  if(run){
      ctx.beginPath();
      ctx.moveTo(x1, y1); // Starting point
      ctx.lineTo(x1 + (x2 - x1)/ 20 * step, y1 + (y2 - y1)/ 20 * step); // Ending point (lineLength dynamically changes)
      ctx.stroke();
  }
}

function animateArc(x,y, r, startAngle, endAngle, step, run = false){
  if(step > 20){
    step = 20;
  }
  if(run){
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, startAngle + (endAngle - startAngle)/ 20 * step);
    ctx.stroke();
  }
}

function animateBezier(x1, y1, xcp, ycp, x2, y2, step, run = false){
  if (step > 20){
    step = 20;
  }
  if (run){
    for (let i =0; i < 9; i++){
      animateLine(x1 + i * (xcp - x1) / 10 , y1 + i * (ycp - y1) / 10, xcp + i *  (x2 - xcp) / 10, ycp + i *  (y2 - ycp) / 10, step, true );
    }
  }
}

function animatePath(path, step, run= false){
  if (step > 40){
    step = 40;
  }
  if (run){
    for (let i=0; i < step; i++){
      ctx.beginPath();
      ctx.moveTo(path[i][0], path[i][1]); // Starting point
      ctx.lineTo(path[i+1][0], path[i+1][1]); // Ending point (lineLength dynamically changes)
      ctx.stroke();
    }
  }
}
