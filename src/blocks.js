define(function() {
  return (opt = {}) => {
    let tableStyleStr = '';
    let cellStyleStr = '';
    let editor = opt.editor;
    let tableStyle = opt.tableStyle || {};
    let cellStyle = opt.cellStyle || {};
    let bm = editor.BlockManager;
    for (let prop in tableStyle){
      tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
    }
    for (let prop in cellStyle){
      cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
    }
    bm.getAll().reset();
    
    bm.add('button', {
      label: opt.buttonBlkLabel,
      category: 'Content' || opt.categoryLabel,
      content: '<a class="button" style="background-color:#F7B39F;padding:12px 25px;color: #140f0f;margin:5px;display:inline-block;">Button</a>',
      attributes: {class:'gjs-fonts gjs-f-button'}
    });
    bm.add('divider', {
      label: opt.dividerBlkLabel,
      category: 'Content' || opt.categoryLabel,
      content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
      }
      </style>`,
      attributes: {class:'gjs-fonts gjs-f-divider'}
    });
    bm.add('text', {
      label: opt.textBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Insert your text here',
       style: { padding: '10px' },
       activeOnRender: 1
      },
    });
    bm.add('text-sect', {
      label: opt.textSectionBlkLabel,
      category: 'Content' || opt.categoryLabel,
      content: '<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
      attributes: {class:'gjs-fonts gjs-f-h1p'}
    });
    bm.add('image', {
      label: opt.imageBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        type:'image',
        style: {color:'black'},
        activeOnRender: 1
      },
    });
    bm.add('video', {
      label: opt.videoBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'fa fa-youtube-play'},
      content: {
        type: 'video',
        src: 'img/video2.webm',
        style: {
          height: '350px',
          width: '615px',
        }
      },
    });
    bm.add('quote', {
      label: opt.quoteBlkLabel,
      category: 'Content' || opt.categoryLabel,
      content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
      attributes: {class:'fa fa-quote-right'}
    });
    bm.add('link', {
      label: opt.linkBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'fa fa-link'},
      content: {
        type: 'link',
        content: 'Link',
        style: {color:'#3b97e3'}
      },
    });
    bm.add('link-block', {
      label: opt.linkBlockBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'fa fa-link'},
      content: {
        type: 'link',
        editable: false,
        droppable: true,
        style: {
          display: 'inline-block',
          padding: '5px',
          'min-height': '50px',
          'min-width': '50px'
        }
      },
    });

    //

    bm.add('sect100', {
      label: opt.sect100BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}"></td>
        </tr>
        </table>`,
    });
    bm.add('sect50', {
      label: opt.sect50BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 50%"></td>
          <td style="${cellStyleStr} width: 50%"></td>
        </tr>
        </table>`,
    });
    bm.add('sect30', {
      label: opt.sect30BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
        </tr>
        </table>`,
    });
    bm.add('sect37', {
      label: opt.sect37BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b37'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width:30%"></td>
          <td style="${cellStyleStr} width:70%"></td>
        </tr>
        </table>`,
    });
  };
})
