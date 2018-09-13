
// function parseObj(obj){
//     alert(obj.message);
// }

// function sayHello(){
//     alert('hello');
// }


function exportXML(targetDirectory){
    var folder = new Folder (targetDirectory);
    
    if (targetDirectory) {
        var outputName = app.project.name;
        outputName = outputName.substr(0, outputName.lastIndexOf('.'));
        // alert('output name: ' + outputName);
    
        var extention = '.xml';
        var completeOutputPath = targetDirectory + getSep() + outputName + extention;
        app.project.exportFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
        var info = "Exported FCP XML for " + 
            outputName + 
            " to " + 
            completeOutputPath + 
            ".";
        // $.writeln(info);

        return completeOutputPath;

    }
    else { $.writeln("XML Directory can not be found."); }
}

function importXML(targetFile){
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
    return result;
}


function getSep() {
	var sep = Folder.fs == 'Macintosh' ?  '/' : '\\';
    return sep;
}