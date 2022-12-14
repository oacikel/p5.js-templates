class Ridge{
    constructor(currentX,currentY,angle){
            this.currentX=currentX
            this.currentY=currentY
            this.angle=angle
            this.nextX
            this.nextY
            this.growthRate=2
            this.xCoordinates=[]
            this.yCoordinates=[]
            this.segmentCount=0
            this.collisionDistance=3
    }

    elongate(){
        if(this.nextX!=undefined){
            this.nextX+=(this.growthRate*cos(radians(this.angle)))
            this.nextY+=(this.growthRate*sin(radians(this.angle)))
            this.updatePointArrays()
            this.segmentCount++ 
        }else{
            this.nextX=this.currentX+(this.growthRate*cos(radians(this.angle)))
            this.nextY=this.currentY+(this.growthRate*sin(radians(this.angle)))
        }
            
    }

    updatePointArrays(){
        this.xCoordinates.push(this.currentX,this.nextX)
        this.yCoordinates.push(this.currentY,this.nextY)
    }

    setFinalCoordinates(){
        this.currentX=this.nextX
        this.currentY=this.nextY
    }

    draw(){
        stroke(255)
        strokeWeight(1)
      for(let i=0;i<this.segmentCount;i++){
            line(this.xCoordinates[i],this.yCoordinates[i],this.xCoordinates[i+1],this.yCoordinates[i+1])
        }
        this.setFinalCoordinates();
        
    }
    
    changeAngle(angleInput){
        this.angle=angleInput
        //print("Changing the angle to "+angleInput)
        //this.elongate();
        //this.draw();
    }

    getFinalX(){
        return this.currentX+this.growthRate*cos(radians(this.angle))
    }

    getCurrentX(){
        return this.currentX
    }

    getCurrentY(){
        return this.currentY
    }

    getFinalY(){
        return this.currentY+this.growthRate*sin(radians(this.angle))
    }

    getCollisionDistance(){
        return this.collisionDistance
    }
    
    getDirection(){
        return this.angle
    }

    getGrowthRate(){
        return this.growthRate
    }

    getRangedY(){
        return this.currentY+this.collisionDistance*sin(radians(this.angle)) 
    }

    getRangedX(){
        return this.currentX+this.collisionDistance*cos(radians(this.angle)) 
    }

}