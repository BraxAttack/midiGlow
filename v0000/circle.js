
var bumpCircleArray = [];
var deleteArray = [];

function BumpCircle(x, y, volume, color){

    this.x = x;
    this.y = y;
    this.maxVolume = volume;
    this.currentVolume = 0;
    this.acceleration = 15;
    this.color = color;
    this.overTheHill = false

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentVolume, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();

    };

    this.update = function(i){
        this.currentVolume += this.acceleration;
        
        //delete dead ones
        if(this.currentVolume > this.maxVolume){

            deleteArray.push(i);
        }else{
            this.draw()
        }


    };


}


function bumpCircleInit(colors, volume){
    createBumpCircle(selectColorFromArray(colors), volume);

}

function createBumpCircle(color, volume){
    let Volume = volume;
    let x = width/2;
    let y = height/2;
    let Color = color;

    bumpCircleArray.push(new BumpCircle(x, y, Volume, Color));
    runBumpCircle()

}


function runBumpCircle(){

    for (let i = 0; i < bumpCircleArray.length; i++){
        bumpCircleArray[i].update()

    }



    num = 0;

    for (let i = 0; i < deleteArray.length; i++){
        bumpCircleArray.splice(deleteArray[i] - num, 1)
        num += 1;
    }


    deleteArray = [];


}

