let height=900
let width=900
var ridges=[]
let angle=0

let shapeRed=255
let shapeGreen=0
let shapeBlue=0

let backgroundColor=30

let isClear=false
let isDrawCircle=false
let collisionCone=20
let pixel
let isContactOccured=false

let isLoop=false
let angleChangeAmount=0.1

function setup (){
  createCanvas (height, width);
  background(backgroundColor);
  ridge = new Ridge(0,width/2,angle);
  print("Created ridge")

}

function draw(){    
    background(backgroundColor)
    drawFirstCircle()
    //elongateIfColorMatches(this.ridge.getFinalX(),this.ridge.getFinalY(),this.ridge.getCollisionDistance())
    //elongateIfColorMatches(this.ridge.getFinalX(),this.ridge.getFinalY(),this.ridge.getCollisionDistance())
    doSomething(ridge.getRangedX(),ridge.getRangedY())
}

function mousePressed() {
    //Place an obstacle to later go around
    isDrawCircle=true
    //background(backgroundColor)
   // drawTheCircle()
   if(isLoop){
       noLoop()
   }else{
       loop()
   }
   isLoop=!isLoop
}

function doubleClicked(){
}

function doSomething(projectedX,projectedY){
    noFill()
    arc(ridge.getRangedX(),ridge.getRangedY(),ridge.getCollisionDistance(),ridge.getCollisionDistance(),(ridge.getDirection()-collisionCone),(ridge.getDirection()+collisionCone))
    strokeWeight(1)
    circle(ridge.getRangedX(),ridge.getRangedY(),15)
    let isContact=false
    let isAtLeastOneNotTouching=false
    let controlFirstLoop=false
    let controlSecondLoop=false
    for(let x=projectedX-1;x<=projectedX+1;x++){
        for (let y=projectedY-1;y<=projectedY+1;y++){
            if(x==projectedX && y==projectedY){
                if(isPointsContact(x,y,)){
                    //print("We have contact with angle "+ridge.getDirection())
                    isContact=true
                    isContactOccured=true
                }
                controlFirstLoop=true
            }else if(!isPointsContact(x,y)){
                print("One direction is in safe zone")
                isAtLeastOneNotTouching=true
                controlSecondLoop=true
            }
            if(controlFirstLoop && controlSecondLoop){
                break
            }
        }
    }
    if(isContact){
     //   print("Contact mantained")
    }
    if(isContactOccured){
     //   print("Currently in contact mode")
    }
    if(isAtLeastOneNotTouching){
      //  print("We are not too deep inside")
    }
    if(isContact && isContactOccured && isAtLeastOneNotTouching){
        if(isNextPositionGood() ){
            print("This looks like a good place to grow")
            print("Current X before edge growth is "+ridge.getCurrentX())
            growNDraw()
            print("Now edge current X is "+ridge.getCurrentX())
        }else{
           print("Searching for a better direction")
           let angleToUse = (ridge.getDirection()+angleChangeAmount)%360
           ridge.changeAngle(angleToUse)
           ridge.draw()
          
        }
    }else if(isContactOccured){
        //let angleToUse =map((ridge.getDirection()+1)%360,0,360,-90,+90)
        let angleToUse = (ridge.getDirection()+angleChangeAmount)%360
        ridge.changeAngle(angleToUse)
        ridge.draw()
    }else{
        print("Current X before normal growth is "+ridge.getCurrentX())
        growNDraw()
        print("Now normal current X is "+ridge.getCurrentX())
    }

    displayPixels(projectedX,projectedY,700,900)
    displayPixels(ridge.getFinalX(),ridge.getFinalY(),900,900)
}

function isPointsContact(x,y){
    let pixel = get (x,y)
    return (red(pixel)==(shapeRed) && green(pixel)==(shapeGreen) && blue(pixel)==(shapeBlue))
    //return (red(pixel)<(shapeRed+range) && red(pixel)>(shapeRed-range) && green(pixel)<(shapeGreen+range) && green(pixel)>(shapeGreen-range) && blue(pixel)<(shapeBlue+range) && blue(pixel)>(shapeBlue-range) )
}

