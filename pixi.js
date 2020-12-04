var pixi = { renderer: null, stage: null };


pixi.init = function () {

    pixi.renderer = PIXI.autoDetectRenderer(960, 720,{backgroundColor : 0xff99bb, transparent: true });
    document.getElementById('pixi-canvas').appendChild(pixi.renderer.view)
    
    // create the root of the scene graph
    pixi.stage = new PIXI.Container();

    // create viewport
    this.viewport = new Viewport.Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 960,
        worldHeight: 720,
    
        interaction: pixi.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    })
    
    // add the viewport to the stage
    pixi.stage.addChild(this.viewport)
    
    // activate plugins
    this.viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
    
    // add a red box
    const sprite = this.viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
    sprite.tint = 0xff0000
    sprite.width = sprite.height = 100
    sprite.position.set(0, 0)

    let myGraph = new PIXI.Graphics();
    this.viewport.addChild(myGraph);
    pixi.viewport.moveCorner(-480,-360)

    // Move it to the beginning of the line
    myGraph.position.set(0,0);

    // Draw the line (endPoint should be relative to myGraph's position)
    myGraph.lineStyle(2, 0xff0000)
        .moveTo(-1000, 0)
        .lineTo(1000, 0);
    myGraph.lineStyle(2, 0x00ff00)
        .moveTo(0, -1000)
        .lineTo(0, 1000);

    // var svg = document.querySelector("svg#svg1");
    // let mysvg = new SVGGraphics(svg);
    //pixi.viewport.addChild(mysvg);

}

pixi.render = function () {
    pixi.renderer.render(pixi.stage);
}