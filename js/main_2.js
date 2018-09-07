// WORKING: HARD CODED 3 SEPARATE XML DOCS

(function () {
    'use strict';
    alert('JS connected');

    // NPM PACKAGE
    const replace = require('replace-in-file');

    // PASS OBJECT TO JSX FOR EVALUATION
    // var csInterface = new CSInterface();
    // var profileObj = {
    //     message: "ExendScript connected"
    // }
    // csInterface.evalScript('parseObj(' + JSON.stringify(profileObj) + ')');
    


var xmlVert = [
    '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_16_LAC_ARI_EDIT10_BG_TEST03.xml',
    '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_16_LAC_ARI_EDIT10_BG_TEST04.xml',
    '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_16_LAC_ARI_EDIT10_BG_TEST05.xml'
];
    
    var shows = ['GMF','TOTAL_ACCESS', 'GAMEDAY', 'AFTERMATH'];
    
    modifyXML(xmlVert[0], shows[0], shows[1]);
    modifyXML(xmlVert[1], shows[0], shows[2]);
    modifyXML(xmlVert[2], shows[0], shows[3]);


    // for(var i = 0; i < shows.length; i++){

    //     modifyXML(currentShow, shows[i]);
  
    // }


    function modifyXML(targetXml, cs, show){
        var currentValue1 = new RegExp('<name>'+ cs + '<\/name>', 'g');
        var currentValue2 = new RegExp('HIGHLIGHTS/'+ cs, 'g');
        var currentValue3 = new RegExp('<name>'+ cs + ' PWK', 'g');

        var newValue1 = '<name>'+ show + '</name>';
        var newValue2 = 'HIGHLIGHTS/'+ show;
        var newValue3 = '<name>'+ show + ' PWK';

        const options = {
            files: targetXml,
            from: [currentValue1, currentValue2, currentValue3],
            to: [newValue1, newValue2, newValue3],
        };
    
        replace(options, (error, changes) => {
            if (error) {
              return console.error('Error occurred:', error);
            }
            // console.log('Modified files:', changes.join(', '));
            alert('Modified files:', changes.join(', '));
            alert(show + " - " + cs);
          });
        alert(show);
    }
    



    // TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
    window.onload = function(){
	    document.getElementById("reloadPanel").addEventListener("click", reloadPanel);

	    function reloadPanel() {
	        location.reload();
	    }
    }



}());
