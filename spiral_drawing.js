let height=600
let width=600

let mountain;
let shift=0

let mountainStartX=0
let mountainEndX=width
let mountainStartY=height/2
let mountainEndY=0+100

function setup (){

createCanvas (width, height);
background(3);
mountain = new Mountain()

}

function draw(){
    logAxises()
    mountain.drawMountain(width,height,mountainStartX,width,mountainStartY,mountainEndY,Constants.steepness)
}

function mousePressed() {

}

function doubleClicked(){
    noLoop()
}

function logAxises(){
    let s = 'Start Axis (y='+mountainStartY+")";
    fill(250);
    text(s, 10, mountainStartY);
    stroke(0,255,0)
    line(mountainStartX,mountainStartY,mountainEndX,mountainStartY)
    stroke(0,0,355)
    line(mountainStartX,mountainEndY,mountainEndX,mountainEndY)
    let p = 'End Axis (y='+mountainEndY+")";
    fill(250);
    text(p, 10, mountainEndY);
}





