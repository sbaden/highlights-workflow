
$(document).ready(function(){
    // alert('JS connected');

    const fs = require('fs');
    var csInterface = new CSInterface();


    window.onload = function(){

        // let profile_sot = {
        //     xmlDirectory: '/Users/sbaden/Documents/_TEST_DIRECTORY/EDIT_HIGHLIGHTS/_PROJECTS/XML_DOCS',
        //     targetXml: ''
        // }

        // $('#btn-version_sot').on('click', function(){
        //     csInterface.evalScript('exportXML('+ JSON.stringify(profile_sot.xmlDirectory) +')',
        //         function(result){

        //             profile_sot.targetXml = result;

        //             let currentShow = 'TA';
        //             let shows = ['GMF', 'GD', 'TAM'];

        //             shows.forEach(function(show, index, array) {
        //                 alert(index + ': ' + array.length + ': ' + show);
                    
        //                 let currentValue1 = new RegExp('<name>'+ currentShow + '<\/name>', 'g');
        //                 let currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');
        //                 let currentValue3 = new RegExp('<name>'+ currentShow, 'g');

        //                 let newValue1 = '<name>'+ show + '</name>';
        //                 let newValue2 = 'HIGHLIGHTS/'+ show;
        //                 let newValue3 = '<name>'+ show + ' PWK';

        //                 const res = fs.readFileSync(profile_sot.targetXml, 'utf-8')
        //                     .replace(currentValue1, newValue1)
        //                     .replace(currentValue2, newValue2)
        //                     .replace(currentValue3, newValue3);


        //                 fs.writeFile(profile_sot.targetXml, res, 'utf-8', function (err) {
        //                     if (err){
        //                         alert(err);
        //                         return console.log(err);
        //                     }
        //                     else{
        //                         alert('search & replace success');
        //                         currentShow = show;
        //                         importXML();
        //                     }
        //                 });
        //             });
        //         }
        //     );
        // });


        // function importXML(){
        //     csInterface.evalScript('importXML('+ JSON.stringify(profile_sot.targetXml) +')',
        //         function(result){
        //             if(result){
        //                 // alert(result);
        //             }
        //         }
        //     );
        // }


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