define(function() {
  return (opt = {}) => {
    // import MJML Data here
    let mjmlData = require('./constants')();
    let DomComponent = editor.DomComponents;// Get the model and the view from the default Component type
    let defaultType = DomComponent.getType('default');
    let defaultModel = defaultType.model;
    let defaultView = defaultType.view;

    let textType = DomComponent.getType('text');
    let textModel = textType.model;
    let textView = textType.view;
    /**
     * Remove this in future
     * Currently the "data-highlightable" class has been rendered by Style tag from Grapesjs
     * So temporarily we are setting this by our own css
     */
    editor.setStyle(
    /* CSS to highlight when hover on anything */
    '.gjs-dashed *[data-highlightable] {outline:1px dashed rgba(128, 128, 128, 0.4);} '+
    /* CSS after selected any element */
    '.gjs-comp-selected {outline: 2px dashed #00cc9985 !important;} '+
    /* CSS when drag over the component */
    '.gjs-comp-selected-parent { outline: 2px dashed #00cc9985 !important;} '
    );
    
    /** Restrict body(#wrapper) to accept only Structured columns (.mjColDrop)
     * Other than structured Columns , we can't drop any other components like text, image, 
     **/
    let wrapperCom = DomComponent.getComponent("wrapper")
    wrapperCom.attributes.droppable = ".mjColDrop";



    // editor.setStyle =" #outlook a { padding: 0 } .ReadMsgBody { width: 100% } .ExternalClass { width: 100% } .ExternalClass * { line-height: 100% } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100% } table, td { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0 } img { border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic } p { display: block; margin: 13px 0 }"+
    //   "@media only screen and (min-width:480px) { .mj-column-per-66 { width: 66.66666666666666%!important } .mj-column-per-33 { width: 33.33333333333333%!important } .mj-column-per-100 { width: 100%!important } .mj-column-per-50 { width: 50%!important } }";

    //Disabling body drag  and drop

    // let body = DomComponent.getComponent("body")
    // body.attributes.draggable = false
    // body.attributes.droppable = true
    // body.attributes.highlightable = false
    // body.attributes.hoverable = false;
    // body.attributes.selectable = false;
    // body.attributes.layerable = false;


    // let wrapperDom = DomComponent.getComponent("wrapper")
    // wrapperDom.attributes.highlightable = false;
    // let getComponentByModel = (component) => {
    //   return component.models[0].get('components');
    // }

    /** Common method to add new component */
    let addComponent = (rootComponent, tagName, style, droppable, content, attributes) => {
      return rootComponent.add({
        tagName: tagName,
        type: '',
        content: content,
        droppable: droppable,
        removable: true, // Can't remove it
        draggable: true, // Can't move it
        copyable: true, // Disable copy/past
        className: ['gray'],
        style: style,
        attributes: attributes
      });
    }

    let wrapper = DomComponent.getComponents()

    //Adding MJML style in header
    addComponent(wrapper, 'head', {} , true, mjmlData.mjmlStyle, {});
          
    //Code for Custom component

    // let mjContainer = addComponent(wrapper, 'div', {} , true, mjmlData.mjmlCore2Col, {});
    // const type= "mjText";
    // //column 1 type
    // DomComponent.addType(type, {
    //   // Define the Model
    //   model: defaultModel.extend({
    //     // Extend default properties
    //     defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //       // Can be dropped only inside `form` elements
    //       // resizable: true,
    //       highlightable: true,
    //       selectable: true,
    //       editable: true,
    //       // toHTML: function() {
    //       //   return '<div>My Custom Map</div>';
    //       // },
    //       // // Can't drop other elements inside it
    //       // droppable: true,
    //       // // Traits (Settings)
    //       // traits: [],
    //       // stylable: [
    //       //   'background-color', 'vertical-align', 'width',
    //       //   'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
    //       //   'border', 'border-width', 'border-style', 'border-color',
    //       // ],
    //     }),
    //   },
    //   // The second argument of .extend are static methods and we'll put inside our
    //   // isComponent() method. As you're putting a new Component type on top of the stack,
    //   // not declaring isComponent() might probably break stuff, especially if you extend
    //   // the default one.
    //   {
    //     isComponent(el) {
    //       if(el.tagName == type.toUpperCase()){
    //         return {type};
    //       }
    //     },
    //   }),
    
    //   // Define the View
    //   view: defaultType.view.extend({
    //     tagName: 'div',
    //     // style: '',
    //     // style
    //     attributes: {
    //       // 'data-type': 'text',
    //       // 'data-highlightable': 1,
    //       // 'data-editable': true      
    //     },
    //     // The render() should return 'this'
    //     render: function () {
    //       // Extend the original render method
    //       this.el.style = 'cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;'
    //       this.el.className = "mjComponentDrop"
    //       this.el.innerHTML = 'Content';
    //       // this.el.attributes = 'data-gjs-removable'
    //       // <div class="mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Content</div>
    //       // textType.view.prototype.render.apply(this, arguments);
    //       // this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
    //       return  this;
    //     },
    //   }),
    // });

    
    // //Adding <table> tag
    // let Table = addComponent(mjContainerComponent, 'table', {'min-height':'150px', 'padding': '5px', 'width':'100%', 'height':'100%', 'background-color':'rgb(234, 236, 237)' }, false);

    // //Adding <tr> tag
    // let TR = Table.get('components');
    // addComponent(TR, 'tr', { 'vertical-align':'top' }, false);
    // let TD = getComponentByModel(TR);

    // //Adding <td> tag
    // addComponent(TD, 'td', {}, false);
    // let innerTable = getComponentByModel(TD);
    
    // //Adding inner <table> tag
    // addComponent(innerTable, 'table', { 'font-family':' Helvetica, serif', 'min-height': '150px', 'padding' : '5px', 'margin':'auto', 'height':'0', 'width':'100%', 'max-width':'600px' }, false);
    // let innerTR = getComponentByModel(innerTable);

    // //Adding inner <tr> tag
    // addComponent(innerTR, 'tr', {}, false);
    // let innerTD = getComponentByModel(innerTR);

    //Adding inner <td> tag
    // addComponent(mjContainerComponent, 'td', {}, true)
  };
})
