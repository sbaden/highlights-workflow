
$(document).ready(function(){
    // alert('JS connected');

    const fs = require('fs');
    var csInterface = new CSInterface();


    window.onload = function(){

        let profile_sot = {
            targetXml: ''
        }

        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('exportXML()',
                function(result){

                    profile_sot.targetXml = result;

                    let currentShow = 'TA';
                    let shows = ['GMF', 'GD', 'TAM'];

                    let currentValue1 = new RegExp('<name>'+ currentShow, 'g');
                    let currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');

                    let newValue1 = '<name>'+ obj.shows[i];
                    let newValue2 = 'HIGHLIGHTS/'+ obj.shows[i];

                    const res = fs.readFileSync(profile_sot.targetXml, 'utf-8')
                        .replace(currentValue1, newValue1)
                        .replace(currentValue2, newValue2);

                    fs.writeFile(profile_sot.targetXml, res, 'utf-8', function (err) {
                        if (err){
                            alert(err);
                            return console.log(err);
                        }
                        else{
                            // alert('search & replace success');
                            importXML();
                        }
                    });
                }
            );
        });

        function importXML(){
            csInterface.evalScript('importXML('+ JSON.stringify(profile_sot.targetXml) +')',
                function(result){
                    if(result){
                        // alert(result);
                    }
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