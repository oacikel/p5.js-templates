class Helper{
    static drawLineFromTwoPoints(startX,startY,endX,endY){
        line(startX,startY,endX,endY)
    }

    static setColor(red,green,blue,alpha){
        stroke(red,green,blue,alpha)
    }

    static setThickness(thickness){
        strokeWeight(thickness)
    }

    static plusOrMinus(){
        return  Math.random() < 0.5 ? -1 : 1
    }

    static oneOrTheOther(a,b){
        return  Math.random() < 0.5 ? a : b
    }

    static oneOrTheOtherWithMargin(a,b,margin){
        return  Math.random() < 0.5 ? random(a+margin,a-margin) : random(b+margin,b-margin)
    }
    
    static getTrueOnPercentage(percentage){
        return  Math.random()*100 < percentage ? true : false
    }

    static getGradientColorWithinBound(lowBoundary,highBoundary, currentIndex, fromColor, toColor) {
        let inter=map(currentIndex,lowBoundary,highBoundary,0,1)
        return lerpColor(fromColor, toColor,inter)
      }
}