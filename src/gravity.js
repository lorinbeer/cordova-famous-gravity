

var init = function() {

console.log("come on man come on man");
    document.addEventListener('deviceready',initGravity,false); 
}

var initgravity = function() {
    console.log("GRAVITY INIT");
    initfamous();
}

var initfamous = function() { 
    console.log("FAMOUS INIT");
}



/*
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
*/
