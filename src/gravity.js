var app = {
    init : function() {
        var Engine = famous.core.Engine,
            Modifier = famous.core.Modifier,
            Transform = famous.core.Transform,
            Surface = famous.core.Surface,
            ImageSurface = famous.surfaces.ImageSurface,
            Transitionable = famous.transitions.Transitionable,
            StateModifier = famous.modifiers.StateModifier,
            SpringTransition = famous.transitions.SpringTransition,
            ModifierChain = famous.modifiers.ModifierChain;

        var mainContext,
            logo,
            centerSpinModifier,
            time;

        Transitionable.registerMethod('spring', SpringTransition);
 
        mainContext = Engine.createContext();
        
        logo = new ImageSurface({
            size: [200, 200],
            content: 'famous_logo.svg',
            classes: ['double-sided']
        });

        time = Date.now();

        var spring = {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        };

        spinMod = new Modifier({
            origin: [0.5,0.0],
            transform : function(){
                return Transform.rotateY(.002 * (Date.now() - time));
            }
        });

        dropMod = new Modifier({
            origin: [0.5,0.0],
            transform : function() {
                return Transform.translate()
            }
        });
 
        var springDropMod = new Modifier({origin:[0.5,0.0]});

  var stateModifier = new StateModifier({
  origin: [0.5, 0]
});     

//        logo.chain.addModifier(spinMod, springDropMod)
        mainContext.add(stateModifier).add(logo);
        //mainContext. 
       
stateModifier.setTransform(
  Transform.translate(0, 300, 0), spring
);
 
        springDropMod.setTransform(Transform.translate(0,300,0), spring);
    }
};

