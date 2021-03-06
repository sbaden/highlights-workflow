
$(document).ready(function(){
    const fs = require('fs');
    const cmd = require('node-cmd');
    let csInterface = new CSInterface();

    window.onload = function(){
        $('#btn-version_sot').on('click', function(){
            csInterface.evalScript('getProjPath()',
                function(result){
                    let shows = ['TA', 'EGD', 'GMFB','MTH'];
                    let projDir = result.substr(0, result.lastIndexOf('/')+1);
                    let projFile = result.substr(result.lastIndexOf('/')+1);

                    let copyFile = "cp '" + projFile + "' pproXML.gz";
                    let unzip = "gunzip -d pproXML.gz";
                    let rename = "mv pproXML pproXML.prproj";
                    let targetXml = projDir + 'pproXML.prproj';
                    // CHANGE ALL EXTENSIONS OF ONE TYPE TO ANOTHER
                    // let rename = "find . -iname \"*.prproj\" -exec bash -c 'mv \"$0\" \"${0%\\.prproj}.zip\"' {} \\;"  // NEED A '\' IN FRONT OF " AND \
                    
                    let cmdStr =
                        "cd ..'" + projDir + "'\n" +
                        copyFile + "\n" +
                        unzip + "\n" +
                        rename + "\n" +
                        "ls";

                    cmd.get(
                        cmdStr,
                        function(err, data, stderr){
                            // console.log('Current working directory list:\n\n', data);
                            for(let i=0; i<shows.length-1; i++){
                                setShows(targetXml, shows[i], shows[i+1]);
                            };
                        }
                    );
                }
            ); 
        });

        function setShows(fileName, currentShow, show) { 
            let res;
            let currentValue1;
            let currentValue2;
            let newValue1;
            let newValue2;

            $.when(
                currentValue1 = new RegExp('<Name>'+ currentShow, 'g'),
                currentValue2 = new RegExp('HIGHLIGHT_VERSIONING/'+ currentShow, 'g'),

                newValue1 = '<Name>'+ show,
                newValue2 = 'HIGHLIGHT_VERSIONING/'+ show,

                res = fs.readFileSync(fileName, 'utf-8').replace(currentValue1, newValue1).replace(currentValue2, newValue2)
            ).then(
                console.log('res: replace complete')
            ).then(
                fs.writeFileSync(fileName, res, 'utf-8')
            ).then(
                csInterface.evalScript('importXML('+ JSON.stringify(fileName) +')')
            );
        }
        


        ////TEMP BUTTON FOR DEV: RELOADS EXTENTION PANEL
        // $("#btn_reload").click(reloadPanel);

        // function reloadPanel() {
        //     location.reload();
        // }
    }
});