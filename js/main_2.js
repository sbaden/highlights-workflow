// VERSION 02: RUN EVERYTHING THRU JS
$(document).ready(function(){
    console.log('JS connected');

    const fs = require('fs');

    var csInterface = new CSInterface();
    let shows = ['TA', 'GMF','GD', 'TAM'];

    window.onload = function(){

        let profile_sot = {
            targetXml: ''
        }

        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('exportXML()',
                function(result){
                    profile_sot.targetXml = result;

                    for(let i=0; i<shows.length-1; i++){
                        setShows(profile_sot.targetXml, shows[i], shows[i+1]);
                    };
                }
            );
        });

        function setShows(fileName, currentShow, show) {
            console.log('XML: ' + fileName);
            let res;
            let currentValue1;
            let currentValue2;
            let newValue1;
            let newValue2;

            console.log('readfile');
            $.when(
                console.log('setShows: currentShow: ' + currentShow),
                currentValue1 = new RegExp('<name>'+ currentShow, 'g'),
                currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g'),

                console.log("setShows: show: " + show),
                newValue1 = '<name>'+ show,
                newValue2 = 'HIGHLIGHTS/'+ show,

                res = fs.readFileSync(fileName, 'utf-8').replace(currentValue1, newValue1).replace(currentValue2, newValue2)
            ).then(
                console.log('res: ')
            ).then(
                console.log("before writefile"),
                fs.writeFileSync(fileName, res, 'utf-8')
            ).then(
                console.log("before import"),
                csInterface.evalScript('importXML('+ JSON.stringify(fileName) +')')
            );
        }
        


        
        

        ////TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        $("#btn_reload").click(reloadPanel);

        function reloadPanel() {
            location.reload();
        }
    }

});