
// function parseObj(obj){
    // alert(obj.message);
// }

function sayHello(){
    alert('hello');
}


function exportXML(targetDirectory){
    alert('export xml');
    var folder = new Folder (targetDirectory);
    
    if (targetDirectory) {
        var outputName = app.project.name;
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

function getSep() {
	if (Folder.fs == 'Macintosh') {
		return '/';
	} else {
		return '\\';
	}
}