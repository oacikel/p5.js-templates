let height=600
let width=600

let mountain;

let mountainStartX=0
let mountainStartY=height-100

let mountainEndX=width
let mountainEndY=0+100

function setup (){

createCanvas (width, height);
background(3);
mountain = new Mountain()

}

function draw(){
        logAxises()
        mountain.drawMountain(mountainStartX,mountainEndX,mountainStartY,mountainEndY,Constants.steepness)
    }
    

function mousePressed() {
    loop()
}

function mouseMoved(){
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





