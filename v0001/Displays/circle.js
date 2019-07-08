
var circle_bumpCircleArray = [];
var circle_deleteArray = [];
var circle_lastToMax = 0;

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
        ctx.strokeStyle = "#000000";
        ctx.stroke()
    };

    this.update = function(i, keep){
       
        //delete dead ones
        if(this.currentVolume > this.maxVolume){

            if(keep){
                this.currentVolume = this.maxVolume;
                this.draw();
            }else{
                circle_deleteArray.push(i);    
            }

        }else{
            this.draw()
        }

        this.currentVolume += this.acceleration;
        

    };

    this.isDead = function(){
        return this.currentVolume > this.maxVolume;
    }

}


function bumpCircleInit(colors, volume){
    createBumpCircle(selectColorFromArray(colors), volume);

}

function createBumpCircle(color, volume){
    let Volume = volume;
    let x = width/2;
    let y = height/2;
    let Color = color;

    circle_bumpCircleArray.push(new BumpCircle(x, y, Volume, Color));

}


function runBumpCircle(){
    
    for (let i = 0; i < circle_bumpCircleArray.length; i++){
        if(circle_bumpCircleArray[i].isDead()){
            circle_lastToMax = i;
        }
    }

    for (let i = 0; i < circle_bumpCircleArray.length; i++){
        
        var keep = false;
        if(circle_lastToMax == i){
            keep = true;
        }


        circle_bumpCircleArray[i].update(i, keep)

    }

    num = 0;

    for (let i = 0; i < circle_deleteArray.length; i++){
        circle_bumpCircleArray.splice(circle_deleteArray[i] - num, 1)
        num += 1;
    }

    circle_deleteArray = [];

}

