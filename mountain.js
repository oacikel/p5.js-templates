class Mountain{
    constructor(startX,endX,bottomY,topY,topColor,steepness)
    {
    this.startX=startX
    this.endX=endX
    this.bottomY=bottomY
    this.topY=topY
    this.topColor=topColor
    this.hueValue=hue(topColor)
    this.saturationValue=saturation(topColor)
    this.brightnessValue=brightness(topColor)
    this.bottomColor
    this.peak=topY
    this.currentPeak=this.topY+1
    this.start = 0
    this.lowestY
    this.steepness=steepness
    }   
    drawMountain(){
        let bottomBrightness=(255-this.brightnessValue)*0.3+this.brightnessValue
        this.bottomColor= color(this.hueValue,this.saturationValue,bottomBrightness)
        //Adjusting gradient
        let g = drawingContext.createLinearGradient(this.startX,this.topY, this.startX,this.bottomY);
        g.addColorStop(0,   this.topColor.toString());
        g.addColorStop(0.2,   this.topColor.toString());
        g.addColorStop(1,   this.bottomColor.toString());       
        if((this.currentPeak>=this.topY)|| true){
           
            this.angle
            this.xArray=[]
            this.yArray=[]
            this.warpValue
            this.yPoint
            this.deepestPoint=this.currentPeak

            noStroke()
            stroke(baseColor)
            strokeWeight(0.3)
            drawingContext.fillStyle = g;
            
            beginShape()
            for(var x=this.startX;x<=this.endX;x+=1){
                this.angle=map(x,this.startX,this.endX,0,PI)
                this.warpValue=sin(this.angle)
                this.yPoint=map(((noise(this.start))*this.warpValue),0,1,this.currentPeak,this.bottomY)
                
                if(this.yPoint>this.deepestPoint){
                    this.deepestPoint=this.yPoint
                }
       
                this.start+=this.steepness
                this.xArray.push(x)
                this.yArray.push(this.yPoint)
            }
            for(let i=0;i<this.yArray.length;i++){            
                this.yArray[i]=map(this.yArray[i],this.currentPeak,this.deepestPoint,this.bottomY,this.currentPeak)
                vertex(this.xArray[i],(this.yArray[i]))
            }
            endShape()
            //noLoop()
            //this.start+=0.1 //-> This part is to make the mountain move within the wave. Very cool effect!
            // this.currentPeak-=1
        }
    }

    getLowestY(){
        this.yArray
    }
}