classes.layers.TestGameLayer = cc.Layer.extend({
	_beavers: [],
	init: function() {
		var size = cc.Director.getInstance().getWinSize();
		this._super();
		this.setTouchEnabled(true);
		this.setKeyboardEnabled(true);
		this.setPosition(cc.p(0,0));
		
		//box2d  (32px === 1m !!)
		var PTM_RATIO = 32;
		var b2Vec2 = Box2D.Common.Math.b2Vec2
            , b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2World = Box2D.Dynamics.b2World
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
            
       	// Construct a world object, which will hold and simulate the rigid bodies.
        this.world = new b2World(new b2Vec2(0, 0), true); //no gravity
        this.world.SetContinuousPhysics(true);
		
		var fixDef = new b2FixtureDef;
        fixDef.density = 0;
        fixDef.friction = 0;
        fixDef.restitution = 0;

        var bodyDef = new b2BodyDef;

        //create ground //w:40, h:22.5
        bodyDef.type = b2Body.b2_staticBody;
        fixDef.shape = new b2PolygonShape;
        fixDef.shape.SetAsBox(40, 2);
        // upper
        bodyDef.position.Set(20, 22.5 + 1);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        // bottom
        bodyDef.position.Set(40, -1);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        
        fixDef.shape.SetAsBox(2, 22.5);
        // left
        bodyDef.position.Set(-1, 11.25);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        // right
        bodyDef.position.Set(41, 11.25);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
		
		//TESTING TITLE 
		var label = cc.LabelTTF.create("Beaver Moving Test", "Marker Felt", 32);
        this.addChild(label, 0);
        label.setColor(cc.c3b(0, 0, 255));
        label.setPosition(size.width / 2, size.height - 50);
        
        //Adding Beavers
        for(var i=0; i<4; i++)
	       this._beavers[i] = new classes.sprites.Beaver(this, cc.p(300,100+150*i), i);

		this.scheduleUpdate(); //update 60fps in Layer
		
		return true;
	},
	update: function(dt) {

		for(var i=0; i<4; i++)
			this._beavers[i].update();
			
		//It is recommended that a fixed time step is used with Box2D for stability
		//of the simulation, however, we are using a variable time step here.
		//You need to make an informed choice, the following URL is useful
		//http://gafferongames.com/game-physics/fix-your-timestep/

		var velocityIterations = 6;
		var positionIterations = 2;

		// Instruct the world to perform a single step of simulation. It is
		// generally best to keep the time step and iterations fixed.
		this.world.Step(dt, velocityIterations, positionIterations);

		//Iterate over the bodies in the physics world
		for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
			if (b.GetUserData() != null) {
				//Synchronize the AtlasSprites position and rotation with the corresponding body
				var myActor = b.GetUserData();
				myActor.setPosition(b.GetPosition().x * PTM_RATIO, b.GetPosition().y * PTM_RATIO);
				myActor.setRotation(cc.RADIANS_TO_DEGREES(b.GetAngle()));
				//console.log(b.GetAngle());
			}
		}
	},
	// onTouchEnded: function() {
		// this._bib.handleTouch(pTouch[0].getLocation());
	// },
	// onTouchMoved: function() {
		// this._bib.handleTouchMove(pTouch[0].getLocation());
	// },
	onKeyUp: function() {
 		this._beavers[0].handleKeyUp();
	},
	onKeyDown: function(e) {
		this._beavers[0].handleKeyDown(e);
		// var i = Math.random() * 4
		// this._beavers[parseInt(i)].handleKey(e);
	}
});
