const Paddle = function (player, color){

	const c = color
	const w = 50
	const h = 100
	const p = player

	const _limite = width/2


	let x = p === 1 ? 0 : width - w

	const speed = 5

	let y = Math.floor(height / 2 )

	let score = 0 

	const getX = function(){

		return x

	}
	const getY = function(){
		return y
	}

	const getW = function(){
			return w
	}

	const getH = function(){
		return h
	}


	const Up=-1;
	const Down =1;


	const Left =-1;
	const Right =1;



	const draw = function(){
		noStroke()
		rectMode(CORNER)
		fill(c)
		rect(x,y,w,h)



	}



	const move = function(dir){

		if(edge(dir))
		y+=(speed * dir)
	}

	const moveX = function(dir){

			if(limite(dir,player) || limite2(dir,player))
			{
				if(edgeHorizontal(dir))
				x+=(speed * dir)
			}
			else
			{
				console.log("nop")
			}
		
	}

	const getScore = function(){

		return score
	}

	const edge = function(dir){

		
		return (dir === Up && y >0 || dir === Down && y <height -h )

	}

	const edgeHorizontal = function(dir){

		return  (dir === Left && x >0 || dir === Right && x <width -w  )
	}

	const limite = function(dir,player){
								console.log(x)
				return(dir === Right && x < _limite-w  && player===1||  dir === Left && x<width-w && player ===1 )
	}

	const limite2 = function(dir,player){
								console.log(x)
				return(player ===2  && dir === Left && x>width/2 || player ===2 && dir === Right && x<width-w )
	}

	const upDateScore = function(){

		score++;
	}

	return{
		draw,
		move,
		edge,
		getX,
		getY,
		getH,
		getW,
		getScore,
		upDateScore,
		moveX,
	}


}