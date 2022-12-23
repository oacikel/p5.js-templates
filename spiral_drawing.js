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

mountainStartX=-1000
mountainEndX=width/2

mountainTopY=200
mountainBottomY=400

mountainBStartX=0
mountainBEndX=width

mountainBTopY=300
mountainBBottomY=500

mountainCStartX=width/2+40
mountainCEndX=width

mountainCTopY=250
mountainCBottomY=300


createCanvas (width, height);
background(240,232,205);
colorMountainA = color(248,245,237)
colorMountainB = color(122,154,184)
//colorMountainB = color(255,255,255)
mountainA = new Mountain(mountainStartX,mountainEndX,mountainBottomY,mountainTopY,Constants.steepness,colorMountainA,colorMountainB)
mountainB = new Mountain(mountainBStartX,mountainBEndX,mountainBBottomY,mountainBTopY,Constants.steepness,colorMountainA,colorMountainB)
mountainC = new Mountain(mountainCStartX,mountainCEndX,mountainCBottomY,mountainCTopY,Constants.steepness,colorMountainA,colorMountainB)



}

function draw(){
    background(45,119,205);
    height=windowHeight
        width=windowWidth
        //logAxises()
        //stroke(Helper.getGradientColorWithinBound(0,height,colorIndex,mountainFromColor,mountainToColor))
        mountainA.drawMountain()
        mountainB.drawMountain()
        mountainC.drawMountain()
        
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





