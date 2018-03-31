define(function() {
  return (opt = {}) => {
    let mjmlData = require('./constants')();
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
      // content: '<a class="button" style="background-color:#F7B39F;padding:12px 25px;color: #140f0f;margin:5px;display:inline-block;">Button</a>',
      attributes: {class:'gjs-fonts gjs-f-button'},
      content: mjmlData.mjmlButton
    });
    bm.add('divider', {
      label: opt.dividerBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-divider'},
      content: mjmlData.mjmlDivider,
    });
    bm.add('text', {
      label: opt.textBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: mjmlData.mjmlText,
    });
    // bm.add('text-sect', {
    //   label: opt.textSectionBlkLabel,
    //   category: 'Content' || opt.categoryLabel,
    //   content: '<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
    //   attributes: {class:'gjs-fonts gjs-f-h1p'}
    // });

    //Currently MJML constructed image was not properly resizing
    bm.add('image', {
      label: opt.imageBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: mjmlData.mjmlImage,
      activeOnRender: 1

    });
    // bm.add('video', {
    //   label: opt.videoBlkLabel,
    //   category: 'Content' || opt.categoryLabel,
    //   attributes: {class:'fa fa-youtube-play'},
    //   content: {
    //     type: 'video',
    //     src: 'img/video2.webm',
    //     style: {
    //       height: '350px',
    //       width: '615px',
    //     }
    //   },
    // });
    // bm.add('quote', {
    //   label: opt.quoteBlkLabel,
    //   category: 'Content' || opt.categoryLabel,
    //   content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
    //   attributes: {class:'fa fa-quote-right'}
    // });
    bm.add('link', {
      label: opt.linkBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'fa fa-link'},
      content: mjmlData.mjmlLink
      // content: {
      //   type: 'link',
      //   classes: ['mjComponentDrop', 'link-component'],
      //   content: 'Link',
      //   style: {color:'#3b97e3'}
      // },
    });
    // bm.add('link-block', {
    //   label: opt.linkBlockBlkLabel,
    //   category: 'Content' || opt.categoryLabel,
    //   attributes: {class:'fa fa-link'},
    //   content: {
    //     type: 'link',
    //     editable: false,
    //     droppable: true,
    //     style: {
    //       display: 'inline-block',
    //       padding: '5px',
    //       'min-height': '50px',
    //       'min-width': '50px'
    //     }
    //   },
    // });

    // mjml 1 column
    bm.add('sect100', {
      label: opt.sect100BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: mjmlData.mjml1Column,
    });

    // mjml 2 column
    bm.add('sect50', {
      label: opt.sect50BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: mjmlData.mjml2Column
    })

    //mjml 3 column
    bm.add('sect30', {
      label: opt.sect30BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: mjmlData.mjml3Columns
    });

    //mjml 4 column
    bm.add('sect40', {
      label: opt.sect40BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'fa fa-th '},
      content: mjmlData.mjml4Columns
    });
  };
})
