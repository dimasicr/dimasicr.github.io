function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);

      Ax = 104.27;
      Ay = 0;
      Bx = 0;
      By = 0;
      Cx = 0;
      Cy = -104.27;
      Dx = 74.52;
      Dy = -125.48;
      Ex = 125.48;
      Ey = -74.52;

      ctx.strokeStyle = 'black';ctx.setLineDash([]);ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ex, Ey);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();

      Xc = (Ax + Bx + Cx + Dx + Ex) / 5;
      Yc = (Ay + By + Cy + Dy + Ey) / 5;

      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Bx, By, step - 20 , step - 20 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Bx, By, step - 40 , step - 40 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Cx, Cy, step - 60 , step - 60 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Cx, Cy, step - 80 , step - 80 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Dx, Dy, step - 100 , step - 100 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Dx, Dy, step - 120 , step - 120 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Ex, Ey, step - 140 , step - 140 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ex, Ey, step - 160 , step - 160 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ax, Ay, step - 180 , step - 180 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Ax, Ay, step - 200 , step - 200 > 0);


      Ax = -104.27;
      Ay = 0;
      Bx = 0;
      By = 0;
      Cx = 0;
      Cy = -104.27;
      Dx = -74.52;
      Dy = -125.48;
      Ex = -125.48;
      Ey = -74.52;

      ctx.strokeStyle = 'black';ctx.setLineDash([]);ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ex, Ey);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();

      Xc = (Ax + Bx + Cx + Dx + Ex) / 5;
      Yc = (Ay + By + Cy + Dy + Ey) / 5;

      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Bx, By, step - 220 , step - 220 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Bx, By, step - 240 , step - 240 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Cx, Cy, step - 260 , step - 260 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Cx, Cy, step - 280 , step - 280 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Dx, Dy, step - 300 , step - 300 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Dx, Dy, step - 320 , step - 320 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Ex, Ey, step - 340 , step - 340 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ex, Ey, step - 360 , step - 360 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ax, Ay, step - 380 , step - 380 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Ax, Ay, step - 400 , step - 400 > 0);


      Ax = -104.27;
      Ay = 0;
      Bx = 0;
      By = 0;
      Cx = 0;
      Cy = 104.27;
      Dx = -74.52;
      Dy = 125.48;
      Ex = -125.48;
      Ey = 74.52;

      ctx.strokeStyle = 'black';ctx.setLineDash([]);ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ex, Ey);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();

      Xc = (Ax + Bx + Cx + Dx + Ex) / 5;
      Yc = (Ay + By + Cy + Dy + Ey) / 5;

      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Bx, By, step - 420 , step - 420 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Bx, By, step - 440 , step - 440 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Cx, Cy, step - 460 , step - 460 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Cx, Cy, step - 480 , step - 480 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Dx, Dy, step - 500 , step - 500 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Dx, Dy, step - 520 , step - 520 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Ex, Ey, step - 540 , step - 540 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ex, Ey, step - 560 , step - 560 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ax, Ay, step - 580 , step - 580 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Ax, Ay, step - 600 , step - 600 > 0);

      Ax = 104.27;
      Ay = 0;
      Bx = 0;
      By = 0;
      Cx = 0;
      Cy = 104.27;
      Dx = 74.52;
      Dy = 125.48;
      Ex = 125.48;
      Ey = 74.52;

      ctx.strokeStyle = 'black';ctx.setLineDash([]);ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(Ax, Ay);
      ctx.lineTo(Bx, By); 
      ctx.lineTo(Cx, Cy);
      ctx.lineTo(Dx, Dy);
      ctx.lineTo(Ex, Ey);
      ctx.lineTo(Ax, Ay);
      ctx.stroke();

      Xc = (Ax + Bx + Cx + Dx + Ex) / 5;
      Yc = (Ay + By + Cy + Dy + Ey) / 5;

      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Bx, By, step - 620 , step - 620 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Bx, By, step - 640 , step - 640 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Bx), 0.5 * (Cy + By), Cx, Cy, step - 660 , step - 660 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Cx, Cy, step - 680 , step - 680 > 0);
      animateBezier(Xc, Yc, 0.5 * (Cx + Dx), 0.5 * (Cy + Dy), Dx, Dy, step - 700 , step - 700 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Dx, Dy, step - 720 , step - 720 > 0);
      animateBezier(Xc, Yc, 0.5 * (Dx + Ex), 0.5 * (Dy + Ey), Ex, Ey, step - 740 , step - 740 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ex, Ey, step - 760 , step - 760 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ex + Ax), 0.5 * (Ey + Ay), Ax, Ay, step - 780 , step - 780 > 0);
      animateBezier(Xc, Yc, 0.5 * (Ax + Bx), 0.5 * (Ay + By), Ax, Ay, step - 800 , step - 800 > 0);
    
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
