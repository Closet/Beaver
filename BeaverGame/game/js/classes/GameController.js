BG.GameController = cc.Class.extend({
	_curScene: null,
	_nextScene: null,
    _gameState: BG.GAME_STATE.SPLASH_SCREEN,
    _selectPlayMode: 0, //0: null
    setCurScene:function (s) {
        if (this._curScene != s) {
            if (this._curScene !== null) {
                this._curScene.onExit();
            }
            this._curScene = s;
            if (this._curScene) {
                cc.Director.getInstance().replaceScene(s);
            }
        }
    },
    getCurScene:function () {
        return this._curScene;
    },
    pause:function () {
    },
});

BG.GameController.getInstance = function () {
    if (!this._sharedGame) {
        this._sharedGame = new BG.GameController();
        return this._sharedGame;        
    } else {
        return this._sharedGame;
    }
    return null;
};

BG.GameController._sharedGame = null;