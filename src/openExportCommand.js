define(function() {
  const juice = require('juice');
  const mjmlData = require('./constants')();
  return (opt = {}) => {
    let editor = opt.editor;
    let codeViewer = editor && editor.CodeManager.getViewer('CodeMirror').clone();
    let container = document.createElement("div");
    let pfx = opt.pfx || '';
    var cmdm = editor.Commands;
    // Init code viewer
    codeViewer.set({
      codeName: 'htmlmixed',
      theme: opt.codeViewerTheme,
    });
    // Set the command which could be used outside
    cmdm.add(pfx + 'get-inlined-html', {
      run(editor) {
        const tmpl = editor.getHtml() + `<style>${editor.getCss()}</style>`;
        return juice(tmpl);
      }
    })
    return {
      run(editor, sender) {
        //The following 5 functions are related to content exporting for outlook specific

        /**
         * Column1Type
         */
        let WrapColumn1Type = function(column1TypeParent) {
          // let column1Wrapper = column1TypeParent.innerHTML();
          column1TypeParent.innerHTML = 
            mjmlData.mjmlMSOInnerWrapTableStart + mjmlData.mjmlMSOInnerWrapTDCol1Start + column1TypeParent.innerHTML + mjmlData.mjmlMSOInnerWrapTDEnd + mjmlData.mjmlMSOInnerWrapTableEnd;
        }
        /**
         * Column2Type
         */
        let WrapColumn2Type = function(column2TypeParent) {
          let columnList = column2TypeParent.getElementsByClassName("mj-column-per-50");
          for(let i=0;i<columnList.length;i++) {
            let  currentColumn = columnList[i];
            let start = document.createComment('[if mso | IE]><td style="vertical-align:top;width:300px;"><![endif]');
            let end = document.createComment('[if mso | IE]></td><![endif]');
            column2TypeParent.insertBefore(start, currentColumn);
            column2TypeParent.insertBefore(end, currentColumn.nextSibling);
          }
          column2TypeParent.innerHTML = 
            mjmlData.mjmlMSOInnerWrapTableStart +  column2TypeParent.innerHTML + mjmlData.mjmlMSOInnerWrapTableEnd;
        }

        /**
         * Column3Type
         */
        let WrapColumn3Type = function(column3TypeParent) {
          let columnList = column3TypeParent.getElementsByClassName("mj-column-per-33");
          for(let i=0;i<columnList.length;i++) {
            let  currentColumn = columnList[i];
            let start = document.createComment('[if mso | IE]><td style="vertical-align:top;width:198px;"><![endif]');
            let end = document.createComment('[if mso | IE]></td><![endif]');
            column3TypeParent.insertBefore(start, currentColumn);
            column3TypeParent.insertBefore(end, currentColumn.nextSibling);
          }
          column3TypeParent.innerHTML = 
            mjmlData.mjmlMSOInnerWrapTableStart +  column3TypeParent.innerHTML + mjmlData.mjmlMSOInnerWrapTableEnd;
        }

        /**
         * Column4Type
         */
        let WrapColumn4Type = function(column4TypeParent) {
          let columnList = column4TypeParent.getElementsByClassName("mj-column-per-25");
          for(let i=0;i<columnList.length;i++) {
            let  currentColumn = columnList[i];
            let start = document.createComment('[if mso | IE]><td style="vertical-align:top;width:150px;"><![endif]');
            let end = document.createComment('[if mso | IE]></td><![endif]');
            column4TypeParent.insertBefore(start, currentColumn);
            column4TypeParent.insertBefore(end, currentColumn.nextSibling);
          }
          column4TypeParent.innerHTML = 
            mjmlData.mjmlMSOInnerWrapTableStart +  column4TypeParent.innerHTML + mjmlData.mjmlMSOInnerWrapTableEnd;
        }


        /**
         * Iterate sub seaction of each Table for MSO specific (Outlook, Thunderbird and others.)
         * @param {OBject} section 
         */
        let wrapInnerHTMLForOutlook = function(section) {
          let columnParent = section.getElementsByClassName("columnType")[0];
          let columnType = columnParent.className.split("columnType")[1].trim();
          switch(columnType) {
            case 'column1':
               WrapColumn1Type(columnParent);
               break;
            case 'column2':
              WrapColumn2Type(columnParent);
              break;
            case 'column3':
              WrapColumn3Type(columnParent);
              break;
            case 'column4':
              WrapColumn4Type(columnParent);
              break;
          }
        };

        /**
         * Iterate each section and MSO specific.(Outlook, Thunderbird and others.)
         * @param {String} inlineConverted 
         */
        let wrapHTMLForOutlook = function(inlineConverted) {
          let finalWrapping = document.createElement('div');
          finalWrapping.innerHTML = inlineConverted;
          let ListOfSections = finalWrapping.getElementsByClassName("mjColDrop");
          if(ListOfSections.length > 0) {
            for(let i=0;i<ListOfSections.length;i++) {
              let section = ListOfSections[i];
              let wrapped = mjmlData.mjmlMSOWrapperStart + section.innerHTML + mjmlData.mjmlMSOWrapperEnd;
              section.innerHTML = wrapped 
              //Sub Section tag wrapping
              wrapInnerHTMLForOutlook(section);
            }
            return finalWrapping.innerHTML;
          } else {
            return inlineConverted;
          }
        }

        let result = '';
        let md = editor.Modal;
        let modalContent = md.getContentEl();
        let viewer = codeViewer.editor;
        md.setTitle(opt.modalTitleExport);
        // Init code viewer if not yet instantiated
        if(!viewer){
          let txtarea = document.createElement('textarea');
          if(opt.modalLabelExport){
            let labelEl = document.createElement('div');
            labelEl.className = pfx + 'export-label';
            labelEl.innerHTML = opt.modalLabelExport;
            container.appendChild(labelEl);
          }
          container.appendChild(txtarea);
          codeViewer.init(txtarea);
          viewer = codeViewer.editor;
          viewer.setOption('lineWrapping', 1);
        }
        md.setContent(container);
        let tmpl = editor.getHtml() + `<style>${editor.getCss()}</style>`;
        //converting style to inline style using Juice;
        let inlineConverted = opt.inlineCss ? juice(tmpl) : tmpl;
        // Wrapping for Outlook and other MJML templates.
        let changed =  wrapHTMLForOutlook(inlineConverted);
        //seting header and DOCTYPE 
        codeViewer.setContent(mjmlData.mjmlHTML + changed+ '</html>');
        md.open();
        viewer.refresh();
        sender && sender.set && sender.set('active', 0);
      },
    }
  };
});
