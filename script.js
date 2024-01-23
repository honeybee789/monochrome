let circle = { // our circle object
  xValue: 25,
  yValue: 250,
	diameter: 50,
	colour: 255

}

function setup() {
	createCanvas(500, 500);
  background(128);
	frameRate(10);
}

function draw() {
  fill(circle.colour);  
	ellipse(circle.xValue, circle.yValue, circle.diameter);
	circle.xValue += 50
	circle.colour -= 5
  if (circle.xValue > 500) {
		circle.xValue = 25
	}
    
} 