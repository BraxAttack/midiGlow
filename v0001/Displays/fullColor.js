var fullColor_currentColor = "#555555";
var fullColor_volume = 0;


function fullColorInit(colors, volume){

    fullColor_currentColor = selectColorFromArray(colors)
    fullColor_volume = volume;

}

function runFullColor(){
    fillCanvas(fullColor_currentColor);

}