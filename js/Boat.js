class Boat {
constructor(x,y,width,height,bp) {
this.width = width
this.height = height
this.bp = bp
this.body = Bodies.rectangle(x, y, width, height)
this.image = loadImage("assets/boat.png")
World.add(world,this.body) 
}

display() {
push()
translate(this.body.position.x, this.body.position.y)
rotate(this.body.angle)
image(this.image, 0, this.bp, this.width, this.height)
pop()

}

remove(index) {
 setTimeOut(()=>{
   Matter.World.remove(world,boats[index].body); 
   delete boats[index]
 }, 2000) 

}

}