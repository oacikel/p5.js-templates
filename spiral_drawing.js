var height;
var width;

let mountain;

let mountainStartX
let mountainTopY
let mountainEndX
let mountainBottomY

let colorIndex=0

let mountainFromColor;
let mountainToColor;

function setup (){
height=windowHeight
width=windowWidth
mountainStartX=100
mountainEndX=width-100
mountainBottomY=height-100
mountainTopY=100
createCanvas (width, height);
background(3);
colorMountainA = color(17,45,83)
colorMountainB = color(20,64,97)
mountainA = new Mountain(mountainStartX,mountainEndX,mountainBottomY,mountainTopY,Constants.steepness,colorMountainA,colorMountainB)

}

function draw(){
    background(30)
        height=windowHeight
        width=windowWidth
        logAxises()
        //stroke(Helper.getGradientColorWithinBound(0,height,colorIndex,mountainFromColor,mountainToColor))
        mountainA.drawMountain()
        //colorIndex++
        //mountainBottomY++
    }
    

function mousePressed() {
    mountainA.drawMountain()
}

function mouseMoved(){
}

function doubleClicked(){
    noLoop()
}

function logAxises(){
    let s = 'Bottom (y='+mountainBottomY+")";
    fill(250);
    text(s, 10, mountainBottomY);
    stroke(0,255,0)
    line(mountainStartX,mountainBottomY,mountainEndX,mountainBottomY)
    stroke(0,0,355)
    line(mountainStartX,mountainTopY,mountainEndX,mountainTopY)
    let p = 'Top (y='+mountainTopY+")";
    fill(250);
    text(p, 10, mountainTopY);
}





