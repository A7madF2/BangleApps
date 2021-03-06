
function draw() {
  var d = new Date();
  var da = d.toString().split(" ");
  var time = da[4].substr(0,5);

  g.reset();
  g.setFontAlign(0, -1);
  g.setFont("Vector", 80);
  g.drawString(time, 120, 40);
}

// handle switch display on by pressing BTN1
Bangle.on('lcdPower', function(on) {
  if (on) draw();
});

g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();
setInterval(draw, 15000); // refresh every 15s
draw();
setWatch(Bangle.showLauncher, BTN2, {repeat:false,edge:"falling"});
