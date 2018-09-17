
function exportXML(){
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

    return completeOutputPath;
    }
}

function importXML(targetFile){
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
    return result;
}


function getSep() {
	var sep = Folder.fs == 'Macintosh' ?  '/' : '\\';
    return sep;
}