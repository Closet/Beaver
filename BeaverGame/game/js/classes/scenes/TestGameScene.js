classes.scenes.TestGameScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new classes.layers.TestGameLayer();
		layer.init();
		this.addChild(layer);
	}
});