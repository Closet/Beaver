classes.layers.TestGameLayer = cc.Layer.extend({
	_bib: null,
	init: function() {
		var size = cc.Director.getInstance().getWinSize();
		
		this._super();		
		this._bib = new classes.sprites.Biber();
		this.setTouchEnabled(true);
		this.setKeyboardEnabled(true);
		this.setPosition(cc.p(0,0));
		this.addChild(this._bib);
		this._bib.setPosition(cc.p(size.width/3,size.height/4));
		this._bib.scheduleUpdate(); //update 60fps in Sprite
		this.schedule(this.update); //update 60fps in Layer
		 
		return true;
		
		
		
	/**
     * @runAction ,sequence , delayTime, callfunc, fadeout
     */
		// onEnter:function () {
        // this._super();
// 
        // var child = cc.Sprite.create(s_pathGrossini);
        // child.setPosition(200, 200);
        // this.addChild(child, 1);
// 
        // //Sum of all action's duration is 1.5 second.
        // child.runAction(cc.RotateBy.create(3.5, 90));
        // child.runAction(cc.Sequence.create(
            // //cc.DelayTime.create(1.4),
            // cc.FadeOut.create(0.2))
        // );
// 
        // //After 1.5 second, self will be removed.
        // this.runAction(cc.Sequence.create(
            // cc.DelayTime.create(3.5),
            // cc.CallFunc.create(this.onRemoveThis, this))
        // );
    // },
// 
    // onRemoveThis:function () {
        // this.getParent().removeChild(this);
        // this.onNextCallback(this);
    // },
    
    
    /**
     * @Move By
     */
     // onEnter:function () {
        // this._super();
// 
        // var grossini = cc.Sprite.create(s_pathGrossini);
        // this.addChild(grossini, 0, 2);
        // grossini.setPosition(200, 200);
// 
        // grossini.runAction(cc.Sequence.create(
            // cc.MoveBy.create(1, cc.p(150, 0)),
            // cc.CallFunc.create(this.onBugMe, this))
        // );
    
    
    /**
     * @sprite property
     */
    // onEnter:function () {
        // this._super();
// 
        // this._tamara.setScaleX(2.5);
        // //window.tam = this._tamara;
        // this._tamara.setScaleY(-1.0);
        // this._tamara.setPosition(100, 70);
        // this._tamara.setOpacity(128);
// 
        // this._grossini.setRotation(120);
        // this._grossini.setPosition(winSize.width / 2, winSize.height / 2);
        // this._grossini.setColor(cc.c3b(255, 0, 0));
// 
        // this._kathia.setPosition(winSize.width - 100, winSize.height / 2);
        // this._kathia.setColor(cc.c3b(0, 0, 255));
//     
    
    
    /*
     * @BazierTo
     */
    
    // var Issue1008 = ActionsDemo.extend({
    // onEnter:function () {
        // this._super();
// 
        // this.centerSprites(1);
// 
        // // sprite 1
// 
        // this._grossini.setPosition(428, 279);
// 
        // // 3 and only 3 control points should be used for Bezier actions.
        // var controlPoints1 = [ cc.p(428, 279), cc.p(100, 100), cc.p(100, 100)];
        // var controlPoints2 = [ cc.p(100, 100), cc.p(428, 279), cc.p(428, 279)];
// 
        // var bz1 = cc.BezierTo.create(1.5, controlPoints1);
        // var bz2 = cc.BezierTo.create(1.5, controlPoints2);
        // var trace = cc.CallFunc.create(this.onTrace, this);
        // var delay = cc.DelayTime.create(0.25);
// 
        // var rep = cc.RepeatForever.create(cc.Sequence.create(bz1, bz2, trace,delay));
// 
        // this._grossini.runAction(rep);
        // //this._grossini.runAction(cc.Sequence.create(bz1, bz2, trace,delay));
// 
    // },
    // onTrace:function (sender) {
        // var pos = sender.getPosition();
        // cc.log("Position x: " + pos.x + ' y:' + pos.y);
        // if (Math.round(pos.x) != 428 || Math.round(pos.y) != 279)
            // this.log("Error: Issue 1008 is still open");
// 
        // this.tracePos = pos;
    // },
	
	},
	update: function() { 
	},
	onTouchEnded: function() {
		this._bib.handleTouch(pTouch[0].getLocation());
	},
	onTouchMoved: function() {
		this._bib.handleTouchMove(pTouch[0].getLocation());
	},
	onKeyUp: function() {
		
	},
	onKeyDown: function(e) {
		this._bib.handleKey(e);
	}
});
