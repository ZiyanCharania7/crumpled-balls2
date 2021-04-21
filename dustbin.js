class dustbin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.dustbin=Bodies.rectangle(x,y,width,height,option);
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.dustbin);
        this.width=width;
        this.height=height;
    }

    display()
    {
        fill("white");
        noStroke();
        imageMode(CENTER);
        image(this.image,this.dustbin.position.x,this.dustbin.position.y,this.width,this.height);

    }
}
