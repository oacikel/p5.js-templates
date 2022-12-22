class Mountain{
    constructor(startX,endX,bottomY,topY,steepness,topColor,bottomColor)
    {
    this.startX=startX
    this.endX=endX
    this.bottomY=bottomY
    this.topY=topY
    this.steepness=steepness
    this.topColor=topColor
    this.bottomColor=bottomColor

    this.start = 0
    this.angle
    this.xArray=[]
    this.yArray=[]
    this.deepestPoint=this.topY
    this.warpValue
    this.yPoint
    }   
    drawMountain(){
        strokeWeight(3)
        stroke(255)
        noFill()
        
        beginShape()
        for(var x=this.startX;x<=this.endX;x+=1){
            this.angle=map(x,this.startX,this.endX,0,PI)
            this.warpValue=sin(this.angle)
            this.yPoint=map(noise(this.start)*this.warpValue,0,1,this.topY,this.bottomY)
            print("y is "+nfc(this.yPoint,0))
            if(this.yPoint>this.deepestPoint){
                this.deepestPoint=this.yPoint
            }
            this.start+=this.steepness
            this.xArray.push(x)
            this.yArray.push(this.yPoint)
        }
        for(let i=0;i<this.yArray.length;i++){
            //print("top: "+this.topY)
            //print("bottom: "+this.bottomY)
            this.yArray[i]=map(this.yArray[i],this.topY,this.deepestPoint,this.bottomY,this.topY)
            vertex(this.xArray[i],this.yArray[i])
        }
        endShape()
        noLoop()

    }
}