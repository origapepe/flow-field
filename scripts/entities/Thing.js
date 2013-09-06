define(['Kai'/*, 'BoundingCircle', 'LocalState'*/], function(Kai/*, BoundingCircle, LocalState*/) {
	
	var _speed = Math.random()*15-7;
	
	function Thing(x, y) {
		if (typeof x === 'undefined') x = 0;
		if (typeof y === 'undefined') y = 0;
		
		this.position = new Vec2(x, y);
		this.velocity = new Vec2(Math.random()*_speed-_speed*0.5, Math.random()*_speed-_speed*0.5);
		// this.health:Health = new Health();
		
		// this.state = new LocalState(); // component that hooks into the broadphase grid
		
		// this.collider = new BoundingBox2();
		
		var texture = PIXI.Texture.fromImage('img/entity.png');
		this.sprite = new PIXI.Sprite(texture);
		// center the this sprite's anchor point (as opposed to pivot which is relative position to parent)
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		
		Kai.stage.addChild(this.sprite);
		
		// link references
		this.sprite.position = this.position;
		// this.state.position = this.position;
		// this.collider.position = this.position;
	}
		
	Thing.prototype.update = function() {
		// var steerForce = this.state.update(this.position);
		
		// this.velocity.copy(steerForce);
		// this.velocity.normalize().multiplyScalar(_speed);
		
		this.position.add(this.velocity);
		// this.collider.update();
		
		this.sprite.rotation = Math.atan2(this.velocity.y, this.velocity.x);
		
		// screen wrap
		if (this.position.x > window.innerWidth) this.position.x -= window.innerWidth;
		if (this.position.x < 0) this.position.x += window.innerWidth;
		if (this.position.y > window.innerHeight) this.position.y -= window.innerHeight;
		if (this.position.y < 0) this.position.y += window.innerHeight;
	}
	
	return Thing;
});