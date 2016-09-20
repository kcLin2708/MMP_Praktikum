cc.Class({
    extends: cc.Component,

    properties: {

        scoreDisplay:{
            default: null
        },
        gameOverMenu:{
            default: null
        },


    },

    startGame:function(){
        this.gameState = this.Gamestate.Run;
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
