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
    

    var targetXml = '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_16_LAC_ARI_EDIT10_BG_TEST03.xml';
    var currentShow = 'GMF';
    var shows = ['TOTAL_ACCESS', 'GAMEDAY', 'AFTERMATH'];


    for(var i = 0; i < shows.length; i++){

        modifyXML(shows[i], currentShow);
  
    }


    function modifyXML(show, cs){
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
    
        replace(options, (error, changes) => {
            if (error) {
              return console.error('Error occurred:', error);
            }
            // console.log('Modified files:', changes.join(', '));
            alert('Modified files:', changes.join(', '));
            alert(show + " - " + cs);
          });

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
