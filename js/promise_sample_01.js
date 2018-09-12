/* Initialize CSInterface */
var csInterface = new CSInterface();

// This is the Promise function you'll use to execute Extendscript Code
function runEvalScript(script) {
    return new Promise(function(resolve, reject){
        csInterface.evalScript(script, resolve);
    });
}

// As an example of how to use it

runEvalScript('firstFunction()')
.then(function(firstResult){
    // first function is complete
    // do stuff with firstResult before calling next function
    return runEvalScript('secondFunction()')
})
.then(function(secondResult){
    // second function is complete
    // do stuff with secondResult before calling next function
    return runEvalScript('thirdFunction()')
})
.then(function(thirdResult){
    // third function is complete
    // if I'm done then I don't need to return a new Promise, 
    // or you can chain promises as long as you want...
});





csInterface.evalScript('exportXML('+ JSON.stringify(profile_sot.xmlDirectory) +')',
    function(result){

        profile_sot.targetXml = result;

        let currentShow = 'TA';
        let shows = ['GMF', 'GD', 'TAM'];

        shows.forEach(function(show, index, array) {
            alert(index + ': ' + array.length + ': ' + show);
        
            let currentValue1 = new RegExp('<name>'+ currentShow + '<\/name>', 'g');
            let currentValue2 = new RegExp('HIGHLIGHTS/'+ currentShow, 'g');
            let currentValue3 = new RegExp('<name>'+ currentShow, 'g');

            let newValue1 = '<name>'+ show + '</name>';
            let newValue2 = 'HIGHLIGHTS/'+ show;
            let newValue3 = '<name>'+ show + ' PWK';

            const res = fs.readFileSync(profile_sot.targetXml, 'utf-8')
                .replace(currentValue1, newValue1)
                .replace(currentValue2, newValue2)
                .replace(currentValue3, newValue3);


            fs.writeFile(profile_sot.targetXml, res, 'utf-8', function (err) {
                if (err){
                    alert(err);
                    return console.log(err);
                }
                else{
                    alert('search & replace success');
                    currentShow = show;
                    importXML();
                }
            });
        });
    }
);