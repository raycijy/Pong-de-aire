
const Ball = function () {
	
	const r = 20
	let x = Math.round(width / 2)
	let y = Math.round( height / 2 )
		let stepX = 2
		let stepY = 5

			const reset = function (){
				x = Math.floor(width/2)
				y = Math.floor(height / 2)

				stepX *= Math.round(Math.random()) * 2 -1
				stepY *= Math.round(Math.random()) * 2 -1
			}

			const edges = function (){

				if( y -r <= 0 || y + r >= height)
				{
					
					stepY= - stepY
				}

				if(x - r <=0 || x + r >=width)
				{
					stepX=-stepX
				}


			}
			const checkScore = function(){



				if( x - r <= 0 )
				{
					if(y>height/2-100 && y <=height/2+100)
					{
						reset()

						return 2
					}
					
				}

				if( x + r >= width)
				{
					if(y>height/2-100 && y <=height/2+100)
					{
						reset()
						return 1
					}
				}

				return 0
			}


		const move = function(){

			x += stepX
			y += stepY
			edges()

		}

		const collision = function(player){
			let dx = Math.abs(x - player.getX() - player.getW()/2);
			let dy = Math.abs(y - player.getY() - player.getH()/2);

			if(dx > player.getW()/2+r || dy > player.getH()/2+r){
				
				return false;
			}

				

			if(dx<= player.getW()/2 || dy <= player.getH()/2)
			{
				stepX = -stepX
				return true;
			}
		}

	const draw = function () {
		ellipseMode('CENTER');
		noStroke()
		fill('fff');
		ellipse(x,y, r * 2, r * 2 )
	}
	return {
		draw,
		move,
		collision,
		checkScore,
	}
}
