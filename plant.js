class Plant{
    constructor(startX,startY,angle,alpha,red,green,blue,maxChildCount,isMain,thickness,maxLength,branchPossibility){
        
        this.angle= angle
        this.startX=startX
        this.startY=startY
        this.finalX=startX;
        this.finalY=startY;
        this.alpha=alpha
        this.red=red
        this.blue=blue
        this.green=green
        this.maxChildCount=maxChildCount
        this.isMain=isMain
        this.thickness=thickness
        this.maxLength=maxLength
        this.branchPossibility=branchPossibility
        

        //Init values
        this.childCount=0;
        this.dimension=0
        this.growthRate=Constants.growthRate
        this.angle=angle
        this.isBranch=false
        this.isBranchDone=false
        this.nextX=0;
        this.nextY=0;
        this.isAlreadyDrawn=false
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
            if(!this.isAlreadyDrawn){
                this.createRootVector();
                stroke(this.red,this.green,this.blue,this.alpha)
                strokeWeight(this.thickness)
                line(this.startX,this.startY,this.nextX,this.nextY)

                stroke(255,255,255,this.alpha*0.8)
                strokeWeight(this.thickness*1.1)
                line(this.startX,this.startY,this.nextX,this.nextY)
            }
                this.isAlreadyDrawn=(this.dimension==this.maxLength || this.alpha<0.1) 
        }

       growRoot(){    
           //If roots dimension hasn't reached its limit and is not to branch yet;
           //increase the dimension value
           //increase x and y values according to it's direction
           // assign currentt final points
            if(this.dimension<this.maxLength && !this.isBranch){
                this.dimension+=this.growthRate
                this.nextX=this.nextX+(this.growthRate*cos(radians(this.angle)))
                this.nextY=this.nextY+(this.growthRate*sin(radians(this.angle)))
                this.finalX=this.nextX
                this.finalY=this.nextY
            }else {
                //If limit is reached the root is ready to branch out. Growth stops.
                this.isBranch=true
            }
            //this.thickness+=0.01
        }
        shouldBranchOut(){
            if(this.childCount==0){
                return true
            }else{
                
                return Helper.getTrueOnPercentage(this.branchPossibility)
            }
        }

        generateRoot(){

            if(this.shouldBranchOut()){
                return this.generateRootFromFinalPoint()
            }
        }

        generateRootFromFinalPoint(){
            let additionalBranches=[];
            let isMain=this.childCount==0 && this.isMain
            let maxChildCount;
            let growthAngle;
            let red;
            let green;
            let  blue;
            let thickness;
            let length;
            let possibility;
            let alpha
            if(isMain){
                 maxChildCount=this.maxChildCount
                 growthAngle=random(this.angle-10,this.angle+10)
                 red=this.red
                 green=this.green
                 blue=this.blue
                 thickness=this.thickness
                 length=this.maxLength
                 possibility=this.branchPossibility
                 alpha=this.alpha
            }else{
                maxChildCount=this.maxChildCount
                growthAngle=random(this.angle-40,this.angle+40)
                red=this.red
                green=this.green+30
                blue=this.blue
                thickness=this.thickness*0.8
                length=this.maxLength*1.1
                possibility=this.branchPossibility*0.3
                alpha=this.alpha*0.5
            }
            

            if(this.childCount<=this.maxChildCount){
                    this.isBranch=false
                    this.isBranchDone=(maxChildCount==this.childCount)
                    additionalBranches.push(new Plant(
                        this.finalX, //Start X
                        this.finalY, //Start Y
                        growthAngle, //Angle
                        alpha, //Alpha
                        red, //Red
                        green, //Green
                        blue, //Blue
                        maxChildCount, //Max Branch
                        isMain, //is this main branch
                        thickness, //branch thickness
                        length,//Max Length
                        possibility, //Branch possibility
                        ))
                        this.childCount++
                        
                    return additionalBranches
            }
        
        }
    }
    