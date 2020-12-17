const gsk_DEBUG = true;

GSK = {
    gui: {
        flatDesign: true,
        stageHandle: false,
        paletteHandle: false,
        categories: {
            show: true,
            mergeCategories: true,
        },
        palette: {
            show: true,
            width: 220,
        },
        controlBar: {
            show: "normal", // none, reduced, normal
            padding: 0,
        },
        spriteBar: {
            show: true
        },
        showCorralBar: true,
        addNewSpriteButton: false,
    }
};

GSK.init = function(broadcast) {
    GSK.ide = window.world.children[0];
    GSK.broadcast = broadcast;

    window.onbeforeunload = nop;
    return GSK;
}

GSK.onPublishReceived = function(data) {
    //console.log(data);

    let sprite = ide.sprites.contents.find(s => s.name === data.sprite);
    if (sprite) {
        script = ide.gskRawOpenScriptString(data.script);
        //console.log(script2)
        ide.stage.threads.startProcess(script, sprite)
    }
}

GSK.setTopBarVisibility = function(bool) {
    if (gsk_DEBUG) console.log("setTopBarVisibility()");
}


IDE_Morph.prototype.gskRawOpenScriptString = function(str) {
    var xml,
        script,
        scripts = this.currentSprite.scripts;

    if (Process.prototype.isCatchingErrors) {
        try {
            xml = this.serializer.parse(str, this.currentSprite);
            script = this.serializer.loadScript(xml, this.currentSprite);
        } catch (err) {
            this.showMessage('Load failed: ' + err);
        }
    } else {
        xml = this.serializer.loadScript(str, this.currentSprite);
        script = this.serializer.loadScript(xml, this.currentSprite);
    }
    return script;
};