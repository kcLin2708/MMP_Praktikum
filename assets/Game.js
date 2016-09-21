cc.Class({
    extends: cc.Component,

    properties: {

        scoreDisplay:{
            default: null,
        },
        gameOverMenu:{
            default: null,
        },
        cubeGroups:{
            default: null,
            type: cc.Node
        },


    },

    startGame:function(){
        this.gameState = this.Gamestate.Run;
    },

    // use this for initialization
    onLoad: function () {
        
        this.background.getComponent('cubeGroups').game = this;

    },
    gainScore: function () {
        
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
    },
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
