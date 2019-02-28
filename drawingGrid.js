var squares = [];
window.onload= function(){
	this.canvas = document.getElementById("canvas");
	createGrid(0, 0, 800, 800, false, 0);
}

function createGrid(startX, startY, endX, endY, isHorizontal, cont){

	
	var adder;
	if(startY != endY && Math.pow(startY-endY, 2) >= 100 && Math.pow(startX-endX, 2) > 400 ){
		if(startY < endY){
			adder = 1;
		}else{
			adder = -1;
		}
		let x = parseInt((startX + endX)/2);
		for(let y = startY; y != endY; y += adder){
			if(isHorizontal)
				draw(y, x, cont);
			else
				draw(x, y, cont);
			cont++;
			if(y == parseInt((startY+endY)/2)){						
					setTimeout(function(){createGrid(startY, x, endY, startX,!isHorizontal, cont)}, 900*Math.random());
					setTimeout(function(){createGrid(endY, x, startY, endX,!isHorizontal, cont)}, 900*Math.random());

				}			
			}
		}
	}

function draw(x, y, cont){
		var ctx = canvas.getContext('2d');
		setTimeout(function(){
			ctx.fillRect(parseInt(x), parseInt(y), 1, 1);	
		}, 5000 + cont*5);
	}
