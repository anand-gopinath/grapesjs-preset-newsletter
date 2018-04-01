/**
 * Author Anand N G
 * Static Sample Texts of Structured Column[1, 2, 3, 4 columns] and Components[Text, Image, Video, Link etc.]
 * These are MJML converted html - We can convert using - https://mjml.io/try-it-live/Byq7WTxqM
 */

//  Prerequiste to change anything here.
/**
 * 1.To create a column or a component , Get the html from the above live editor and paste it here
 * 2. Add grapesjs specific attributes to the editor - like "data-gjs-draggable='false'" and much more
 * 3. For, Ex, Letz take an example to create a Button component, for that
 *     Get the code and paste and make all of DOM attributes as false like "data-gjs-draggable="false" "data-gjs-selectable="false"
 *     Ater that enable each one of them for your specific purpose.
 */
define(function () {
  return (opt = {}) => {
    return {
      //MJML converted components
      /**
       * For any component make all the DOM as "data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false""
       * After enable each of them to "true" as per your need.
       */
      'mjmlButton':
        '<div data-gjs-droppable="false" data-gjs-badgable="false" data-gjs-highlightable="false" data-gjs-selectable="false">'+
          //The below "tr" was not worked. so Introduced another parent "DIV"
          '<tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" >'+
          '   <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  style="word-wrap:break-word;font-size:0;padding:10px 25px">'+
          '      <table class="mjmlButton" data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;margin-top:3px;" align="center" border="0">'+
          '         <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
          '            <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
          //We can drop link instead normal text, So it will accept ".link-component"
          '               <td  data-gjs-droppable=".link-component" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-badgable="false" data-gjs-selectable="true" data-gjs-draggable="false" data-gjs-removable="false" data-gjs-copyable="false" style="border:none;border-radius:3px;color:#fff;cursor:auto;padding:10px 25px" valign="middle" bgcolor="#414141">'+
          '                  <p data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" data-gjs-draggable="false" data-gjs-removable="false" data-gjs-copyable="false" style="text-decoration:none;background:#414141;color:#fff;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;font-weight:400;line-height:120%;text-transform:none;margin:0">Discover</p>'+
          '               </td>'+
          '            </tr>'+
          '         </tbody>'+
          '      </table>'+
          '   </td>'+
          '</tr>'+
        '</div>',

      'mjmlDivider':
        '<div data-gjs-badgable="false" data-gjs-highlightable="false" data-gjs-droppable="false" style="padding:10px 0;">'+
          '<tr>'+
          '   <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:20px;padding-bottom:0;padding-right:0;padding-left:0">'+
          '      <p style="font-size:1px;margin:0 auto;border-top:2px solid #aaaaaa;width:100%"></p>'+
          '      <!--[if mso | IE]>'+
          '      <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0 auto;border-top:2px solid #aaaaaa;width:100%;" width="600">'+
          '         <tr>'+
          '            <td style="height:0;line-height:0;"> </td>'+
          '         </tr>'+
          '      </table>'+
          '      <![endif]-->'+
          '   </td>'+
          '</tr>'+
        '</div>',

      'mjmlText': '<div data-gjs-badgable="false" data-gjs-highlightable="false" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>',
        
      'mjmlLink':
        '<div data-gjs-badgable="false" data-gjs-highlightable="false" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">'+
          '<a data-gjs-highlightable="false" href="" target="new" style="color:#2196F3;">Link</a>'+
        '</div>',
      
      //Currenlty this MJML image was not resizing and can resize out of box.
      'mjmlImage':
        '<div data-gjs-badgable="false" data-gjs-highlightable="false" data-gjs-droppable="false" style="padding:5px 0;">'+
          '<tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
          '   <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"style="word-wrap:break-word;font-size:0;padding:10px 25px" align="left">'+
          '      <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" align="center" border="0">'+
          '         <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
          '            <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
          '               <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"><img data-gjs-editable="true" data-gjs-hoverable="true" data-gjs-resizable="true" alt="" height="auto" src="http://191n.mj.am/img/191n/3s/x0l.png" style="border:none;border-radius:0;display:block;font-size:13px;outline:0;text-decoration:none;width:100%;height:auto" width="100"></td>'+
          '            </tr>'+
          '         </tbody>'+
          '      </table>'+
          '   </td>'+
          '</tr>'+
        '</div>',

      //MJML Converted style - This should be embeded before exporting all the Sample Texts
      'mjmlStyle': '<style type="text/css"> #outlook a { padding: 0 } .ReadMsgBody { width: 100% } .ExternalClass { width: 100% } .ExternalClass * { line-height: 100% } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100% } table, td { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0 } img { border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic } p { display: block; margin: 13px 0 } </style> <!--[if !mso]><!--> <style type="text/css"> @media only screen and (max-width:480px) { @-ms-viewport { width: 320px } @viewport { width: 320px } } </style> <!--<![endif]--> <!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if lte mso 11]> <style type="text/css"> .outlook-group-fix { width:100% !important; } </style> <![endif]--> <style type="text/css"> @media only screen and (min-width:480px) { .mj-column-per-66 { width: 66.66666666666666%!important } .mj-column-per-33 { width: 33.33333333333333%!important } .mj-column-per-100 { width: 100%!important } .mj-column-per-50 { width: 50%!important } .mj-column-per-25 { width: 25%!important} } </style>',

      //MJML Converted Structure
      // 1 Column
      'mjml1Column': '<!--[if mso | IE]>' +
        '<table data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true"  role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">' +
        '   <tr data-gjs-droppable="false" data-gjs-hoverable="false" data-gjs-selectable="false" data-gjs-highlightable="false">' +
        '      <td data-gjs-droppable="false" data-gjs-hoverable="false" data-gjs-selectable="false" data-gjs-highlightable="false" style="line-height:0px;mso-line-height-rule:exactly;">' +
        '         <![endif]-->' +
        '         <div data-gjs-highlightable="false" data-gjs-badgable="false" data-gjs-droppable="false" data-gjs-hoverable="true" data-gjs-selectable="true"  style="margin:0 auto;max-width:600px">' +
        '            <table data-gjs-droppable="false" data-gjs-hoverable="false" data-gjs-selectable="false" data-gjs-highlightable="false" role="presentation" cellpadding="0" cellspacing="0" style="width:100%" align="center" border="0">' +
        '               <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >' +
        '                  <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >' +
        '                     <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="text-align:center;vertical-align:top;direction:ltr;padding:5px 5px;">' +
        '                        <!--[if mso | IE]>' +
        '                        <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" border="0" cellpadding="0" cellspacing="0">' +
        '                           <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >' +
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  style="vertical-align:top;width:600px;">' +
        '                                 <![endif]-->' +
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">' +
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">' +
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >' +
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >' +
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false"  style="word-wrap:break-word;padding:5px 10px;height:55px;" align="left">' +
        // '                                                <div class="mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>' +
        '                                             </td>' +
        '                                          </tr>' +
        '                                       </tbody>' +
        '                                    </table>' +
        '                                 </div>' +
        '                                 <!--[if mso | IE]>' +
        '                              </td>' +
        '                           </tr>' +
        '                        </table>' +
        '                        <![endif]-->' +
        '                     </td>' +
        '                  </tr>' +
        '               </tbody>' +
        '            </table>' +
        '         </div>' +
        '         <!--[if mso | IE]>' +
        '      </td>' +
        '   </tr>' +
        '</table>' +
        '<![endif]-->',

      // 2 Columns
      'mjml2Column':

        '<!--[if mso | IE]>' +
        '<table data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true"  role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">' +
        '   <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '      <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">' +
        '         <![endif]-->' +
        '         <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true"  style="margin:0 auto;max-width:600px">' +
        '            <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0">' +
        '               <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '                  <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '                     <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="text-align:center;vertical-align:top;direction:ltr;font-size:0;">' +
        '                        <!--[if mso | IE]>' +
        '                        <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" border="0" cellpadding="0" cellspacing="0">' +
        '                           <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:300px;">' +
        '                                 <![endif]-->' +
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;padding:5px;">' +
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">' +
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop"  data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:5px 10px;height:50px;" align="left">' +
        // '                                                <div data-gjs-droppable=".mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding:5px 10px;">Sample Text</div>' +
        '                                             </td>' +
        '                                          </tr>' +
        '                                       </tbody>' +
        '                                    </table>' +
        '                                 </div>' +
        '                                 <!--[if mso | IE]>' +
        '                              </td>' +
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:300px;">' +
        '                                 <![endif]-->' +
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;padding:5px;">' +
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">' +
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">' +
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop"  data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:5px 10px;height:50px;" align="left">' +
        // '                                                <div data-gjs-droppable=".mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>' +
        '                                             </td>' +
        '                                          </tr>' +
        '                                       </tbody>' +
        '                                    </table>' +
        '                                 </div>' +
        '                                 <!--[if mso | IE]>' +
        '                              </td>' +
        '                           </tr>' +
        '                        </table>' +
        '                        <![endif]-->' +
        '                     </td>' +
        '                  </tr>' +
        '               </tbody>' +
        '            </table>' +
        '         </div>' +
        '         <!--[if mso | IE]>' +
        '      </td>' +
        '   </tr>' +
        '</table>' +
        '<![endif]-->',

        // class="mjColDrop" - temporarily removed
      'mjml3Column':
        '<!--[if mso | IE]>'+
        '<table  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">'+
        '   <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '      <td data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" data-gjs-droppable="false" style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">'+
        '         <![endif]-->'+
        '         <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" style="margin:0 auto;max-width:600px">'+
        '            <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0">'+
        '               <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                  <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                     <td data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" data-gjs-droppable="false" style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:5px;">'+
        '                        <!--[if mso | IE]>'+
        '                        <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" border="0" cellpadding="0" cellspacing="0">'+
        '                           <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  style="vertical-align:top;width:198px;">'+
        '                                 <![endif]-->'+
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false"  style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        // '                                                <div data-gjs-droppable=".mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>' +
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  style="vertical-align:top;width:198px;">'+
        '                                 <![endif]-->'+
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false"  style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        // '                                                <div data-gjs-droppable=".mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>' +
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  style="vertical-align:top;width:198px;">'+
        '                                 <![endif]-->'+
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  class="mj-column-per-33 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false"  style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        // '                                                <div data-gjs-droppable=".mjComponentDrop" style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left;padding: 5px 10px;">Sample Text</div>' +
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                           </tr>'+
        '                        </table>'+
        '                        <![endif]-->'+
        '                     </td>'+
        '                  </tr>'+
        '               </tbody>'+
        '            </table>'+
        '         </div>'+
        '         <!--[if mso | IE]>'+
        '      </td>'+
        '   </tr>'+
        '</table>'+
        '<![endif]-->',

      //4 Columns
      'mjml4Column':
        '<!--[if mso | IE]>'+
        '<table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">'+
        '   <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '      <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">'+
        '         <![endif]-->'+
        '         <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="true" data-gjs-selectable="true" style="margin:0 auto;max-width:600px">'+
        '            <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0">'+
        '               <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '                  <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '                     <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:5px;">'+
        '                        <!--[if mso | IE]>'+
        '                        <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" border="0" cellpadding="0" cellspacing="0">'+
        '                           <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:150px;">'+
        '                                 <![endif]-->'+
        '                                 <div data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false">'+
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        // '                                                <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left">Hai</div>'+
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                              <td data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:150px;">'+
        '                                 <![endif]-->'+
        '                                 <div  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false"  role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        // '                                                <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left">Hai</div>'+
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                              <td  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:150px;">'+
        '                                 <![endif]-->'+
        '                                 <div  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                             <td data-gjs-droppable=".mjComponentDrop"  data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        // '                                                <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left">Hai</div>'+
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                              <td  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" style="vertical-align:top;width:150px;">'+
        '                                 <![endif]-->'+
        '                                 <div  data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%">'+
        '                                    <table data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%" border="0">'+
        '                                       <tbody data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                          <tr data-gjs-droppable="false" data-gjs-highlightable="false" data-gjs-hoverable="false" data-gjs-selectable="false" >'+
        '                                             <td data-gjs-droppable=".mjComponentDrop" data-gjs-highlightable="true" data-gjs-hoverable="false" data-gjs-selectable="false" style="word-wrap:break-word;font-size:0;padding:0 15px;height:50px;" align="left">'+
        /** Drop only components like image, text and others 'data-gjs-droppable=".mjComponentDrop"'*/
        // '                                                <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left">Hai</div>'+
        '                                             </td>'+
        '                                          </tr>'+
        '                                       </tbody>'+
        '                                    </table>'+
        '                                 </div>'+
        '                                 <!--[if mso | IE]>'+
        '                              </td>'+
        '                           </tr>'+
        '                        </table>'+
        '                        <![endif]-->'+
        '                     </td>'+
        '                  </tr>'+
        '               </tbody>'+
        '            </table>'+
        '         </div>'+
        '         <!--[if mso | IE]>'+
        '      </td>'+
        '   </tr>'+
        '</table>'+
        '<![endif]-->'
    }
  };
});