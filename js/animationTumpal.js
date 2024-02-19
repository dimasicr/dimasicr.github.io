function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      r = canvas.width * 0.35;

      Ax = Math.cos(2 * Math.PI/ 3 - Math.PI /2) * r;
      Ay = Math.sin(2 * Math.PI/ 3 - Math.PI /2) * r;
      Bx = Math.cos(2 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      By = Math.sin(2 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      Cx = Math.cos(3 * 2 * Math.PI/ 3 - Math.PI /2) * r;
      Cy = Math.sin(3 * 2 * Math.PI/ 3 - Math.PI /2) * r;

      ctx.beginPath();
      ctx.arc(Ax, Ay, 0.025 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Bx, By, 0.025 * r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(Cx, Cy, 0.025 * r, 0, 2 * Math.PI);
      ctx.fill();


      // ctx.strokeStyle = 'black'; ctx.setLineDash([]);ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);ctx.fillStype = 'gray';
      ctx.font = "20px Arial";
      ctx.fillText('α', Ax - 0.3 * r, Ay - 0.1 * r);
      ctx.fillText('β', Bx + 0.25 * r, By - 0.1 * r);
      animateLine(Ax, Ay, Bx, By, step, step > 0 );
      animateArc(Bx,By, Math.abs(Bx - Ax), 1.6 * Math.PI, 1.7 * Math.PI, step - 20, step - 20 > 0);
      animateArc(Ax,Ay, Math.abs(Bx - Ax), 1.3 * Math.PI, 1.4 * Math.PI, step - 40, step - 40 > 0);
      // ctx.strokeStyle = 'black'; ctx.setLineDash([]);
      animateLine(Bx, By, Cx, Cy, step - 60, step - 60 > 0 );
      animateLine(Cx, Cy, Ax, Ay, step - 80, step - 80 > 0 );
      animateArc(Ax,Ay, 0.25 * Math.abs(Bx - Ax), 1 * Math.PI, 1.3 * Math.PI, step - 100, step - 100 > 0);
      animateArc(Ax - 0.25 * Math.abs(Bx - Ax),Ay, 0.8 * Math.abs(Bx - Ax), 1.15 * Math.PI, 1.25 * Math.PI, step - 120, step - 120 > 0);
      animateArc(Ax  - Math.cos(Math.PI/3) * 0.25 * Math.abs(Bx - Ax),Ay - Math.sin(Math.PI/3) * 0.25 * Math.abs(Bx - Ax), 0.8 * Math.abs(Bx - Ax), 1.05 * Math.PI, 1.15 * Math.PI, step - 140, step - 140 > 0);
      animateLine(Ax, Ay, Ax - Math.cos(Math.PI/6) * Math.abs(Bx - Ax) * 1, By - Math.sin(Math.PI/6) * Math.abs(Bx - Ax) * 1, step - 160, step - 160 > 0 );
      s =  Math.sqrt((Bx - Ax)**2 + (By - Ay)**2 );
      R = s / 10;
      Xc = Ax - R / Math.tan(0.5 * 60/360 * 2 * Math.PI);
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);
      animateArc(Xc ,Ay - R, R, 1.5 * Math.PI, 2.5 * Math.PI, step - 180, step - 180 > 0);
      animateArc(Xc ,Ay - 0.5 * R, 0.5 * R, 0.5 * Math.PI, 1.5 * Math.PI, step - 200, step - 200 > 0);
      path_list = create_path(Xc, Ay - 2 * R, 0.5 * (Ax + Bx) + 0.5 *  (Xc - 0.5 * (Ax + Bx)) , Ay - 2 * R , 0.5 * (Ax + Bx) + 0.5 *  (Xc - 0.5 * (Ax + Bx)), Ay, 0.5 * (Ax + Bx), Ay);
      animatePath(path_list, step - 220, step - 220 > 0);
      path_list = create_path(Xc, Ay -  R, 0.5 * (Ax + Bx) + 0.5 *  (Xc - 0.5 * (Ax + Bx)) , Ay -  R , 0.5 * (Ax + Bx) + 0.5 *  (Xc - 0.5 * (Ax + Bx)), Ay, 0.5 * (Ax + Bx), Ay);
      animatePath(path_list, step - 260, step - 260 > 0);
      ctx.strokeStyle = 'gray'; ctx.setLineDash([3, 3]);
      animateArc(Bx,By, 0.25 * Math.abs(Bx - Ax), 1.67 * Math.PI, 2 * Math.PI, step -280, step - 280 > 0);
      animateArc(Bx + 0.25 * Math.abs(Bx - Ax),Ay, 0.8 * Math.abs(Bx - Ax), 1.75 * Math.PI, 1.85 * Math.PI, step - 300, step - 300 > 0);
      animateArc(Bx  + Math.cos(Math.PI/3) * 0.25 * Math.abs(Bx - Ax),Ay - Math.sin(Math.PI/3) * 0.25 * Math.abs(Bx - Ax), 0.8 * Math.abs(Bx - Ax), 1.85 * Math.PI, 1.95 * Math.PI, step - 320, step - 320 > 0);
      animateLine(Bx, By, Bx + Math.cos(Math.PI/6) * Math.abs(Bx - Ax) * 1, By - Math.sin(Math.PI/6) * Math.abs(Bx - Ax) * 1, step - 340, step - 340 > 0 );
      Xc = Bx + R / Math.tan(0.5 * 60/360 * 2 * Math.PI);
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);
      animateArc(Xc ,By - R, R, 0.5 * Math.PI, 1.5 * Math.PI, step - 360, step - 360 > 0);
      animateArc(Xc ,By - 0.5 * R, 0.5 * R, 1.5 * Math.PI, 2.5 * Math.PI, step - 380, step - 380 > 0);
      path_list = create_path(Xc, Ay - 2 * R, 0.5 * (Ax + Bx) - 0.5 *  Math.abs(Xc - 0.5 * (Ax + Bx)) , Ay - 2 * R , 0.5 * (Ax + Bx) - 0.5 *  Math.abs(Xc - 0.5 * (Ax + Bx)), Ay, 0.5 * (Ax + Bx), Ay);
      animatePath(path_list, step - 400, step - 400 > 0);
      path_list = create_path(Xc, Ay -  R,0.5 * (Ax + Bx) - 0.5 *  Math.abs(Xc - 0.5 * (Ax + Bx)) , Ay -  R , 0.5 * (Ax + Bx) - 0.5 *  Math.abs(Xc - 0.5 * (Ax + Bx)), Ay, 0.5 * (Ax + Bx), Ay);
      animatePath(path_list, step - 420, step - 420 > 0);
      Xc = Ax - R / Math.tan(0.5 * 60/360 * 2 * Math.PI);
      animateArc(R ,By - Xc, R, 1 * Math.PI, 2 * Math.PI, step - 440, step - 440 > 0);
      animateArc(0.5 * R ,By - Xc, 0.5 * R, 0 * Math.PI, 1 * Math.PI, step - 460, step - 460 > 0);
      path_list = create_path(2*R, By -  Xc, 2 * R , By -  0.5 * Xc , 0, By - 0.5 * Xc, 0, By);
      animatePath(path_list, step - 480, step - 480 > 0);
      path_list = create_path(R, By -  Xc, R , By -  0.5 * Xc , 0, By - 0.5 * Xc, 0, By);
      animatePath(path_list, step - 500, step - 500 > 0);
      animateArc(-R ,By - Xc, R, 1 * Math.PI, 2 * Math.PI, step - 520, step - 520 > 0);
      animateArc(-0.5 * R ,By - Xc, 0.5 * R, 0 * Math.PI, 1 * Math.PI, step - 540, step - 540 > 0);
      path_list = create_path(-2*R, By -  Xc, -2 * R , By -  0.5 * Xc , 0, By - 0.5 * Xc, 0, By);
      animatePath(path_list, step - 560, step - 560 > 0);
      path_list = create_path(-R, By -  Xc, -R , By -  0.5 * Xc , 0, By - 0.5 * Xc, 0, By);
      animatePath(path_list, step - 580, step - 580 > 0);
      animateArc(0.75 * R ,By - Xc - R - 0.75 * R, 0.75 * R, 0 * Math.PI, 1 * Math.PI, step - 600, step - 600 > 0);
      animateArc(0.5 * 0.75 * R ,By - Xc - R - 0.75 * R, 0.5 * 0.75 * R, 1 * Math.PI, 2 * Math.PI, step - 620, step - 620 > 0);
      path_list = create_path(1.5 * R, By - Xc - R - 0.75 * R, 1.5 * R, 0.5 * (Cy + (By - Xc - R - 0.75 * R)) , 0, 0.5 * (Cy + (By - Xc - R - 0.75 * R)), 0, Cy);
      animatePath(path_list, step - 640, step - 640 > 0);
      path_list = create_path(0.5 * 1.5 * R, By - Xc - R - 0.75 * R, 0.5 * 1.5 * R, 0.5 * (Cy + (By - Xc - R - 0.75 * R)) , 0, 0.5 * (Cy + (By - Xc - R - 0.75 * R)), 0, Cy);
      animatePath(path_list, step - 660, step - 660 > 0);
      animateArc(-0.75 * R ,By - Xc - R - 0.75 * R, 0.75 * R, 0 * Math.PI, 1 * Math.PI, step - 680, step - 680 > 0);
      animateArc(-0.5 * 0.75 * R ,By - Xc - R - 0.75 * R, 0.5 * 0.75 * R, 1 * Math.PI, 2 * Math.PI, step - 700, step - 700 > 0);
      path_list = create_path(-1.5 * R, By - Xc - R - 0.75 * R, -1.5 * R, 0.5 * (Cy + (By - Xc - R - 0.75 * R)) , 0, 0.5 * (Cy + (By - Xc - R - 0.75 * R)), 0, Cy);
      animatePath(path_list, step - 720, step - 720 > 0);
      path_list = create_path(-0.5 * 1.5 * R, By - Xc - R - 0.75 * R, -0.5 * 1.5 * R, 0.5 * (Cy + (By - Xc - R - 0.75 * R)) , 0, 0.5 * (Cy + (By - Xc - R - 0.75 * R)), 0, Cy);
      animatePath(path_list, step - 740, step - 740 > 0);
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
