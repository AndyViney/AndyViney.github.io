function Enemy(width, height, color, x, y) {
  
    
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = myGameArea.context;
        
       // ctx.fillStyle = color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
		let img = document.getElementById("ship2");
		ctx.drawImage(img,this.x,this.y,width,height);
    }
    this.newPos = function() {
       
        this.x += this.speedX ;
        this.y += this.speedY ;
        this.hitBottom();
	
		this.hitLeft();
		this.hitRight();
    }
    this.hitBottom = function() {
        var screenBottom = myGameArea.canvas.height - this.height;
        if (this.y > screenBottom) {
			return true;
           
        }
		return false
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
	this.hit = function(user) {
		
		user.score=user.score+1;
		
		
		
	}
	 
    this.crashWith = function(other) {
        otherRight=other.x+other.width;
        otherLeft=other.x;
		right=x+width;
		left=x;
		
		
		up=this.y;
		down=this.y-this.height
		otherUp=other.y;
		otherDown=other.y-other.height;
		
		
        if ((((otherLeft>=left+10)&&(otherLeft<=right+10))||
		((otherRight>=left+10)&&(otherRight<=right+10)))
		){
			if(((up>=otherUp-5)&&(down<=otherUp-5))
			||((up>=otherDown+5)&&(down<=otherDown+5))	
			){
			
				
			return true;
        }
		}
        
    }
	
	
		

}