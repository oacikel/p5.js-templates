var roots =[];
let height;
let width;




function setup (){
height=windowHeight
width=windowWidth
createCanvas (windowWidth, windowWidth);
background(30);
plantSeedsLinearly()
}

function draw(){
  growRoots()
  generateNewRoot()
}

function mousePressed() {

  plantSingleSeed(mouseX,mouseY,Constants.angle)
}

function doubleClicked(){
    noLoop()
}

function plantSeeds(){
  let count=360/Constants.seedCount
  for (angle=0;angle<360;angle=angle+count){
  startRoot(angle)
	}
}

function plantSeedsLinearly(){
    for(let i=0;i<width;i+=width/Constants.seedCount){
        startRootFromPoint(i,0,90)
    }
}

function plantSingleSeed(x,y,angleValue){
    startRootFromPoint(x,y,angleValue)
}
function startRootFromPoint(x,y,angle){
    let root= new Plant(
       x, //Start X
        y, //Start Y
        angle, //Angle
        255, //Alpha
        Constants.rootRed, //Red
        Constants.rootGreen, //Green
        Constants.rootBlue, //Blue
        Constants.maxBranchCount, //Max Branch
        true, //Is main
        Constants.thickness,//thickness
        Constants.maxLength,//max length
        Constants.branchPossibility,//Branch possibility
        );
      roots.push(root)
}

function startRoot(angleValue){
  let root= new Plant(
    width/2, //Start X
    height/2, //Start Y
    angleValue, //Angle
    255, //Alpha
    Constants.rootRed, //Red
    Constants.rootGreen, //Green
    Constants.rootBlue, //Blue
    Constants.maxBranchCount, //Max Branch
    true, //Is main
    Constants.thickness,//thickness
    Constants.maxLength,//max length
    Constants.branchPossibility,//Branch possibility
    );
  roots.push(root)
}

function generateNewRoot(){
  var size =roots.length
  for(let i=0;i<size;i++){
    if(roots[i].isBranch && roots[i].maxChildCount!=0){
      let branchesToAdd=roots[i].generateRoot()
      try{
          
        for(let n=0;n<branchesToAdd.length;n++){
            roots.push(branchesToAdd[n])
          }
          roots[i].isBranch=false
      }
      catch(error){
         // print(error)
      }
    }
  }
}

function growRoots(){
  for(let i=0; i<roots.length;i++){
    roots[i].drawRoot();
    if(!roots[i].isBranchDone){
      roots[i].growRoot();
    }
  }
  
}



