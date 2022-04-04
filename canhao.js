class Canhao{
constructor(x,y,width,height,angle){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.angle=angle;
this.canhaoimage= loadImage("assets/canon.png")
this.canhaobase= loadImage("assets/cannonBase.png")
//World.add(world,canhao)
}
display(){
   console.log(this.angle)
    if(keyIsDown(RIGHT_ARROW) && this.angle<70){
        this.angle += 1;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle>-30){
        this.angle -= 1;
    }
    
    push();
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.canhaoimage, 0, 0,this.width, this.height)
    pop();

    image(this.canhaobase, 70,20,200,200)
    noFill();
}
}