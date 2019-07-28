var gifImage = new Image();
var sprite;


function spriteRenderer(options) {
				
    var that = {}
    
    that.frameIndex = 0;
    that.tickCount = 0;
    that.ticksPerFrame = 5;
    that.numberOfFrames = options.numberOfFrames || 0;

					
    that.context = options.context;
    that.image = options.image;
    that.height = that.image.height
    that.width = that.image.height

    that.loop = options.loop;

    that.update = function () {

        that.tickCount += 1;
			
        if (that.tickCount > that.ticksPerFrame) {
        
            that.tickCount = 0;
        
            // If the current frame index is in range
            if (that.frameIndex < that.numberOfFrames - 1) {	
                // Go to the next frame
                that.frameIndex += 1;
            } else {
                that.frameIndex = 0;
            }
        }
    };

    that.render = function() {

        var size = that.image.height
        var startX = that.frameIndex * that.image.width / that.numberOfFrames
        // Draw the animation
        ctx.drawImage(that.image,startX,0,size,size,((width - size)/2),((height - size)/2),size,size);
  
        };   

    return that;
}


function gifAnimationInit(imageName, frames){
    gifImage.src = "Displays/images/"+imageName;
    
    sprite = spriteRenderer({
        image: gifImage,
        numberOfFrames: frames
    });
    
    sprite.render();
    
}

function runGifAnimation(){
    sprite.update();
    sprite.render();

}