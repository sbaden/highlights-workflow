
function exportXML(obj){
    // alert(obj.xmlDirectory);
    var folder = new Folder (obj.xmlDirectory);
    
    if (obj.xmlDirectory) {
        var outputName = app.project.name;
        outputName = outputName.substr(0, outputName.lastIndexOf('.'));
        // alert('output name: ' + outputName);
    
        var extention = '.xml';
        var completeOutputPath = obj.xmlDirectory + getSep() + outputName + extention;
        app.project.exportFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
        var info = "Exported FCP XML for " + 
            outputName + 
            " to " + 
            completeOutputPath + 
            ".";
        // $.writeln(info);
        // alert(info);

        var currentShow = obj.currentShow;

        for(var i = 0; i<obj.shows.length; i++){

            var currentValue1 = new RegExp('<name>'+ currentShow + '<\/name>', 'g');
            var currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');
            var currentValue3 = new RegExp('<name>'+ currentShow, 'g');

            var newValue1 = '<name>'+ obj.shows[i] + '</name>';
            var newValue2 = 'HIGHLIGHTS/'+ obj.shows[i];
            var newValue3 = '<name>'+ obj.shows[i] + ' PWK';
            // alert(currentValue1);
            // alert(newValue1);

            var myFile = new File(completeOutputPath);
                myFile.open('e', undefined, undefined);

            var inText = myFile.read();
                inText = inText
                    .replace(currentValue1, newValue1)
                    .replace(currentValue2, newValue2)
                    .replace(currentValue3, newValue3);

            myFile.seek(0);
            myFile.write(inText);
            myFile.close();

            importXML(completeOutputPath);
            currentShow = obj.shows[i];
            // alert(currentShow);
        };

    }
    else { alert("XML Directory can not be found."); }
}

function importXML(targetFile){
    // alert('importXML');
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
}


function getSep() {
	if (Folder.fs == 'Macintosh') {
		return '/';
	} else {
		return '\\';
	}
}




//// INCORPORATE INTO THE REFRESH PANEL BUTTON TO RELOAD JSX
function loadJSX() {
	var csInterface = new CSInterface();

	// get the appName of the currently used app. For Premiere Pro it's "PPRO"
	var appName = csInterface.hostEnvironment.appName;
	var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);

	// load general JSX script independent of appName
	var extensionRootGeneral = extensionPath + '/jsx/';
	csInterface.evalScript('$._ext.evalFiles("' + extensionRootGeneral + '")');

	// load JSX scripts based on appName
	var extensionRootApp = extensionPath + '/jsx/' + appName + '/';
	csInterface.evalScript('$._ext.evalFiles("' + extensionRootApp + '")');
}