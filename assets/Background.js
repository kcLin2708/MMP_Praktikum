cc.Class({
    extends: cc.Component,

    properties: {
        cubeSizeX:0,
        cubeSizeY:0,
        cube:{
            default: null,
            type: cc.Prefab,
        },
    },

    // use this for initialization
    onLoad: function () {

    },
    
    startGame:function(){
        
        if(!this.running){
            this.running = true;
        }
    },

    stopGame:function(){
        this.running = false;
    },

    generateRandomCubes:function(rows, columns){
            
        var columns_ground = [];
        var rows_ground = [];

        for (var i = 0; i < rows; i++){
            var columnLength = columns;
            for (var j = 0; j < columnLength; j++){
            var rowsLength = rows;
            
           var x = Math.random();
           if(x < 4){
               
               columns_ground[j] = 1;
               
           }else{
               columns_ground[j] = 2;
               
           }
          }
        }
    },
    
    getFrameFromId:function(id){
        
        var result = "";
        switch(id){
            case 1:
            result = ""
            break;
            
            case 2:
            result = "";
            break;
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
