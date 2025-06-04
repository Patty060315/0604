function draw() {
  background(220);

  Engine.update(engine);
  strokeWeight(2);
  stroke(0);

  // 先畫攝影機畫面
  image(video, 0, 0, width, height);

  // 再顯示標題，才不會被蓋掉
  textAlign(CENTER, TOP);
  textSize(32);
  fill(50, 50, 150);
  noStroke();
  text("淡江教育科技系", width / 2, 10);

  if (random() < 0.1) {
    circles.push(new Circle());
  }

  for (let i=circles.length-1; i>=0; i--) {
    circles[i].checkDone();
    circles[i].display();

    if (circles[i].done) {
      circles[i].removeCircle();
      circles.splice(i, 1);
    }
  }

  if (hands.length > 0) {
    let thumb = hands[0].keypoints[THUMB_TIP];
    let index = hands[0].keypoints[INDEX_FINGER_TIP];
    fill(0, 255, 0);
    noStroke();
    circle(thumb.x, thumb.y, 10);
    circle(index.x, index.y, 10);

    bridge.bodies[0].position.x = thumb.x;
    bridge.bodies[0].position.y = thumb.y;
    bridge.bodies[bridge.bodies.length-1].position.x = index.x;
    bridge.bodies[bridge.bodies.length-1].position.y = index.y;
    bridge.display();
  }
}
