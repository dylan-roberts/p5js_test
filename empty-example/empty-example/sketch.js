function setup() {
    createCanvas(600,600);
}

var gameover = false;
var score = 0;

var ball = {
	x:300,
	y:300,
	xspeed:5,
	yspeed:2
};

function draw() {
    background(105,105,105);
	noStroke();
	fill(255,255,255);
	ellipse(ball.x,ball.y,50,50);
	bounce();
	ball.y+=ball.yspeed;
	ball.x+=ball.xspeed;
	paddle();
	textSize(25);
	text("Score: " + score, 6,15);
	gameOver();
}

function bounce(){
	if(ball.y > height-25 || ball.y < 25){
		ball.yspeed*=-1;
	}

	if(ball.x > width-25){
		ball.xspeed*=-1;
		score++;
	}
	if(ball.x < 25){
		ball.xspeed*=-1;
	}
}

function paddle(){
	rect(width-25,mouseY-50,25,100);
	if(ball.x >=width-25){
		if(ball.y<mouseY-50 || ball.y > mouseY+50){
			gameover = true;
		}
	}
}

function gameOver(){
	if(gameover == true){
		background(255,0,0);
		ball.xspeed=0;
		ball.yspeed=0;
		ball.x=width/2;
		text("GAME OVER\nSCORE:" + score,300,300);
	}
}






