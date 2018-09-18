
$(document).ready(function(){
    // alert('JS connected');

    const fs = require('fs');
    var csInterface = new CSInterface();


    window.onload = function(){

        let profileObj = {
            currentShow: 'TA',
            shows: ['GMF', 'GD', 'TAM'],
            xmlRepo: '/Users/Shared/Adobe Saves/'
        }

        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('processXML(' + JSON.stringify(profileObj) + ')');     
        });

        


        //// TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $('#btn_reload').on('click', function(){
            location.reload();
        });

    }
});