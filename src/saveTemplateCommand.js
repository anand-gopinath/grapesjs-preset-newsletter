define(function() {
  const juice = require('juice');
  return (opt = {}) => {
    let editor = opt.editor;
    let storageManager = editor.StorageManager;
    let  saveTemplate = (name, tmpl) => {
      this.name = name;
      this.tmpl = tmpl;
      let self = this;
      storageManager.load('allTemplates', function(res) {
        if (res.allTemplates) {
          let templates = JSON.parse(res.allTemplates);
          let index = templates.findIndex(template => Object.keys(template)[0] === self.name)
          if (index > -1) {
            templates[index][self.name] = self.tmpl;
          } else {
            let newTemplate= {}
            newTemplate[self.name] = self.tmpl;
            templates.push(newTemplate);
          }
          storageManager.store({'allTemplates': JSON.stringify(templates)});
        } else {
          let template = {}
          template[self.name] = self.tmpl;
          let list = [];
          list.push(template);
          storageManager.store({'allTemplates' : JSON.stringify(list)})
        }
      });
    }
    
    let saveButton = document.createElement("button");
    saveButton.innerHTML = 'Save';
    saveButton.onclick = (ev) => {
      let name = ev.currentTarget.closest(".save-template-container").getElementsByTagName("input")[0].value;
      const tmpl = editor.getHtml() + `<style>${editor.getCss()}</style>`;
      saveTemplate(name, tmpl);
      editor.Modal.close();
    };
    return {
      run(editor, sender) {
        let container = document.createElement("div");
        container.className = "save-template-container"
        let md = editor.Modal;
        md.setTitle('Save your template');
        let element = document.createElement('div');
        element.style = "padding: 15px 0px;font-size: 13px;";
        element.innerHTML = "<div style='padding:13px 0;'>"+
                                "<label>Enter a name </label>"+
                                "<input type='text'>"+
                            "</div>";

        container.appendChild(element);
        container.appendChild(saveButton);
        md.setContent('');
        md.setContent(container);
        md.open();
        sender && sender.set('active', 0);
      }
    }
  };
});