function ScoreBoard(width, height, color, x, y, type) {
   
    this.score = 0;
    this.width = width;
    this.height = height;
     
    this.x = x;
    this.y = y;
   
    
	this.leftSpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
      
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
       
    }
    
   
	 
}