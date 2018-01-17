function Box2(boxId){
	Box1.call(this,boxId)
}
Box2.prototype=Box1.prototype;
Box2.prototype.move = function(x, y) {  
	if (x < 0) {  
		x = 0     
	}
	if (y < 0) {  
		y = 0   
	}
	this.ele.css({
		left: x,
		top: y
	})
}