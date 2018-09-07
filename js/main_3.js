(async function () {
    'use strict';
    alert('JS connected');
    
    const replace = require('replace-in-file');
    
    let targetXml = '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_EDIT10_BG_TEST03.xml';
    let currentShow = 'GMF';
    let shows = ['TOTAL_ACCESS', 'GAMEDAY', 'AFTERMATH'];

    for(let i = 0; i < shows.length; i++){
        await modifyXML(shows[i], currentShow);
    }

    // NPM PACKAGE SEARCH/REPLACE ON XML
    async function modifyXML(show, cs){
        // alert(cs + show + targetXml);
        var currentValue1 = new RegExp('<name>'+ cs + '<\/name>', 'g');
        var currentValue2 = new RegExp('HIGHLIGHTS/'+ cs, 'g');
        var currentValue3 = new RegExp('<name>'+ cs + ' PWK', 'g');

        var newValue1 = '<name>'+ show + '</name>';
        var newValue2 = 'HIGHLIGHTS/'+ show;
        var newValue3 = '<name>'+ show + ' PWK';

        var options = {
            files: targetXml,
            from: [currentValue1, currentValue2, currentValue3],
            to: [newValue1, newValue2, newValue3],
        };
    
        try {
          const changes = await replace(options);
        //   console.log('Modified files:', changes.join(', ')); 
          alert('Modified files:', changes.join(', '));
        }
        catch (error) {
          console.error('Error occurred:', error);
        //   alert('Error occurred:', error);
        }

        currentShow = show;
    }



    // TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
    window.onload = function(){
	    document.getElementById("reloadPanel").addEventListener("click", reloadPanel);

	    function reloadPanel() {
	        location.reload();
	    }
    }

}()); 