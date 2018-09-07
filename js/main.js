
$(document).ready(function(){
    alert('JS connected');

    // const fs = require('fs');

    var csInterface = new CSInterface();


    window.onload = function(){

        // const fs = require('fs');

        // let profile_sot = {
        //     xmlDirectory: '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/XML_DOCS/',
        //     xml: 'PWK01_16_LAC_ARI_EDIT10_BG_TEST03.xml',
        // }

        $('#btn-version_sot').on('click', function(){
            alert('clicked');
        });


        // function version_sot(){
        //     csInterface.evalScript('exportXML('+ JSON.stringify(profile_sot.xmlDirectory) +')',
        //         function(result){
        //             alert(result);
        //         }
        //     );
        // }

        
        
        // let targetXml = profile_sot.xmlDirectory + profile_sot.xml;
        // let currentShow = 'GMF';
        // let shows = ['TOTAL_ACCESS', 'GAMEDAY', 'AFTERMATH'];

        // let currentValue1 = new RegExp('<name>'+ currentShow + '<\/name>', 'g');
        // let currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');
        // let currentValue3 = new RegExp('<name>'+ currentShow + ' PWK', 'g');

        // let newValue1 = '<name>'+ shows[0] + '</name>';
        // let newValue2 = 'HIGHLIGHTS/'+ shows[0];
        // let newValue3 = '<name>'+ shows[0] + ' PWK';

        // const res = fs.readFileSync(targetXml, 'utf-8')
        //     .replace(currentValue1, newValue1)
        //     .replace(currentValue2, newValue2)
        //     .replace(currentValue3, newValue3);


        // fs.writeFile(targetXml, res, 'utf-8', function (err) {
        //     if (err){
        //         alert(err);
        //         return console.log(err);
        //     }
        //     else{
        //         alert('success');
        //     }
        // });

        // TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $("#btn_reload").click(reloadPanel);

        function reloadPanel() {
            location.reload();
        }
    }

});