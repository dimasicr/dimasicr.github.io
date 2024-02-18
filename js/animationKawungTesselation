function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      r = canvas.width * 0.3;

      Ax = Math.cos(1 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Ay = Math.sin(1 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Bx = Math.cos(2 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      By = Math.sin(2 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Cx = Math.cos(3 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Cy = Math.sin(3 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Dx = Math.cos(4 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;
      Dy = Math.sin(4 * 2 * Math.PI/ 4 - 1 * Math.PI /4) * r;

      // Draw Square Outline
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      animateLine(Ax, Ay, Bx, By, step, step > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateLine(Ax, Ay, Bx - 0.6 * Math.abs(Bx - Ax), By, step - 20, step - 20 > 0 );
      animateArc(Bx - 0.6 * Math.abs(Bx - Ax),By, 0.7 * Math.abs(Bx - Ax), 1.8 * Math.PI, 2.2 * Math.PI, step - 40, step - 40 > 0);
      animateArc(Bx + 0.6 * Math.abs(Bx - Ax),By, 0.7 * Math.abs(Bx - Ax), 0.8 * Math.PI, 1.2 * Math.PI, step - 60, step - 60 > 0);
      animateLine(Bx, By + 0.3 * Math.abs(Cy - By), Bx, By - 1.2 * Math.abs(Cy - By), step - 80, step - 80 > 0 );
      animateArc(Bx,By, Math.abs(Bx - Ax), 1.5 * Math.PI, 2 * Math.PI, step - 100, step - 100 > 0);
      animateArc(Cx,Cy, Math.abs(Bx - Ax), 1.95 * Math.PI, 2.05 * Math.PI, step - 120, step - 120 > 0);
      animateArc(Ax,Ay, Math.abs(Bx - Ax), 1.45 * Math.PI, 1.55 * Math.PI, step - 140, step - 140 > 0);
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      animateLine(Bx, By, Cx, Cy, step - 160, step - 160 > 0 );
      animateLine(Cx, Cy, Dx, Dy, step - 180, step - 180 > 0 );
      animateLine(Dx, Dy, Ax, Ay, step - 200, step - 200 > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateArc(Ax,Ay, 0.6 * Math.abs(Bx - Ax), 0.75 * Math.PI, 0.85 * Math.PI, step - 220, step - 220 > 0);
      animateArc(Bx,By, 0.6 * Math.abs(Bx - Ax), 0.15 * Math.PI, 0.25 * Math.PI, step - 240, step - 240 > 0);
      animateArc(Cx,Cy, 0.6 * Math.abs(Bx - Ax), 1.75 * Math.PI, 1.85 * Math.PI, step - 260, step - 260 > 0);
      animateArc(Dx,Dy, 0.6 * Math.abs(Bx - Ax), 1.15 * Math.PI, 1.25 * Math.PI, step - 280, step - 280 > 0);
      animateLine(0.5 *  (Ax + Bx) , By + 0.3 *  Math.abs(By - Cy), 0.5 *  (Ax + Bx), Cy - 0.3 *  Math.abs(By - Cy), step - 300, step - 300 > 0 );
      animateArc(Bx,By, 0.6 * Math.abs(Bx - Ax), 1.25 * Math.PI, 1.35 * Math.PI, step - 320, step - 320 > 0);
      animateArc(Cx,Cy, 0.6 * Math.abs(Bx - Ax), 0.65 * Math.PI, 0.75 * Math.PI, step - 340, step - 340 > 0);
      animateArc(Dx,Dy, 0.6 * Math.abs(Bx - Ax), 0.25 * Math.PI, 0.35 * Math.PI, step - 360, step - 360 > 0);
      animateArc(Ax,Ay, 0.6 * Math.abs(Bx - Ax), 1.65 * Math.PI, 1.75 * Math.PI, step - 380, step - 380 > 0);
      animateLine(Bx - 0.3 *  Math.abs(Bx - Ax), 0.5 * (By + Cy), Dx + 0.3 *  Math.abs(Bx - Ax), 0.5 * (By + Cy), step - 400, step - 400 > 0 );

      // Draw Kawung
      ctx.strokeStyle = 'black';ctx.setLineDash([]); ctx.lineWidth = 0.4;
      animateBezier(0, 0, (Ax + Bx) /2, (Ay+By)/2, Bx, By, step -  420, step - 420 > 0);
      animateBezier(0, 0, (Bx + Cx) /2, (By+Cy)/2, Bx, By, step -  440, step - 440 > 0);
      animateBezier(0, 0, (Bx + Cx) /2, (By+Cy)/2, Cx, Cy, step -  460, step - 460 > 0);
      animateBezier(0, 0, (Cx + Dx) /2, (Cy+Dy)/2, Cx, Cy, step -  480, step - 480 > 0);
      animateBezier(0, 0, (Cx + Dx) /2, (Cy+Dy)/2, Dx, Dy, step -  500, step - 500 > 0);
      animateBezier(0, 0, (Dx + Ax) /2, (Dy+Ay)/2, Dx, Dy, step -  520, step - 520 > 0);
      animateBezier(0, 0, (Dx + Ax) /2, (Dy+Ay)/2, Ax, Ay, step -  540, step - 540 > 0);
      animateBezier(0, 0, (Ax + Bx) /2, (Ay+By)/2, Ax, Ay, step -  560, step - 560 > 0);

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
