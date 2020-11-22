const gsk_DEBUG = true;

var GSK = {};
GSK.session_controller = {};

GSK.session_controller.init = function (ide) {
    if (gsk_DEBUG) console.log("gks_session.init()");
    GSK.session_controller.ide = ide;
    ide.flatDesign();
    //ide.palette.toggleVisibility();
    //ide.stage.toggleVisibility()
    //ide.stageHandle.toggleVisibility()

    window.onbeforeunload = nop;
    IDE_Morph.prototype.set
}

GSK.setTopBarVisibility = function (bool) {
    if (gsk_DEBUG) console.log("setTopBarVisibility()");
}

GSK.socket = io("http://localhost:3000", {
    'reconnection': true,
    'reconnectionDelay': 2000,
    'reconnectionDelayMax': 5000,
    /* 'reconnectionAttempts': 6, */
});
