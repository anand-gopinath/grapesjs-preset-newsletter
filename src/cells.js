define(function() {
  return (opt = {}) => {
    // import MJML Data here
    let mjmlData = require('./constants')();
    let DomComponent = editor.DomComponents;// Get the model and the view from the default Component type
    let defaultType = DomComponent.getType('default');
    let defaultModel = defaultType.model;
    let defaultView = defaultType.view;

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
          
    /** Code for Custom components */
    
    // MJML Button
    let mjmlButton = require('./components/mjmlButton');
    mjmlButton(editor, mjmlData);
    //MJML Divider
    let mjmlDivider = require('./components/mjmlDivider');
    mjmlDivider(editor, mjmlData);
    // MJML Text
    let mjmlText = require('./components/mjmlText');
    mjmlText(editor, mjmlData);
    // MJML Image
    let mjmlImage = require('./components/mjmlImage');
    mjmlImage(editor, mjmlData);
    // MJML Link
    let mjmlLink = require('./components/mjmlLink');
    mjmlLink(editor, mjmlData);
    // mjml1Column
    let mjml1Column = require('./components/mjml1Column');
    mjml1Column(editor, mjmlData);
    // mjml2Column
    let mjml2Column = require('./components/mjml2Column');
    mjml2Column(editor, mjmlData);
    // mjml3Column
    let mjml3Column = require('./components/mjml3Column');
    mjml3Column(editor, mjmlData);
    // mjml4Column
    let mjml4Column = require('./components/mjml4Column');
    mjml4Column(editor, mjmlData);
    
    
    // let mjContainer = addComponent(wrapper, 'div', {} , true, mjmlData.mjmlCore2Col, {});
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
