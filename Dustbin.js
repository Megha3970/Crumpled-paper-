class Dustbin 
{
    constructor (x,y,width,height,options)
    {
    var options ={
        isStatic:true
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y, this.width, this.height, options);
    this.image=loadImage ("sprites/dustbingreen.png");
    World.add(world, this.body);
    }

    display ()
    {

        var dustbinPos = this.body.position;
        push()
        translate (dustbinPos.x, dustbinPos.y);
        imageMode (CENTER);
        fill ("white");
        image (this.image,0,0,this.width, this.height);
        pop();
    }
}