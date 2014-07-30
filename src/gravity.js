var app = {
    init : function() {
        
        console.log(famous.core.Engine);
        
        this.Engine = famous.core.Engine;
        this.Modifier = famous.core.Modifier;
        this.Transform = famous.core.Transform;
        this.ImageSurface = famous.surfaces.ImageSurface;

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
    }
};


/*
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
*/
