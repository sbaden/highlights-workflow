
function getProjPath(){
    return app.project.path;;
}

function importXML(targetFile){
    var result = app.project.importFiles([targetFile], 1); // 1 == suppress UI
    return result;
}