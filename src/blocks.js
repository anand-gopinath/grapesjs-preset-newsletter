define(function() {
  return (opt = {}) => {
    let mjmlData = require('./constants')();
    let editor = opt.editor;
    let bm = editor.BlockManager;
    bm.getAll().reset();
    
    bm.add('mjmlButton', {
      label: opt.buttonBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-button'},
      content: {
        type: "mjmlButton",
        activeOnRender: 1,
      }
    });
    bm.add('mjmlDivider', {
      label: opt.dividerBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-divider'},
      content: {
        type: "mjmlDivider",
        activeOnRender: 1,
      }
    });
    bm.add('text', {
      label: opt.textBlkLabel,
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
        type: "mjmlText",
        activeOnRender: 1,
      }
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
      content: {
        type: "mjmlImage",
        activeOnRender: 1,
      },
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
      content: {
        type: "mjmlLink",
        activeOnRender: 1,
      },
      // content: {
      //   type: 'link',
      //   classes: ['mjComponentDrop', 'link-component'],
      //   content: 'Link',
      //   style: {color:'#3b97e3'}
      // },
    });
    bm.add('image-header', {
      label: 'Header Image',
      category: 'Content' || opt.categoryLabel,
      attributes: {class:'fa fa-picture-o'},
      content: {
        type: 'mjmlHeader',
        activeOnRender: 1,
      },
    });

    // mjml 1 column
    bm.add('sect100', {
      label: opt.sect100BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: {
        type: "mjml1Column",
      }
    });

    // mjml 2 column
    bm.add('sect50', {
      label: opt.sect50BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: {
        type: "mjml2Column",
      }
    })

    //mjml 3 column
    bm.add('sect30', {
      label: opt.sect30BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: {
        type: "mjml3Column",
      }
    });

    //mjml 4 column
    bm.add('sect40', {
      label: opt.sect40BlkLabel,
      category: 'Structure' || opt.categoryLabel,
      attributes: {class:'fa fa-th '},
      content: {
        type: "mjml4Column",
      }
    });
  };
})
