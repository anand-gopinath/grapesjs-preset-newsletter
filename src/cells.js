define(function() {
  return (opt = {}) => {
    // import Prset newletter format 
    let DomComponent = editor.DomComponents;
    //Disabling body drag  and drop

    let body = DomComponent.getComponent("body")
    body.attributes.draggable = false
    body.attributes.droppable = false
    body.attributes.highlightable = false
    body.attributes.hoverable = false;
    body.attributes.selectable = false;
    body.attributes.layerable = false;

    let getComponentByModel = (component) => {
      return component.models[0].get('components');
    }

    /** Common method to add new component */
    let addComponent = (rootComponent, tagName, style, droppable) => {
      return rootComponent.add({
        tagName: tagName,
        type:'',
        content: '',
        droppable: droppable,
        removable: false, // Can't remove it
        draggable: false, // Can't move it
        copyable: false, // Disable copy/past
        style: style
      });
    }

    let wrapper = DomComponent.getComponents()

    //Adding <table> tag
    let Table = addComponent(wrapper, 'table', {'min-height':'150px', 'padding': '5px', 'width':'100%', 'height':'100%', 'background-color':'rgb(234, 236, 237)' }, false);

    //Adding <tr> tag
    let TR = Table.get('components');
    addComponent(TR, 'tr', { 'vertical-align':'top' }, false);
    let TD = getComponentByModel(TR);

    //Adding <td> tag
    addComponent(TD, 'td', {}, false);
    let innerTable = getComponentByModel(TD);
    
    //Adding inner <table> tag
    addComponent(innerTable, 'table', { 'font-family':' Helvetica, serif', 'min-height': '150px', 'padding' : '5px', 'margin':'auto', 'height':'0', 'width':'90%', 'max-width':'550px' }, false);
    let innerTR = getComponentByModel(innerTable);

    //Adding inner <tr> tag
    addComponent(innerTR, 'tr', {}, false);
    let innerTD = getComponentByModel(innerTR);

    //Adding inner <td> tag
    addComponent(innerTD, 'td', {}, true)
  };
})
