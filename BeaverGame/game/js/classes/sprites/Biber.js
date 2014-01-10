classes.sprites.Biber = cc.Sprite.extend({
		_currentRotation:0,
	    ctor:function(){
	        this._super();
	        this.initWithFile(s_biber);
        	this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
	    },
	    update:function(){
	        this.setRotation(this._currentRotation);
	    },
	    handleKey:function(e)
	    {
	    	var that = this;
	        if(e === cc.KEY.left)
	        {
	            this._currentRotation--;
	            this.runAction(cc.Sequence.create(
            		cc.MoveBy.create(0.01, cc.p(-10, 0)),
            		cc.CallFunc.create(function() {
            			that.setScaleX(0.5);
	    				that.setScaleY(2.0);
            		}),
            		cc.DelayTime.create(0.5),
	    			cc.CallFunc.create(this.beFreak, this)
           		));
           		this.setScaleX(0.5);
	    		this.setScaleY(2.0);

	        }
	        else if(e === cc.KEY.right)
	        {
	            this._currentRotation++;
	            this.runAction(cc.Sequence.create(
            		cc.MoveBy.create(0.01, cc.p(10, 0)),
            		cc.CallFunc.create(function() {
            			that.setScaleX(0.5);
	    				that.setScaleY(2.0);
            		}),
            		cc.DelayTime.create(0.5),
	    			cc.CallFunc.create(this.beFreak, this)
           		));
           		this.setScaleX(0.5);
	    		this.setScaleY(2.0);
			}	            

	        if(this._currentRotation < 0) this._currentRotation = 360;
	        if(this._currentRotation > 360) this._currentRotation = 0;
	    },
	    handleTouch:function(touchLocation)
	    {
	        if(touchLocation.x < 300)
	            this._currentRotation = 0;
	        else
	            this._currentRotation = 180;
	    },
	    handleTouchMove:function(touchLocation){
	        // Gross use of hardcoded width,height params.
	        var angle = Math.atan2(touchLocation.x-300,touchLocation.y-300);

	        angle = angle * (180/Math.PI);
	        this._currentRotation = angle;

	    },
	    beFreak: function() {
	    	this.setScaleX(1.0);
	    	this.setScaleY(1.0);
	    }
});