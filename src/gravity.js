var app = {
    init : function() {
        var Engine = famous.core.Engine,
            Modifier = famous.core.Modifier,
            Transform = famous.core.Transform,
            ImageSurface = famous.surfaces.ImageSurface;

        var mainContext = Engine.createContext();
        // your app here
        var logo = new ImageSurface({
            size: [200, 200],
            content: 'http://code.famo.us/assets/famous_logo.svg',
            classes: ['double-sided']
        });

        var initialTime = Date.now();
        var centerSpinModifier = new Modifier({
            origin: [0.5,0.0],
            transform : function(){
                return Transform.rotateY(.002 * (Date.now() - initialTime));
            }
        });

        mainContext.add(centerSpinModifier).add(logo);
    }
};
