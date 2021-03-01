
class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1.3,
			friction:7,
			density:10.2

			}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		

			push()
			translate(plinkopos.x, plinkopos.y);
			rectMode(CENTER)
			strokeWeight(1);
			fill("white")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

