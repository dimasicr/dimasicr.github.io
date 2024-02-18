function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      s = canvas.width * 0.4;

      Ax = - s;
      Ay = - 0.5 * s;
      Bx = 0;
      By = - 0.5 * s;
      Cx = 0;
      Cy = 0.5 * s;
      Dx = - s;
      Dy = 0.5 * s;
      Ex = 0.6 * s;
      Ey = By;
      Fx = 0.6 * s;
      Fy = By + 0.6 * s;
      Gx = Bx;
      Gy = Fy;
      Hx = Fx;
      Hy = Cy;
      Ix = Fx - 0.4 * s;
      Iy = Hy;
      Jx = Ix;
      Jy = Cy - 0.4 * s;
      Kx = Ix;
      Ky = Iy - 0.2 * s;
      Lx = Cx;
      Ly = Ky;

      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(Bx, By);
      ctx.lineTo(Ex, Ey);
      ctx.lineTo(Fx, Fy);
      ctx.lineTo(Gx, Gy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(Fx, Fy);
      ctx.lineTo(Hx, Hy);
      ctx.lineTo(Ix, Iy);
      ctx.lineTo(Jx, Jy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(Ix, Iy);
      ctx.lineTo(Kx, Ky);
      ctx.lineTo(Lx, Ly);
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Ix, Iy);
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
      ctx.arc(Ax, Ay, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Bx, By, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Cx, Cy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Dx, Dy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Ex, Ey, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Fx, Fy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Gx, Gy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Hx, Hy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Ix, Iy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Jx, Jy, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(Kx, Ky, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Lx, Ly, 0.02 * s, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = '14px Arial';
      ctx.fillText('A', Ax, Ay + 0.15 * s);
      ctx.fillText('B', Bx, By + 0.15 * s);
      ctx.fillText('C', Cx, Cy + 0.15 * s);
      ctx.fillText('D', Dx, Dy + 0.15 * s);
      ctx.fillText('E', Ex, Ey + 0.15 * s);
      ctx.fillText('F', Fx, Fy + 0.15 * s);
      ctx.fillText('G', Gx, Gy + 0.15 * s);
      ctx.fillText('H', Hx, Hy + 0.15 * s);
      ctx.fillText('I', Ix, Iy + 0.15 * s);
      ctx.fillText('J', Jx, Jy + 0.15 * s);
      ctx.fillText('K', Kx, Ky + 0.15 * s);
      ctx.fillText('L', Lx, Ly + 0.15 * s);
      
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      animateArc(Cx,Cy, s, 1 * Math.PI, 1.5 * Math.PI, step - 20, step - 20 > 0);
      animateArc(Ax,Ay, s, 0 * Math.PI, 0.5 * Math.PI, step - 40, step - 40 > 0);
      animateArc(Gx,Gy, 0.6 * s, 1.5 * Math.PI, 2 * Math.PI, step - 60, step - 60 > 0);
      animateArc(Ex,Ey, 0.6 * s, 0.5 * Math.PI, 1 * Math.PI, step - 80, step - 80 > 0);
      animateArc(Hx,Hy, 0.4 * s, 1 * Math.PI, 1.5 * Math.PI, step - 100, step - 100 > 0);
      animateArc(Jx,Jy, 0.4 * s, 0 * Math.PI, 0.5 * Math.PI, step - 120, step - 120 > 0);
      animateArc(Kx,Ky, 0.2 * s, 0.5 * Math.PI, 1 * Math.PI, step - 140, step - 140 > 0);
      animateArc(Cx,Cy, 0.2 * s, 1.5 * Math.PI, 2 * Math.PI, step - 160, step - 160 > 0);
      animateArc(Kx,Ky, 0.2 * s, 1 * Math.PI, 1.5 * Math.PI, step - 180, step - 180 > 0);
      animateArc(Gx,Gy, 0.2 * s, 0 * Math.PI, 0.5 * Math.PI, step - 200, step - 200 > 0);
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
