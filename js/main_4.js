////////  TRY THIS FOR THE XML SEARCH/REPLACE  //////////

var fs = require('fs');

var res = fs.readFileSync('/Users/justint/Desktop/test.xml', 'utf-8').replace('show_01', 'show_02');

fs.writeFile('/Users/justint/Desktop/test.xml', res, 'utf-8', function (err) {
    if (err)
        return console.log(err);
});