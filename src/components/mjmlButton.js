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
          'custom-name': 'Button',
          // resizable: true,
          highlightable: true,
          selectable: true,
          editable: true,
          hoverable: true,
          name: 'mjmlButton',
          // // // Can't drop other elements inside it
          // droppable: true,
          // // Traits (Settings)
          classes: ['mjComponentDrop'],
          traits: [],
          // stylable: [
          //   'background-color', 'vertical-align', 'text-align','font-size'
          // ],
          // Probably in your case you might want to hide the original property
          // for this component
          'unstylable': ['background-color', 'font-family', 'color', 'font-weight', 'font-size', 'line-height'], 
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
        // initialize(o = {}) {
        //   this.config = o.config || {};
        //   const model = this.model;
        //   const toTrack = 'change:style change:state change:mediaText';
        //   this.listenTo(model, toTrack, this.handleClick);
        //   // this.listenTo(model, 'destroy remove', this.remove);
        //   // this.listenTo(model.get('selectors'), 'change', this.render);
        // },
        // init() {
          
        //   this.listenTo(this.model, 'change:styleUpdate:text-align', this.handleClick);
        //   var self  = this.model;
        //   editor.on('component:styleUpdate:text-align', function(model) {
        //     console.log("hye self", self);
        //     console.log("hye model", model);
        //     let parent = self.parent();
        //     var attr = parent.getAttributes(); // working
        //     attr.align="center";
        //     parent.setAttributes(attr);
        //   });
        // },
        
        events: {
          // click: 'handleClick',
        },
        // init() {
        //   this.listenTo(this, 'change:text-align', this.handleClick);
        // },
        randomHex: function() {
          return '#' + Math.floor(Math.random()*16777216).toString(16);
        },

        handleClick: function(e) {
          // this.model.set('style', {'background-color': this.randomHex()}) // <- Affects the final HTML code
          let parent = this.model.parent();
          var attr = parent.getAttributes(); // working
          attr.align="center";
          parent.setAttributes(attr);


          // var sh = this.model.find('table')[0] //working
          // var attr = sh.getAttributes();
          // attr.align="left";

          // sh.setAttributes(attr);

          // this.model.set({draggable:false, removable:false, highlightable: false});
          // this.render(this);

          // this.model.attributes.highlightable = false;
          // this.model.attributes.hoverable =  false;
          // this.model.setAttributes({id: 'hoverable', 'data-key': false});
          // this.model.setAttributes({id: 'highlightable', 'data-key': false});
          // this.model.setAttributes({id: 'selectable', 'data-key': false});
          // this.model.set('removable', false);
          // this.model.set('draggable', false);
          // this.model.set('attributes', {'draggable': false, 'highlightable': false, 'removable': false});

          // this.model.setAttributes({id:'highlightable', 'data-key': 'false'})
          // this.model.setAttributes({id:'hoverable', 'data-key': 'false'})
          // this.el.style.backgroundColor = this.randomHex();
          // this.render(this);
          // this.model.attributes.components.models[0].attributes.attributes.align = "left"
          // this.el.getElementsByClassName("mjmlButton")[0].align = "left";
          // let currModel = editor.getSelected().attributes.components.models[0].attributes.components.models[0]
          // this.model.set('style', {'background-color': 'green'}); // <- Affects the final HTML code

          // currModel.setAttributes({id: 'align', 'data-key': 'left'});

          // this.el.style.backgroundColor = '#939393';
          // this.render(this);
          // Tip: updating the model will reflect the changes to the view, so, in this case,
          // if you put the model change after the DOM one this will override the backgroundColor
          // change made before
        },

        updateAttributes: function() {
          console.log("in updates");
        },
        // The render() should return 'this'
        render: function () {
          // Extend the original render method
          defaultView.prototype.render.apply(this, arguments);
          return  this;
        },
      }),
    });
  };
})