function Bullet(width, height, color, x, y) {
  
   
    this.width = width;
    this.height = height;
    this.fired=false
    this.speedY = 0;    
    this.x = x;
    this.y = y;
	this.fired=false;
    this.update = function() {
        ctx = myGameArea.context;
        
        let img = document.getElementById("shot");
		ctx.drawImage(img,this.x,this.y,width,height);
		
    }
    this.newPos = function() {
        this.y += this.speedY ;
		this.hitTop();
    }
    
	 this.hitTop = function() {
        var screemTop = myGameArea.canvas.height + this.height;
        if (this.y < screenTop) {
            this.y < screenTop+10; 
        }
    }

	 
      
	
}