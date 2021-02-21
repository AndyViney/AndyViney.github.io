function User(width, height, color, x, y) {
  
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
	this.gameOver=false;
    this.update = function() {
        ctx = myGameArea.context;
        
       // ctx.fillStyle = color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
		if (gameOver){
		 img = document.getElementById("ship");
		ctx.drawImage(img,this.x,this.y,width,height);
		}else{
			let img = document.getElementById("explosion");
		ctx.drawImage(img,this.x,this.y,width,height);
		}
		
    }
    this.newPos = function() {
       
        this.x += this.speedX ;
        this.y += this.speedY ;
        this.hitBottom();
		this.hitTop();
		this.hitLeft();
		this.hitRight();
    }
    this.hitBottom = function() {
        var screenBottom = myGameArea.canvas.height - this.height;
        if (this.y > screenBottom) {
            this.y = screenBottom; 
        }
    }
	 this.hitTop = function() {
        var screemTop = myGameArea.canvas.height + this.height;
        if (this.y < screenTop) {
            this.y = screenTop; 
        }
    }
	this.hitRight = function() {
        var screenRight = myGameArea.canvas.width - this.width;
        if (this.x > screenRight) {
            this.x = screenRight; 
        }
    }
	this.hitLeft = function() {
        if (this.x <0) {
            this.x = 0; 
        }
    }
	 
    
	this.up=function up(n) {
    user.speedY =-n;
}
this.down=function down(n) {
    user.speedY =+n;
}
this.left=function left(n) {
   user.speedX =-n ;
}
this.right=function right(n) {
   user.speedX =+n ;  
}

this.change=function(active){

	if (active){
		 img = document.getElementById("ship");
		ctx.drawImage(img,this.x,this.y,width,height);
		}else{
			let img = document.getElementById("explosion");
		ctx.drawImage(img,this.x,this.y,width,height);
		}
}



}