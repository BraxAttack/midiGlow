let bouncyBalls_CircleArray = []

function Circle(x,y,dx,dy,radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.fill()

    }

    //reverse the x or y coordinates when the circle touches the side
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy

        }
        this.x += this.dx
        this.y += this.dy

        this.dy = this.dy * 0.95
        this.dx = this.dx * 0.95

        this.draw()
    }
}

function bouncyBallsInit(colors){
    //clear circle array
    bouncyBalls_CircleArray = []

    //create circles
    for (var i = 0; i < 50; i++) { 
        createCircle(width/2, height/2, selectColorFromArray(colors));
    }
}

function bouncyBalls(){
    for (let i = 0; i < bouncyBalls_CircleArray.length; i++){

        bouncyBalls_CircleArray[i].update()
    }

}

function createCircle(xValue, yValue, color){

    let radius = 20;
    let x = xValue;
    let y = yValue;
    let dx = (Math.random()-0.5) *100
    let dy = (Math.random()-0.5) *100

    bouncyBalls_CircleArray.push(new Circle(x, y, dx, dy, radius, color))

}
