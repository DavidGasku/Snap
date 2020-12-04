const gsk_DEBUG = true;

GSK = {};

GSK.init = function(broadcast) {
    if (gsk_DEBUG) console.log("gks_session.init()");

    GSK.ide = window.world.children[0];
    GSK.broadcast = broadcast;

    ide.flatDesign();
    ide.palette.toggleVisibility();
    ide.stage.toggleVisibility();
    ide.stageHandle.toggleVisibility();

    SyntaxElementMorph.prototype.fontSize = 12;
    CommandBlockMorph.prototype.corner = 6;

    window.onbeforeunload = nop;
    return GSK;
}

GSK.onPublishReceived = function (d, s) {
    console.log(d, s);

    let sprite = ide.sprites.contents.find(s => s.name === d.o);
    if (sprite) {
        sprite.gotoXY(d.x, d.y);
        sprite.setHeading( d.heading );
    }
}

GSK.setTopBarVisibility = function (bool) {
    if (gsk_DEBUG) console.log("setTopBarVisibility()");
}
