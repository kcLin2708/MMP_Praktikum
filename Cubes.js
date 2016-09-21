cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        
        this.cube_Names = {
            
            DEFAULT:'cube_cage',
            CUBE_RED:'cube_red_1',
        };
        
        this.State = cc.Enum({
            Visible: -1,
            Invisible : -1,
        });

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
