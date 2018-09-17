
$(document).ready(function(){
    alert('JS connected');

    const fs = require('fs');
    var csInterface = new CSInterface();


    window.onload = function(){

        let profileObj = {
            currentShow: 'TA',
            shows: ['GMF', 'GD', 'TAM']
        }

        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('processXML(' + JSON.stringify(profileObj) + ')');     
        });


        


        
        

        //// TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $('#btn_reload').on('click', function(){
            location.reload();

            //// RELOAD JSX - NOT WORKING ////
            // var appName = csInterface.hostEnvironment.appName;
            // var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);
            // var extensionRootGeneral = extensionPath + '/jsx/';  // load general JSX script independent of appName
            // csInterface.evalScript('evalFiles("' + extensionRootGeneral + '")');
        
            // var extensionRootApp = extensionPath + '/jsx/' + appName + '/';  // load JSX scripts based on appName
            // csInterface.evalScript('evalFiles("' + extensionRootApp + '")');
        });

    }
});