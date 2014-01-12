classes.scenes.DuelGameScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new classes.layers.DuelGameLayer();
		layer.init();
		this.addChild(layer);
	}
});