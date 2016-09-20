cc.Class({
    extends: cc.Component,

    properties: {
        


    },

    // use this for initialization
    onLoad: function () {

    },
    
    buttonClick:function(){
        
      cc.director.loadScene('PlayerMenu');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
