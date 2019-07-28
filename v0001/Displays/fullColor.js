var fullColor_currentColor = "#000000";
var fullColor_volume = 0;
var fullColor_colorArray = [];
var fullColor_colorIndex = 0


function fullColorInit(colors, volume){
    fullColor_colorArray = colors;

    if(fullColor_colorIndex > (fullColor_colorArray.length - 2)){
        fullColor_colorIndex = 0;
    }else{
        fullColor_colorIndex += 1;
    }

    fullColor_currentColor = fullColor_colorArray[fullColor_colorIndex]
    fullColor_volume = volume;

}

function runFullColor(){
    fillCanvas(fullColor_currentColor);

}