define(function() {
  return (opt = {}) => {
    let editor = opt.editor;
    let codeViewer = editor && editor.CodeManager.getViewer('CodeMirror').clone();
    let btnImp = document.createElement("button");
    let pfx = opt.pfx || '';
    let storageManager = editor.StorageManager;
    // Init import button
    btnImp.innerHTML = opt.modalBtnImport;
    btnImp.className = pfx + 'btn-prim ' + pfx + 'btn-import';
    btnImp.onclick = (ev) => {
      let templateToImport = ev.currentTarget.closest("#gjs-mdl-c").getElementsByClassName("active");
      if(templateToImport.length > 0) {
        let importId = templateToImport[0].id;
        let allTemplates = JSON.parse(localStorage.getItem(storageManager.get("local").id+'allTemplates'));
        allTemplates.forEach( template => {
          if(template[importId]) {
            editor.DomComponents.getWrapper().set('content', '');
            editor.setComponents(template[importId]);
          }
        })
      } else {
        let code = codeViewer.editor.getValue();
        editor.DomComponents.getWrapper().set('content', '');
        let presetDesign = document.createElement('table');
        presetDesign.innerHTML = '<table class="c818" data-highlightable="1"><tr class="c839" data-highlightable="1"><td data-highlightable="1"><table class="c873" data-highlightable="1"><tr data-highlightable="1">'+
                                    '<td data-highlightable="1">'+ code+'</td>'+
                                  '</tr></table></td></tr></table>';
        editor.setComponents(""+presetDesign.innerHTML);
      }
      editor.Modal.close();
    };
    // Init code viewer
    codeViewer.set({
      codeName: 'htmlmixed',
      theme: opt.codeViewerTheme,
      readOnly: 0
    });
    return {
      run(editor, sender) {
        let storageManager = editor.StorageManager;
        let md = editor.Modal;
        let modalContent = md.getContentEl();
        let viewer = codeViewer.editor;
        let container = document.createElement("div");
        md.setTitle(opt.modalTitleImport);

        //Need to change lot and reduce code while taking editor feature
        function getTemplates() {
          let wholeDiv = document.createElement('div');
          wholeDiv.className = "template-container";
          wholeDiv.style = "display:flex;flex-wrap:wrap;max-height:440px;overflow:auto;";

          let templateOfLocStore = storageManager.get("local").id+'allTemplates';
          if(localStorage.getItem(templateOfLocStore)) {
            let allTemplates = JSON.parse(localStorage.getItem(templateOfLocStore));
            allTemplates.forEach(template => {
              let templateDiv = document.createElement('div');
              templateDiv.className = pfx+"template-divs";
              templateDiv.style= "width:100px;height:100px;border:2px dashed gray;margin:10px;display: flex;align-items: center;flex-direction: unset;justify-content: center;background-color:#2196f330;";
              templateDiv.id = Object.keys(template)[0];
              templateDiv.innerHTML = ""+ Object.keys(template)[0];
              wholeDiv.appendChild(templateDiv);
              wholeDiv.onclick = (ev) => {
                var container = ev.target.closest(".template-container");
                var children = container.getElementsByClassName(pfx+"template-divs")
                if(children.length > 0) {
                  for(var i=0;i<children.length;i++) {
                    let child = children[i];
                    child.classList.remove("active");
                  }
                }
                ev.target.classList.add("active");
              };
            });
          } else {
            wholeDiv.innerHTML = "<div style='text-align:center;padding:5px;'>Not available</div>"
          }
          return wholeDiv;
        }
        
        let parentElement = document.createElement('div');
        parentElement.className = pfx+"display-flex";
        // Choose from template
        let chooseFrom = document.createElement('div');
        chooseFrom.className = pfx+"choose-templates";
        chooseFrom.appendChild(getTemplates());

        parentElement.appendChild(chooseFrom);
        
        // Init code viewer if not yet instantiated
        // if(!viewer) {
          if(opt.modalLabelImport){
            let labels = document.createElement('div');
            labels.innerHTML = "<div class="+pfx+"display-flex>"+
                                "<div class="+pfx+"choose-template-label>"+
                                  "Choose from saved templates"+
                                "</div>"+
                                "<div class="+pfx+"import-label>"+
                                  ""+opt.modalLabelImport
                                "</div>"+
                              "</div>";
            container.appendChild(labels);
          }
          let codeViewerContainer = document.createElement('div');
          codeViewerContainer.className = pfx+"code-viewer-style";
          let txtarea = document.createElement('textarea');
          codeViewerContainer.appendChild(txtarea);
          parentElement.appendChild(codeViewerContainer);
          
          container.appendChild(parentElement);
          
          container.appendChild(btnImp);
          codeViewer.init(txtarea);
          viewer = codeViewer.editor;
        // }
        md.setContent("");
        md.setContent(container);
        codeViewer.setContent(opt.importPlaceholder || '');
        md.open();
        viewer.refresh();
        sender && sender.set('active', 0);
      },
    }
  };
});