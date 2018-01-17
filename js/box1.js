function Box1(boxId){
	this.ele=$(boxId)
}
Box1.prototype.start=function(){
	var self = this;
	
	this.ele.mousedown(function(e){
		e.preventDefault();
		var deatX = e.offsetX;
		var deatY = e.offsetY;
		$(document).mousemove(function(e){
			e.preventDefault();
			var x = e.clientX - deatX;
			var y = e.clientY - deatY;
			self.move(x,y)
		})
		$(document).mouseup(function() { 
			self.stop()
		})
	})
}
Box1.prototype.move=function(x,y){
	this.ele.css({
		left:x,
		top:y
	})
}
Box1.prototype.stop=function(){
	$(document).off("mousemove mousup")
}
