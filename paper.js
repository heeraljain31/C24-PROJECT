class trash{

    constructor(x,y){
    var options={
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
    }
    this.body=Bodies.circle(x,y,radius,[options],[maxSides])
this.width=50
this.height=50
World.add(world,this.body)
    }

    display(){
var pos=this.body.position
pos.x=mouseX
pos.y=mouseY
var angle=this.body.angle
push()
translate(pos.x,pos.y)
 rotate(angle)
 strokeWeight(4)
 stroke("blue")
 fill("red")
 rectMode(SCREENLEFT)
 rect(0,0,this.width,this.height)
pop()
    }
}