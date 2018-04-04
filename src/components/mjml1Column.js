define(function () {
  return (editor, mjmlData = {}) => {
    let DomComponent = editor.DomComponents; // Get the model and the view from the default Component type
    let defaultType = DomComponent.getType('default');
    let defaultModel = defaultType.model;
    let defaultView = defaultType.view;

    const type = "mjml1Column";
    DomComponent.addType(type, {
      // Define the Model
      model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            'custom-name': 'Column1',
            highlightable: false,
            selectable: false,
            editable: false,
            hoverable: false,
            name: 'mjml1Column',
            // // // Can't drop other elements inside it
            // droppable: true,
            // // Traits (Settings)
            classes: ['mjColDrop'],
            traits: [],
            stylable: [
              'background-color', 'vertical-align', 'text-align','font-size'
            ],
            components: mjmlData.mjml1Column,
            // 'stylable-require': ['font-size'],
            // Probably in your case you might want to hide the original property
            // for this component
            unstylable: ['background-color', 'font-family', 'color', 'font-weight', 'font-size', 'line-height'],
          }),
        },
        // The second argument of .extend are static methods and we'll put inside our
        // isComponent() method. As you're putting a new Component type on top of the stack,
        // not declaring isComponent() might probably break stuff, especially if you extend
        // the default one.
        {
          isComponent(el) {
            if (el.tagName == type.toUpperCase()) {
              return {
                type
              };
            }
          },
        }),

      //   // Define the View
      view: defaultType.view.extend({
        tagName: 'div',
        events: {
          // If you want to bind the event to children elements
          // 'click .someChildrenClass': 'methodName',
          // click: 'handleClick',
        },
        attributes: {
          // 'data-type': 'text',
          // 'data-highlightable': 1,
          // 'data-editable': true      
        },

        // The render() should return 'this'
        render: function () {
          // Extend the original render method
          defaultType.view.prototype.render.apply(this, arguments);
          return this;
        },
      }),
    });
  };
})