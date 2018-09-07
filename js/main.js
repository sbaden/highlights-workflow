
$(document).ready(function(){
    alert('JS connected');

    var csInterface = new CSInterface();
    // csInterface.evalScript('sayHello()');


    window.onload = function(){

    //     const fs = require('fs');

        let profile_sot = {
            xmlDirectory: '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/XML_DOCS/',
            xml: 'PWK01_16_LAC_ARI_EDIT10_BG_TEST03.xml',
        }

        $('#btn-version_sot').on('click', function(){
            alert('click');

            version_sot()
        });


        function version_sot(){
            csInterface.evalScript('exportXML('+ JSON.stringify(profile_sot.xmlDirectory) +')',
                function(result){
                    alert(result);
                }
            );
        }


        
        

        ////TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $("#btn_reload").click(reloadPanel);

        function reloadPanel() {
            location.reload();
        }
    }

});