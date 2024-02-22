function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.width);
      ctx.save();
      ctx.translate(canvas.width/2, canvas.width/2);
      r = canvas.width * 0.35;


      path_list = createFlowerPath(0, 0, 3, r, 0.3)
      ctx.strokeStyle = 'black'; ctx.setLineDash([]);
      animatePath(path_list, step - 20, step - 20 > 0);
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
