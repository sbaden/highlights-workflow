(function () {
    'use strict';
    alert('JS connected');

    // PASS OBJECT TO JSX FOR EVALUATION
    // var csInterface = new CSInterface();
    // var profileObj = {
    //     message: "ExendScript connected"
    // }
    // csInterface.evalScript('parseObj(' + JSON.stringify(profileObj) + ')');

    // NPM PACKAGE 
    const replace = require('replace-in-file');
    // const options = {
    //     files: '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/PWK01_16_LAC_ARI_EDIT10_BG_TEST02.xml',
    //     from: '<name>GMF</name>',
    //     to: '<name>GAMEDAY</name>',
    // };

    // var contentOfFile = Replace(options)
    //     .then(changes => {
    //         // console.log('Modified files:', changes.join(', '));
    //         alert('Modified files:', changes.join(', '));
    //     })
    //     .catch(error => {
    //         // console.error('Error occurred:', error);
    //         console.error('Error occurred:', error);
    //     });  


    // TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
    window.onload = function(){
	    document.getElementById("reloadPanel").addEventListener("click", reloadPanel);

	    function reloadPanel() {
	        location.reload();
	    }
    }



}());
    
