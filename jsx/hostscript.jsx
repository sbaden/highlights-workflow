
// function parseObj(obj){
    // alert(obj.message);
// }

function sayHello(){
    alert('hello');
}


function exportXML(targetDirectory){
    var folder = new Folder (targetDirectory);
    
    if (targetDirectory) {
        var outputName = app.project.name;
        outputName = outputName.substr(0, outputName.lastIndexOf('.'));
        alert('output name: ' + outputName);
    
        var extention = '.xml';
        var completeOutputPath = targetDirectory + getSep() + outputName + extention;
        app.project.exportFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
        var info = "Exported FCP XML for " + 
            outputName + 
            " to " + 
            completeOutputPath + 
            ".";
        // $.writeln(info);
        alert(info);

        return completeOutputPath;

    }
    else { $.writeln("XML Directory can not be found."); }
}

function importXML(targetFile){
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
    return result;
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