/**
 * Author : Anand N G
 * Modified : Feb 1 2018
 */
export default grapesjs.plugins.add('gjs-preset-newsletter', (editor, opts) => {
  let c = opts || {};
  let config = editor.getConfig();
  let pfx = config.stylePrefix;
  let defaults = {
    editor,
    pfx: pfx || '',
    cmdOpenImport: 'gjs-open-import-template',
    cmdTglImages: 'gjs-toggle-images',
    cmtTglImagesLabel: 'Toggle Images',
    cmdBtnMoveLabel: 'Move',
    cmdBtnUndoLabel: 'Undo',
    cmdBtnRedoLabel: 'Redo',
    cmdBtnDesktopLabel: 'Desktop',
    cmdBtnTabletLabel: 'Tablet',
    cmdBtnMobileLabel: 'Mobile',
    modalTitleImport: 'Import template',
    modalTitleExport: 'Export template',
    modalLabelImport: '',
    modalLabelExport: '',
    modalBtnImport: 'Import',
    codeViewerTheme: 'hopscotch',
    openBlocksBtnTitle: c.openBlocksBtnTitle || '',
    openLayersBtnTitle: c.openLayersBtnTitle || '',
    openSmBtnTitle: c.openSmBtnTitle || '',
    openTmBtnTitle: c.openTmBtnTitle || '',
    expTplBtnTitle: c.expTplBtnTitle || 'View Code',
    fullScrBtnTitle: c.fullScrBtnTitle || 'FullScreen',
    swichtVwBtnTitle: c.swichtVwBtnTitle || 'View Components',
    categoryLabel: c.categoryLabel || '',
    importPlaceholder: '',
    defaultTemplate: '', // Default template in case the canvas is empty
    inlineCss: 1,
    cellStyle: {
      padding: 0,
      margin: 0,
      'vertical-align': 'top',
    },
    tableStyle: {
      height: '150px',
      margin: '0 auto 10px auto',
      padding: '5px 5px 5px 5px',
      width: '100%'
    },
    sect100BlkLabel: '1 Column',
    sect50BlkLabel: '2 Column',
    sect30BlkLabel: '3 Column',
    sect40BlkLabel: '4 Column',
    sect37BlkLabel: '2/3 Column',
    buttonBlkLabel: 'Button',
    dividerBlkLabel: 'Divider',
    textBlkLabel: 'Text',
    textSectionBlkLabel: 'Text Section',
    imageBlkLabel: 'Image',
    // videoBlkLabel: 'Video',
    quoteBlkLabel: 'Quote',
    linkBlkLabel: 'Link',
    linkBlockBlkLabel: 'Link Block',
    gridItemsBlkLabel: 'Grid Items',
    listItemsBlkLabel: 'List Items',
    assetsModalTitle: c.assetsModalTitle || 'Select image',
    /**
     * Removed unused styles
     */
    styleManagerSectors: [
      {
        name: 'Dimension',
        open: true,
        buildProps: ['margin', 'padding'], //'margin', 'padding'
        properties:[{
          property: 'margin',
          properties:[
            { name: 'Top', property: 'margin-top'},
            { name: 'Right', property: 'margin-right'},
            { name: 'Bottom', property: 'margin-bottom'},
            { name: 'Left', property: 'margin-left'}
          ],
        },{
          property  : 'padding',
          detached: true,
          properties:[
            { name: 'Top', property: 'padding-top'},
            { name: 'Right', property: 'padding-right'},
            { name: 'Bottom', property: 'padding-bottom'},
            { name: 'Left', property: 'padding-left'}
          ],
        }],
      },
      {
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration'], //'line-height', 'font-weight', 'letter-spacing'  //'text-decoration', 'font-style', 'vertical-align', 'text-shadow'
        properties:[
          { name: 'Font', property: 'font-family'},
          { name: 'Weight', property: 'font-weight'},
          { name:  'Font color', property: 'color'},
          {
            property: 'text-align',
            type: 'radio',
            defaults: 'left',
            list: [
              { value : 'left',  name : 'Left',    className: 'fa fa-align-left'},
              { value : 'center',  name : 'Center',  className: 'fa fa-align-center' },
              { value : 'right',   name : 'Right',   className: 'fa fa-align-right'},
              { value : 'justify', name : 'Justify',   className: 'fa fa-align-justify'}
            ],
          },{
            property: 'text-decoration',
            type: 'radio',
            defaults: 'none',
            list: [
              { value: 'none', name: 'None', className: 'fa fa-times'},
              { value: 'underline', name: 'underline', className: 'fa fa-underline' },
              { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
            ],
          }],
      },
      {
        name: 'Decorations',
          open: false,
          buildProps: [ 'background-color']
        }]
  };

  // Change some config
  config.devicePreviewMode = 1;

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  /**
   * Removed unused title attributes.
   */
  
  // const sm = document.getElementById('gjs-sm-sectors');
  // const updateStyleManager = () => {
  //     const model = editor.getSelected();
  //     sm.style.display = model.getAttributes()['id'] ? 'block' : 'none';
  // }

  // // Triggers on component change
  // editor.on('component:selected', updateStyleManager);

  // // Triggers when you update component's attributes
  // editor.on('component:update:attributes', updateStyleManager);

  let mjmlData = require('./constants')();

  // Add commands
  let importCommands = require('./commands');
  importCommands(c);

  // Add blocks
  let importBlocks = require('./blocks');
  importBlocks(c);

  // Add buttons
  let importButtons = require('./buttons');
  importButtons(c);

  // Load style manager
  let importStyle = require('./style');
  importStyle(c);

  // Set default template if the canvas is empty
  if(!editor.getHtml() && c.defaultTemplate){
    editor.setComponents(c.defaultTemplate);
    // Init components for Undo Manager
    editor.editor.initChildrenComp(editor.DomComponents.getWrapper());
  }

  //On component change show the Style Manager
  editor.on('change:selectedComponent', function() {
    let openLayersBtn = editor.Panels.getButton('views', 'open-layers');
    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if((!openLayersBtn || !openLayersBtn.get('active')) &&
      editor.editor.get('selectedComponent')){
      let openSmBtn = editor.Panels.getButton('views', 'open-sm');
      openSmBtn.set('attributes',{ title:defaults.openSmBtnTitle });
      openSmBtn && openSmBtn.set('active', 1);
    }
  });

  //Need to be used in future

  // editor.on('component:styleUpdate:text-align', function(model) {
  //   console.log("hai----in styleupdate", model);
  //   let $selectedComponent = editor.getSelected().view.$el[0];
  //   let $buttonComponent = $selectedComponent.getElementsByClassName("mjmlButton");
  //   let alignment = model.changed["style"] && model.changed.style.hasOwnProperty("text-align") ? model.changed.style["text-align"] : "center";

  //   if(alignment && $buttonComponent.length > 0) {
  //     let alignment = model.changed.style["text-align"] ? model.changed.style["text-align"] : "center";
  //     let parent = editor.getSelected().parent();
  //     var attr = parent.getAttributes(); // working
  //     attr.align= alignment;
  //     parent.setAttributes(attr);
  //   }
  //   // if() {
  //   //   
  //   //   //Button component
  //   //   if($buttonComponent.length > 0) {
  //   //     let alignment = model.changed.style["text-align"];
  //   //     // this.model.set('style', {'background-color': this.randomHex()}) // <- Affects the final HTML code
  //   //       let parent = editor.getSelected().parent();
  //   //       var attr = parent.getAttributes(); // working
  //   //       attr.align= "right";
  //   //       parent.setAttributes(attr);
  //   //     // let currModel = editor.getSelected().attributes.components.models[0].attributes.components.models[0]
          
  //   //     // this.model.set('style', {'background-color': 'green'}); // <- Affects the final HTML code
  //   //     //  currModel.setAttributes({id: 'align', 'data-key': 'left'});
  //   //     // currentModel.setAttributes('style', {'background-color': 'green'})
  //   //     // .setAttributes({id: 'align', 'data-key': ''+alignment});
  //   //     // model.attributes.components.models[0].attributes.attributes.align = "left"
  //   //       // this.el.getElementsByClassName("mjmlButton")[0].align = "left";
  //   //     //editor.getSelected().attributes.components.models[0].attributes.components.models[0].attributes.attributes.align = alignment;
  //   //     //editor.getSelected().attributes.components.models[0].attributes.components.models[0].view.el.align = alignment;
  //   //     //editor.getSelected().attributes.components.models[0].attributes.style.float = alignment;
  //   //   }
  //   // }
  // });
  
  editor.on('run:open-assets', () => {
    const modal = editor.Modal;
    modal.setTitle(defaults.assetsModalTitle);
  })
 
  // editor.on('canvas:drop', (DTInstance, droppedModel) => {
  //   console.log("hey iam in drop", DTInstance, droppedModel)
  //   if(droppedModel.view.el.className === "mjComponentDrop") {
  //     let parentElement = droppedModel.parent().view.$el[0];
  //     let dropPlaceHolder = parentElement.getElementsByClassName("dropElementsSection");
  //     if(dropPlaceHolder.length > 0) {
  //       dropPlaceHolder[0].remove();
  //     }
  //   }
  // });
 

  // Do stuff on load
  editor.on('load', function() {
    let expTplBtn = editor.Panels.getButton('options', 'export-template');
    expTplBtn.set('attributes', {
      title: defaults.expTplBtnTitle
    });
    let fullScrBtn = editor.Panels.getButton('options', 'fullscreen');
    fullScrBtn.set('attributes', {
      title: defaults.fullScrBtnTitle
    });
    let swichtVwBtn = editor.Panels.getButton('options', 'sw-visibility');
    swichtVwBtn.set('attributes', {
      title: defaults.swichtVwBtnTitle
    });
    let openSmBtn = editor.Panels.getButton('views', 'open-sm');
    openSmBtn.set('attributes', {
      title: defaults.openSmBtnTitle
    });
    let openTmBtn = editor.Panels.getButton('views', 'open-tm');
    openTmBtn.set('attributes', {
      title: defaults.openTmBtnTitle
    });
    /**
     * Removed title setting for "Layers" - block
     */
    // let openLayersBtn = editor.Panels.getButton('views', 'open-layers');
    // openLayersBtn.set('attributes', {
    //   title: defaults.openLayersBtnTitle
    // });

    // Open block manager
    let openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
      openBlocksBtn.set('attributes', {
      title: defaults.openBlocksBtnTitle
    });
    openBlocksBtn && openBlocksBtn.set('active', 1);
    //editor.trigger('change:canvasOffset');

    let importCells = require('./cells');
    importCells(c);

    
  });
});
