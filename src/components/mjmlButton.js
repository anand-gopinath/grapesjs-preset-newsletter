define(function () {
  return (editor, mjmlData = {}) => {
    let DomComponent = editor.DomComponents;// Get the model and the view from the default Component type
    let defaultType = DomComponent.getType('default');
    let defaultModel = defaultType.model;
    let defaultView = defaultType.view;

    const type= "mjmlButton";
    DomComponent.addType(type, {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          // resizable: true,
          highlightable: true,
          selectable: true,
          editable: true,
          hoverable: true,
        
          // // // Can't drop other elements inside it
          // droppable: true,
          // // Traits (Settings)
          classes: ['mjComponentDrop'],
          traits: [],
          stylable: [
            'background-color', 'vertical-align', 'width', 'text-align',
            // 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
            // 'border', 'border-width', 'border-style', 'border-color',
          ],
          components: mjmlData.mjmlButton,
        }),
      },
      // The second argument of .extend are static methods and we'll put inside our
      // isComponent() method. As you're putting a new Component type on top of the stack,
      // not declaring isComponent() might probably break stuff, especially if you extend
      // the default one.
      {
        isComponent(el) {
          if(el.tagName == type.toUpperCase()){
            return {type};
          }
        },
      }),
    
    //   // Define the View
      view: defaultType.view.extend({
        tagName: 'div',
        events: {
          // click: 'handleClick',
        },
        handleClick: function(e) {
          this.model.attributes.components.models[0].attributes.attributes.align = "left"
          this.el.getElementsByClassName("mjmlButton")[0].align = "left";
          // this.model.set('style', {color: '939393'}); // <- Affects the final HTML code
          // this.el.style.backgroundColor = '#939393';
          // this.render(this);
          // Tip: updating the model will reflect the changes to the view, so, in this case,
          // if you put the model change after the DOM one this will override the backgroundColor
          // change made before
        },

        // The render() should return 'this'
        render: function () {
          // Extend the original render method
          defaultType.view.prototype.render.apply(this, arguments);
          return  this;
        },
      }),
    });
  };
})