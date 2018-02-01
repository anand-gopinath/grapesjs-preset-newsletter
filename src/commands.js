define(function() {
  return (opt = {}) => {
    let editor = opt.editor;
    let cmdm = editor.Commands;
    let importCommand = require('./openImportCommand');
    let exportCommand = require('./openExportCommand');
    let tglImagesCommand = require('./toggleImagesCommand');
    cmdm.add(opt.cmdOpenImport, importCommand(opt));
    cmdm.add(opt.cmdTglImages, tglImagesCommand(opt));
    var panelManager = editor.Panels;

    /**
     * Unused panel layers are removed and adding some of them
     */
    // get the buttons
    var styleManagerButton = panelManager.getButton("views", "open-sm");
    var layersButton = panelManager.getButton("views", "open-layers");
    var blocksButton = panelManager.getButton("views", "open-blocks");
    var settingsButtion = panelManager.getButton("views", "open-tm");

    // remove the buttons
    panelManager.removeButton("views", "open-sm");
    panelManager.removeButton("views", "open-tm");
    panelManager.removeButton("views", "open-layers");
    panelManager.removeButton("views", "open-blocks");

    // add the buttons back in a custom order
    panelManager.addButton("views", blocksButton);
    panelManager.addButton("views", styleManagerButton);
    panelManager.addButton("views", settingsButtion);
    // panelManager.addButton("views", layersButton);

    // Overwrite export template after the editor is loaded
    // (default commands are loaded after plugins)
    editor.on('load', () => {
      cmdm.add('export-template', exportCommand(opt));
      editor.Panels.getPanel("views").attributes.buttons.models[2].attributes.active = false;
      editor.Panels.getPanel("views").attributes.buttons.models[2].attributes.visible = false;
    });

    cmdm.add('undo', {
      run(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.undo(1);
      }
    });
    cmdm.add('redo', {
      run(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.redo(1);
      }
    });
    cmdm.add('set-device-desktop', {
      run(editor) {
        editor.setDevice('Desktop');
      }
    });
    cmdm.add('set-device-tablet', {
      run(editor) {
        editor.setDevice('Tablet');
      }
    });
    cmdm.add('set-device-mobile', {
      run(editor) {
        editor.setDevice('Mobile portrait');
      }
    });
  };
})
