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
    styleManagerSectors: [{
        name: 'Dimension',
        open: true,
        buildProps: ['width', 'height', 'max-width', 'min-height'], //'margin', 'padding'
        // properties:[{
        //   property: 'margin',
        //   properties:[
        //     { name: 'Top', property: 'margin-top'},
        //     { name: 'Left', property: 'margin-left'},
        //     { name: 'Right', property: 'margin-right'},
        //     { name: 'Bottom', property: 'margin-bottom'}
        //   ],
        // },{
        //   property  : 'padding',
        //   properties:[
        //     { name: 'Top', property: 'padding-top'},
        //     { name: 'Right', property: 'padding-right'},
        //     { name: 'Bottom', property: 'padding-bottom'},
        //     { name: 'Left', property: 'padding-left'}
        //   ],
        // }],
      },
      {
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'text-align', 'color'], //'line-height', 'font-weight', 'letter-spacing'  //'text-decoration', 'font-style', 'vertical-align', 'text-shadow'
        properties:[
          // { name: 'Font', property: 'font-family'},
          // { name: 'Weight', property: 'font-weight'},
          // { name: 'Font color', property: 'color'},
          {
            property: 'text-align',
            type: 'radio',
            defaults: 'left',
            list: [
              { value: 'left', name: 'Left', className: 'fa fa-align-left'},
              { value: 'center', name: 'Center', className: 'fa fa-align-center' },
              { value: 'right', name: 'Right', className: 'fa fa-align-right'},
              { value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
            ],
          },
        //   {
        //     property: 'text-decoration',
        //     type: 'radio',
        //     defaults: 'none',
        //     list: [
        //       { value: 'none', name: 'None', className: 'fa fa-times'},
        //       { value: 'underline', name: 'underline', className: 'fa fa-underline' },
        //       { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
        //     ],
        //   },{
        //     property: 'font-style',
        //     type: 'radio',
        //     defaults: 'normal',
        //     list: [
        //       { value: 'normal', name: 'Normal', className: 'fa fa-font'},
        //       { value: 'italic', name: 'Italic', className: 'fa fa-italic'}
        //     ],
        //   },{
        //     property: 'vertical-align',
        //     type: 'select',
        //     defaults: 'baseline',
        //     list: [
        //       { value: 'baseline'},
        //       { value: 'top'},
        //       { value: 'middle'},
        //       { value: 'bottom'}
        //     ],
        //   },{
        //     property: 'text-shadow',
        //     properties: [
        //       { name: 'X position', property: 'text-shadow-h'},
        //       { name: 'Y position', property: 'text-shadow-v'},
        //       { name: 'Blur', property: 'text-shadow-blur'},
        //       { name: 'Color', property: 'text-shadow-color'}
        //     ],
        // }
        ],
      },
      {
        name: 'Decorations',
        open: false,
        buildProps: ['background-color'], //'border-collapse', 'border-radius', 'border', 'background'
        properties: [
        {
          property: 'background-color',
          name: 'Background',
        },
        // {
        //   property: 'border-radius',
        //   properties  : [
        //     { name: 'Top', property: 'border-top-left-radius'},
        //     { name: 'Right', property: 'border-top-right-radius'},
        //     { name: 'Bottom', property: 'border-bottom-left-radius'},
        //     { name: 'Left', property: 'border-bottom-right-radius'}
        //   ],
        // },{
        //   property: 'border-collapse',
        //   type: 'radio',
        //   defaults: 'separate',
        //   list: [
        //     { value: 'separate', name: 'No'},
        //     { value: 'collapse', name: 'Yes'}
        //   ],
        // },
        /*
        { // Too much low support
          property: 'box-shadow',
          properties: [
            { name: 'X position', property: 'box-shadow-h'},
            { name: 'Y position', property: 'box-shadow-v'},
            { name: 'Blur', property: 'box-shadow-blur'},
            { name: 'Spread', property: 'box-shadow-spread'},
            { name: 'Color', property: 'box-shadow-color'},
            { name: 'Shadow type', property: 'box-shadow-type'}
          ],
        },*/
        // {
        //   property: 'border',
        //   properties: [
        //     { name: 'Width', property: 'border-width', defaults: '0'},
        //     { name: 'Style', property: 'border-style'},
        //     { name: 'Color', property: 'border-color'},
        //   ],
        // },{
        //   property: 'background',
        //   properties: [
        //     { name: 'Image', property: 'background-image'},
        //     { name: 'Repeat', property:   'background-repeat'},
        //     { name: 'Position', property: 'background-position'},
        //     { name: 'Attachment', property: 'background-attachment'},
        //     { name: 'Size', property: 'background-size'}
        //   ],
        // }
        ],
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

  // On component change show the Style Manager
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

  editor.on('run:open-assets', () => {
    const modal = editor.Modal;
    modal.setTitle(defaults.assetsModalTitle);
  })


  // Do stuff on load
  editor.on('load', function() {
    editor.DomComponents.getComponent("open-sm").attributes.content = "hai"

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
