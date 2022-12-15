var root
var roots =[];
var addedRootCount=[];
let soilLevelConst=4
let height=900;
let width=900;
//let angle =90;
let isDraw=true;
let seedCount=100;
let isLoop=false



function setup (){
  createCanvas (height, width);
  background(250);
  plantSeeds();
  //plantSeedsHorizontally(height*1.1)
}

function draw(){
  if(isLoop){
  //background(30);
  growRoots()
  generateNewRoot()
  //removeFromBegining()
  }
}

function mousePressed() {
 isLoop=true
}

function plantSeeds(){
  let count=360/seedCount
  for (angle=0;angle<360;angle=angle+count){
    startRootFromCenter(angle)
	}
}

function plantSeedsHorizontally(height){
  for(let x=0;x<width;x+=width/seedCount){
    print("hey")
    startRootFromCustomPosition(random(-100,-80),x,height)
  }
}
function startRootFromCustomPosition(angleValue,x,y){
  root= new Root(
    x, //Start X
    y, //Start Y
    angleValue, //Angle
    255, //Alpha
    253, //Red
    60, //Green
    75, //Blue
    1 //Max Branch
    )
  roots.push(root)
}

function startRootFromCenter(angleValue){
  root= new Root(
    width/2, //Start X
    height/2, //Start Y
    angleValue, //Angle
    255, //Alpha
    253, //Red
    60, //Green
    75, //Blue
    1 //Max Branch
  )
  roots.push(root)
}




function generateNewRoot(){
  var size =roots.length
  for(let i=0;i<size;i++){
    if(!roots[i].isBranchDone && roots[i].isBranch && roots[i].maxChildCount!=0){
      let branchesToAdd=roots[i].generateRootFromFinalPoint()
      for(let n=0;n<branchesToAdd.length;n++){
        roots.push(branchesToAdd[n])
      }
      roots[i].isBranch=false
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

function addItemsToAddedRootCounts(count){
if(!addedRootCount.includes(count)){
  print("Adding "+count)
  addedRootCount.push(count)
}else{
  addedRootCount.push(count)
}
}

function removeFromBegining(){
if(addedRootCount.length>10){
  for(let i=0; i<addedRootCount.length;i++){
    roots.splice(0, addedRootCount[i]);
    addedRootCount.splice(0,i)
  }
   
}
}



