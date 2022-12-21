class Mountain{
    constructor()
    {
    
    }   
    drawMountain(totalWidth,totalHeight,startX,endX,bottomY,topY,steepness){
        let y
        let inc=steepness
        let start=0
        let angle
        let height=abs(bottomY-topY)
        let width =abs(startX-endX)
        let up= bottomY < topY ? bottomY : topY
        let down = bottomY < topY ? topY : bottomY
        stroke(255,0,0)

        noFill()
        beginShape()
        for(var x=startX;x<=endX;x+=1){
            angle=map(x,startX,endX,0,PI)
            //print(noise(x))
            let warpValue=sin(angle)
            print("warp: "+nfc(warpValue,1))
            y=map(noise(start),0,1,down,up)*warpValue
            //y=noise(start)*warpValue
            //y=map(x,startX,endX,down,up)*warpValue
            print("y value: "+nfc(y,1))
            print("x value: "+nfc(x,1))

            start+=inc
            strokeWeight(3)
            vertex(x,-y+bottomY)
           
        }
        endShape()
        noLoop()
    }
}