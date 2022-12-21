class Mountain{
    constructor()
    {
    
    }   
    drawMountain(startX,endX,bottomY,topY,steepness){
        let y
        let inc=steepness
        let start=0
        let angle
        let up= bottomY < topY ? bottomY : topY
        let down = bottomY < topY ? topY : bottomY
        let factor=1
        stroke(255,0,0)

        let xArray=[]
        let yArray=[]
        let deepestPoint=down

        noFill()
        beginShape()
        for(var x=startX;x<=endX;x+=1){
            angle=map(x,startX,endX,0,PI)
            let warpValue=sin(angle)
            y=map(noise(start)*warpValue,0,1*factor,down,up)
            if(y<deepestPoint){
                deepestPoint=y
            }
            start+=inc
            xArray.push(x)
            yArray.push(y)
        }
        for(let i=0;i<yArray.length;i++){
            yArray[i]=map(yArray[i],down,deepestPoint,down,up)
            vertex(xArray[i],yArray[i])
        }
        endShape()
        noLoop()
    }
}