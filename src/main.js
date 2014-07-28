



define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    var cdvinit = function() {
        console.log("CORDOVA INIT FUNCTION");
        document.addEventListener('deviceready', appinit, false); 
    };

    var appinit = function() {
        console.log("APPINIT: watching acceleration");
        navigator.watchAcceleration(excel,noxel,100);
    }

    var excel = function (acceleration) {
        console.log(acceleration);
    };

    var nocel = function (error) {
        console.log("ERROR!: ", error);
    };


    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function(){
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    mainContext.add(centerSpinModifier).add(logo);
});
