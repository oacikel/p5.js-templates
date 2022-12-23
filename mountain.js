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
    this.peak=topY
    this.currentPeak=this.topY+1
    this.start = 0
    }   
    drawMountain(){

        //Adjusting gradient
        let g = drawingContext.createLinearGradient(this.startX,this.topY, this.startX,this.bottomY);
        g.addColorStop(0,   this.topColor.toString());
        g.addColorStop(0.5,   this.topColor.toString());
        g.addColorStop(1,   this.bottomColor.toString());
  
  // then draw a shape with this gradient
 
       
       
        if((this.currentPeak>=this.topY)|| true){
           
            this.angle
            this.xArray=[]
            this.yArray=[]
            this.warpValue
            this.yPoint
            this.deepestPoint=this.currentPeak
            print("Finding a color for index "+this.currentPeak+". To be between "+this.topY+" and "+this.bottomY)

            noStroke()
            strokeWeight(3)
            //noFill()
            drawingContext.fillStyle = g;
            
            beginShape()
            for(var x=this.startX;x<=this.endX;x+=1){
                this.angle=map(x,this.startX,this.endX,0,PI)
                this.warpValue=sin(this.angle)
                this.yPoint=map(noise(this.start)*this.warpValue,0,1,this.currentPeak,this.bottomY)
                
                if(this.yPoint>this.deepestPoint){
                    this.deepestPoint=this.yPoint
                }
                this.start+=this.steepness
                this.xArray.push(x)
                this.yArray.push(this.yPoint)
            }
            for(let i=0;i<this.yArray.length;i++){            
                this.yArray[i]=map(this.yArray[i],this.currentPeak,this.deepestPoint,this.bottomY,this.currentPeak)
                vertex(this.xArray[i],this.yArray[i])
            }
            endShape()
            //noLoop()
            this.start=this.start-(this.endX-this.startX)*this.steepness+0.0001
           // this.currentPeak-=1
        }
    }
}