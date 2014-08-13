var app = {
    init : function() {
        var Engine = famous.core.Engine,
            Modifier = famous.core.Modifier,
            Transform = famous.core.Transform,
            ImageSurface = famous.surfaces.ImageSurface;

        var mainContext,
            logo,
            centerSpinModifier,
            time;

        mainContext = Engine.createContext();
        
        logo = new ImageSurface({
            size: [200, 200],
            content: 'famous_logo.svg',
            classes: ['double-sided']
        });

        time = Date.now();

        centerSpinModifier = new Modifier({
            origin: [0.5,0.0],
            transform : function(){
                return Transform.rotateY(.002 * (Date.now() - time));
            }
        });



        mainContext.add(centerSpinModifier).add(logo);
    }
};
