
$(document).ready(function(){
    // alert('JS connected');

    const fs = require('fs');
    var csInterface = new CSInterface();


    window.onload = function(){

        let profileObj = {
            xmlDirectory: '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/XML_DOCS',
            targetXml: '',
            currentShow: 'TA',
            shows: ['GMF', 'GD', 'TAM']
        }

        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('exportXML(' + JSON.stringify(profileObj) + ')');     
        });


        


        
        

        ////TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $("#btn_reload").click(reloadPanel);

        function reloadPanel() {
            location.reload();
        }
    }

});