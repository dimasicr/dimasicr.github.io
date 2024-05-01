function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      r = canvas.width * 0.27;

      Ax = Math.cos(2 * Math.PI/ 3 - Math.PI /2) * r;
      Ay = Math.sin(2 * Math.PI/ 3 - Math.PI /2) * r;
      Bx = Math.cos(2 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      By = Math.sin(2 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      Cx = Math.cos(3 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      Cy = Math.sin(3 * 2 * Math.PI/ 3 - Math.PI /2) * r;

      ctx.fillStyle="black"


      ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      animateLine(Ax, Ay, Bx, By, step, step > 0 );
      animateText(Ax, Ay + 0.1 * r, "A", step - 20, step - 20 > 0 );
      animateText(Bx, By + 0.1 * r, "B", step - 20, step - 20 > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateArc(Bx,By, Math.abs(Bx - Ax), 1.6 * Math.PI, 1.7 * Math.PI, step - 20, step - 20 > 0);
      animateArc(Ax,Ay, Math.abs(Bx - Ax), 1.3 * Math.PI, 1.4 * Math.PI, step - 40, step - 40 > 0);
      

      ctx.strokeStyle = 'black'; ctx.setLineDash([]);
      animateLine(Bx, By, Cx, Cy, step - 60, step - 60 > 0 );
      animateText(Cx + 0.1 * r, Cy , "C", step - 60, step - 60 > 0 );
      animateLine(Cx, Cy, Ax, Ay, step - 80, step - 80 > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateLine(Cx, Cy, (Ax + Bx)/2, Ay, step - 100, step - 100 > 0 );

      ctx.strokeStyle = "red"; 
      animateArc(Cx,Cy, Math.abs(Bx - Ax),1.95 * Math.PI, 2.05 * Math.PI, step - 120, step - 120 > 0);
      animateArc(Ax,Ay, Math.abs(Bx - Ax), 1.6 * Math.PI, 1.7 * Math.PI, step - 140, step - 140 > 0);

      animateArc(Bx,By, Math.abs(Bx - Ax),1.3 * Math.PI, 1.4 * Math.PI, step - 160, step - 160 > 0);
      animateArc(Cx,Cy, Math.abs(Bx - Ax),0.95 * Math.PI, 1.05 * Math.PI, step - 180, step - 180 > 0);

      ctx.strokeStyle = 'black';ctx.setLineDash([]);
      animateLine(Bx, By, (Cx + Ax) /2, (Cy + Ay) /2, step - 200, step - 200 > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateLine((Cx + Ax) /2, (Cy + Ay) /2, (Cx + Ax) + Math.abs(Bx), (Cy + Ay) - By, step - 220, step - 220 > 0 );

      // ctx.strokeStyle = 'black';ctx.setLineDash([]);
      animateLine(Ax, Ay, (Cx + Bx) /2, (Cy + By) /2, step - 240, step - 240 > 0 );
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateLine((Cx + Bx) /2, (Cy + By) /2, (Cx + Bx) - Math.abs(Ax), (Cy + By) - Ay, step - 260, step - 260 > 0 );

      ctx.strokeStyle = 'black';ctx.setLineDash([]); ctx.lineWidth = 0.4;
      animateBezier(0, 0, (Ax + Bx)/2, (Ay + By)/2, Bx, By, step -  280, step - 280 > 0);
      animateBezier(0, 0, (Bx + Cx)/2, (By + Cy)/2, Bx, By, step -  300, step - 300 > 0);
      animateBezier(0, 0, (Bx + Cx)/2, (By + Cy)/2, Cx, Cy, step -  320, step - 320 > 0);
      animateBezier(0, 0, (Cx + Ax)/2, (Cy + Ay)/2, Cx, Cy, step -  340, step - 340 > 0);
      animateBezier(0, 0, (Cx + Ax)/2, (Cy + Ay)/2, Ax, Ay, step -  360, step - 360 > 0);
      animateBezier(0, 0, (Ax + Bx)/2, (Ay + By)/2, Ax, Ay, step -  380, step - 380 > 0);

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
}
draw();
