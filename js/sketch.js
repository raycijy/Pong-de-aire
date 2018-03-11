let ball
let p1
let p2

function setup()
{
	createCanvas(windowWidth, windowHeight);


	p1 = new Paddle(1, color('blue'))
	p2 = new Paddle(2, color('green'))
	ball = new Ball();
}

function draw()
{
	background('GRAY')
	drawLine()
	muros()
	ball.draw()
	ball.move()

	p1.draw()
	p2.draw()





	if(ball.collision(p1) || ball.collision(p2))
		ball.move()
	let checkScore  = ball.checkScore()
	
	if(checkScore === 2)
		p2.upDateScore()

	else if (checkScore === 1)
		p1.upDateScore()


	if(keyPressed){
		if(keyIsDown(87))
				p1.move(-1)
		if (keyIsDown(83))
				p1.move(1)
		if (keyIsDown(UP_ARROW))
				p2.move(-1)
		if (keyIsDown(DOWN_ARROW))
				p2.move(1)
		if(keyIsDown(68))
				p1.moveX(1)
		if(keyIsDown(65))
				p1.moveX(-1)
		if(keyIsDown(39))
				p2.moveX(1)
		if(keyIsDown(37))
				p2.moveX(-1)
	}

	

			showScore()

}

const showScore = function(){

	fill('#fff')
	textSize(50)
	text(p1.getScore(),width * 0.25,70)
	text(p2.getScore(),width * 0.75,70)
}

function keyPressed(){
	
	console.log(keyCode)
}

const drawLine = function()
{
	stroke('#fff');

	strokeWeight(4);
	line(width / 2,0,width / 2,height);
}

const muros = function(){

	noStroke()
		rectMode(CORNER)
		fill("#fff")

		//LADO JUGADOR 1
		rect(0,0,15,height/2-100)
		rect(0,height/2+100,15,height/2)

		//LADO JUGADOR 2

		rect(width-15,0,15,height/2-100)
		rect(width-15,height/2+100,15,height/2)
}