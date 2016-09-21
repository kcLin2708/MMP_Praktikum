cc.Class({
    extends: cc.Component,

    properties: {
        
        
        player: {
            default: null,
            type: cc.Sprite,
            
        },
    },

    // use this for initialization
    onLoad: function () {

    },
    
    setMoveAction: function () {
        // jump up
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // jump down
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // repeat
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
