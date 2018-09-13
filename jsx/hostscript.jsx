
// function parseObj(obj){
//     alert(obj.message);
// }

// function sayHello(){
//     alert('hello');
// }


// function exportXML(targetDirectory){
//     var folder = new Folder (targetDirectory);
    
//     if (targetDirectory) {
//         var outputName = app.project.name;
//         outputName = outputName.substr(0, outputName.lastIndexOf('.'));
//         // alert('output name: ' + outputName);
    
//         var extention = '.xml';
//         var completeOutputPath = targetDirectory + getSep() + outputName + extention;
//         app.project.exportFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
//         var info = "Exported FCP XML for " + 
//             outputName + 
//             " to " + 
//             completeOutputPath + 
//             ".";
//         // $.writeln(info);
//         // alert(info);

//         return completeOutputPath;

//     }
//     else { $.writeln("XML Directory can not be found."); }
// }

// function importXML(targetFile){
//     var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
//     return result;
// }




function exportXML(obj){
    var projPath = app.project.path;
    projPath = projPath.substr(0, projPath.lastIndexOf(getSep())+1);
    xmlDirectory = projPath + 'XML_DOC';

    // IF XML DIRECTORY DOESN'T EXIST, CREATE IT
    if(! xmlDirectory.exists){ Folder(xmlDirectory).create(); }
    
    var outputName = app.project.name;
    outputName = outputName.substr(0, outputName.lastIndexOf('.'));
    var extention = '.xml';
    var completeOutputPath = xmlDirectory + getSep() + outputName + extention;

    // EXPORT XML FOR PPRO PROJECT
    app.project.exportFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
    var info = "Exported FCP XML for " + 
        outputName + 
        " to " + 
        completeOutputPath + 
        ".";
    // $.writeln(info);

    var currentShow = obj.currentShow;

    for(var i = 0; i<obj.shows.length; i++){
        // SET VALUES TO SEARCH FOR 
        var currentValue1 = new RegExp('<name>'+ currentShow, 'g');
        var currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');

        // SET VALUES TO REPLACE WITH
        var newValue1 = '<name>'+ obj.shows[i];
        var newValue2 = 'HIGHLIGHTS/'+ obj.shows[i];

        // XML: OPEN, UPDATE, CLOSE
        var myFile = new File(completeOutputPath);
            myFile.open('e', undefined, undefined);

        var inText = myFile.read();
            inText = inText
                .replace(currentValue1, newValue1)
                .replace(currentValue2, newValue2);

        myFile.seek(0);
        myFile.write(inText);
        myFile.close();

        // IMPORT UPDATED XML INTO PPRO
        importXML(completeOutputPath);

        currentShow = obj.shows[i];
    };
}

function importXML(targetFile){
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
}


function getSep() {
	var sep = Folder.fs == 'Macintosh' ?  '/' : '\\';
    return sep;
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