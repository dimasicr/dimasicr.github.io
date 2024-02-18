function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      r = canvas.width * 0.45;
      Ax = Math.cos(2 * Math.PI/ 4 + Math.PI/4) * r;
      Ay = Math.sin(2 * Math.PI/ 4 + Math.PI/4) * r;
      Bx = Math.cos(2 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      By = Math.sin(2 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      Cx = Math.cos(3 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      Cy = Math.sin(3 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      Dx = Math.cos(4 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      Dy = Math.sin(4 * 2 * Math.PI/ 4 + Math.PI/4) * r;
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(Ax, 0.5 * (Ay + By));
      ctx.lineTo(Cx, 0.5 * (Ay + By));
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0.5 * (Bx + Cx) , By);
      ctx.lineTo(0.5 * (Bx + Cx), Ay);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(Ax, Ay, 0.02 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Bx, By, 0.02 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Cx, Cy, 0.02 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Dx, Dy, 0.02 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, 0.02 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = '14px Arial';
      ctx.fillText('A', Ax, Ay + 0.15 * r);
      ctx.fillText('B', Bx, By + 0.15 * r);
      ctx.fillText('C', Cx, Cy + 0.15 * r);
      ctx.fillText('D', Dx, Dy + 0.15 * r);
      ctx.fillText('O', 0 + 0.05 * r, 0);
      
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      animateArc(0,0, r / Math.sqrt(2), 0, 2 * Math.PI, step - 20, step - 20 > 0);
      animateArc(Ax,Ay, r / Math.sqrt(2), 1.5 * Math.PI, 2 * Math.PI, step - 40, step - 40 > 0);
      animateArc(Bx,By, r / Math.sqrt(2), 0 * Math.PI, 0.5 * Math.PI, step - 60, step - 60 > 0);
      animateArc(Cx,Cy, r / Math.sqrt(2), 0.5 * Math.PI, 1 * Math.PI, step - 80, step - 80 > 0);
      animateArc(Dx,Dy, r / Math.sqrt(2), 1 * Math.PI, 1.5 * Math.PI, step - 100, step - 100 > 0);
      ctx.restore();
      step += 1;
      requestAnimationFrame(draw);
    }

    if (screenWidth > 400){
        canvas.width = 400;
        canvas.height = 400;
    }
    else {
        canvas.width = screenWidth * screenWidth / canvas.width;
        canvas.height = screenWidth * screenWidth / canvas.width;
        console.log(canvas.width);
}
draw();