function isNextPositionGood(){
    let nextPositionFits=false
    let atLeastOneNeighborNotTouching=false
    //print("Current X is "+ridge.getCurrentX())

    for(let x=ridge.getRangedX()-ridge.getCollisionDistance();x<=ridge.getRangedX()+ridge.getCollisionDistance();x+=ridge.getCollisionDistance()){
        for(let y=ridge.getRangedY()-ridge.getCollisionDistance();y<=ridge.getRangedY()+ridge.getCollisionDistance();y+=ridge.getCollisionDistance()){
            if(x==ridge.getRangedX() && y==ridge.getRangedY()){
                print("hey")
                if(isPointsContact(x,y,)){
                    print("ho")
                    nextPositionFits=true
                }
            }else if(!isPointsContact(x,y)){
-                print("hOP")
                    atLeastOneNeighborNotTouching=true
            }
        }
    }
    return (nextPositionFits && atLeastOneNeighborNotTouching)
}
function growNDraw(){
    ridge.elongate()
    ridge.draw()
}

function drawTheCircle(){
    if(isDrawCircle){
        fill(shapeRed,shapeGreen,shapeBlue)
        circle(mouseX,mouseY,20)
    }
}

function drawFirstCircle(){
    fill(shapeRed,shapeGreen,shapeBlue)
    ellipse(width/5,height/2,width/10,height/10)
}

function initRidges(){
    let factor=0
    for(let i=0;i<ridgeCount;i++){
        ridges.push(new Ridge(height/2,factor,0))
        factor+=10
    }
}

function displayPixels(x,y,width,height){
    
    

let radius=this.width/14
let halfRadius=radius/2
let shift=-halfRadius*0.5
let one = get(x-1,y+1)
let two =get(x,y+1)
let three =get(x+1,y+1)
let four =get(x-1,y)
let five = get(x,y)
let six = get(x+1,y)
let seven =get(x-1,y-1)
let eight = get(x,y-1)
let nine = get(x+1,y-1)

  stroke(255);
  strokeWeight(1); 

  
  fill(nine);
  circle(width-halfRadius*2, height-halfRadius*2, radius, radius);
  fill("blue")
  text((x+1).toFixed(0)+" "+(y-1).toFixed(0),(width-halfRadius*2)+shift, height-halfRadius*2)


  fill(eight);
  circle(width-halfRadius*4, height-halfRadius*2, radius, radius);
  fill("blue")
  text((x).toFixed(0)+" "+(y-1).toFixed(0),(width-halfRadius*4)+shift, height-halfRadius*2)


  fill(seven);
  circle(width-halfRadius*6, height-halfRadius*2, radius, radius)
  fill("blue")
  text((x-1).toFixed(0)+" "+(y-1).toFixed(0),(width-halfRadius*6)+shift, height-halfRadius*2)


  fill(six);
  circle(width-halfRadius*2, height-halfRadius*4, radius, radius);
  fill("blue")
  text((x+1).toFixed(0)+" "+(y).toFixed(0),(width-halfRadius*2)+shift, height-halfRadius*4)


  fill(five);
  circle(width-halfRadius*4, height-halfRadius*4, radius, radius)
  fill("blue")
  text((x).toFixed(0)+" "+(y).toFixed(0),(width-halfRadius*4)+shift, height-halfRadius*4)


  fill(four);
  circle(width-halfRadius*6, height-halfRadius*4, radius, radius)
  fill("blue")
  text((x-1).toFixed(0)+" "+(y).toFixed(0),(width-halfRadius*6)+shift, height-halfRadius*4)

  fill(three);
  circle(width-halfRadius*2, height-halfRadius*6, radius, radius)
  fill("blue")
  text((x+1).toFixed(0)+" "+(y+1).toFixed(0),(width-halfRadius*2)+shift, height-halfRadius*6)

  fill(two);
  circle(width-halfRadius*4, height-halfRadius*6, radius, radius)
  fill("blue")
  text((x).toFixed(0)+" "+(y+1).toFixed(0),(width-halfRadius*4)+shift, height-halfRadius*6)

  fill(one);
  circle(width-halfRadius*6, height-halfRadius*6, radius, radius)
  fill("blue")
  text((x-1).toFixed(0)+" "+(y+1).toFixed(0),(width-halfRadius*6)+shift, height-halfRadius*6)
  
}




