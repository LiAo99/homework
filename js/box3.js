function Box3(boxId){
	Box1.call(this,boxId)
}
Box3.prototype=Box1.prototype;
Box3.prototype.move = function(x, y) {  
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
	this.ele.html("left:"+x+"px"+"<br/>"+"top:"+y+"px");
}