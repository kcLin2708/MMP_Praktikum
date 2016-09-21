cc.Class({
    extends: cc.Component,

    properties: {
        
        cubeSizeX: 0,
        cubeSizeY: 0,
        
        cube:{
            default: null,
            type: cc.Prefab,
        },

        cube_red:{
            default: null,
            type: cc.Prefab,
        },
        
        player:{
            default: null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {

        this.reset();
  

    },
    
    reset:function(){

        
        this.running = false;
        //this.setInputControl();

        this.level_base = [];

        this.cubesArray = [];
        this.cubeWidth = 256;
        this.cubeHeight = 256;
        this.minRow = 0;

        this.cubeGroup = new cc.Node();
        this.cubeGroup.setAnchorPoint(cc.p(0,1)) //(0,1)
        this.cubeGroup.setPosition(cc.p(0,0)); //(0,0)
        this.node.addChild(this.cubeGroup);
        
        this.cubeGroup.x += this.cubeWidth/2 + (640 - this.cubeSizeX*this.cubeWidth)/2 ;
        this.cubeGroup.y -= this.cubeHeight - 20 ;
        
        this.generateRandomCubes(this.cubeSizeY, this.cubeSizeX); //(this.cubeSizeY*2, this.cubeSizeX)

        for(var i = 0; i < this.cubeSizeY; i ++){
               this.addCubesRow(i);
        }
        

    },
    startGame:function(){
        
        if(!this.running){
            this.running = true;
        }
    },

    stopGame:function(){
        this.running = false;
    },

    addCubesRow: function(i){

        this.cubesArray[i] = [];
        var columnLength = this.cubeSizeX;

        if(i % 2 == 1 ){
            columnLength -=  1;
        }

        for(var j = 0; j < columnLength; j ++){

            var cubeX = this.cubeWidth * j + (this.cubeWidth / 2) * (i % 2);
            var cubeY = this.cubeHeight * -i / 4 * 3; 

            var newCube = cc.instantiate(this.cube);
            /*
            newCube.getComponent('Cubes').group = this;
            newCube.getComponent('Cubes').rows = i;
            newCube.getComponent('Cubes').cols = j;*/
            
            //newCube.getComponent(cc.Sprite).setSpriteFrame(this.getFrameFromId(this.level_base[i][j]));
            //newCube.getComponent('').setOverlay(this.getFrameFromId(this.level_overlay[i][j]));
            
            cc.log(newCube);
            newCube.setPosition(cc.p(cubeX,cubeY)); 
            this.cubesArray[i][j] = newCube;
            this.node.addChild(newCube); 
            

        }

    },

    generateRandomCubes:function(rows, columns){
            
        var columns_ground = [];
        var rows_ground = [];

        //var self = this;

        for (var i = 0; i < rows; i++){
            var columnLength = columns;

            if(i % 2 == 1 ){
                columnLength -=  1;
            }

            for (var j = 0; j < columnLength; j++){
            
            if(i===0 || i ===rows-1){

                columns_ground[j] = 1;
            }else{
                var r = Math.random();
                if(r <= 0.2){
                    columns_ground[j] = 2;   
                }else if(r > 0.2 && r < 0.9){
                    columns_ground[j] = 1;
                }else
                  columns_ground[j] = 9;
            }
        
          }
          rows_ground[i] = columns_ground;
          columns_ground = [];
        }

        //this.level_base = this.level_base.concat(rows_ground);
    },

    
    

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

        if(!this.running){
            return;
        }
    },

    onFadedOut:function(node){
        node.getComponent('Cubes').state = node.getComponent('Cubes').State.Invisible;
        node.removeFromParent(true);
    },
});