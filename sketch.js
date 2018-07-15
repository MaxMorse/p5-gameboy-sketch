
var h = 500;
var w = 300; //h * 0.6056;
var outerscreenH = h*0.2970;
var outerScreenW = w*0.5361;
var innerScreenW = w*0.5266;
var innerScreenH = h*0.29
var innerScreenX = w*0.2366;
var innerScreenY = h*0.13

var screenFrameX =w*0.0766;
var screenFrameY= h*0.08;
var screenFrameW = w*0.8433;
var screenFrameH = h* 0.39;

var dPadUpDownX = w * 0.16;
var dPadUpDownY = h * 0.602;

var dPadUpDownW = w*0.09;
var dPadUpDownH = h*0.152;



var dPadLeftRightW = dPadUpDownH;
var dPadLeftRightH = dPadUpDownW;

var dPadCenterX = (dPadUpDownW*0.5) + dPadUpDownX;
var dPadCenterY = (dPadUpDownH*0.5) + dPadUpDownY;
var dPadCenterDi = dPadUpDownW * 0.85;
var dPadLeftRightX = dPadCenterX - (dPadLeftRightW * 0.5);
var dPadLeftRightY = dPadCenterY - (dPadLeftRightH * 0.5);

console.log("width: " + w );
console.log("height: " + h);
function setup() {
  canvas = createCanvas(1000, 1000);
  //canvas.parent('sketch-container');
  background(0, 0, 0);
}
function draw() {

  fill(255);
  rect(0, 0,w,h, 10, 10, 90, 10);
  fill(81, 83, 95);
  rect(screenFrameX, screenFrameY, screenFrameW, screenFrameH);


  fill(100);
  //rect((w*0.5) - (outerScreenW * 0.5), h * 0.1296, outerScreenW, outerscreenH);
  fill(67, 83, 18);
  rect(innerScreenX, innerScreenY, innerScreenW, innerScreenH);
  fill(0);
  rect(dPadUpDownX, dPadUpDownY, dPadUpDownW, dPadUpDownH, 5);
  rect(dPadLeftRightX, dPadLeftRightY, dPadLeftRightW, dPadLeftRightH, 5);
  fill('#2a2c38');
  ellipse(dPadCenterX,dPadCenterY, dPadCenterDi, dPadCenterDi);
}
