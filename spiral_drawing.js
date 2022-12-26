var height;
var width;
let mountains=[]
let baseColor
let secondColor

function setup (){
height=windowHeight
width=windowWidth
createCanvas (width, height);
prepareColors(190)
prepareScene(1,height*0.8,height*0.5,baseColor)
}

function draw(){
prepareBackground()
drawScene()
//noLoop()
}
    

function mousePressed() {
    prepareColors(map(mouseX,0,width,0,255))
    prepareBackground()
    prepareScene(nfc(map(mouseY,0,height,3,15),0),height*0.8,height*0.5,baseColor)
    drawScene()
    //noLoop()

}

function mouseMoved(){
}

function doubleClicked(){
    
}


function prepareScene(mountainCount,bottomValue,topValue,baseColor){

    //Mountain array creation:
    prepareMountains(mountainCount,bottomValue,topValue,baseColor)
}

function prepareMountains(mountainCount,bottomBoundary,topBoundary,baseColor){
    mountains=[]
    let height=bottomBoundary-topBoundary
    let heightIncreaseValue=height/mountainCount

    //We want lightness to increase by 64% as it goes farher away:
    let brightnessIncreaseValue = brightness(baseColor)*150/(mountainCount*255)
    let saturationDecreaseValue = saturation(baseColor)*90/(mountainCount*255)
    let baseSaturation=saturation(baseColor)
    let baseSteepness=Constants.steepness
    let angleIncrement=(PI/2)/mountainCount
    let xShift=1000
    let xSihftIncrement=xShift/mountainCount
    let angle=0
    for(let i=0;i<mountainCount;i++){
        let baseBrightness=(brightness(baseColor)+(i*brightnessIncreaseValue))
        baseSaturation=baseSaturation-(i*saturationDecreaseValue)
       // print(baseBrightness)
        let baseHue=(hue(baseColor))
        let randomFactor=random(-1,1)*0
        let bColor = color(baseHue,baseSaturation,baseBrightness)
        let startX=(-xShift)+xSihftIncrement*i
        print(startX)
        let endX = (width+xShift)-xSihftIncrement*i
        let bottomY=bottomBoundary-(heightIncreaseValue*(i-sin(angle)))
        let topY=bottomBoundary-(heightIncreaseValue*(i+1))-(heightIncreaseValue*(1+cos(angle)))

        var m = new Mountain(startX,endX,bottomY+(heightIncreaseValue),topY-(heightIncreaseValue*randomFactor),bColor,baseSteepness)
        mountains.push(m)
        baseSteepness=baseSteepness*0.9
        angle+=angleIncrement

    }
}

function drawScene(){
    for(let i=mountains.length-1; i>=0 ;i--){
        mountains[i].drawMountain()
    }
}

function prepareBackground(){
    let g = drawingContext.createLinearGradient(width/2,0, width/2,height)
    g.addColorStop(0,secondColor)
    g.addColorStop(1,baseColor.toString())
    drawingContext.fillStyle = g;
    rect(0,0,width,height)
}

function prepareColors(hueValue){
    colorMode(HSB,255)
    baseColor = color(hueValue,220,220)
    baseHue=hue(baseColor)
    baseSaturation=saturation(baseColor)
    baseBrightness=brightness(baseColor)
    secondColor=color(baseHue,baseSaturation*0.1,baseBrightness*10)
}



