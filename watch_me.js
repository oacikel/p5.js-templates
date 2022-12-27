let height=900;
let width=900;

let gif;

function preload(){
    prepareEyes()
}
function setup (){
  createCanvas (height, width);
  background(30);
  
}

function draw(){
   // eyeGif.pause();
    image(gif, 0, 0);
    let maxFrame = gif.numFrames() - 1;
}

function mouseMoved(){
    moveEyesToPoint(mouseX,mouseY)
}

function mousePressed() {
  noLoop();
}

function prepareEyes() {
    gif = loadImage('assets/eye_moving.gif')
}

function moveEyesToPoint(x,y){
    let maxFrame = gif.numFrames() - 1;
    // Set the current frame that is mapped to be relative to mouse position
    let frameNumber = floor(map(y, 0, height, 0, maxFrame, true));
    gif.setFrame(frameNumber);
}



