

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();






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