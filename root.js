class Root{
    constructor(startX,startY,angle,alpha,red,green,blue,maxChildCount){
        
        //initial values
        this.angle= angle
        this.dimennsion=0
        this.growthRate=1
        ///mutable
        this.startX=startX
        this.startY=startY
        this.finalX=startX;
        this.finalY=startY;
        this.thickness=0.1;
        this.childCount=0;
        ///immutable
        this.angle=angle
        this.maxLength=20
        //color
        this.alpha=alpha
        this.red=red
        this.blue=blue
        this.green=green
        //Root Vector
        this.nextX=0;
        this.nextY=0;
        //limit values
        this.isBranch=false;
        this.isBranchDone=false
        this.maxChildCount=maxChildCount
    }
    
        createRootVector(){  
            //Calculate the "next" position of points according to the angle. 
            //If there is already a value assigned to x or y, ie. either value is 0, skip this part.
            if(this.nextX==0 && this.nextY==0 ){
                this.nextX=cos(radians(this.angle))+this.startX
                this.nextY=sin(radians(this.angle))+this.startY
            }
        }
  
        drawRoot(){
            //Draw a line from root's starting point to its final point
            this.createRootVector();
            //stroke(this.red,this.green,this.blue,this.alpha)
            stroke(this.red)
            strokeWeight(this.thickness)
            line(this.startX,this.startY,this.nextX,this.nextY)
        }

       growRoot(){    
           //If roots dimension hasn't reached its limit and is not to branch yet;
           //increase the dimension value
           //increase x and y values according to it's direction
           // assign currentt final points
            if(this.dimennsion<this.maxLength && !this.isBranch){
                this.dimennsion+=this.growthRate
                this.nextX=this.nextX+(this.growthRate*cos(radians(this.angle)))
                this.nextY=this.nextY+(this.growthRate*sin(radians(this.angle)))
                this.finalX=this.nextX
                this.finalY=this.nextY
            }else {
                //If limit is reached the root is ready to branch out. Growth stops.
                this.isBranch=true
            }
        }

        generateRootFromFinalPoint(){
            let additionalBranches=[];
            if(this.isBranch && !this.isBranchDone && this.childCount<this.maxChildCount){
                    this.isBranch=false
                    this.isBranchDone=true
                    additionalBranches.push(new Root(
                        this.finalX, //Start X
                        this.finalY, //Start Y
                        this.angle+random(100)*random(-1,1), //Angle
                        noise(this.finalX,this.finalY)*100, //Alpha
                        (this.red+noise(this.finalX,this.finalY)*100)%255, //Red
                        (this.green+noise(this.finalX,this.finalY)*100)%255, //Green
                        (this.blue+noise(this.finalX,this.finalY)*100)%255, //Blue
                        this.maxChildCount //Max Branch
                        ))
                    if(this.maxChildCount!=0){
                        //this.maxChildCount--
                    }
                    for(let i=0; i<this.maxChildCount;i++){
                       additionalBranches.push(new Root(
                           this.finalX,//Start X
                           this.finalY,//Start Y
                           this.angle+random(100)*random(-1,1),//Angle
                           noise(this.finalX,this.finalY)*100, // Alpha
                           (this.red+noise(this.finalX,this.finalY)*100)%255, //Red
                           (this.green+noise(this.finalX,this.finalY)*100)%255, //Green
                           (this.blue+noise(this.finalX,this.finalY)*100)%255, //Blue
                           this.maxChildCount //Max Branch
                           ))
                        this.childCount++
                    }
                    return additionalBranches
            }
        
        }
    }
    